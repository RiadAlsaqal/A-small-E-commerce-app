/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from "react";
import { useSettings } from "../../src/providers/Settings";
import { useNotification } from "../../src/providers/Notification";
type MutationFunction<T, V> = (variables: V) => Promise<T>;

type MutationOptions<T> = {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
  onLoading?: (loading: boolean) => void;
};

type MutationResult<T> = {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  mutate: (variables: any) => void;
  mutateAsync: (variables: any) => Promise<T | null>;
};

const useMutation = <T, V>(
  mutationFunction: MutationFunction<T, V>,
  options: MutationOptions<T> = {}
): MutationResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { error: settingsError } = useSettings();
  const { addNotification } = useNotification();
  const mutate = useCallback(
    (variables: V): void => {
      setIsLoading(true);
      setError(null);

      mutationFunction(variables)
        .then((result) => {
          setData(result);
          options.onSuccess && options.onSuccess(result);
        })
        .catch((e) => {
          setError(e);
          options.onError && options.onError(e);
        })
        .finally(() => {
          setIsLoading(false);
          options.onLoading && options.onLoading(isLoading);
        });
    },
    [mutationFunction, options]
  );

  const mutateAsync = useCallback(
    async (variables: V): Promise<T | null> => {
      setIsLoading(true);
      setError(null);

      try {
        if (settingsError) {
          throw Error("something went wrong");
        }
        const result = await mutationFunction(variables);
        setData(result);
        options.onSuccess && options.onSuccess(result);
        return result;
      } catch (e) {
        addNotification((e as Error).message as string, "danger");

        setError(e as Error);
        options.onError && options.onError(e as Error);
        return null;
      } finally {
        setIsLoading(false);
        options.onLoading && options.onLoading(isLoading);
      }
    },
    [mutationFunction, options]
  );

  return {
    data,
    isLoading,
    error,
    mutate,
    mutateAsync,
  };
};

export default useMutation;
