import React,{useState} from "react";
import './Tab1.scss'
import Tab11 from "./Tab11";
import Tab12 from './Tab12';
import Tab13 from './Tab13';

const Tab1 = () => {  
  const [tab11,setTab11]=useState(true)
  const [tab12,setTab12]=useState(false)
  const [tab13,setTab13]=useState(false)

  const tabHandler=(value)=>{
if(value==="tab11"){
  setTab11(true)
  setTab12(false)
  setTab13(false)
}
if(value==="tab12"){
  setTab11(false)
  setTab12(true)
  setTab13(false)

}
if(value==="tab13"){
  setTab11(false)
  setTab12(false)
  setTab13(true)

}
  }
  return (
    <>
   <section> 
     <div className="tabs">
        <div className="tab-container">
          <div onClick={()=>tabHandler("tab11")} className="tab-item tab-border">
            <i className="fas fa-door-open fa-1x">
              <p className="hide-sm">Cancel anytime.</p>
            </i>
          </div>
          <div onClick={()=>tabHandler("tab12")} className="tab-item">
            <i className="fas fa-tablet-alt fa-1x">
              <p className="hide-sm">Watch anywhere.</p>
            </i>
          </div>
          <div  onClick={()=>tabHandler("tab13")} className="tab-item">
            <i className="fas fa-tags fa-1x">
              <p className="hide-sm">Pick your price.</p>
            </i>
          </div>
      </div>
    </div>
 </section>
 {tab11 && <Tab11/>}
 {tab12 && <Tab12/>}
 {tab13 && <Tab13/>}

 </>
  );
}

export default Tab1;
