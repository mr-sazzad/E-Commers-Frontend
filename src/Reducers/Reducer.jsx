const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "OUR_API_PRODUCTS":
      const featuredData = action.payload.filter((currElm) => {
        return currElm.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featuredProducts: featuredData,
      };
    case "API_ERROR":
      return {
        ...state,
        isError: true,
      };
    case "SET_SINGLE_PRODUCT_LOADING":
      return {
        ...state,
        isSingleProductLoading: true,
      };
    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleProductLoading: false,
        singleProduct: action.payload,
      };
    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isError: true,
      };

    default:
      return state;
  }
};

export default Reducer;
