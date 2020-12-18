import {useState, useCallback} from 'react'

const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            const response = await fetch(url, { method, headers, body })
            const data = await response.json()

            if (!response.ok){
                throw new Error(data.message || 'Something went wrong')
            }
            setLoading(false)

            return data
        }
        catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])


    const clearError = () => setError(null)


    return { loading, request, error, clearError }
};

// const useHttp = async (data, url) => {
//     console.log(data)
//     const response = await fetch(
//         url,
//         {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         }
//     )
//     const json = await response.json()
//     console.log(json)
//     return json
//
//
// }

export default useHttp
