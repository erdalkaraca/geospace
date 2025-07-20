import Toastify from "toastify-js";

export const toastInfo = (msg: string) => {
    console.info(msg)
    Toastify({
        text: msg,
        duration: 3000,
        close: true,
        gravity: "bottom",
        stopOnFocus: true,
    }).showToast();
}

export const toastError = (msg: string) => {
    console.error(msg)
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