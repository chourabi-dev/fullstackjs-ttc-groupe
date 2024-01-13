import { useState } from "react";

export default function ToggleSwitch(props){


    const [active,setActive] = useState( props.actives );


    return(
        <div className={ active == false ? "toogle-switch" : "toogle-switch active" } onClick={ ()=>{
            setActive( ! active );

            // call API 
        }}>
            <div></div>
        </div>
    );
}