import { TaskLoading, AddNewTasks, RemoveDataFromList, MarkAsCompleteList } from "../../Redux/Store/TaskDetails/TaskDetails.slice"


export const AddNewTaskData = (payload: any): any =>
    async (dispatch: any, getState: any) => {
        dispatch(TaskLoading())

        console.log("dataaaaa", getState());
        const data = {
            ...payload,
            id: getState()?.TaskDetails?.data?.length,
            status: 'ToDo',
            UserDetails: getState()?.LoginDetails?.id
        }

        dispatch(AddNewTasks(data));
    }

export const RemoveData = (payload: any): any =>
    async (dispatch: any, getState: any) => {
        dispatch(TaskLoading())
        dispatch(RemoveDataFromList(payload));
}

export const MarkAsComplete = (payload: any): any =>
    async (dispatch: any, getState: any) => {
        dispatch(TaskLoading())
        dispatch(MarkAsCompleteList(payload));
}