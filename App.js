import React ,{useState} from "react";
import "./App.css"
function App(){
  const [count ,setCount]=useState(0)
  return(
    <div className="App">
      <header>
        <h1>Counter app using React</h1>
      </header>
      <h2>Current value of count is</h2>
      <h1>{count}</h1>
      <button onClick={()=>setCount(0)}>Reset Counter</button>
      <button onClick={()=>count>20? "":setCount(count+1) }>Increase</button>
      <button onClick={()=>count<=0?"":setCount(count-1)}>decrease</button>
  
    </div>
  ) 
}
export default App