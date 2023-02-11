import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react"
import ProductReducer from "../reducer/ProductReducer";

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading:false,
  isError:false,
  products:[],
  featuredProducts:[],
  filter_products:[],
  filter_error:false,
  grid_view:true,
  isSingleLoading:false,
  isSingleError:false,
  singleProduct:{},
}
const AppProvider = ({children}) => {
  const [state , dispatch] = useReducer(ProductReducer , initialState);
  const getProducts = async (url) =>{
    dispatch({type:"SET_LOADING"})
    try{
      const { data: products } = await axios.get(url);
      dispatch({type:"SET_DATA",payload:products})
      dispatch({type: "SET_FILTER_PRODUCT", payload: products});
      
    } catch (error){
      dispatch({type:"SET_ERROR"})
    }
  }

  const getSingleProduct = async (url) =>{
    dispatch({type:"SET_SINGLE_LOADING"})
    try{
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({type:"SET_SINGLE_DATA",payload:singleProduct})
    } catch (error){
      dispatch({type:"SET_SINGLE_ERROR"})
    }
  }

  const setGridView = () => {
    return dispatch({type:"SET_GRID_VIEW",});
  }
  const setListView = () => {
    return dispatch({type:"SET_LIST_VIEW",});
  }
  const sorting = (option) => {
    let userValue = option.target.value;
    return dispatch({type:"SORTING_PRODUCTS",payload:userValue});
  }

  
  const getFilterProducts = (type) =>{
    dispatch({
      type: 'FILTER_PRODUCTS',
      payload: type
    })
  }

  useEffect(()=>{
    getProducts(API);
  },[]);

  return <AppContext.Provider value={{...state, getSingleProduct,getFilterProducts ,setGridView,setListView,sorting}}>{children}</AppContext.Provider>
  
};

const useProductContext = () =>{
  return useContext(AppContext)
}
export {AppProvider,AppContext, useProductContext}