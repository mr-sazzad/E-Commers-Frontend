import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import Reducer from "../Reducers/Reducer";

const MainContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  isSingleProductLoading: false,
  singleProduct: {},
  singleError: false,
};

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  // get all products
  const getProducts = async (url) => {
    dispatch("SET_LOADING");
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "OUR_API_PRODUCTS", payload: products });
    } catch (error) {
      dispatch("API_ERROR");
    }
  };

  // get single product
  const getSingleProduct = async (url) => {
    dispatch("SET_SINGLE_PRODUCT_LOADING");
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch("SET_SINGLE_ERROR");
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);
  return (
    <MainContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </MainContext.Provider>
  );
};

const ProductsContext = () => {
  return useContext(MainContext);
};

export { AppContext, ProductsContext };
