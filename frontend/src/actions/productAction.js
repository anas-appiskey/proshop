import axios from "axios";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCTS_LIST_REQUEST" });

    const { data } = await axios.get("api/products");
    console.log(data);
    dispatch({ type: "PRODUCTS_LIST_SUCCESS", payload: data });
    console.log(data);
  } catch (error) {
    dispatch({
      type: "PRODUCTS_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
