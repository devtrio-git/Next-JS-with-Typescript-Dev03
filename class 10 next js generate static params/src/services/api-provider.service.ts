import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { Constants } from "../../constants";

export default class ApiProvider {
    private static async request<T>(config: AxiosRequestConfig, options?: { no_token: boolean }): Promise<AxiosResponse<T>> {
        try {
            // let url = `${Constants.API_BASE}${config.url}`;
            let url = `${config.url}`;
            const token = localStorage.getItem('token');
            if (token && !options?.no_token) {
                config.headers = {
                    ...config.headers,
                    Authorization: `Bearer ${token}`,
                }
            }

            const response = await axios({
                ...config,
                url,
                headers: {
                    "Content-Type": "application/json",
                    ...config.headers,
                },
            });
            return response;
        } catch (error) {
            const err = error as AxiosError<{ message: string }>;
            if (error instanceof AxiosError) {
                console.error("Axios error:", error.message);
                throw new Error(`${err.response?.data.message}`);
            } else {
                console.error("Unexpected error:", error);
                throw new Error("An unexpected error occurred")
            }
        }
    }

    static async get<T>(url: string, options?: { no_token: boolean }, headers?: Record<string, string>): Promise<AxiosResponse<T>> {
        return this.request<T>({
            method: "GET",
            url,
            headers,
        }, options)
    }
    static async post<T>(url: string, body: any, options?: { no_token: boolean }, headers?: Record<string, string>): Promise<AxiosResponse<T>> {
        return this.request<T>({
            method: "POST",
            url,
            data: body,
            headers,
        }, options);
    }
    static async put<T>(url: string, body: any, options?: { no_token: boolean }, headers?: Record<string, string>): Promise<AxiosResponse<T>> {
        return this.request<T>({
            method: "PUT",
            url,
            data: body,
            headers,
        }, options);
    }
    static async patch<T>(url: string, body: any, options?: { no_token: boolean }, headers?: Record<string, string>): Promise<AxiosResponse<T>> {
        return this.request<T>({
            method: "PATCH",
            url,
            data: body,
            headers,
        }, options);
    }
    static async delete<T>(url: string, options?: { no_token: boolean }, headers?: Record<string, string>): Promise<AxiosResponse<T>> {
        return this.request<T>({
            method: "DELETE",
            url,
            headers,
        }, options);
    }


}