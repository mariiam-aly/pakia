
import "../styles/pakya.css";
import { Link } from "react-router-dom";
import { useRef,useState,useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiFillCar } from "react-icons/ai";
import { GiWalk } from "react-icons/gi";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import defaultUsr from "../images/defaultUsr.jpeg"
import slots from "../images/slots.jpeg"
import slots2 from "../images/slots2.jpeg"
import ReserveModal from "../components/ReserveModal";
import StarRatings from 'react-star-ratings';
function Reserve() {
    localStorage.setItem("prev","home")
  
const[modal,setModal]=useState(false)
const data=JSON.parse(localStorage.getItem("locData"))
    useEffect(() => {
        window.scrollTo(0, 0);


    },[])
    const [active,setActive]=useState(0)
return(
    <>
        <Navbar/>
    {modal?    <ReserveModal setModal={setModal}/>:null}
    <div className="reserveScreen">
        <div className="reserveTop">
            <div >
<p className="resName">{data.name}</p>
<p className="resData">{data.rate} <AiFillStar className="star" size={20}/> VERY GOOD <AiFillCar size={20} /> 100+ BOOKINGS</p>
</div>

<button onClick={()=>setModal(true)} className="reserve">RESERVE FOR <span>{data.total} EGP</span></button>
</div>
<p className="reservable">RESERVABLE</p>
<div className="resNumbers">

<div >
    <p className="num1">2H</p>
    <p className="num2">TOTAL DURATION</p>
</div>

<div  className="midDiv" >
    <p className="num1">{data.price} EGP</p>
    <p className="num2">PARKING FEE</p>
</div>
<div  >
    <p className="num1"><GiWalk size={20}/>{data.distance} MINS</p>
    <p className="num2">TO DESTINATION</p>
</div>


</div>
<div className="resNav">
<p onClick={()=>setActive(0)} className={active==0?"activeNum":null}>INFORMATION</p>
<p onClick={()=>setActive(1)} className={active==1?"activeNum":null}>REVIEWS</p>
<p onClick={()=>setActive(2)} className={active==2?"activeNum":null}>HOW TO PARK</p>
</div>


{active==0?
<>
<p className="info">Please note: due to a pillar and the shutter system the
entrance to the car park is narrow and so is only suitable
for small vehicles. <br/><br/>
Entry height restriction is 2m, internal height in some
places as low as (1.4m).<br/><br/>
This car park is within the Congestion Charging Zone and
is only suitable for smaller vehicles.<br/><br/>
Tall vehicles may be at risk of scratches due to the low
ceilings
</p>
<div className="infoImg container-fluid">
    <div className="row gy-5">
<div className="col-6">
<div className="parkImg" style={{backgroundImage: `url(${slots})` }}>
</div>
</div>
<div className="col-6">

<div className="parkImg" style={{backgroundImage: `url(${slots2})` }}>
</div>
</div>

</div>  </div>
</>

:null


}

{active==1?
<>

<div className="result reviews">
   <div className="revCircle">
<div className="resImg" style={{backgroundImage: `url(${defaultUsr})` }}>

</div></div> 
<div className="resDetails">
<div className="resTitle">
<p className="resName">PRIVATE PARKING SLOT</p>
<div className="resPrice">
    <p >3/2/2022</p>
   
</div>
</div>
<div className="stars">
<StarRatings
          rating={3.5}
          starRatedColor="#FFCB45"
          starDimension="24px"
          starSpacing="0"
          numberOfStars={5}
          name='rating'
        />
</div>

<p className="fromLoc"> “We recently purchased a car here a few weeks ago. We traded a old car in for a newer car and we were pleasantly surprised what we were offered for our old car.G...”</p>

</div>
</div>


<div className="result reviews">
   <div className="revCircle">
<div className="resImg" style={{backgroundImage: `url(${defaultUsr})` }}>

</div></div> 
<div className="resDetails">
<div className="resTitle">
<p className="resName">PRIVATE PARKING SLOT</p>
<div className="resPrice">
    <p >3/2/2022</p>
   
</div>
</div>
<div className="stars">
<StarRatings
          rating={3.5}
          starRatedColor="#FFCB45"
          starDimension="24px"
          starSpacing="0"
          numberOfStars={5}
          name='rating'
        />
</div>

<p className="fromLoc"> “We recently purchased a car here a few weeks ago. We traded a old car in for a newer car and we were pleasantly surprised what we were offered for our old car.G...”</p>

</div>
</div>



<div className="result reviews">
   <div className="revCircle">
<div className="resImg" style={{backgroundImage: `url(${defaultUsr})` }}>

</div></div> 
<div className="resDetails">
<div className="resTitle">
<p className="resName">PRIVATE PARKING SLOT</p>
<div className="resPrice">
    <p >3/2/2022</p>
   
</div>
</div>
<div className="stars">
<StarRatings
          rating={3.5}
          starRatedColor="#FFCB45"
          starDimension="24px"
          starSpacing="0"
          numberOfStars={5}
          name='rating'
        />
  
</div>

<p className="fromLoc"> “We recently purchased a car here a few weeks ago. We traded a old car in for a newer car and we were pleasantly surprised what we were offered for our old car.G...”</p>

</div>
</div>

</>

:null

}

{active==2?
<>

<div className="steps">
    <div className="step">
    <div className="stepNo">1</div>
    <div className="stepTxt">
        <p className="stepTitle">Once you've paid</p>
        <p className="stepInfo">You'll receive directions to the space and information on how to access it.</p>
    </div>
    </div>

    <div className="step">
    <div className="stepNo">2</div>
    <div className="stepTxt">
     
        <p className="stepInfo">The space owner/car park is notified of your booking.</p>
    </div>
    </div>


    <div className="step">
    <div className="stepNo">3</div>
    <div className="stepTxt">
 
        <p className="stepInfo">Just turn up, park your vehicle and get on with your day!</p>
    </div>
    </div>
</div>


</>:null}
<button onClick={()=>setModal(true)}  className="reserve reservMob">RESERVE FOR <span>{data.total} EGP</span></button>

    </div></>
);

}

export default Reserve