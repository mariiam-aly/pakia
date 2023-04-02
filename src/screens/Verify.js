import "../styles/pakya.css";
import OtpInput from 'react-otp-input';
import { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";

function Verify() {
    const [otpVerify,setOtp]=useState("");
    const [resend,setResend]=useState(false);
    const [minutesInit,setMinutesInit]=useState(1);
    const [secondsInit,setSecondsInit]=useState(59);
    const [timerRender,setTimerRender]=useState(false);
    const[banner,setBanner]=useState(false)

    const [err,seterr]=useState({msg:'',value:false});
    const history=useNavigate()

    const handleChange = (otpVerify) =>{ 
     
      seterr({
        msg:'',
        value:false
      })
/*
     if(otpVerify.length==6){
      document.querySelector(`[aria-label="Please enter verification code. Character 1"]`).classList.add("borderGreen");
 for(let i = 2; i < otpVerify.length+1; i++){
  document.querySelector(`[aria-label="Character ${i}"]`).classList.add("borderGreen");

      }
        }  */

      setOtp( otpVerify );
     }

     

     useEffect(() => {
      setTimer()
      
       },[]);



       function setTimer(){

        let minutes= 1;
        let seconds= 59;

        var refreshIntervalId =  setInterval(()=>{
         

          if(seconds>0){
            seconds=seconds-1
            setSecondsInit(seconds)      
        
       }
          else{
            if(minutes==0&& seconds==0){
             setResend(true)
clearInterval(refreshIntervalId) 
            }
            else{
            minutes=minutes-1
            setMinutesInit(minutes)
          seconds=59
          setSecondsInit(seconds)
          }}
         
      
          
     
        },1000)
       }

       function handleVerify(){
         if(otpVerify==""){
          setBanner(true)
          seterr({
            msg:'Please enter code',
            value:true
          })
         }
      else if(otpVerify!=="112765"){
        setBanner(true)

          seterr({
            msg:'Code is invalid',
            value:true
          })
         }
         else{

 history("/files")
         }
       }
return(
<div className="signIn">
<div className="signInForm">

<div className="formTop">
<div className="logo">
 <p>P</p> 
</div>
<div className={err.value && banner?"errBanner errBannerAppear":"errBanner"}>
<span><ImCross  onClick={()=>setBanner(false)} size={13}/></span>
<div>
<p > {err.msg} </p>

</div>
</div>
</div>
<p className="logIn-title">PHONE NUMBER VERIFY</p>
<p className="logIn-txt">WE'VS SENT THE CODE TO <span>+2{localStorage.getItem("phone")}</span></p>
<div className="otpDiv" id="otpDiv">
<OtpInput
  hasErrored={err.value}
     value={otpVerify}
     errorStyle={{
       borderColor:"#E11900"}
     }
     onChange={(otpVerify)=>handleChange(otpVerify)}
        numInputs={6} 
       
      /></div>
  {resend? <button onClick={()=>{setSecondsInit(59);setMinutesInit(1);  setResend(false); setTimer();}} className="resend">RESEND CODE</button>:   <p className="logIn-txt"  >Resend your code in <span style={{fontWeight:"600"}}> {`${(minutesInit < 10 ? `0${minutesInit}` : minutesInit)}` + ":"  + `${(secondsInit < 10 ? `0${secondsInit}` : secondsInit)}`}</span></p>}


<div style={{marginTop:"6em"}} className="signIn-action">
<p></p>

<button className="btnLink" onClick={handleVerify}>CONFIRM</button>
</div>
</div>
</div>
);

}

export default Verify