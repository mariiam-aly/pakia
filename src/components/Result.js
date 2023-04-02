
import "../styles/pakya.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import div1 from "../images/div1.svg"
import StarRatings from 'react-star-ratings';
function Result(props) {
  const history=useNavigate()

return(

<div className="result">
<div className="resImg" style={{backgroundImage: `url(${div1})` }}>

</div>
<div className="resDetails">
<div className="resTitle">
<p className="resName">{props.data.name}</p>
<div className="resPrice">
    <p ><span>{props.data.price}</span>EGP</p>
    <p>PER HOUR</p>
</div>
</div>
<div className="stars">
<StarRatings
          rating={props.data.rate}
          starRatedColor="#FFCB45"
          starDimension="24px"
          starSpacing="0"
          numberOfStars={5}
          name='rating'
        />
        <p className="revNum">({props.data.rateNum})</p>
</div>

<p className="fromLoc"><span>{props.data.time} </span> MINS FROM {props.destination}</p>

<button className="reserve" onClick={()=>{
  localStorage.setItem('locData',JSON.stringify(props.data)); history("/reserve")
}}>RESERVE FOR <span> {props.data.total} EGP</span></button>
</div>
</div>






);

}

export default Result