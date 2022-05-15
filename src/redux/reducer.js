
import { FETCH_USER_ERROR, FETCH_USER_DATA, FETCH_USER_SUCCESS } from "./types";


const initialState = {
    loading: false,
    users: [],
    error:""
}

// creating a reducer
const reducer = (state = initialState , action) => {
   switch (action.type) {
       case FETCH_USER_DATA: return {
               ...initialState, loading: true
           }           
           break;
       case FETCH_USER_SUCCESS: return {
               loading: false,
               users: action.payload,
               error: ''
             }
       
       case FETCH_USER_ERROR : return  {
            loading: false,
            users: [],
            error: action.payload
          }
        
           break;
       default: return state
           break;
   }
}
export default reducer
