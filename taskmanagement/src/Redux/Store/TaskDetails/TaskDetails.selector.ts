import { createSelector } from "@reduxjs/toolkit";
import { TaskDetails } from "./TaskDetails.interface";


const getRetrieveTaskDetails = (state: any): any => state?.TaskDetails;


export const TaskLoader = createSelector(getRetrieveTaskDetails, (state: TaskDetails) => state?.isLoading);
export const GetAllTasks = createSelector(getRetrieveTaskDetails, (state: TaskDetails) => state?.data);