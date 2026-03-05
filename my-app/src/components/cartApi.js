import axios from "axios";

export const addToCart = (productId) => {
  const token = localStorage.getItem("token");

  return axios.post(
    "http://127.0.0.1:8000/api/add-to-cart/",
    { product_id: productId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};