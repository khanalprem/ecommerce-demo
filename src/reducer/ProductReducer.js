

const ProductReducer = (state , action) => {
    switch(action.type){
      case "SET_LOADING" :
        return{
          ...state,
          isLoading:true
        };
      case "SET_DATA":
        const featuredDATA = action.payload.filter((item) => {
          return item.featured === true;
        });
        return{
          ...state,
          isLoading:false,
          products:action.payload,
          featuredProducts:featuredDATA
        };
      case "SET_ERROR" :
        return{
          ...state,
          isError:true
        };
        case "SET_SINGLE_LOADING" :
          return{
            ...state,
            isSingleLoading:true
          };
        case "SET_SINGLE_DATA":
          return{
            ...state,
            isSingleLoading:false,
            singleProduct:action.payload,
          };
        case "SET_SINGLE_ERROR" :
          return{
            ...state,
            isSingleError:true
          };

        case "SET_FILTER_PRODUCT":
          return{
            ...state,
            filter_products:action.payload,
          };

        case "SET_FILTER_ERROR" :
          return{
            ...state,
            filter_error:true
          };

        case "SET_GRID_VIEW" :
          return{
            ...state,
            grid_view:true
          };
        case "SET_LIST_VIEW" :
          return{
            ...state,
            grid_view:false
          };
        case "SORTING_PRODUCTS" :
          let newSortData;
          const sorting_value = action.payload
          const {filter_products} = state;
          let tempSortProduct = [...filter_products];
          
          const sortingProducts = (a,b) =>{
            if(sorting_value === "lowest"){
                return a.price - b.price;
            }
            if(sorting_value === "highest"){
                return b.price - a.price;
            }
            if(sorting_value === "a-z"){
              return a.name.localeCompare(b.name);
            }
            if(sorting_value === "z-a"){
              return b.name.localeCompare(a.name);
            }
          }
          newSortData = tempSortProduct.sort(sortingProducts);
          return{
            ...state,
            filter_products:newSortData
          }
      default :
        return state
    }
}

export default ProductReducer