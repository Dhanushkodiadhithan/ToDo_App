import React ,{useState}from 'react';
import './content.css'
import Display from './display';
import Footer from './footer';

const Content = () => { 

    const [text, settext] = useState({name:"",done:false});
    const [datas, setdatas] = useState([ ]);
    function handleform(e){
        e.preventDefault();
        text.name===""?null:setdatas([...datas,text]);
        settext({name:"",done:false});
    }
    datas.sort((a,b)=>Number(a.done)-Number(b.done))

    let totaltask = datas.length;
    let completed = datas.filter((data) => data.done === true).length;
    return (
        <>
        <form>
            <input className="in" type="text"  onChange={(e) => settext({name:e.target.value,done:false})} value={text.name} placeholder='TASK NAME'/>
            <button className="btn1"onClick={(e) => handleform(e)}>ADD</button>
        </form>
        <Display datas={datas} setdatas={setdatas}/>
        <Footer totaltask={totaltask} completedtask={completed}/>
        </>
    );
}
export default Content;
