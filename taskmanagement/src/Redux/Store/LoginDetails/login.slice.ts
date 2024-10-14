import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginDetails } from "./login.interface";


const initialState: LoginDetails = {
    id: null,
    firstname: '',
    lastname: '',
    email: ''
};

const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        GetLoginDetails: (state: any,  action: PayloadAction<any>) : any => action?.payload
    }
})

export const {GetLoginDetails} = LoginSlice?.actions;
export default LoginSlice?.reducer;