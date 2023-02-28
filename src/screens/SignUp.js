
import "../styles/pakya.css";
import { Link } from "react-router-dom";
function SignUp() {




return(
<div className="signIn">
<div className="signInForm">
<div className="logo">
 <p>P</p> 
</div>
<p className="logIn-title">SIGN UP</p>
<p className="logIn-txt">ENTER YOUR PERSONAL INFORMATION TO PROCEED</p>

<input className="inp1" placeholder="NAME"/>
<input className="inp2" placeholder="PHONE NUMBER"/>
<input type="password" className="inp2" placeholder="PASSWORD "/>

<input type="password" placeholder="CONFIRM PASSWORD "/>

<div className="signIn-action">
<p>IF YOU ARE AN EXISTING USER, <Link to="/"><span> SIGN IN</span></Link></p>
<Link to="/verify" className="btnLink"><button>SIGN UP</button></Link>

</div>
</div>
</div>
);

}

export default SignUp