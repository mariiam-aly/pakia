
import "../styles/pakya.css";
import { Link } from "react-router-dom";
import { useRef,useState } from "react";
import { ImCross } from "react-icons/im";
function SignIn() {
const[err,setErr]=useState(false)
const[errPass,setErrPass]=useState(false)

const[errMsgPhone,setErrMsgPhone]=useState()
const[errMsgPass,setErrMsgPass]=useState()
const[banner,setBanner]=useState(false)

    const phoneRef=useRef()
const passRef=useRef()

function handleSubmit(){
    if(phoneRef.current.value==""){
        setBanner(true)
        setErr(true)
        setErrMsgPhone("Please enter phone number")
      
    }
  else  if(parseInt(phoneRef.current.value)!==parseInt("01270224224") && parseInt(phoneRef.current.value)!==parseInt("01223512310")){
   
    setBanner(true)
    setErr(true)
    setErrMsgPhone("Phone number is incorrect")

    }
    else{
        setErr(false)
        setErrMsgPhone("")
    }
    if(passRef.current.value==""){
       
        setBanner(true)
        setErrPass(true)
        setErrMsgPass("Please enter password")
    }
  else  if(passRef.current.value!=="12#3Abc"){
    
    setBanner(true)
    setErrPass(true)
    setErrMsgPass("Incorrect password")

    }
else{
    setErrPass(false)
    setErrMsgPass("")
}

}

return(
<div className="signIn">
<div className="signInForm">
<div className="formTop">
<div className="logo">
 <p>P</p> 
</div>
<div className={(err || errPass)&& banner?"errBanner errBannerAppear":"errBanner"}>
<p><span><ImCross onClick={()=>setBanner(false)}  size={13}/></span> {errMsgPhone} {errPass && err?<br/>:null} {errMsgPass}</p>
</div>
</div>


<p className="logIn-title">SIGN IN</p>
<p className="logIn-txt">USE YOUR CREDINTIALS TO JOIN!</p>

<input ref={phoneRef} type="number" className={err?"invalid inp1":"inp1"} placeholder="PHONE NUMBER"/>
<input ref={passRef}  type="password" className={errPass?"invalid":""} placeholder="PASSWORD "/>

<div className="signIn-action">
<p>IF YOU ARE A NEW USER <Link to="/sign-up"><span>SIGNUP</span></Link></p>


<button onClick={handleSubmit} className="btnLink">LOGIN</button>
</div>
</div>
</div>
);

}

export default SignIn