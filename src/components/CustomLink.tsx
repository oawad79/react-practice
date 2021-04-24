import React, {ReactElement, ReactNode} from "react";
import {withRouter} from "react-router-dom";
import {History, LocationState} from "history";


// type Props = {
//     history: History<LocationState>;
//     to: string;
//     onClick: (event : MouseEvent) => void;
//     tag: any
//
// }

const CustomLink  = ({history, to, onClick, tag: Tag, ...rest}:any)  => (
    <Tag
        {...rest}
        onClick={(event : MouseEvent) => {
            onClick(event);
            history.push(to)
        }}
    />
)

export default withRouter(CustomLink);