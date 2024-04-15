import { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import axios from 'axios';
export const useFetch = url => {
    const { token } = useAppContext();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(undefined);
    const [error, setError] = useState(null);
    const api = axios.create({
        baseURL: `${process.env.REACT_APP_BASE_URL}/api/v1/tiktok-clone`,
    });
    useEffect(() => {
        getData();
    }, [url]);
    const getData = async () => {
        try {
            setLoading(true);
            const res = await api.get(url, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (res.data.success) {
                setData(res.data);
            } else {
                console.log(res);
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    return { data, loading, error };
};
