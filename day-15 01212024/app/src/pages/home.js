import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

export default function Home(){

    const [connected,setConnected] = useState(true);
    const [departments,setDepartments] = useState([]);


    function getDataFromServer(){
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


    useEffect(()=>{
        const token = localStorage.getItem('token');
        if (token == null) {
            // redirection !!!
            setConnected(false);
        }

        // INIT
        getDataFromServer();

    },[])


    function deleteDep(uniqueID){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem('token'));

        var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://localhost:8080/api/department?id="+uniqueID, requestOptions)
        .then(response => response.json())
        .then(result =>{
            getDataFromServer();
        })
        .catch(error => console.log('error', error));
    }




    return(
        <div>
            {
                connected == false ? <Navigate to={ '/auth' } replace={ true } /> : null
            }
            

            {
                /** NAVBAR */


            }
            

            {
                /* SHOW ALL DEPS IN FORM OF TABLE */
            }

            <div className="mt-5 container">
                <div className="card">
                    <div className="card-header">
                        <h3>List of departments</h3>
                        <Link className="btn btn-outline-primary" to={ '/add-department' }>Add new department</Link>
                    </div>
                    <div className="card-body">
                    <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            departments.map((d)=>{
                                return(
                                    <tr key={ d._id }>
                                        <td>{d.name}</td>
                                        <td>{d.address}</td>
                                        <td>
                                        <button className="btn btn-sm btn-secondary mx-3">Edit</button>
                                        <button className="btn btn-sm btn-danger" onClick={ ()=>{
                                            deleteDep(d.unique_id)
                                        } }>Delete</button>
                                            
                                        </td>
                                        
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                    </div>
                </div>
            </div>


        </div>
    );
}