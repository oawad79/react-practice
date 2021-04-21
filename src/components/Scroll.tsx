import React, {ReactNode} from "react";

type Props = {
    children: ReactNode;
}

const Scroll = (props: Props) => {
    return (
        <div style={{overflowY: 'scroll', height:'70vh'}}>
            {props.children}
        </div>
    );
}

export default Scroll;