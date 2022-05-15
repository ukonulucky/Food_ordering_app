
import { FETCH_USER_ERROR, FETCH_USER_DATA, FETCH_USER_SUCCESS } from "./types";

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
 
