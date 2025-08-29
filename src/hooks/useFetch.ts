import { useEffect, useState } from "react";
interface Params<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export const useFetch = <T>(url: string): Params<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    setError(null);
    setData(null);
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("no-results");
          }
          throw new Error("error al obtener datos");
        }
        const data: T = await response.json();
        setData(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, error, loading };
};
