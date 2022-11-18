import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // clean up
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);

      const response = await fetch(url, { signal: controller.signal });

      const jsonData = await response.json();

      setIsPending(false);
      setData(jsonData);
      setError(null);
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isPending, error };
};
