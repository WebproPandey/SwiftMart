
import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/Reducer';
import { customerProductReducer } from './product/Reducer';
import { cartReducer } from './Cart/Reducer';
import { orderReducer } from './Order/Reducer';




const store =  configureStore({

    reducer:{
      auth  :authReducer,
      product:customerProductReducer,
      cart:cartReducer,
      order:orderReducer
    }

})

export default store;
