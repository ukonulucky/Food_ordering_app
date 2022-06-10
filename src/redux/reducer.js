
import {
    FETCH_USER_ERROR, FETCH_USER_DATA, FETCH_USER_SUCCESS,
    ADD_TO_BASKET, REMOVE_FROM_BASKET, DECREASE_BASKET_BY_ONE, INCREASE_BASKET_BY_ONE,BUTTON_STATE,ITEM_STATE
} from "./types";


const initialState = {
    loading: false,
    users: [],
    error: "",
    cart: []
}



// creating a reducer
const reducer = (state = initialState , action) => {
   switch (action.type) {
       case FETCH_USER_DATA: return {
               ...state, loading: true
           }           
           break;
       case FETCH_USER_SUCCESS:
           
           return {
           ...state,
           loading: false,
           users: action.payload,
           error: ''
       }
           break;
       case FETCH_USER_ERROR: return {
           ...state,
            loading: false,
            users: [],
            error: action.payload
          }
        
           break;
       case ADD_TO_BASKET: const addCart = state.users.find(i => i._id === action.payload)
           const addedCartModified = {
               id: addCart._id,
               name:addCart.name,
               image: addCart.image,
               variant: action.addedVariant,
               quantity:action.addedQuantity
               
          }
           if (addCart !== undefined ) {
               return {
                ...state, cart: [...state.cart, addedCartModified]
               }
           
            } else {
                   return state
            }
           break;
           case REMOVE_FROM_BASKET: const newCart =  state.cart.findIndex(i=> i.id === action.payload)
           console.log("index",newCart)
         const newCartArray =  state.cart.filter((_, k) => k !== newCart )

           console.log(newCartArray)
           return {
               ...state, cart:newCartArray
           }
           
           break;
       case BUTTON_STATE:
           state.users.forEach(i => {
               if (i._id === action.payload) {
                   i.buttonState = true
                   i.itemState = "Item Added"
              }
           })
           return state
           break;

       default: return state
           break;
   }
}
export default reducer
