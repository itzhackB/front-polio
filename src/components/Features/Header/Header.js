import React from 'react'
import './Header.css'
import techLogo from '../../../Images/techLogo.jpeg'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";



export default function Header() {
    function myFunction() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }
    return (
        <>
            <div className="ulDiv" >
                <ul className="ulHeader"  >
                    <span>yzikbynesai@gmail.com</span>
                    <span className="headerLogo hlogo"> <Link to={"/Contact-me"}> <a ><i class="fas fa-envelope" style={{ width: "100px", height: "100px", color: "black" }}></i></a></Link></span>
                    <span className="hlogo" ><a href="https://www.facebook.com/tech.career" ><img className="techLogo" style={{ borderRadius: "50%", width: "80px", height: "50px", }} src={techLogo}></img></a></span>
                    <span className="headerLogo popup" onClick={myFunction}><span className="popuptext" id="myPopup">0523651047</span><a href="#"><i class="fas fa-phone" style={{ width: "100px", height: "100px", color: "black" }}></i></a></span>
                   
                </ul>
            </div>

        </>
    )
}
