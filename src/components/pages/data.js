// // import axios from "axios";
// // import { createContext, useContext, useEffect, useReducer } from "react";
// // import reducer from "../reducer/ProductReducer";

// // const API = "https://api.pujakaitem.com/api/products";

// // const initialize = {
// //   isLoading: false,
// //   isError: false,
// //   products: [],
// //   featuredProducts: [],
// //   isSingleLoading:false,
// //   isSingleError:false,
// //   singleProduct:{}
// // };
// // const AppContext = createContext();

// // const AppProvider = ({ children }) => {
// //   const [state, dispatch] = useReducer(reducer, initialize);
// //   const getProducts = async (url) => {
// //     dispatch({ type: "SET_LOADING" });
// //     try {
// //       const res = await axios.get(url);
// //       const products = await res.data;
// //       dispatch({ type: "API_DATA", payload: products });
// //     } catch (error) {
// //       dispatch({ type: "API_ERROR" });
// //     }
// //   };

// //   const getSingleProduct = async (url) => {
// //     dispatch({type:"SINGLE_PRODUCT_LOADING"});
// //     try{
// //       const res =  await axios.get(url);
// //       const singleProduct = await res.data;
// //       dispatch({type:"SINGLE_PRODUCT_DATA", payload:singleProduct})
// //     } catch(error){
// //       dispatch({type:"SINGLE_PRODUCT_ERROR"})
// //     }
// //   }

// //   useEffect(() => {
// //     getProducts(API);
// //   }, []);
// //   return (
// //     <AppContext.Provider value={{ ...state, getSingleProduct}}>{children}</AppContext.Provider>
// //   );
// // };

// // const useProductContext = () => {
// //   return useContext(AppContext);
// // };

// // export { AppProvider, AppContext, useProductContext };


// // const ProductReducer = (state, action) => {
// //   switch (action.type) {
// //     case "SET_LOADING":
// //       return {
// //         ...state,
// //         isLoading: true,
// //       };
// //     case "API_DATA":
// //       const featuredData = action.payload.filter((item) => {
// //         return item.featured === true;
// //       });
// //       return {
// //         ...state,
// //         isLoading: false,
// //         products: action.payload,
// //         featuredProducts: featuredData,
// //       };
// //     case "API_ERROR":
// //       return {
// //         ...state,
// //         isLoading: false,
// //         isError: true,
// //       };
// //     case "SINGLE_PRODUCT_LOADING":
// //       return {
// //         ...state,
// //         isSingleLoading: true,
// //       };
// //     case "SINGLE_PRODUCT_DATA":
// //       return {
// //         ...state,
// //         isSingleLoading: false,
// //         singleProduct: action.payload,
// //       };
// //     case "SINGLE_PRODUCT_ERROR":
// //       return {
// //         ...state,
// //         isSingleLoading: false,
// //         isSingleError: true,
// //       };

// //     default:
// //       return state;
// //   }
// // };
// // export default ProductReducer;



    