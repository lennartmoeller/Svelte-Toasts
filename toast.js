/**
 * @author     Lennart Möller <kontakt@lennartmoeller.com>
 * @copyright  2020-2022 Lennart Möller
 */

import Toasts from "./Toasts.svelte";
import {writable} from "svelte/store";

/**
 * The standard display duration for the toast
 * @type {number}
 */
const toastStdDuration = 3000;

export const toast = {
    /**
     * Displays an error toast
     * @param message {string} The message to display
     * @param duration {number} The duration to display the toast
     */
    error: function (message, duration = toastStdDuration) {
        init();
        addToast({
            type: 'error',
            message: message
        }, duration);
    },
    /**
     * Displays a warning toast
     * @param message {string} The message to display
     * @param duration {number} The duration to display the toast
     */
    warning: function (message, duration = toastStdDuration) {
        init();
        addToast({
            type: 'warning',
            message: message
        }, duration);
    },
    /**
     * Displays a success toast
     * @param message {string} The message to display
     * @param duration {number} The duration to display the toast
     */
    success: function (message, duration = toastStdDuration) {
        init();
        addToast({
            type: 'success',
            message: message
        }, duration);
    },
    /**
     * Displays an info toast
     * @param message {string} The message to display
     * @param duration {number} The duration to display the toast
     */
    info: function (message, duration = toastStdDuration) {
        init();
        addToast({
            type: 'info',
            message: message
        }, duration);
    }
}

/**
 * The toasts that are currently displayed
 * @type {Writable<{[id: string]: {type: string, message: string}}>}
 */
export const toastStore = writable({});

/**
 * Initializes the Toast Svelte component
 */
function init() {
    if (!document.getElementById("toasts")) return new Toasts({target: document.body});
}

/**
 * Displays a Toast and removes it after the duration
 * @param t {{type: string, message: string}} The Toast object
 * @param duration {number} The duration to display the toast
 */
function addToast(t, duration = toastStdDuration) {
    let i;
    toastStore.update(ts => {
        i = (Object.keys(ts).length ? parseInt(Object.keys(ts).reduce((a, b) => ts[a] > ts[b] ? a : b)) : 0) + 1;
        ts[i] = t;
        return ts;
    });
    setTimeout(() => {
        toastStore.update(ts => {
            delete ts[i];
            return ts;
        })
    }, duration);
}