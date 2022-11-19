import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import Reducer from "../Reducers/Reducer";

//💔💔💔 CREATE A INSTANCE OF USE-CONTEXT API 💔💔💔
const MainContext = createContext();

const API = `../../public/products.json`;

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
};

//💔💔💔 WRAPPING APP COMPONENT BY MAIN-CONTEXT 💔💔💔
const AppContext = ({ children }) => {
  // 🚀 INITIALIZING REDUCER OR REACT REDUCER
  const [state, dispatch] = useReducer(Reducer, initialState);

  // 🚀 GET ALL PRODUCTS USING AXIOS API
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

  useEffect(() => {
    getProducts(API);
  }, []);
  return <MainContext.Provider value={state}>{children}</MainContext.Provider>;
};

//💔💔💔 FINALLY CREATE ANOTHER FUNCTION FOR CLINE CODE 💔💔💔
const ProductsContext = () => {
  return useContext(MainContext);
};

export { AppContext, ProductsContext, MainContext };
