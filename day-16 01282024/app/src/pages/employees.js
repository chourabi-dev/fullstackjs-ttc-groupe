import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Employees(){

    const [connected,setConnected] = useState(true);
    const [employees,setEmployees] = useState([]);

    function getDataFromServer(){
       var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", localStorage.getItem('token'));

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://localhost:8080/api/employees", requestOptions)
        .then(response => response.json())
        .then(result =>{
            setEmployees(result);
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


   




    return(
        <div>
            {
                connected == false ? <Navigate to={ '/auth' } replace={ true } /> : null
            }
            

            {
                /** NAVBAR */

                <Navbar />

            }
            

            {
                /* SHOW ALL DEPS IN FORM OF TABLE */
            }

            <div className="mt-5 container">
                <div className="card">
                    <div className="card-header">
                        <h3>List of employees</h3>
                        <Link className="btn btn-outline-primary" to={ '/employees/add' }>Add new employee</Link>
                    </div>
                    <div className="card-body">
                    <table className="table">
                    <thead>
                        <tr>
                            <th>Fullname</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Department</th>
                             
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((e)=>{
                                return(
                                    <tr>
                                        <td>{e.fullname}</td>
                                        <td>{e.email}</td>
                                        <td>{e.phone}</td>
                                        <td>
                                            <p>
                                                <strong>{ e.department.name }</strong><br />
                                                <small className="text-muted">{ e.department.address }</small>
                                            </p>
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