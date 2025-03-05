import { useState, useEffect } from "react";

// Custom Hook for fetching API data
const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pagination, setPagination] = useState({ pages: null, next: null, prev: null });

    useEffect(() => {

        const fetchData = async () => {

            try {

                setLoading(true);
                const response = await fetch(url);
                if (!response.ok) throw new Error("Failed to Fetch Data");

                const result = await response.json();


                setData(result.results); 
                setPagination({ pages: result.info.pages, next: result.info.next, prev: result.info.prev });

            }
            catch (error) {
                //Same with this
                setError(error.message);

            }
            finally {
                setLoading(false);
            }
        };

        fetchData();

    }, [url]);


    return { data, loading, error, pagination };

};

export default useFetch;