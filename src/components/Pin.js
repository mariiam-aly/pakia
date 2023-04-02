
import "../styles/pakya.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GiWalk } from "react-icons/gi";

import { AiFillStar } from "react-icons/ai";
import { AiFillCar } from "react-icons/ai";
function Pin(props) {
    const history=useNavigate()


return(
<div onClick={()=>{
  localStorage.setItem('locData',JSON.stringify(props.data)); history("/reserve")
}} className="pin" style={{bottom:`${props.bottom}`,left:`${props.left}`}}>
<p className="divTitle"><span className="logoP"><span>P</span></span></p>
<p className="pinRate">{props.data.rate} <AiFillStar className="star" size={20}/></p>
<p className="pinPrice">{props.data.distance} MINS <GiWalk/></p>
</div>



);

}

export default Pin