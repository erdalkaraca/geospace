import {css, html, unsafeCSS} from 'lit'
import {customElement} from 'lit/decorators.js'
import {createRef, ref} from "lit/directives/ref.js";
import {Terminal} from '@xterm/xterm';
import styles from "@xterm/xterm/css/xterm.css?raw";
import {KElement} from "../../parts/k-element";
import {PyEnv} from "../../core/pyservice";
import {workspaceService} from "../../core/filesys";

@customElement('k-pyterminal')
export class KPyTerminal extends KElement {

    private terminalDiv = createRef()
    private terminal = new Terminal({
        allowTransparency: true,
        cursorBlink: true,
        fontSize: 14,
        theme: {
            background: '#000000',
            foreground: '#ffffff',
            cursor: '#ffffff',
        }
    })
    private pyenv?: PyEnv
    private currentLine: string = ""
    private cursorPosition: number = 0
    private inputBuffer: string[] = []
    private isMultiline: boolean = false
    private consoleReady: boolean = false
    private history: string[] = []
    private historyIndex: number = -1
    private isExecuting: boolean = false

    private prompt(message: string = "") {
        if (message) {
            this.terminal.write(message + "\r\n")
        } else {
            this.terminal.write(this.isMultiline ? "... " : ">>> ")
        }
    }
    
    private clearLine() {
        // Clear the entire line using ANSI escape codes
        // \x1b[2K clears the entire line
        // \r moves cursor to beginning
        this.terminal.write('\r\x1b[2K')
        this.terminal.write(this.isMultiline ? '... ' : '>>> ')
    }

    protected async doInitUI() {
        this.terminal.open(<HTMLElement>this.terminalDiv.value!)
        
        this.pyenv = new PyEnv()
        this.pyenv.setStdoutCallback((text) => {
            // Ensure output ends with newline for proper display
            if (!text.endsWith('\n')) {
                text += '\n'
            }
            this.terminal.write(text.replace(/\n/g, '\r\n'))
        })
        this.pyenv.setStderrCallback((text) => {
            // Ensure output ends with newline for proper display
            if (!text.endsWith('\n')) {
                text += '\n'
            }
            this.terminal.write('\x1b[31m' + text.replace(/\n/g, '\r\n') + '\x1b[0m')
        })
        
        this.terminal.onKey(async ({key, domEvent}) => {
            // Prevent input while executing
            if (this.isExecuting) return
            
            const code = key.charCodeAt(0)
            
            // Ctrl+C to interrupt
            if (domEvent.ctrlKey && domEvent.key === 'c') {
                this.terminal.write('^C\r\n')
                this.currentLine = ""
                this.cursorPosition = 0
                this.inputBuffer = []
                this.isMultiline = false
                this.historyIndex = -1
                this.prompt()
                return
            }
            
            // Backspace
            if (domEvent.key === 'Backspace') {
                domEvent.preventDefault()
                if (this.cursorPosition > 0) {
                    // Remove character before cursor
                    this.currentLine = 
                        this.currentLine.slice(0, this.cursorPosition - 1) + 
                        this.currentLine.slice(this.cursorPosition)
                    this.cursorPosition--
                    
                    // Redraw: move back, write remaining chars + space, move cursor back
                    const remaining = this.currentLine.slice(this.cursorPosition)
                    this.terminal.write('\b' + remaining + ' ')
                    
                    // Move cursor back to correct position (remaining chars + space)
                    const moveBack = remaining.length + 1
                    this.terminal.write('\x1b[' + moveBack + 'D')
                }
                return
            }
            
            // Delete key
            if (domEvent.key === 'Delete') {
                domEvent.preventDefault()
                if (this.cursorPosition < this.currentLine.length) {
                    // Remove character at cursor
                    this.currentLine = 
                        this.currentLine.slice(0, this.cursorPosition) + 
                        this.currentLine.slice(this.cursorPosition + 1)
                    
                    // Redraw: write remaining chars + space, move cursor back
                    const remaining = this.currentLine.slice(this.cursorPosition)
                    this.terminal.write(remaining + ' ')
                    
                    // Move cursor back to correct position (remaining chars + space)
                    const moveBack = remaining.length + 1
                    this.terminal.write('\x1b[' + moveBack + 'D')
                }
                return
            }
            
            // Arrow Up - history previous
            if (domEvent.key === 'ArrowUp') {
                domEvent.preventDefault()
                if (this.history.length > 0 && this.historyIndex < this.history.length - 1) {
                    // Clear current line
                    this.clearLine()
                    
                    this.historyIndex++
                    this.currentLine = this.history[this.history.length - 1 - this.historyIndex]
                    this.cursorPosition = this.currentLine.length
                    this.terminal.write(this.currentLine)
                }
                return
            }
            
            // Arrow Down - history next
            if (domEvent.key === 'ArrowDown') {
                domEvent.preventDefault()
                if (this.historyIndex > 0) {
                    // Clear current line
                    this.clearLine()
                    
                    this.historyIndex--
                    this.currentLine = this.history[this.history.length - 1 - this.historyIndex]
                    this.cursorPosition = this.currentLine.length
                    this.terminal.write(this.currentLine)
                } else if (this.historyIndex === 0) {
                    this.clearLine()
                    this.historyIndex = -1
                    this.currentLine = ""
                    this.cursorPosition = 0
                }
                return
            }
            
            // Arrow Left - move cursor left
            if (domEvent.key === 'ArrowLeft') {
                domEvent.preventDefault()
                if (this.cursorPosition > 0) {
                    this.cursorPosition--
                    this.terminal.write('\x1b[D')  // Move cursor left
                }
                return
            }
            
            // Arrow Right - move cursor right
            if (domEvent.key === 'ArrowRight') {
                domEvent.preventDefault()
                if (this.cursorPosition < this.currentLine.length) {
                    this.cursorPosition++
                    this.terminal.write('\x1b[C')  // Move cursor right
                }
                return
            }
            
            // Home - move cursor to beginning
            if (domEvent.key === 'Home') {
                domEvent.preventDefault()
                if (this.cursorPosition > 0) {
                    this.terminal.write('\x1b[' + this.cursorPosition + 'D')
                    this.cursorPosition = 0
                }
                return
            }
            
            // End - move cursor to end
            if (domEvent.key === 'End') {
                domEvent.preventDefault()
                const charsToMove = this.currentLine.length - this.cursorPosition
                if (charsToMove > 0) {
                    this.terminal.write('\x1b[' + charsToMove + 'C')
                    this.cursorPosition = this.currentLine.length
                }
                return
            }

            // Enter key
            if (code === 13 || domEvent.key === 'Enter') {
                domEvent.preventDefault()
                this.terminal.write('\r\n')
                
                // Add to history if not empty
                if (this.currentLine.trim() !== '') {
                    this.history.push(this.currentLine)
                }
                this.historyIndex = -1
                
                await this.executeInput(this.currentLine)
                this.currentLine = ""
                this.cursorPosition = 0
                return
            }
            
            // Regular character input
            if (!domEvent.altKey && !domEvent.ctrlKey && !domEvent.metaKey && key.length === 1) {
                // Insert character at cursor position
                this.currentLine = 
                    this.currentLine.slice(0, this.cursorPosition) + 
                    key + 
                    this.currentLine.slice(this.cursorPosition)
                this.cursorPosition++
                
                // Redraw from cursor position
                const rest = this.currentLine.slice(this.cursorPosition)
                this.terminal.write(key + rest)
                
                // Move cursor back if needed
                if (rest.length > 0) {
                    this.terminal.write('\x1b[' + rest.length + 'D')
                }
            }
        });

        this.prompt("Loading Python...")
        const workspace = (await workspaceService.getWorkspace())!
        await this.pyenv.init(workspace)
        
        // Get both Pyodide and Python versions
        const pyodideVersion = await this.pyenv.getVersion()
        const pythonVersionResponse = await this.pyenv.execCode("import sys; sys.version.split()[0]")
        const pythonVersion = pythonVersionResponse?.result || "3.12"
        
        this.prompt(`Pyodide v${pyodideVersion} (Python v${pythonVersion})`)
        
        await this.initConsole()
        
        this.consoleReady = true
        this.prompt()
    }
    
    private async initConsole() {
        await this.pyenv!.execCode(`
from pyodide.console import PyodideConsole
import sys
import os
import code
import builtins as __builtins__

# Disable pager for help() to avoid stdin issues in browser
os.environ['PAGER'] = 'cat'
sys.stdin = None  # Disable stdin to prevent interactive prompts

# Override help to work without pager
import pydoc
pydoc.pager = pydoc.plainpager

# Create custom console that displays expression results like standard Python REPL
class CustomConsole(PyodideConsole):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Ensure displayhook is set
        sys.displayhook = self._displayhook
    
    def _displayhook(self, value):
        if value is not None:
            import builtins
            builtins._ = value
            print(repr(value))
    
    async def runcode(self, source, code):
        # Override runcode to handle both statements and expressions
        # Set displayhook before execution
        old_hook = sys.displayhook  
        sys.displayhook = self._displayhook
        
        try:
            # Try to compile as eval first (for expressions)
            try:
                compiled = compile(source, '<console>', 'eval')
                result = eval(compiled, self.globals)
                # For expressions, manually call displayhook
                if result is not None:
                    self._displayhook(result)
            except SyntaxError:
                # If it fails, it's a statement, use the parent's runcode
                return await super().runcode(source, code)
        except SystemExit:
            raise
        except:
            # Print exception
            import traceback
            traceback.print_exc()
        finally:
            sys.displayhook = old_hook

# Create console with persistent stream redirection
__console__ = CustomConsole(
    persistent_stream_redirection=True
)
`)
    }
    
    private async executeInput(line: string) {
        if (!this.consoleReady) return
        
        // Handle empty lines in multiline mode
        if (line.trim() === '' && this.isMultiline) {
            this.inputBuffer.push(line)
        } else if (line.trim() !== '') {
            this.inputBuffer.push(line)
        } else if (!this.isMultiline) {
            // Empty line in single-line mode, just show prompt
            this.prompt()
            return
        }
        
        this.isExecuting = true
        
        try {
            const result = await this.pyenv!.execCode(`
import asyncio
import sys

# Push the line to the console
fut = __console__.push(${JSON.stringify(line)})

# The push method returns a Future, await it
if asyncio.iscoroutine(fut) or hasattr(fut, '__await__'):
    needs_more = await fut
else:
    needs_more = fut

# Convert None to False (PyodideConsole returns None for successful execution)
if needs_more is None:
    needs_more = False

needs_more
`)
            
            // push() returns True if more input is needed, False/None otherwise
            const needsMore = result?.result === true
            this.isMultiline = needsMore
            
            // Clear buffer if code was complete and executed
            if (!needsMore) {
                this.inputBuffer = []
            }
        } catch (error) {
            // Display error and reset
            const errorMsg = error instanceof Error ? error.message : String(error)
            this.terminal.write(`\x1b[31m${errorMsg}\x1b[0m\r\n`)
            this.inputBuffer = []
            this.isMultiline = false
        } finally {
            this.isExecuting = false
        }
        
        this.prompt()
    }

    render() {
        return html`
            <div class="terminal" ${ref(this.terminalDiv)}></div>
        `;
    }

    static styles = [unsafeCSS(styles),
        css`
            :host {
                display: flex;
                flex: 1;
                width: 100%;
                height: 100%;
            }

            .terminal {
                display: flex;
                flex: 1;
            }

            .terminal,
            .terminal-container,
            .xterm-screen {
                width: 100% !important;
                height: 100% !important;
                overflow: hidden;
            }

            .xterm .xterm-viewport {
                /* see : https://github.com/xtermjs/xterm.js/issues/3564#issuecomment-1004417440 */
                width: initial !important;
            }
        `]
}

declare global {
    interface HTMLElementTagNameMap {
        'k-pyterminal': KPyTerminal
    }
}
