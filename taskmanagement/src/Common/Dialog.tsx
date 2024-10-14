import { ReactNode } from "react";
import "./dialog.css";


interface propsData {
    buttons: ReactNode;
    title: string;
    children: ReactNode
}
export default (props: propsData) => {
    const { buttons, children , title} = props;
    return (
        <div className="dialogbox">
            <h4>{title}</h4>
            {children}

            <div className="bytn-group mt-5">
                {buttons}
            </div>

        </div>
    )
}