import { combineReducers } from "@reduxjs/toolkit";
import TaskReducer from './TaskDetails/TaskDetails.slice';
import LoginReducer from './LoginDetails/login.slice';



export const rootReducer = combineReducers({
    TaskDetails : TaskReducer,
    LoginDetails: LoginReducer
})