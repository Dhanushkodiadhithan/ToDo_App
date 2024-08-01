import React from "react";
import "./display.css";
import Items from "./items";
const Display = ({ datas,setdatas}) => {

  let ulclass = datas.length==0?"hiddenul":"visibleul"
  
  return ( 
    <>
      <ul className={ulclass}>
        {
          datas.map((data) => (
            <Items key={data.name} data={data} datas={datas} setdatas={setdatas}/>
            
            
          ))
        }
       
      </ul>
    </>
  );
};
export default Display;
