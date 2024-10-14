import { Controller, FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Paths } from "../Common/Path";
import { useDispatch } from "react-redux";
import { LoginDetailsUtils } from "./login.util";
import "./login.css";




export default () => {
    const navigator = useNavigate();
    const dispatcher = useDispatch();


    const methods = useForm({
        mode: 'all'
    });

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
        <div className="container-fluid mt-4">
            <div className="row main-content bg-success text-center">
                <div className="col-md-12 col-xs-12 col-sm-12 login_form ">
                    <div className="container-fluid">
                        <div className="row mt-5">
                            <h2>Login</h2>
                        </div>
                        <div className="row mt-5">
                            <form className="form-group">
                                <div className="row">
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
                                </div>
                                <div className="row d-flex justify-content-center align-items-center mb-5">
                                    <button type="submit" className="btn btn-primary mt-5" onClick={handleSubmit(data => GetLogin(data))}>Login</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}