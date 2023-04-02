
import "../styles/pakya.css";
import { Link } from "react-router-dom";
import { useRef,useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
function SignUp() {
    const history=useNavigate()
 localStorage.setItem("prev","signUp")
    const[errName,setErrName]=useState({msg:'',value:false })
    const[errPhone,setErrPhone]=useState({msg:'',value:false })
    const[errPass,setErrPass]=useState({msg:'',value:false})
    const[errConfirm,setErrConfirm]=useState({msg:'',value:false  })
    const[banner,setBanner]=useState(false)

 
const nameRef=useRef()
const phoneRef=useRef()
const passRef=useRef()
const confirmRef=useRef()

let phoneRegEx =/^(01)[0-9]{9}$/;


function handleSubmit(e){
  let donePhone=false
  let doneName=false
  let donePass=false
  let doneConfirm=false

  e.preventDefault()
    if(nameRef.current.value==""){
      donePhone=false
      setBanner(true)
      setErrName({
        done:false,
        msg:"Please enter your name",
        value:true 
      })

    }
    else{
      donePhone=true

      setErrName({
        done:true,

        msg:"",
        value:false 
      })
    }
   
    if(phoneRef.current.value==""){
      doneName=false
      setBanner(true)

      setErrPhone({
        done:false,

        msg:"Please enter phone number",
        value:true 
      })
      
    }
  else  if(!phoneRef.current.value.match(phoneRegEx)){
    doneName=false

    setBanner(true)

    setErrPhone({
      done:false,

      msg:"Please enter a valid number",
      value:true 
    })


    }
    else{
      doneName=true

      setErrPhone({
        done:true,

        msg:"",
        value:false 
      }) }

      if(passRef.current.value==""){
        donePass=false
        setBanner(true)

        setErrPass({
          done:false,

          msg:"Please enter password",
          value:true 
        })
      
      
    }
  else  if(passRef.current.value.length<6){
    donePass=false
    setBanner(true)

    setErrPass({
      done:false,

      msg:"Passwords don't match",
      value:true 
    })
  

    }
    else{
      donePass=true
      setErrPass({
        done:true,

        msg:"",
        value:false 
      })
}

if(confirmRef.current.value==""){
  doneConfirm=false
  setBanner(true)

  setErrConfirm({
    done:false,

    msg:"Please confirm password",
    value:true 
  })
 

}
else  if(confirmRef.current.value!==passRef.current.value){
  setBanner(true)
  doneConfirm=false
  setErrConfirm({
    done:false,

    msg:"Passwords must match",
    value:true 
  })

 

}
else{
  doneConfirm=true
  setErrConfirm({
    done:true,

    msg:"",
    value:false 
  })
}

if(donePhone==true && doneName==true && donePass==true && doneConfirm==true){
  localStorage.setItem("phone",phoneRef.current.value)
  history("/verify")
}

}

return(
<div className="signIn">
<div className="signInForm">
<div className="formTop">
<div className="logo">
 <p>P</p> 
</div>
<div className={(errName.value || errPhone.value || errPass.value || errConfirm.value) && banner?"errBanner errBannerAppear":"errBanner"}>
<span><ImCross onClick={()=>setBanner(false)} size={13}/></span>
<div>
<p > {errName.msg} </p>

<p > {errPhone.msg}</p>
<p >{errPass.msg} </p>
<p >{errConfirm.msg} </p>


</div>
</div>
</div>
<p className="logIn-title">SIGN UP</p>
<p className="logIn-txt">ENTER YOUR PERSONAL INFORMATION TO PROCEED</p>
<form onSubmit={(e)=>handleSubmit(e)}>
<input   className={errName.value?"invalid inp1":"inp1"} ref={nameRef} placeholder="NAME"/>
<input  type="number" className={errPhone.value?"invalid inp2":"inp2"} ref={phoneRef} placeholder="PHONE NUMBER"/>
<input  type="password" ref={passRef} className={errPass.value?"invalid inp2":"inp2"} placeholder="PASSWORD "/>

<input  className={errConfirm.value?"invalid":null} type="password" ref={confirmRef}  placeholder="CONFIRM PASSWORD "/>
<div className="signIn-action">
<p>IF YOU ARE AN EXISTING USER, <Link to="/sign-in"><span> SIGN IN</span></Link></p>
<button type="submit">SIGN UP</button>

</div>
</form>
</div>
</div>
);

}

export default SignUp