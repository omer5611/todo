import React from "react";
import Checked from "./Checked";
import Unchecked from "./Unchecked";
import { useState, useEffect } from "react";


export default function Todo(props) {

  const [objects, setObjects] = useState([]);
  const [item, setItem] = useState("");



  useEffect(() => {
    //console.log(objects);
  });

  function clicked() {
    if (item) {
      document.getElementById("input").value = "";
      setItem("")
      setObjects((oldObject) => [
        ...oldObject,
        { value: item, checked: false ,key:objects.length },
      ]);
    }
  }
  return (
    <div id="main-list">
      <h1 style={{'text-decoration': "underline"}}>ToDo:</h1>
               <input id="input" onChange={(e) => setItem(e.target.value)} />
               <button onClick={clicked}>Click me!</button>
               <Unchecked objects={objects} setObjects={setObjects} />
               <hr style={{ "max-width": '90%' ,"border":'none', "background": '#006077', height:'5px', "margin-block-start": "0.15em", "margin-block-end": "0.15em"}}/>
               <Checked  objects={objects} setObjects={setObjects} />
    </div>
  );
}
