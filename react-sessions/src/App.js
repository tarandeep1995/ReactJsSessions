import { useState } from "react";
import "./App.css";
import Lession1 from "./Lession1";
import Lession2 from "./Lession2";
import StateFulComponet from "./Lession3";
import MyPureComponent from "./Lession6";
import CounterAppLifecycle from "./Lession6f";
import EmojiConverter from "./Assignement1";
import Carosel from "./Lession7";
import ShoppingCart from "./Lession8";
import LifecycleExample from "./Lession9";

function App() {
  const [prop1, setprop1] = useState("value1");
  const [prop2, setprop2] = useState("value2");
  function handleProp1() {
    setprop1("New Value 1");
  }
  function handleProp2() {
    setprop2("New Value 2");
  }

  return (
    <div className="App">
      {/* <Lession1 name="Taran" designation="Software Tester"/>
      <Lession2 name="Taran" designation="Software Developer"/> */}
      {/* <StateFulComponet/>
      <MyPureComponent props1={prop1} props2={prop2}/>  
      <button onClick={handleProp1}>Change Prop1</button>
      <button onClick={handleProp2}>Change Prop2</button> */}
      {/* <CounterAppLifecycle />*/}
      {/* <EmojiConverter /> 
      <Carosel/> */}
      {/* <ShoppingCart/> */}
      <LifecycleExample/>
    </div>
  );
}

export default App;
