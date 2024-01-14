import { useEffect, useState } from "react";
import Navbar from "../componenets/navbar";
import UserCard from "../componenets/user_card";

export default function UsersListPage(){

    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false);


    function initDATA(){

        setLoading(true);



        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result) 

                setUsers(result);
                setLoading(false);

            })
            .catch(error => {
                console.log('error', error)
                setLoading(false);

            });
    }

    // react useEffect


    useEffect(()=>{
        
        initDATA();

    },  [] )





    return(
        <div>
             <Navbar />
             <div className="container mt-5">

                
                {
                    loading == true ? 
                    <div className="row">
                    <div className="col-12 text-center">
                        <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
                :

                <div className="row">
                    {
                        users.map((u)=>{
                            return <UserCard fullname={ u.name } email={ u.email }  />
                        })
                    }
                </div>
                
                }

 
                

            </div>
            
        </div>
        
    );
}