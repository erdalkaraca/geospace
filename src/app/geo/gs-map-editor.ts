import {css, html, unsafeCSS} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {createRef, ref, Ref} from 'lit/directives/ref.js'
import {commandRegistry, CommandStack, ExecuteParams, ExecutionContext} from "../../core/commandregistry.ts";
import {Map} from "ol";
import {KPart} from "../../parts/k-part.ts";
import {EditorInput} from "../../core/editorregistry.ts";
import {DEFAULT_GSMAP, GsMap, olMapToGsMap, stylesLoader, toOlMap} from "../rt";
import {defaults as defaultInteractions} from 'ol/interaction/defaults.js';
import {defaults as defaultControls} from 'ol/control/defaults';
import {mapChangedSignal, MapEvents} from "./gs-signals.ts";
import olCSS from "../../../node_modules/ol/ol.css?raw";
import {loadEnvs, replaceUris, revertBlobUris} from "./utils.ts";
import {File} from '../../core/filesys.ts';
import {toastError, toastInfo} from "../../core/toast.ts";
import {ChatContext} from "../../core/chatservice.ts";

@customElement('gs-map')
export class GsMapEditor extends KPart {
    @property({attribute: false})
    public input?: EditorInput;

    public olMap?: Map;
    public gsMap?: GsMap;
    private mapContainer: Ref<HTMLElement> = createRef();
    chatContext: ChatContext = {
        history: []
    }

    protected doBeforeUI() {
        this.commandStack = new CommandStack()
    }

    protected async doInitUI() {
        const file = this.input?.data as File

        const env = await loadEnvs(".env", "envs/.env", "env", "envs/env", "default.env", "envs/default.env", "dev.env", "envs/dev.env")
        env["BUILD_TIME"] = new Date()
        this.transform(file, env).then()
    }

    private async transform(mapFile: File, env: any) {
        const textContents = await mapFile.getContents();
        this.gsMap = (textContents && textContents.trim() ? JSON.parse(textContents) : DEFAULT_GSMAP)! as GsMap
        // replace all workspace relative URLs with blob URLs
        await replaceUris(this.gsMap, "url")
        await replaceUris(this.gsMap, "src")

        this.olMap = await toOlMap(this.gsMap, {
            interactions: defaultInteractions({keyboard: false}),
            controls: defaultControls({zoom: false, attribution: false})
        }, env)

        this.olMap.getLayers().getArray().forEach((olLayer) => {
            stylesLoader.bindToLayer(olLayer)
        })

        this.olMap.setTarget(this.mapContainer.value)
        const dirtySetter = () => {
            this.markDirty(true)
        }
        this.olMap.getView().addEventListener("change", dirtySetter)
        this.olMap.getLayers().on("add", dirtySetter)
        this.olMap.getLayers().on("remove", dirtySetter)

        mapChangedSignal.set({part: this, event: MapEvents.LOADED})
    }

    public getView() {
        return this.olMap!.getView()
    }

    getLayers() {
        return this.olMap?.getLayers().getArray() || []
    }

    executeMapCommand(id: string, params: ExecuteParams) {
        const execContext: ExecutionContext = {
            params: params,
            source: this
        }

        try {
            commandRegistry.execute(id, execContext);
        } catch (e: any) {
            toastError(e.message)
        }
    }

    async save() {
        // first, sync back to GS model
        olMapToGsMap(this.gsMap!, this.olMap!)

        // next, revert blob URIs using a cloned map
        const mapClone = JSON.parse(JSON.stringify(this.gsMap))
        await revertBlobUris(mapClone, "url")
        await revertBlobUris(mapClone, "src")

        // finally, save the contents of the cloned map
        this.input?.data.saveContents(JSON.stringify(mapClone, null, 2))
        this.markDirty(false)
    }

    edit() {
        toastInfo("not yet implemented")
    }

    protected doClose() {
        this.olMap?.dispose()
        this.olMap = undefined
        this.gsMap = undefined
        this.input = undefined
    }

    render() {
        return html`
            <div class="gc-map-container" ${ref(this.mapContainer)}>
            </div>
        `
    }

    static styles = [unsafeCSS(olCSS), css`
        :host {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
        }

        .gc-map-container {
            flex: 1;
        }

        input.prompt {
            flex: 1;
            font-size: large;
        }
    `];
}

declare global {
    interface HTMLElementTagNameMap {
        'gs-map': GsMapEditor
    }
}