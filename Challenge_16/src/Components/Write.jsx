import React, {useState} from "react";
import app from "../firebase/config";
import {getDatabase, ref, set, push} from "firebase/database";
import {useNavigate} from "react-router-dom";

const Write = () => {
  const navigate = useNavigate();
  let [inputValue1, setInputValue1] = useState("");
  let [inputValue2, setInputValue2] = useState("");

  const saveData = async () => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "data/person"));
    set(newDocRef, {
      name: inputValue1,
      age: inputValue2
    }).then(() => {
      alert("Data saved successfully");
    }).catch((error) => {
      alert("Error: " + error.message);
    }) 
  }

  const handleChange1 = (event) => {
    setInputValue1(event.target.value);
  };
  const handleChange2 = (event) => {
    setInputValue2(event.target.value);
  };
    

  return(
    <div>
      <input type="text" value={inputValue1} onChange={handleChange1} />

      <input type="text" value={inputValue2} onChange={handleChange2} /> <br />

      <button onClick={saveData}>Save data</button>

      <button onClick={ () => navigate("/updatewrite")}>Actualizar</button>
      <button onClick={ () => navigate("/read")}>personas</button>

    </div>
  )
}

export default Write;