import { useParams } from 'react-router-dom';


export default function UserPage(){

    const params = useParams(); // read url => excrat all variable !!


    console.log(params);

    return(
        <div>
            Loading user N° { params.id }
        </div>
    );
}