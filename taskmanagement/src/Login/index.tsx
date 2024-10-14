import { Controller, FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Paths } from "../Common/Path";
import { useDispatch } from "react-redux";
import { LoginDetailsUtils } from "./login.util";


export default () => {
    const navigator = useNavigate();
    const dispatcher = useDispatch();


    const methods = useForm({
        mode: 'all'
    })

    const {
        handleSubmit,
        getValues,
        control,
        formState: { errors }
    } = methods

    const UpdateUsers = (state: boolean) => {
        if (state) {
            navigator(Paths?.ROOT);
            return;
        }


    }
    const GetLogin = (data: any) => {
        dispatcher(LoginDetailsUtils(data?.email, UpdateUsers));
    }
    return (
        <div className="container m-5 p-5">
            <div className="card" style={{
                width: '250px'
            }}>
                <div className="card-body" >
                    <h5 className="card-title">Login</h5>
                    <div className="form-group">
                        <FormProvider {...methods}>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field: { onChange } }) => <input
                                    type="email"
                                    name="email"
                                    onChange={onChange}
                                    className="form-control"
                                    placeholder="Enter your Email ID..." />}
                            />
                            {errors?.['email'] && <h5>Something wrong...</h5>}


                        </FormProvider>

                        <button type="submit" className="btn btn-primary mt-5" onClick={handleSubmit(data => GetLogin(data))}>Login</button>
                    </div>

                </div>
            </div>
        </div>
    );
}