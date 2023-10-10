import { $setNotification } from "@/commons/stores/notifications";
import { AxiosError } from "axios";
import { $setAccount } from "./account";
import { ApiError } from "./_interfaces";

export function HandleApiError(error: unknown) {
    const err: AxiosError = error as AxiosError;
    const data: ApiError = err.response?.data as ApiError;

    let notification = { title: '', content: '', icon: '' };

    if (err.code === 'ERR_NETWORK') {
        notification = { title: 'Error de conexion', content: err.message, icon: 'signal_wifi_bad' };
        return;
    }

    switch (data.statusCode) {
        case 400:
            notification = { title: 'Error de peticion', content: data.message, icon: 'error' };
            break;
        case 401:
            $setAccount(null);
            notification = { title: 'Error de autorizacion', content: data.message, icon: 'vpn_key_off' };
            break;
        case 500:
            notification = { title: 'Error de servidor', content: data.message, icon: 'public_off' };
            break;
    }

    if (notification.title) {
        $setNotification(notification);
    }

    if (import.meta.env.MODE === 'development') {
        console.error('Api error', err)
    }
}
