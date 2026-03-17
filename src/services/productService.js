async function getProducts(client) {
  const response = await client.get('/products');
  return response.data?.items || [];
}

module.exports = {
  getProducts
}