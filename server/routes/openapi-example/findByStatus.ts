import type { Pet } from '@@/types/__services__/PetStoreApi.d';

export default defineEventHandler(event => {
  // openapi (swagger) 在线示例
  // @see https://petstore.swagger.io/
  const req = getRequestURL(event);

  return fetch(
    `https://petstore.swagger.io/v2/pet/${req.pathname.replace(
      /\/openapi-example\//,
      ''
    )}${req.search}`,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    }
  )
    .then(res => res.json())
    .then((res: Pet[]) =>
      res.map(item => ({
        id: item.id,
        name: item.name,
        status: item.status,
        category: item.category?.name,
        tags: item.tags?.map(tag => tag.name).join(',')
      }))
    );
});
