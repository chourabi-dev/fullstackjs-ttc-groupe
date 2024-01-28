import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

export default function AddEmployee(){

    const [connected,setConnected] = useState(true);
    
    const [fullname,setFullname] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [department,setDepartment] = useState(null);
    
    
    
    
 
    const [success,setSuccess] = useState('');
    
    
    const [departments,setDepartments] = useState([]);


    function getDepartments(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", localStorage.getItem('token'));

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://localhost:8080/api/department", requestOptions)
        .then(response => response.json())
        .then(result =>{
            setDepartments(result);
        })
        .catch(error => console.log('error', error));
    }
 

    function sendDataToServer(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem('token'));
        myHeaders.append("Content-Type", "application/json");
        



        let dep = null;

        departments.map((d)=>{
            if( d._id == department ){
                dep = d;
            }
        })

        var raw = JSON.stringify({
            fullname,
            email,
            phone,
            department:dep
        });
         

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://localhost:8080/api/employees", requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.success == true){
                setSuccess(result.message);
 
            }
          })
          .catch(error => console.log('error', error));
    }
    



    useEffect(()=>{
        getDepartments();
    },[])



    return(
        <div>
            {
                connected == false ? <Navigate to={ '/auth' } replace={ true } /> : null
            }
         

            

            <div className="mt-5 container">
                <div className="card">
                    <div className="card-header">
                        <h3>Add new employee</h3>
                        <Link className="btn btn-outline-primary" to={ '/employees'}>Back to list</Link>
                    </div>
                    <div className="card-body">

                        <form onSubmit={ (e)=>{
                            e.preventDefault();
                            sendDataToServer();
                        } }>


                        <div className="mb-3">
                            <label htmlFor="">Fullname</label>
                            <input type="text" className="form-control" onChange={(e)=>{ setFullname(e.target.value) }} value={fullname} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Phone</label>
                            <input type="text" className="form-control" onChange={(e)=>{ setPhone(e.target.value) }} value={phone} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Email</label>
                            <input type="text" className="form-control" onChange={(e)=>{ setEmail(e.target.value) }} value={email} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Department</label>
                            <select type="text" className="form-control" onChange={(e)=>{ setDepartment(e.target.value) }} >
                                <option value={ '' }>Please choose a department</option>
                                {
                                    departments.map((d)=>{
                                        return(<option key={ d._id } value={ d._id } >{ d.name }</option>)
                                    })
                                }

                            </select>
                        </div>
                        
                        




 
 
                        

                  
                        <div>
                            <button
                            className="btn btn-success"
                            disabled = {
                                false
                             }
                            type="submit">Create employee</button>
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