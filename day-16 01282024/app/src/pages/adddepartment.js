import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

export default function AddDepartment(){

    const [connected,setConnected] = useState(true);
    
    const [unique_id,setUniqueID] = useState('');
    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    
    const [success,setSuccess] = useState('');
    
    
 

    function sendDataToServer(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem('token'));
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "unique_id": unique_id,
          "name": name,
          "address": address
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://localhost:8080/api/department", requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.success == true){
                setSuccess(result.message);

                setAddress('');
                setUniqueID('');
                setName('');
            }
          })
          .catch(error => console.log('error', error));
    }
    



    return(
        <div>
            {
                connected == false ? <Navigate to={ '/auth' } replace={ true } /> : null
            }
         

            {
                /* SHOW ALL DEPS IN FORM OF TABLE */
            }

            <div className="mt-5 container">
                <div className="card">
                    <div className="card-header">
                        <h3>Add new department</h3>
                        <Link className="btn btn-outline-primary" to={ '/'}>Back to list</Link>
                    </div>
                    <div className="card-body">

                        <form onSubmit={ (e)=>{
                            e.preventDefault();
                            sendDataToServer();
                        } }>


 
 
                        <div className="mb-3">
                            <label htmlFor="">CODE</label>
                            <input type="text" className="form-control" onChange={(e)=>{ setUniqueID(e.target.value) }} value={unique_id} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="">Name</label>
                            <input type="text" className="form-control" onChange={(e)=>{ setName(e.target.value) }} value={name} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="">Address</label>
                            <input type="text" className="form-control" onChange={(e)=>{ setAddress(e.target.value) }} value={address} />
                        </div>

                        <div>
                            <button
                            className="btn btn-success"
                            disabled = {
                                unique_id == '' || name == '' || address == ''
                             }
                            type="submit">Create department</button>
                        </div>

                        {
                            success != '' ?
                            <div className="alert alert-success mt-3">
                                { success }
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