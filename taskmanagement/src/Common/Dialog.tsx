import { ReactNode } from "react";
import "./dialog.css";


interface propsData {
    buttons: ReactNode;
    title: string;
    children: ReactNode
}
export default (props: propsData) => {
    const { buttons, children, title } = props;
    return (
        <div className="dialogbox row">
            <div className="col-md-12">
                <h4>{title}</h4>
            </div>
            <div className="row">
                <div className="container-fluid mt-5">
                    {children}
                </div>
            </div>
            <div className="row">
                <div className="bytn-group mt-5">
                    {buttons}
                </div>
            </div>





        </div>
    )
}