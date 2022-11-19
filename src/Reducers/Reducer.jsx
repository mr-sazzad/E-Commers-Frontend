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
    default:
      return state;
  }
};

export default Reducer;
