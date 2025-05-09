import { CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;
import { api } from  "../../config/apiConfig"


export const createOrder =  (reqData) => async (dispatch) =>{
    console.log("req data" , reqData);
    dispatch({type: CREATE_ORDER_REQUEST})
    try {
        const {data} = await  api.post(`/api/orders/`,reqData.address,)

        if(data.id){
            reqData.navigate({search : `step=3&order_id =${data.id}`})
        }

        console.log("created order - ",data);
        dispatch({
            type:CREATE_ORDER_SUCCESS,
            payload:data,
        })
    } catch (error) {
        console.log("catch error: ",error);
        dispatch({
            type:CREATE_ORDER_REQUEST,
            payload:error.message,
        })
        
    }
    
}

export const orderById =  (orderId) => async (dispatch) =>{
    console.log("get order req" , orderId);
    dispatch({type: GET_ORDER_BY_ID_REQUEST})
    try {
        const {data} = await  api.post(`/api/orders/${orderById}`)
        console.log("order by id ",data);
        dispatch({
            type:GET_ORDER_BY_ID_SUCCESS,
            payload:data,
        })
    } catch (error) {
        console.log("catch error: ",error);
        dispatch({
            type:GET_ORDER_BY_ID_FAILURE,
            payload:error.message,
        })
        
    }
    
}

