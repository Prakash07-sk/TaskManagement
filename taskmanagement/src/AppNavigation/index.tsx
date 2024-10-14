import { useSelector } from "react-redux";
import { GetUserId } from "../Redux/Store/LoginDetails/login.selector";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Paths } from "../Common/Path";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function AppNavigation() {
    const getUserId = useSelector(GetUserId);
    console.log(getUserId);
    const Login = lazy(() => import('../Login'));
    const TaskDetails = lazy(() => import('../TaskDetails'))
    return (
        <div className='m-5'>

            <Router>
                <Suspense fallback={<div>loading...</div>}>
                    {!!getUserId ? (
                        <Routes>
                            <Route path={Paths?.ROOT} element={<TaskDetails />} />
                        </Routes>
                    ) : (
                        <Routes>
                            <Route path="*" element={<Login />} />
                        </Routes>
                    )}
                </Suspense>
            </Router>

            <ToastContainer
                autoClose={3000}
            />
        </div>
    );
}