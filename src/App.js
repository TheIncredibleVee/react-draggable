import React,{useState} from 'react';
import Draggable from 'react-draggable';
import './App.css';
const App=()=>{
  const b1={left: 0, top: -55, right: window.innerWidth, bottom:window.innerHeight}
  const b2={left: 0, top: -20, right: window.innerWidth, bottom:window.innerHeight}
  const b3={left: 0, top: -4, right: window.innerWidth, bottom:window.innerHeight}
  const b4={left: 0, top: -3, right: window.innerWidth, bottom:window.innerHeight}
  let debug=false;
  const [total, setTotal]=useState(1);
    return (

      <div className=" grid bg-red-100 min-h-screen min-w-screen max-h-screen max-w-screen pt-2 ">
        <div className="-mt-5 text-center text-blue-800">
         <button className="bg-blue-500 text-sm hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" onClick={(e)=>setTotal(total+1>4?4:total+1)}>Add Parent</button>
         <button className="bg-blue-500 text-sm hover:bg-blue-700 text-white font-bold m-4 py-1 px-4 rounded" onClick={(e)=>setTotal(total-1<1?1:total-1)}>Delete Parent</button>
        </div>
        <div id="container" className="p-10">
        <Draggable bounds={total>3?"#container":total>2?"#container":total>1?b2:b1} handle={"#drag-"+(Math.abs(total-4)+1).toString()}>
          <div style={{height: '800px', width: '800px', position: 'relative', padding: '0',visibility:total>3?'visible':debug?'':'hidden'}}>

        <strong id="drag-1" className="cursor bg-gray-400"><div>Drag here</div></strong>  
        <div className="box bg-gray-100" id="outer-1" style={{height: '800px', width: '800px', position: 'relative', padding: '0'}}>
        
        <Draggable bounds={total>3?"#outer-1":total>2?b3:total>1?b1:b1} handle={"#drag-"+(total>2?2:Math.abs(total-4)+1).toString()} >
          <div style={{height: '600px', width: '600px', position: 'relative', padding: '0',visibility:total>2?'visible':debug?'':'hidden',marginBottom:'35px', marginLeft:'5px', marginRight:'5px',marginTop:'5px'}}>

        <strong id="drag-2" className="cursor bg-green-500"><div>Drag here</div></strong>  
        <div className="box bg-green-200" id="outer-2" style={{height: '600px', width: '600px', position: 'relative', padding: '0'}}>
        
        <Draggable bounds={total>2?"#outer-2":total>1?b3:b2} handle={"#drag-"+(total>1?3:4).toString()}>
          <div style={{height: '300px', width: '300px', position: 'relative', padding: '0',visibility:total>1?'visible':debug?'':'hidden',marginBottom:'35px', marginLeft:'5px', marginRight:'5px',marginTop:'5px'}}>

        <strong id="drag-3" className="cursor bg-amber-500"><div>Drag here</div></strong>  
        <div className="box bg-amber-200" id="outer-3" style={{height: '300px', width: '300px', position: 'relative', padding: '0'}}>
        
         <Draggable bounds={total>1?"#outer-3":b3} handle="strong" >
            <div className="box no-cursor bg-blue-200" style={{margin:'5px', visibility:total>0?'visible':debug?'':'hidden'}}>
              <strong id="drag-4" className="cursor bg-blue-500"><div>Drag here</div></strong>
              <div>Sample Text</div>
            </div>
          </Draggable>
          </div>
        </div>
        </Draggable>
        </div>
        </div>
        </Draggable>
        </div>
        </div>
        </Draggable>
        </div>
      </div>
      
    );
}

export default App;
