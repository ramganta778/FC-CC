import { useState } from "react";
import "./App.css";
import FCCounter from "./component/FCCounter";
import CCCounter  from "./component/CCCounter";

function App() {
  let [unload,setUnload] = useState(true);
  return (
    <div className="App">

      <button onClick={()=>{

    if(unload == true){

    setUnload (false);

    }else{
      setUnload (true);
    }




      }}>Toggle Show</button>
      
      {unload == true ? <FCCounter></FCCounter> : null}
      {unload == true ? <CCCounter></CCCounter> : null}
    
    </div>
  );
}

export default App;
