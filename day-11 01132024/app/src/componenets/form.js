import { useState } from "react";

export default function ConnectForm(props){



    let [ username, setUsername ] = useState('');
    let [ usernameError, setUsernameError ] = useState('');


    let [ password, setPassword ] = useState('');
    let [ passwordError, setPasswordError ] = useState('');


    function connect() { 
        if( username == '' ){
            setUsernameError('This feild is required');
        }else{
            setUsernameError('');
        }


        if( password == '' ){
            setPasswordError('This feild is required');
        }else{
            setPasswordError('');
        }



        if( password != '' && username != '' ){
            console.log("We are okay !!");

            const body = { username,password }

            // CONNECT API 

            console.log(body);
        }
    }



    return(
        <div>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={ (event)=>{
                        event.preventDefault();
                        connect();

                    } } >
                        <div className="mb-3">
                            <label htmlFor="">Username  { username == '' ? <span className="text-danger">*</span> : null }
                            
                             </label>
                            <input type="text" className="form-control"  value={ username }   onChange={ (e)=>{ setUsername( e.target.value ) } }   />

                            <p>
                                <small className="text-danger">{ usernameError }</small>
                            </p> 
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="">Password { password == '' ? <span className="text-danger">*</span> : null } </label>
                            <input type="password" className="form-control" value={ password } onChange={(e)=>{ setPassword(e.target.value) }}  />

                            <p>
                                <small className="text-danger">{ passwordError }</small>
                            </p>

                        </div>
                        <div className="mb-3">
                            <button className="btn btn-success">Connect</button>
                        </div>
                        
                        
                    </form>
                </div>
            </div>
        </div>
    );
}