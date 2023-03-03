    

 import { useState } from "react";

function ImgModal(props) {


    const[img,setImg]=useState()

    const reader = new FileReader();
    reader.onloadend = () => {
        setImg(reader.result);
    };
    reader.readAsDataURL(props.img);

    return ( 
      
 
 
        <div  className="imgModal">
    
          <div onClick={()=>props.setModal(false)}  className="modalOverlay">
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}}>
       <img src={img} style={{maxHeight:"90vh"}}/>
       </div>
     
   
        </div></div>
    

    );
}

export default ImgModal;
 