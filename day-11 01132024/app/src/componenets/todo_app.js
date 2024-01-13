import { useState } from "react";

export default function TodoApp(){

    const [ value,setValue ] = useState('');
    const [ todos,setTodos ] = useState([]);
    

    return(
        <div>
            <div className="card">
                <div className="card-body">

                    <ul>
                        {
                            todos.map((t)=>{
                                return( <li key={ t.id }>
                                    <h3>{ t.text }</h3>
                                </li> )
                            })
                        }
                    </ul>

                </div>
               
                <div className="card-footer d-flex">
                    <input type="text" className="form-control"
                    value={value}
                    onChange={ (e)=>{ setValue(e.target.value) } }
                    
                    /> 
                    <button className="btn btn-primary" onClick={ ()=>{
                        // ....
                        if( value != '' ){
                            // we must insert it in an array !!
                            const element = { id:todos.length, text:value, createdAt: new Date() }
                           
                            // new arr  old values , new value
                            setTodos(   [...todos,element] );

                            setValue('');

                        }
                    } }>Add</button>
                </div>

            </div>
        </div>
    );
}