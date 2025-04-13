import { Dispatch, SetStateAction, useState } from "react";


export default function useApiState<T, V = void>(initialState: T, initialLoading?: boolean): [
    T,
    Dispatch<SetStateAction<T>>,
    (c: () => Promise<V>) => Promise<V | undefined>,
    boolean,
    string,
    Dispatch<SetStateAction<string>>,
] {
    const [data, setData] = useState<T>(initialState);
    const [loading, setLoading] = useState(initialLoading ?? false);
    const [error, setError] = useState("");


    async function callApi(callback: () => Promise<V>) {
        setLoading(true);
        setError("");
        try {
            const res: V = await callback();
            return res;
        } catch (err) {
            const error = err as Error;
            setError(error.message || "Faild to fetch data");
        } finally {
            setLoading(false);
        }
    }


    return [data, setData, callApi, loading, error, setError];
}