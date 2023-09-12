export const useOpenapiFetch: typeof useFetch = (request, opts?) => {
  return useFetch(request, { baseURL: '/openapi-example', ...opts });
};
