 
import "../styles/pakya.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../images/logo.svg"
import { useLocation } from "react-router-dom";
import {FaRegUserCircle} from "react-icons/fa";
import {BiChevronDown} from "react-icons/bi";
import { HashLink } from 'react-router-hash-link';
import {GrMenu} from "react-icons/gr";
function Navbar() {
    const[black,setBlack]=useState(false)
    const[menu,setMenu]=useState(false)

const location=useLocation()
const token=localStorage.getItem("token")
    window.addEventListener("scroll", (event) => {
        if (window.scrollY>1) {
             setBlack(true)
           } 
           else{
         
             setBlack(false)
           }  
     });
    
     const scrollWithOffset = (el,offSet) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset =offSet; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    
return(  

<>
<div className={location.pathname=="/slots" || location.pathname=="/reserve"?null:"hideNav"}>
<div className={black || location.pathname=="/slots"|| location.pathname=="/reserve"?"navBar blckBg":"navBar"}>

{token=="true"?
<div className="loginNav">
    <Link to="/" style={{margin:"0"}}>
<div className="navLogo" style={{backgroundImage: `url(${logo})` }}>

</div>
</Link>
{location.pathname=="/slots"|| location.pathname=="/reserve"?null:
<div>
    <HashLink   to="/#book" style={{marginLeft:"0"}}>BOOK NOW</HashLink>
    <HashLink to="/#faq" scroll={el => scrollWithOffset(el,-40)}>FAQ</HashLink>
    <HashLink   scroll={el => scrollWithOffset(el,-190)}
 to="/#feat">FEATURES</HashLink>
    <HashLink to="/#download">DOWNLOAD APP</HashLink>


</div>}
</div>:
<>
<Link to="/" className="logoa">
<div className="navLogo" style={{backgroundImage: `url(${logo})` }}>

</div></Link>

{location.pathname=="/slots" || location.pathname=="/reserve"?null:
<div>
    <HashLink to="/#book"  style={{marginLeft:"0"}}>BOOK NOW</HashLink>
    <HashLink    scroll={el => scrollWithOffset(el,-40)}
 to="/#faq">FAQ</HashLink>
    <HashLink to="/#feat" scroll={el => scrollWithOffset(el,-190)}>FEATURES</HashLink>
    <HashLink to="/#download">DOWNLOAD APP</HashLink>

</div>}
</>
}
{token=="true"?
<Link to="/sign-in">
<div className="usrProfile">
    <FaRegUserCircle size={30} />
    <p>HELLO, MAGED <BiChevronDown/></p>
    </div></Link>


:
<div className={location.pathname=="/slots" || location.pathname=="/reserve"?"slotsBtn":null}>
<Link className="logoa" to="/sign-in">  <button className="loginBtn">LOGIN</button></Link>
<Link className="logoa" to="/sign-up">  <button className="sinupBtn">SIGNUP</button></Link>

</div>}
        </div></div>
        <div>
        <div style={location.pathname=="/slots"|| location.pathname=="/reserve"?{display:"none"}:null} className="sideBar">

        <div className={black?"navBar blckLogo":"navBar"}>
            <div className="menuIcon">
       < GrMenu size={30} onClick={()=>setMenu(!menu)}/>
        <Link to="/">
<div className="navLogo" style={{backgroundImage: `url(${logo})` }}>

</div>
</Link></div></div>
</div>
<div className={menu?"menuOpen":"menuOpen closed"}>
<div>
    <HashLink to="/#book"  style={{marginLeft:"0"}}>BOOK NOW</HashLink>
    <HashLink    scroll={el => scrollWithOffset(el,-40)}
 to="/#faq">FAQ</HashLink>
    <HashLink to="/#feat" scroll={el => scrollWithOffset(el,-190)}>FEATURES</HashLink>
    <HashLink to="/#download">DOWNLOAD APP</HashLink>

</div>


{token=="true"?
<Link to="/sign-in">
<div className="usrProfile">
    <FaRegUserCircle size={30} />
    <p>HELLO, MAGED <BiChevronDown/></p>
    </div></Link>


:
<div >
<Link className="logoa" to="/sign-in">  <button className="loginBtn">LOGIN</button></Link>
<Link className="logoa" to="/sign-up">  <button className="sinupBtn">SIGNUP</button></Link>

</div>}
</div>
</div> 
        
        </>
);

}

export default Navbar