
import "../styles/pakya.css";
import { Link } from "react-router-dom";
import { useRef,useState ,useEffect} from "react";
import logo from "../images/logo.svg"
import div1 from "../images/div1.svg"
import div2 from "../images/div2.png"
import tri1 from "../images/tri1.svg"
import tri2 from "../images/tri2.svg"
import mobile from "../images/mobile.svg"
import mobile2 from "../images/mobile2.svg"
import DatePicker from "react-datepicker";
import {BiChevronDown} from "react-icons/bi";
import f1 from "../images/f1.svg"
import f2 from "../images/f2.svg"
import f3 from "../images/f3.svg"
import { HiArrowNarrowRight } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { ImFlag}from "react-icons/im";
import Navbar from "../components/Navbar";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import "react-datepicker/dist/react-datepicker.css";
import { HashLink } from 'react-router-hash-link';
import { TimePicker } from 'react-ios-time-picker';

import { useNavigate } from "react-router-dom";
function Home() {
    const token=localStorage.getItem("token")
    localStorage.setItem("prev","home")
const history=useNavigate()
    const [startDate, setStartDate] = useState();
    const [startDate2, setStartDate2] = useState();

    const dataArr=[
       
        {
            name:'MOHAMED MAZHER',
            rate:3,
            time:30,
            distance:10,
            price:20,
            total:60
        },
        {
            name:'SALAH SALEM',
            rate:4.5,
            time:5,
            distance:6,
            price:10,
            total:75
        },
        {
            name:'QASR EL-NIL',
            rate:2.7,
            time:45,
            distance:2,
            price:50,
            total:100
        },{
            name:'RAMSES SQUARE',
            rate:5,
            time:8,
            distance:7,
            price:38,
            total:24
        }
    ];
    const[black,setBlack]=useState(false)

const[active,setActive]=useState(0)
const[open,setOpen]=useState({
    q1:false,
    q2:false,
    q3:false
})

const selectRef=useRef()
const toRef=useRef()
const fromRef=useRef()


useEffect(() => {
    window.scrollTo(0, 0);


},[])

    window.addEventListener("scroll", (event) => {
       if (window.scrollY>1) {
            setBlack(true)
          } 
          else{
        
            setBlack(false)
          }  
    });


    const scrollWithOffset = (el,offSet) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset =offSet; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    const [value, setValue] = useState('05:00');

    const onChange = (timeValue) => {
       setValue(timeValue);

  }

  const [value2, setValue2] = useState('10:00');

  const onChange2 = (timeValue) => {
    setValue2(timeValue);

}

return(
    <div >
      <Navbar/>

<div className="div1" id="book"  style={{backgroundImage: `url(${div1})` }}>
<div className="container-fluid">

<div className="row ">
<div className="col-md-6 noPadding titleDiv1">
    <div>
<p className="p1">FIND AND RESERVE YOUR <span>SLOT</span> <span className="p2">IN SECONDS.</span></p>

<p className="p3">CHOOSE FROM <span>20,000</span> <span style={{color:"#009925"}}>AVAILABLE</span> PARKING SLOT ALL OVER <span>EGYPT</span> AND SOON <span>ALL OVER WORLD.</span></p>
</div></div>
<div className="col-md-6 noPadding ">
<div className="destination">
<div className="destNav">
    <p onClick={()=>setActive(0)} className={active==0?"active":null} style={{ borderRadius:  "0 11.6484px"}}>HOURLY</p>
    <p  onClick={()=>setActive(1)} className={active==1?"active":null}  style={{ borderRadius:  "11.6484px 0"}}>MONTHLY</p>
</div>
<div className="distDet">
    
    <div className="selectLoc">
       
        <div className="customSelect">
        <ImFlag className="flag" size={25}/>
        <p className="stepNo">STEP 1</p>
 
    <select ref={selectRef}  onChange={(e)=>localStorage.setItem("destination",e.target.value)} >
        <option disabled>SELECT YOUR DESTINATION</option>
       
        <option value="RAMSES SQUARE"> RAMSES SQUARE</option>
        <option value="GIZA SQUARE">GIZA SQUARE</option>
        <option value="DOWNTOWN">DOWNTOWN</option>

        <option value="AUC">AUC</option>


    </select>
    <BiChevronDown className="dwn" size={30}/>

    </div>
    </div>
    {token=="true"?
    <div className="recent">
<p className="recTitle">RECENT LOCATIONS</p>
<div className="recents">

{dataArr.map((data,index)=>
<div onClick={()=>{ localStorage.setItem('locData',JSON.stringify(data)); history("/reserve")}} >{data.name}</div>
)}

</div>


    </div>:null}
    {/*
    <div className="timeDiv">
        <div>
            <p>FROM</p>
        <input ref={fromRef} type="time"/>
        </div>

        <div>
        <p>TO</p>
        <input ref={toRef}   type="time"/></div>
 
</div>*/} <div className="datePickerDiv">
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

 
{/*
 <LocalizationProvider dateAdapter={AdapterDateFns}>
<MobileTimePicker /></LocalizationProvider>*/}
     </div>
<span></span> 
<div className="containTime" >
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
    <Link to="/slots">
<button className="destinationBtn">SHOW AVAILABLE SLOTS <span><HiArrowNarrowRight size={30}/></span></button></Link></div>
</div>
</div>
</div>
</div>
</div>
<div className="div2" id="faq" >
<div className="tri1"  style={{backgroundImage: `url(${tri1})` }}></div>

<div className="quest" style={{overflow:"hidden"}}>
<div className="container-fluid">
<div className="row">
<div className="col-md-8 ">
<p className="divTitle">FREQUENTLY<br/> <span>ASK</span>ED QUESTIONS</p>

<div className="qImg showMob"  style={{backgroundImage: `url(${div2})` }}></div>

<div>
<div className="questDiv">
<p className="question"><span>The expense windows adapted sir. Wrong widen drawn.</span><AiOutlinePlus onClick={()=>setOpen({...open,q1:!open.q1})} size={30}/></p>
<p className="answer" style={open.q1?null:{display:"none"}}>The expense windows adapted sir. Wrong widen drawn.</p>

</div>
<div className="questDiv">
<p className="question"><span>The expense windows adapted sir. Wrong widen drawn.</span><AiOutlinePlus onClick={()=>setOpen({...open,q2:!open.q2})}  size={30}/></p>
<p className="answer" style={open.q2?null:{display:"none"}}>The expense windows adapted sir. Wrong widen drawn.</p>

</div>
<div className="questDiv">
<p className="question"><span>The expense windows adapted sir. Wrong widen drawn.</span><AiOutlinePlus onClick={()=>setOpen({...open,q3:!open.q3})}  size={30}/></p>
<p className="answer" style={open.q3?null:{display:"none"}}>The expense windows adapted sir. Wrong widen drawn.</p>

</div>
</div>
</div>
<div style={{position:"relative"}} className="col-md-4 div2Img ">
<div className="qImg hideMob"  style={{backgroundImage: `url(${div2})` }}></div>

<div className="tri2"  style={{backgroundImage: `url(${tri2})` }}></div>

</div>
</div></div>

</div>


</div>
<div className="div3"  id="feat">
    <p className="div3Title"><span className="ul">DIS</span>COVER <span className="square">P</span><span className="div3Name">PAKYA</span> FEATURES</p>


    <div className="container-fluid">
<div className="row gy-4">
<div className="col-md-4">
<div className="featImg" style={{backgroundImage: `url(${f1})` }}>

</div>
<p className="featP">SAVE MONEY</p>
    </div>
    <div className="col-md-4">
    <div className="featImg" style={{backgroundImage: `url(${f2})` }}>

</div>
<p className="featP">AVAILABILITY</p>
    </div>
    <div className="col-md-4">
    <div className="featImg" style={{backgroundImage: `url(${f3})` }}>

</div>
<p className="featP">SAVE TIME</p>
    </div>
    </div></div>

</div>
<div className="div2" id="download" >
<div className="tri1"  style={{backgroundImage: `url(${tri1})` }}></div>

<div className=" quest2 quest" style={{padding:"8em 5em"}}>
<div className="container-fluid">
<div className="row">
<div className="col-md-6 alignVert">
    <div>
    <p className="no1">GET THE <span>#1</span> EGYPT PARKING APP NOW</p>
<p style={{marginBottom:"0.35em"}} className="divTitle"> <span>DO</span>WNLOAD <span className="wrap"><span className="logoP"><span>P</span></span><span className="logoName">PAKYA</span></span></p>

<p className="soon">WILL BE AVAILABLE SOON*</p>
<p className="soonTxt">PARKING ON THE GO. BOOK AND MANAGE YOUR PARKING FROM ANYWHERE, IN ADVANCE OR ON DEMAND.</p>

</div>
</div>
<div style={{position:"relative"}} className="col-md-6 div2Img">
<div className="mobile noShow"  style={{backgroundImage: `url(${mobile})` }}></div>
<div className="mobile mobShow"  style={{backgroundImage: `url(${mobile2})` }}></div>

<div className="tri3"  style={{backgroundImage: `url(${tri2})` }}></div>

</div>
</div></div>

</div>


</div>
<div className="footer">
<p className="footerLogo"><span className="logoP"><span>P</span></span><span className="logoName">PAKYA</span></p>
<p className="noTime">NO TIME WASTE AGAIN</p>

<div className="linkDiv">
<HashLink   to="/#book">BOOK NOW</HashLink>
<HashLink to="/#faq" scroll={el => scrollWithOffset(el,-40)}>FAQ</HashLink>
<HashLink   scroll={el => scrollWithOffset(el,-190)}
 to="/#feat">FEATURES</HashLink>
<HashLink to="/#download">DOWNLOAD APP</HashLink>
</div>
<hr/>
<div className="cr">
<p>© 2023 PAKYA. All rights reserved.</p>
<div className="icons">
<button className="ig"><BsInstagram /></button>
<button><BsTwitter/></button>
<button><BsYoutube/></button>

</div>
</div>
</div>
    </div>
);

}

export default Home