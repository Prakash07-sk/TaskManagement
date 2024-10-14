import axios from "axios"
import { API } from "../Redux/Store/Service/API"
import { GetLoginDetails } from "../Redux/Store/LoginDetails/login.slice"
import { IAppDispatch } from "../Redux/Store/store"
import { toast } from "react-toastify";




export const LoginDetailsUtils = (payload: any, callBackUI: (state: boolean) => void): IAppDispatch | any =>
    async (dispatch: any) => {
        try {
            if (!payload) {
                throw new Error("No Data found")
            }

            axios.get(`${API?.RootApi}/users`, {
                params: {
                    email: payload
                }
            })
                .then((res: any) => {

                    console.log(res?.data?.[0]);
                    dispatch(GetLoginDetails(res?.data?.[0]))
                    toast.success('Login Success')
                    callBackUI(true)
                })
                .catch(err => callBackUI(false))
        }
        catch(err : any) {
            toast.error('No Data found...')
            callBackUI(false)
        }
        
    };