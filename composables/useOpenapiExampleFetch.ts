export const useOpenapiExampleFetch: typeof useFetch = (request, opts?) => {
  return useFetch(request, { baseURL: '/openapi-example', ...opts });
};
