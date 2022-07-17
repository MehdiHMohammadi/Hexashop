import axios from "axios";
// import products from "../products";

export const productListAction = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    // const { data } = await axios.get('http://localhost:8000/api/products')
    const { data } = {
      items: [
        {
          sys: { id: "1" },
          fields: {
            title: "محصول اول",
            price: 89,
            image: { fields: { file: { url: "./images/product-1.jpg" } } },
          },
        },
        {
          sys: { id: "2" },
          fields: {
            title: "محصول دوم",
            price: 29,
            image: { fields: { file: { url: "./images/product-2.jpg" } } },
          },
        },
        {
          sys: { id: "3" },
          fields: {
            title: "محصول سوم",
            price: 79,
            image: { fields: { file: { url: "./images/product-3.jpg" } } },
          },
        },
        {
          sys: { id: "4" },
          fields: {
            title: "محصول چهارم",
            price: 99,
            image: { fields: { file: { url: "./images/product-4.jpg" } } },
          },
        },
        {
          sys: { id: "5" },
          fields: {
            title: "محصول پنجم",
            price: 49,
            image: { fields: { file: { url: "./images/product-5.jpg" } } },
          },
        },
        {
          sys: { id: "6" },
          fields: {
            title: "محصول ششم",
            price: 59,
            image: { fields: { file: { url: "./images/product-6.jpg" } } },
          },
        },
        {
          sys: { id: "7" },
          fields: {
            title: "محصول هفتم",
            price: 99,
            image: { fields: { file: { url: "./images/product-7.jpg" } } },
          },
        },
        {
          sys: { id: "8" },
          fields: {
            title: "محصول هشتم",
            price: 49,
            image: { fields: { file: { url: "./images/product-8.jpg" } } },
          },
        },
      ],
    };
    dispatch({
      type: "PRODUCT_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const productDetailAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_DETAIL_REQUEST" });

    const { data } = await axios.get(
      `http://localhost:8000/api/products/${id}`
    );

    dispatch({
      type: "PRODUCT_DETAIL_SUCCESS",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
