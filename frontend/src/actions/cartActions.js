import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";

export const AddToCart = (id, qty) => async (dispatch, getstate) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CARD_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countIn,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
