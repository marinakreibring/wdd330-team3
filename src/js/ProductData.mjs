const baseURL = import.meta.env.VITE_SERVER_URL

function convertToJson(res) {
  const jsonResponse = res.json();
  if (res.ok) {
    return jsonResponse
  } else {
    throw {
      name: "servicesError",
      message: jsonResponse
    }
  }
}

export default class ProductData {
  constructor(category) {
  }
  async getData(category) {
    const response = await fetch(baseURL + `products/search/${category}`);
    const data = await convertToJson(response);
    return data.Result;
  }
  async findProductById(id) {
    const response = await fetch(`${baseURL}product/${id}`);
    const data = await convertToJson(response)
    return data.Result
  }
}
