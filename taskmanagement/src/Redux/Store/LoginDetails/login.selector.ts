import { createSelector } from "@reduxjs/toolkit";
import { LoginDetails } from "./login.interface";


const getRetrieveLoginDetails = (state: any): any => state?.LoginDetails;


export const GetUserId = createSelector(getRetrieveLoginDetails, (state: LoginDetails) => state?.id);
export const UserDetails = createSelector(getRetrieveLoginDetails, (state: LoginDetails) => state);
