
import "../styles/pakya.css";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { useState,useRef } from "react";
import {RiUpload2Fill} from "react-icons/ri";
import {BsCheckCircleFill} from "react-icons/bs";
import ImgModal from "../components/ImgModal";
function Files() {

    const[idFront,setIdFront]=useState({msg:'',value:false,files:'' })
    const[idBack,setIdBack]=useState({msg:'',value:false,files:'' })
    const[driverFront,setDriverFront]=useState({msg:'',value:false,files:'' })
    const[driverBack,setDriverBack]=useState({msg:'',value:false,files:'' })
    const[modal,setModal]=useState(false)
    const[err,setErr]=useState(false)

    const[img,setImg]=useState()

const idFrontRef=useRef()
const idBackRef=useRef()
const driverFrontRef=useRef()
const driverBackRef=useRef()


function handleSubmit(){
    if(idFrontRef.current.value==""){
        setIdFront({...idFront,
            msg:"Please upload national id from side",
        value:true,
     
      })
      setErr(true)
    }
    else{
        setIdFront({
            ...idFront,
        msg:"",
        value:false 
      })
    }
   
    if(idBackRef.current.value==""){
        setErr(true)

        setIdBack({
            ...idBack,
            msg:"Please upload national id back side",
        value:true 
      })
      
    }
    else{
        setIdBack({
            ...idBack,

        msg:"",
        value:false 
      }) }

      if(driverFrontRef.current.value==""){
        setErr(true)

        setDriverFront({
            ...driverFront,

            msg:"Please upload driver license front side",
            value:true 
        })
      
      
    }
    else{
        setDriverFront({
            ...driverFront,

        msg:"",
        value:false 
      })
}

if(driverBackRef.current.value==""){
    setErr(true)

    
    setDriverBack({
        ...driverBack,

    msg:"Please upload driver license back side",
    value:true 
  })
 

}

else{
    setDriverBack({
        ...driverBack,

    msg:"",
    value:false 
  })
}

}


return(
<div className="signIn">
    {modal?<ImgModal setModal={setModal} img={img}/> :null}
<input type="file" onChange={(e)=>{setIdFront({...idFront,files:e.target.files[0]})}} ref={idFrontRef} className="inp1" placeholder="NAME"/>
<input  type="file"onChange={(e)=>{setIdBack({...idBack,files:e.target.files[0]})}} ref={idBackRef}  className="inp2" placeholder="PHONE NUMBER"/>
<input  type="file" onChange={(e)=>{setDriverFront({...driverFront,files:e.target.files[0]})}} ref={driverFrontRef}  className="inp2" placeholder="PASSWORD "/>

<input type="file" onChange={(e)=>{setDriverBack({...driverBack,files:e.target.files[0]})}}  ref={driverBackRef}   placeholder="CONFIRM PASSWORD "/>

<div className="signInForm">
<div className="formTop">
<div className="logo">
 <p>P</p> 
</div>
<div className={(idFront.value || idBack.value || driverFront.value || driverBack.value)&&err?"errBanner errBannerAppear":"errBanner"}>
<span onClick={()=>setErr(false)}><ImCross size={13}/></span>
<div>
<p > {idFront.msg} </p>

<p > {idBack.msg}</p>
<p >{driverFront.msg} </p>
<p >{driverBack.msg} </p>


</div>
</div>
</div>
<p className="logIn-title" >USER VERIFICATION</p>
<p className="logIn-txt">UPLOAD YOUR DOCUMENTS TO PROCEED</p>
<div className={idFront.files!==''?"fileInp file1 done ":idFront.value?"fileInp file1 invalid":"fileInp file1"}>
    <p>national id front side <span><BsCheckCircleFill size={17}/></span></p>
    <RiUpload2Fill  onClick={()=>  idFrontRef.current.click() } size={30} className="upload"/>
    <p className="prev" onClick={()=>{setModal(true); setImg(idFront.files)}}>PREVIEW</p>
</div>
<div className={idBack.files!==''?"fileInp done ":idBack.value?"invalid fileInp ":"fileInp"}>
    <p>national id back side <span><BsCheckCircleFill size={17}/></span></p>
    <RiUpload2Fill onClick={()=>  idBackRef.current.click() }  size={30} className="upload"/>
    <p className="prev" onClick={()=>{setModal(true); setImg(idBack.files)}}>PREVIEW</p>

</div>
<div className={driverFront.files!==''?"fileInp done ":driverFront.value?"invalid fileInp ":"fileInp"}>
    <p>driver license FRONT SIDE <span><BsCheckCircleFill size={17}/></span></p>
    <RiUpload2Fill onClick={()=>  driverFrontRef.current.click() }  size={30} className="upload"/>
    <p className="prev" onClick={()=>{setModal(true); setImg(driverFront.files)}}>PREVIEW</p>

</div>
<div className={driverBack.files!==''?"fileInp done ":driverBack.value?"invalid fileInp ":"fileInp"}>
    <p>driver license BACK SIDE <span><BsCheckCircleFill size={17}/></span></p>
    <RiUpload2Fill onClick={()=>  driverBackRef.current.click() }  size={30} className="upload"/>
    <p className="prev" onClick={()=>{setModal(true); setImg(driverBack.files)}}>PREVIEW</p>

</div>





<div className="signIn-action">
<p></p>
<button onClick={handleSubmit}>Confirm</button>

</div>
</div>
</div>
);

}

export default Files