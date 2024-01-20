import Navbar from "../componenets/navbar";
import { Link } from 'react-router-dom';

export default function NotFoundPage(){
    return(
        <div>
            <Navbar />
            <h1 className="text-center mt-5">404 not found</h1>
            <p className="text-muted text-center">
                back to hoe page, <Link to="/home">home page</Link>
            </p>
        </div>
    );
}