const baseURL = "https://fakestoreapi.com"

export const getSingleProduct = async (id) => {
  const response = await fetch(`${baseURL}/products/${id}`)
            .then(res=>res.json())

  return response
}


export const listProductsInCategory = async (category) => {
  const response = await fetch(`${baseURL}/products/category/${category}`)
            .then(res=>res.json())
  
  return response
}