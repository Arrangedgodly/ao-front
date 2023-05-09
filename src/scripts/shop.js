const baseUrl = 'http://localhost:3001';

const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Error fetching products: ${response.statusText}`);
  }
};

const getProducts = () => {
  return fetch(`${baseUrl}/store/products`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(checkResponse)
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
};

module.exports = {
  getProducts,
}