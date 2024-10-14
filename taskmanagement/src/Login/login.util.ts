import axios from "axios"
import { API } from "../Redux/Store/Service/API"
import { GetLoginDetails } from "../Redux/Store/LoginDetails/login.slice"
import { IAppDispatch } from "../Redux/Store/store"




export const LoginDetailsUtils = (payload: any, callBackUI: (state: boolean) => void): IAppDispatch | any =>
    async (dispatch: any) => {

        axios.get(`${API?.RootApi}/users`, {params : {
            email: payload
        }})
        .then((res: any) => {

            console.log(res?.data?.[0]);
            dispatch(GetLoginDetails(res?.data?.[0]))
            callBackUI(true)
        })
        .catch(err => callBackUI(false))
    }