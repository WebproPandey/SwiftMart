
import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/Reducer';
import { customerProductReducer } from './product/Reducer';




const store =  configureStore({

    reducer:{
      auth  :authReducer,
      product:customerProductReducer
    }

})

export default store;
