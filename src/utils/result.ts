type Result<T> = [T | null, Error | null];

export const intoResultAsync = async <T, P>(
  fn: (params: P) => Promise<T>
): Promise<(params: P) => Promise<Result<T>>> => {
  return async (params: P): Promise<Result<T>> => {
    try {
      const data = await fn(params);
      return [data, null];
    } catch (error: unknown) {
      return [null, error as Error];
    }
  };
};

export type { Result };
