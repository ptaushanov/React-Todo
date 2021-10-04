import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        setIsLoading(true)
        setTimeout(() => {
            fetch(url, {
                signal: abortController.signal
            })
            .then(res => {
                if(!res.ok){
                    throw Error("Can't find data for that resource")
                }
                return res.json()
            })
            .then(data => {
                setError(null)
                setData(data)
                setIsLoading(false)
            })
            .catch(err => {
                if(err.name !== "AbortError"){
                    setIsLoading(false)
                    setError(err)
                }
            })
        },100);

        return () => { abortController.abort() }
    }, [url])


    return {data, isLoading, error};
}
 
export default useFetch;