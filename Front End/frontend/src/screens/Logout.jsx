import { Link } from "react-router-dom";
import bg from "../productImages/logout.jpg";

export default function Logout(){
    return (
        <div  style={{
            backgroundImage: `url(${bg})`, 
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100vw",
        }}>
            <h1>Logout Success!!!</h1>    
            <br />
            <Link to='/login' className="btn btn-light me-4">Login Again?</Link>
            <Link to='/home' className="btn btn-primary">Keep Browsing</Link>
            
        </div>
    )
}