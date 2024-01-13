import { useState } from "react";

export default function LikeButton(props){

    let [likes,setLikes] = useState(props.likes)
    
    
    return(
        <div>
            <button className="btn btn-primary"  onClick={ ()=>{ 
                // props.likes ++ WRONG props are read only !!
                setLikes( (likes+1) ); 
            } } >{ likes } likes</button>
        </div>
    );
}