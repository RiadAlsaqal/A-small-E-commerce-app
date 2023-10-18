import { useEffect, useState } from "react";

type QueryFunction<T> = () => Promise<T>;

type QueryResult<T> = {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
};

const useQuery = <T>(queryFunction: QueryFunction<T>): QueryResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await queryFunction();
        setData(result);
        setError(null);
      } catch (error) {
        setError(error as Error);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [queryFunction]);

  return { data, isLoading, error };
};

export default useQuery;
