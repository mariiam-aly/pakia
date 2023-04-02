
import "../styles/pakya.css";
import { Link } from "react-router-dom";
import { useRef,useState ,useEffect} from "react";
import { ImCross } from "react-icons/im";
import map from "../images/map.svg"
import div1 from "../images/div1.svg"
import StarRatings from 'react-star-ratings';
import Result from "../components/Result";
import Pin from "../components/Pin";
import { ImFlag}from "react-icons/im";
import {BiChevronDown} from "react-icons/bi";
import { HiArrowNarrowRight } from "react-icons/hi";
import Navbar from "../components/Navbar";
import DatePicker from "react-datepicker";
import { TimePicker } from 'react-ios-time-picker';

function Slots() {
    localStorage.setItem("prev","home")
const [destination,setDestination]=useState(localStorage.getItem("destination")?localStorage.getItem("destination"):"RAMSES SQUARE")
const [startDate, setStartDate] = useState();
const [startDate2, setStartDate2] = useState();
const dataArr=[
        {
            name:'RAMSES SQUARE',
            rate:5,
            rateNum:22,
            time:8,
            distance:7,
            price:38,
            total:24
        },
        {
            name:'MOHAMED MAZHER',
            rate:3,
            rateNum:7,
            time:30,
            distance:10,
            price:20,
            total:60
        },
        {
            name:'SALAH SALEM',
            rate:4.5,
            rateNum:20,
            time:5,
            distance:6,
            price:10,
            total:75
        },
        {
            name:'QASR EL-NIL',
            rate:2.7,
            rateNum:10,
            time:45,
            distance:2,
            price:50,
            total:100
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);


    },[])


    const [value, setValue] = useState('05:00');

    const onChange = (timeValue) => {
       setValue(timeValue);

  }

  const [value2, setValue2] = useState('10:00');

  const onChange2 = (timeValue) => {
    setValue2(timeValue);

}
return(<div>
    <Navbar/>
    <div style={{height:"102px"}}>

    </div>
<div className="slots">
    <div className="slotsNav">
    <div className="selectLoc">
       
       <div className="customSelect">
       <ImFlag className="flag" size={25}/>
       <p className="stepNo">STEP 1</p>

   <select  defaultValue={destination} onChange={(e)=>setDestination(e.target.value)}>
       <option disabled>SELECT YOUR DESTINATION</option>
       <option value="RAMSES SQUARE"> RAMSES SQUARE</option>
        <option value="GIZA SQUARE">GIZA SQUARE</option>
        <option value="DOWNTOWN">DOWNTOWN</option>

        <option value="AUC">AUC</option>

   </select>
   <BiChevronDown className="dwn" size={30}/>

   </div>
   </div>
   <span className="navMargin"></span>
{/*
   <div className="timeDiv">
        <div>
            <p>FROM</p>
        <input type="time"/>
        </div>
        <span className="navMargin"></span>

        <div>
        <p>TO</p>
        <input type="time"/></div>

    </div>*/}
 
<div className="datePickerDiv" style={{marginBottom:"0"}}>
    <div className="containTime">
    <div  className="timeDiv1">
       <p>FROM</p>
       <TimePicker onChange={onChange} value={value}/>
       </div>
     
    <DatePicker selected={startDate}
      dateFormat="dd/MM/yyyy"
className="scndInput"
placeholderText={'TODAY'} 
      minDate={new Date()}
      timeFormat="HH:mm"
     onChange={(date) => setStartDate(date)} />

     </div>
<span></span> 
<div className="containTime">
<div className="timeDiv1">
       <p>TO</p>
       <TimePicker onChange={onChange2} value={value2}/>
       </div>
       <DatePicker selected={startDate2}
      dateFormat="dd/MM/yyyy"
className="scndInput"
placeholderText={'TODAY'} 
      minDate={new Date()}
      timeFormat="HH:mm"
     onChange={(date) => setStartDate2(date)} />
</div>
    </div>
    <span className="navMargin"></span>
    <button className="slotsBtn">SHOW AVAILABLE SLOTS </button>

</div>
<div className="container-fluid mapBg" style={{backgroundImage: `url(${map})` }}>
<div className="row gy-4">
<div className="col-md-5 order-md-first order-last" style={{background:"white"}}>
<div className="options">
<p className="resNumber">RESULTS: 4</p>

<div className="resultsDiv noPadding">
<div className="container-fluid ">
<div className="row">

{dataArr.map((data,index)=>

<div className="col-md-12 col-sm-6 ">
<Result data={data} destination={destination}/>
</div>
  
        )}

</div>
</div>




</div>

</div>


 
</div>

<div style={{position:"relative"}} className="mapDiv col-md-7">
    <Pin bottom="50%" data={dataArr[0]} left="10%"/>
    <Pin bottom="35%" data={dataArr[1]} left="70%"/>
    <Pin bottom="5%" data={dataArr[2]} left="20%"/>


</div>
</div>
</div>
</div></div>
);

}

export default Slots