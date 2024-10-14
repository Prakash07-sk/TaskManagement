import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskDetails } from "./TaskDetails.interface";

const initialState: TaskDetails = {
    isLoading: false,
    data: [],
};

const TaskDatasSlicer = createSlice({
    name: 'taskmanagement',
    initialState,
    reducers: {
        TaskLoading: (state: any): TaskDetails => ({
            ...state,
            isLoading: true
        }),
        AddNewTasks: (state, action: PayloadAction<any>): TaskDetails => ({
            ...state,
            isLoading: false,
            data: [...state?.data, action.payload]
        }),
        RemoveDataFromList : (state, action: PayloadAction<any>): TaskDetails => ({
            ...state,
            isLoading: false,
            data: state?.data?.filter((val: any) => val?.id !== action?.payload)
        }),
        MarkAsCompleteList:  (state, action: PayloadAction<any>): TaskDetails => ({
            ...state,
            isLoading: false,
            data: state?.data?.map((val: any) => val?.id === action?.payload ? ({...val, status: 'Completed'}): val)
        }),
    }
})

export const { TaskLoading, AddNewTasks, RemoveDataFromList, MarkAsCompleteList } = TaskDatasSlicer.actions;
export default TaskDatasSlicer.reducer;