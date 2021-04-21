import React from "react";

type Props = {
    isVisible: boolean;
}

const Sidebar : React.FunctionComponent<Props> = (props) => {

    return (
        <div className={(props.isVisible? "w-64 " : "w-0 ") + "bg-gray-200 z-10 transform top-0 left-0 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"}>
            {props.children}
        </div>
    );
};

export default Sidebar;