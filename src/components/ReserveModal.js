  

 
import React, {useEffect, useState} from 'react';
import { BsCheckCircleFill } from "react-icons/bs";

import { IoIosAlert } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function ReserveModal(props) {
    const token=localStorage.getItem("token")

const history= useNavigate();


    return ( 
      
 
 
        <div  className="reserveModal">
    
          <div onClick={()=>props.setModal(false)} className="modalOverlay"></div>
          <div  className="modal-contentRev" >
          
            <div >
             <div style= {token?null:{bottom:"10px"}} className='check'>
             {token?
<BsCheckCircleFill/>:
<IoIosAlert  style= {token?null:{color:"brown"}}/>

}
             </div>
             {token?
             <>
         <p className='confirm1'>AWESOME!</p>
         <p className='confirm2'>YOUR BOOKING HAS BEEN CONFIRMED.<br/> CHECK YOUR EMAIL FOR DETAILS</p>
         </>:
         <p className='confirm2' >PLEASE LOGIN TO PROCEED</p>}

           <div className='modalBtns'>
           {token?
                <Link to="/">
           <button className='confirm' >BACK TO HOME</button>
           </Link>  :
        <Link to="/sign-in">
           <button className='confirm' >LOGIN FIRST</button>
           </Link>  }

        
            </div>
           
     
            </div>
          
          </div>
        </div>
    

    );
}

export default ReserveModal;
 