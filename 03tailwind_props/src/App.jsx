import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";


function App() {
  const [count, setCount] = useState(0);


  let myObj = {
    name: "Mansi",
    channel: "mansimore",
    address: "India",
  }

  let myArray = [1,2,3,4,5];

  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl">Tailwind test</h1>
      <Card channel="mansimore" someObj = {myObj} btnText = "Learn More"/>
      <Card channel="another_channel" myArray = {myArray}  btnText = "View Details"/>

    </>
  );
}

export default App;
