import reducer from "./reducer"
import axios from "axios"

import thunk from "redux-thunk"
import { applyMiddleware,createStore} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';

import { fetchUserDataSuccess, fetchUserDataFailure,fetchUserData } from "./actions"

export const fetchData = () => {
    return  async(dispatch) => {
        try {
            dispatch(fetchUserData())
             const res = await axios.get("http://localhost:8000/get_pizza")
            
            // console.log(JSON.stringify(res.data))
            if (res.data) {
                 res.data.forEach(i => {
                     i.buttonState = false
                     i.itemState = "Add To Basket"
                 })
          dispatch(fetchUserDataSuccess(res.data))
               }
        } catch (error) {
        dispatch(fetchUserDataFailure(error.message))
      
  }   
   }
}


export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))


// store.dispatch(fetchData())

// const subscribe = store.subscribe(() => {
//     console.log(`store has been updated to ${JSON.stringify(store.getState())}`)
// })                                                                                      
