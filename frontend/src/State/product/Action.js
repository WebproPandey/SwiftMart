import {FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_FAILURE, FIND_PRODUCT_REQUEST, FIND_PRODUCT_SUCCESS } from "./ActionType"
import { api } from  "../../config/apiConfig"


export const findProducts = (reqData) => async (dispatch) => {
    const {
      colors,
      sizes,
      minPrice,
      maxPrice,
      minDiscount,
      category,
      stock,
      sort,
      pageNumber,
      pageSize, 
    } = reqData;

    dispatch({ type: FIND_PRODUCT_REQUEST });

    try {
      const queryParams = new URLSearchParams();

      if (colors?.length) queryParams.append("color", colors.join(","));
      if (sizes?.length) queryParams.append("sizes", sizes.join(","));
      if (minPrice) queryParams.append("minPrice", minPrice);
      if (maxPrice) queryParams.append("maxPrice", maxPrice);
      if (minDiscount) queryParams.append("minDiscount", minDiscount);
      if (category) queryParams.append("category", category);
      if (stock) queryParams.append("stock", stock); 
      if (sort) queryParams.append("sort", sort);
      if (pageNumber) queryParams.append("pageNumber", pageNumber);
      if (pageSize) queryParams.append("pageSize", pageSize);
      
    
      const { data } = await api.get(`/api/products?${queryParams.toString()}`);
      console.log("product data", data);
      dispatch({ type: FIND_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      console.log("fetch error:", error.message);
      dispatch({ type: FIND_PRODUCT_FAILURE, payload: error.message });
    }
};


export  const findProductsById =  (reqData) =>  async (dispatch) =>{
    const  {productId} =   reqData
    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})
    
    try {
        const {data} =  api.get(`/api/products/id/${productId}`)
        // console.log("product data" , data)

        dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})
    
    }
    
}

