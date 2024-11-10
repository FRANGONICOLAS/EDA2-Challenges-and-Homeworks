import React, {useState, useEffect} from "react";
import app from "../firebase/config";
import {getDatabase, ref, set, get} from "firebase/database";
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Updatewrite = () => {
    const navigate = useNavigate();

  let [inputValue1, setInputValue1] = useState("");
  let [inputValue2, setInputValue2] = useState("");
    
  const {firebaseId} = useParams();

  useEffect(() => {

    const fetchData = async () => {
        const db = getDatabase(app);
        const dataRef = ref(db, "data/person/" + firebaseId);

        get(dataRef).then((snapshot) => {
            if (snapshot.exists()) {
                const targetObject = snapshot.val();
                setInputValue1(targetObject.name);
                setInputValue2(targetObject.age);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    fetchData();
  }, [firebaseId]);

  const overWriteData = async () => {
    const db = getDatabase(app);
    const newDocRef = ref(db, "data/person/"+ firebaseId);
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

      <button onClick={overWriteData}>Save data</button>

      <button onClick={ () => navigate("/read")}>personas</button>

    </div>
  )
}

export default Updatewrite;