import { useDispatch, useSelector } from "react-redux"
import { GetAllTasks } from "../Redux/Store/TaskDetails/TaskDetails.selector";
import { GetUserId } from "../Redux/Store/LoginDetails/login.selector";
import { useCallback, useEffect, useState } from "react";
import AddTestDetails from "./Popup/AddTest";
import { MarkAsComplete, RemoveData } from "./Utils/TaskDatas.util";


export default function TaskDetails() {
    const [openTask, setOpenTask] = useState<boolean>(false);
    const TaskLists = useSelector(GetAllTasks);
    const getUserId = useSelector(GetUserId);
    const [Lists, setLists] = useState<Array<any>>([]);
    const dispatcher = useDispatch();

    useEffect(() => {
        UpdateAllData();
    }, [TaskLists])

    const UpdateAllData = () => setLists(() => TaskLists);

    const FilterBytodo = () => {
        setLists(() => TaskLists?.filter((val: any) => val?.status?.toLowerCase() === 'todo'));
    }
    const FilterByComp = () => setLists(() => TaskLists?.filter((val: any) => val?.status?.toLowerCase() === 'completed'));


    const RemoveList = (data: any) => {
        dispatcher(RemoveData(data));
    };


    const UpdateAddTaskDialog = (state: boolean) => setOpenTask(state);

    const AddTaskDatas = useCallback(() => {
        return (
            <>
                <div className="md-3 me-4">
                    <button type="button"
                        onClick={() => UpdateAddTaskDialog(true)}
                        className="btn btn-primary btn-lg btn-block btn-sm">Add Tesk</button>
                </div>
                <div className="dropdown me-5">
                    <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="filterDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        Filter Options
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="filterDropdown">
                        <li><span className="dropdown-item" onClick={() => UpdateAllData()}>All</span></li>
                        <li><span className="dropdown-item" onClick={() => FilterByComp()}>Completed</span></li>
                        <li><span className="dropdown-item" onClick={() => FilterBytodo()}>ToDo</span></li>

                    </ul>
                </div>
            </>
        )
    }, []);
    return (

        <div className="container">
            {openTask && <AddTestDetails UpdateAddTaskDialog={UpdateAddTaskDialog} />}

            <div className="m-5 d-flex">
                {AddTaskDatas()}

            </div>
            {Lists?.length > 0 ? (
                <>

                    <div className="row">

                        {Lists?.map((val: any) => {
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
                </>
            )
            }

        </div >
    )
}