import {customElement, property, state} from "lit/decorators.js";
import {KPart} from "../../parts/k-part";
import {css, html} from "lit";
import {EditorInput, editorRegistry} from "../../core/editorregistry";
import {File} from "../../core/filesys";

const SUPPORTED_EXTENSIONS = [
    '.pdf',
    '.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.bmp', '.ico'
];

const getFileIcon = (fileName: string): string => {
    const lowerName = fileName.toLowerCase();
    if (lowerName.endsWith('.pdf')) return 'file-pdf';
    if (lowerName.match(/\.(jpg|jpeg|png|gif|webp|bmp|ico|svg)$/)) return 'image';
    return 'file';
};

const isSupportedMediaFile = (file: File): boolean => {
    const fileName = file.getName().toLowerCase();
    return SUPPORTED_EXTENSIONS.some(ext => fileName.endsWith(ext));
};

editorRegistry.registerEditorInputHandler({
    canHandle: input => input instanceof File && isSupportedMediaFile(input),
    handle: async (input: File) => {
        const editorInput = {
            title: input.getName(),
            data: input,
            key: input.getName(),
            editorId: "media-viewer",
            icon: getFileIcon(input.getName()),
            noOverflow: false,
            state: {},
        } as EditorInput
        editorInput.widgetFactory = () => html`
            <k-media-viewer .input=${editorInput}></k-media-viewer>`
        return editorInput;
    },
    ranking: 1000
})

@customElement('k-media-viewer')
export class KMediaViewer extends KPart {
    @property({attribute: false})
    public input?: EditorInput

    @state()
    private mediaUrl?: string

    protected doClose() {
        if (this.mediaUrl && this.mediaUrl.startsWith('blob:')) {
            URL.revokeObjectURL(this.mediaUrl)
        }
        this.input = undefined
        this.mediaUrl = undefined
    }

    protected async doInitUI() {
        await this.loadMedia()
    }

    private async loadMedia() {
        if (!this.input?.data || !(this.input.data instanceof File)) {
            return
        }

        const file = this.input.data
        const url = await file.getContents({uri: true}) as string
        this.mediaUrl = url
    }

    protected render() {
        if (!this.mediaUrl) {
            return html`
                <div style="display: flex; align-items: center; justify-content: center; height: 100%;">
                    <wa-spinner></wa-spinner>
                </div>
            `
        }

        return html`
            <iframe
                src="${this.mediaUrl}"
                class="media-iframe"
                title="Media Viewer">
            </iframe>
        `
    }

    static styles = css`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
            width: 100%;
            height: 100%;
            background: var(--wa-color-surface-default, #1a1a1a);
        }

        .media-iframe {
            width: 100%;
            height: 100%;
            border: none;
            background: var(--wa-color-surface-default, #1a1a1a);
        }
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'k-media-viewer': KMediaViewer
    }
}

