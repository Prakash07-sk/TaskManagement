import { useDispatch, useSelector } from "react-redux"
import { GetAllTasks } from "../Redux/Store/TaskDetails/TaskDetails.selector";
import { GetUserId } from "../Redux/Store/LoginDetails/login.selector";
import { useCallback, useState } from "react";
import AddTestDetails from "./Popup/AddTest";
import { MarkAsComplete, RemoveData } from "./Utils/TaskDatas.util";


export default function TaskDetails() {
    const [openTask, setOpenTask] = useState<boolean>(false);
    const TaskLists = useSelector(GetAllTasks);
    const getUserId = useSelector(GetUserId);
    const dispatcher = useDispatch();


    const RemoveList = (data: any) => {
        dispatcher(RemoveData(data));
    };


    const UpdateAddTaskDialog = (state: boolean) => setOpenTask(state);

    const AddTaskDatas = useCallback(() => {
        return (
            <div className="md-3">
                <button type="button"
                    onClick={() => UpdateAddTaskDialog(true)}
                    className="btn btn-primary btn-lg btn-block btn-sm">Add Tesk</button>
            </div>
        )
    }, []);
    return (

        <div className="container">
            {openTask && <AddTestDetails UpdateAddTaskDialog={UpdateAddTaskDialog} />}

            {TaskLists?.length > 0 ? (
                <>
                    <div className="m-5">
                        {AddTaskDatas()}
                    </div>
                    <div className="row">

                        {TaskLists?.map((val: any) => {
                            return (
                                <>
                                    <div className="col-md-12 col-lg-4">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">{val?.title}</h5>
                                                <p className="card-text">Status : <strong>{val?.status}</strong></p>
                                                <p className="card-text">Description : {val?.description}</p>
                                                

                                                {getUserId === val?.UserDetails &&
                                                    <>
                                                        <button className="btn card-link" onClick={() => dispatcher(MarkAsComplete(val?.id))}>Mark as done</button>
                                                        <button className=" text-danger btn card-link" onClick={() => RemoveList(val?.id)}>delete</button>
                                                    </>
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}

                    </div>
                </>
            ) : (
                <>
                    <div className="alert alert-primary" role="alert">
                        No Task has beed added yet...
                    </div>
                    {AddTaskDatas()}
                </>
            )
            }

        </div >
    )
}