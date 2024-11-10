import React, {useState} from "react";
import app from "../firebase/config";
import {getDatabase, ref, get} from "firebase/database";
import {useNavigate} from "react-router-dom";
const Read = () => {
    const navigate = useNavigate();
    let [personArray, setPersonArray] = useState([]);

    const fetchData = async () => {
        const db = getDatabase(app);
        const dataRef = ref(db, "data/person");

        get(dataRef).then((snapshot) => {
            if (snapshot.exists()) {
                setPersonArray(Object.values(snapshot.val()));
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    return(
        <div>
            <button onClick={fetchData}>Mostrar</button>
            <ul>
                {personArray.map((person, index) => {
                    return(
                        <li key={index}>
                            <p>Nombre: {person.name}</p>
                            <p>Edad: {person.age}</p>
                        </li>
                    )
                })}
            </ul>
            <button onClick={ () => navigate("/updateread")}>Actualizar</button>
            <button onClick={ () => navigate("/")}>home</button>
        </div>

    )
}
export default Read;