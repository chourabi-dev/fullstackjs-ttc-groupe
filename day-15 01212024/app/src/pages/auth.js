import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Auth(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [connected, setConnected] = useState(false);
    
    
  
    const handleSignIn = () => {
      // You can handle the sign-in logic here
      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json"); 
var raw = JSON.stringify({
  "username": username,
  "password": password
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:8080/api/auth", requestOptions)
  .then(response => response.json())
  .then(result =>{
     console.log(result)
     if (result.token) {
      
      
      localStorage.setItem('token',result.token);
 
      // redirect to home !!
      setConnected(true);


     }else if( result.success == false ){

      setError(result.message)

     }
    })
  .catch(error => console.log('error', error));
    };


    return(
        <div className="d-flex" style={{  minHeight:'100vh', alignItems:'center',justifyContent:'center'}}>

          {
            connected == true ? <Navigate to={ '/' } replace={ true } /> : null
          }
          
          <div className="col-sm-6">
            <div className="card card-body">

              <h3>Athentification</h3>
            <div className="mt-5">
      <form onSubmit={ (e)=>{
        e.preventDefault();
        handleSignIn();
      } } >
        <div className="mb-3" controlId="formUsername">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            className="form-control"
           
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3" controlId="formPassword">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary" >
          Sign In
        </button>
        {
          error != '' ?
          <div className="alert alert-danger mt-3">
            { error }
          </div>
          :
          null
        }
      </form>
    </div>
            </div>
          </div>

        </div>
    );
}