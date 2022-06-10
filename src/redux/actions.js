
import {
    FETCH_USER_ERROR, FETCH_USER_DATA, FETCH_USER_SUCCESS,
    ADD_TO_BASKET, REMOVE_FROM_BASKET, DECREASE_BASKET_BY_ONE,
    INCREASE_BASKET_BY_ONE,BUTTON_STATE

} from "./types";

export const fetchUserData = () =>  {
    return  {
         type: FETCH_USER_DATA,
         payload: true
    }
 }
 
 export const fetchUserDataSuccess = (users) =>  {
     return {
         type: FETCH_USER_SUCCESS,
         payload: users
     }
 }
 
 export const fetchUserDataFailure = (error) =>  {
     return {
         type: FETCH_USER_ERROR,
         payload: error
     }
 }
 
export const addToBasket = (item, variants, quantity) => {
    return {
        type: ADD_TO_BASKET,
        payload: item,
        addedVariant: variants,
        addedQuantity:quantity
    }
 }

 export const removeFromBasket = (item) =>  {
    return {
        type: REMOVE_FROM_BASKET,
        payload: item
    }
 }

 export const decreaseBasketByOne = () =>  {
    return {
        type: DECREASE_BASKET_BY_ONE,
    }
 }
 export const increaseBasketByOne = () =>  {
    return {
        type: INCREASE_BASKET_BY_ONE,
    }
 }



 export const buttonState = (id) =>  {
    return {
        type: BUTTON_STATE,
        payload: id,
    }
}