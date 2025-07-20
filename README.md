# geo!space

🌐geo!space is a web app that helps analysts, planners, and developers create interactive maps and automate repetitive tasks using natural language prompts - without installing any software - directly in the browser.

**HINT**
geo!space uses the File System Access API of your browser which is not yet supported accross all browsers.
Browsers which are tested: Chrome and Opera - Firefox and Safari do not yet fully support the standard.
For more details, see [File System API](https://developer.mozilla.org/en-US/docs/Web/API/Window/showDirectoryPicker)

## Getting Started

1.  **Connect a Workspace:**
    *   In the Workspace tab click on the folder icon "Load workspace folder" and choose a local folder to use as your workspace. This folder will be saved and restored when you reload geo!space.
    *   Connecting a workspace will automatically generate a project structure if it is not recognized as a geo!space workspace.

2.  **Configure AI Assistant (Optional):**
    *   Edit the generated `.geospace/settings.json` file within your workspace. This file allows you to configure the AI assistant's behavior.

3.  **Opening Files:**
    *   `.geospace` files: These are map files. Double-click to open them in the map editor.
    *   Other files: These will open in the code editor (supports syntax highlighting and execution for Python and JavaScript).

4.  **Working with Maps (.geospace files):**
    *   Use the map editor’s UI to interact with the map.
    *   Use the input field to directly interact with the map or run commands.

5.  **Working with Code:**
    *   Edit code in the code editor.
    *   Run Python or JavaScript code using the "Run" button.

6. **Catalog:**
    * You can add items from the catalog view to your workspace
    * Select an icon within one of the catalog categories, for example, marker.png
    * Press the "Checkout" button in the main toolbar to download the item to your workspace

## Commands

You can use commands starting with `/` in the map editor's input field. Here are some examples:

*   `/python`: Executes Python code.
*   `/js`: Executes JavaScript code.
*   `/touch`: Creates a new, empty file.
*   `/save`: Saves the current file.

## Configuration

The AI assistant will adapt its role to the context of the user:
* map editor: instructed to assist in mapping tasks
* code editor: instructed to assist in coding tasks
* anywhere else: instructed to assist in interacting with the web app

The various assistants do not know of each other. You can identify the role of the active AI assistent in the AI view by its icon and help hint:
* Web App: a question mark and "App: What is your goal?" appear
* Code editor: brackets icon and "Code: Interact with code" appear
* Mapping editor: map icon and "Map: Interact with map" appear

The AI assistant is configured through the `settings.json` file, automatically generated within the `.geospace` folder in your workspace.  Here's an example of the file structure:

```json
{
  "defaultProvider": "groq",
  "providers": [
    {
      "name": "groq",
      "model": "llama-3.3-70b-versatile",
      "chatApiEndpoint": "https://api.groq.com/openai/v1/chat",
      "apiKey": "<your api key>"
    },
    {
      "name": "cerebras",
      "model": "llama-3.3-70b",
      "chatApiEndpoint": "https://api.cerebras.ai/v1/chat",
      "apiKey": "<your api key>"
    },
    {
      "name": "openai",
      "model": "gpt-4.1-mini",
      "chatApiEndpoint": "https://api.openai.com/v1/chat",
      "apiKey": "<your api key>"
    }
  ]
}
```
Important: Replace `<your api key>` with your actual API keys for each provider that you want to use.
Set `defaultProvider` to the provider which should be used by default.
You can change the default provider in the AI view once you have connected to a workspace.

# Troubleshooting
File Not Found: If you don't see a file you expect, try reloading the workspace.
AI Assistant Not Working: Ensure settings.json is correctly configured within the .geospace folder and that your API keys are valid.

# Trusted by

- [Kiosk Scout](https://developer.mozilla.org/en-US/docs/Web/API/Window/showDirectoryPicker): A cross-platform/PWA (mobile, browser, desktop) app which allows users to search for nearby vending machines.
- Want your geo!space app listed here?

# Happy mapping!