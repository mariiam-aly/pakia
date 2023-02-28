
import "../styles/pakya.css";
import { Link } from "react-router-dom";
function SignIn() {




return(
<div className="signIn">
<div className="signInForm">
<div className="logo">
 <p>P</p> 
</div>
<p className="logIn-title">SIGN IN</p>
<p className="logIn-txt">USE YOUR CREDINTIALS TO JOIN!</p>

<input className="inp1" placeholder="PHONE NUMBER"/>
<input type="password" placeholder="PASSWORD "/>

<div className="signIn-action">
<p>IF YOU ARE A NEW USER <Link to="/sign-up"><span>SIGNUP</span></Link></p>
<button className="btnLink">LOGIN</button>
</div>
</div>
</div>
);

}

export default SignIn