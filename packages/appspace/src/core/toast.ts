import * as ToastifyModule from "toastify-js";
const Toastify = (ToastifyModule as any).default || ToastifyModule
import {uiContext} from "./di";

export const toastInfo = (msg: string) => {
    console.info("[TOAST] INFO: ", msg)
    Toastify({
        text: msg,
        duration: 3000,
        close: true,
        gravity: "bottom",
        stopOnFocus: true,
    }).showToast();
}

export const toastError = (msg: string) => {
    console.error("[TOAST] ERROR: ", msg)
    Toastify({
        text: msg,
        duration: 3000,
        close: true,
        gravity: "bottom",
        stopOnFocus: true,
        style: {
            background: "coral"
        }
    }).showToast();
}

export const toastWarning = (msg: string) => {
    console.warn("[TOAST] WARNING: ", msg)
    Toastify({
        text: msg,
        duration: 3000,
        close: true,
        gravity: "bottom",
        stopOnFocus: true,
        style: {
            background: "orange"
        }
    }).showToast();
}

uiContext.put("toastInfo", toastInfo)
uiContext.put("toastError", toastError)
uiContext.put("toastWarning", toastWarning)