import ClassComponent from "./ClassComponent";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button onClick={() =>{
        setShow(!show)
      }}>show/hide</button>
      {show
      ? <ClassComponent show={show}/>
      : ''
}
    </div>
  );
}

export default App;
