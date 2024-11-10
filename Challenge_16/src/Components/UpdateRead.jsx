import React, {useState} from "react";
import app from "../firebase/config";
import {getDatabase, ref, get, remove} from "firebase/database";
import {useNavigate} from "react-router-dom";

const Updateread = () => {
    let [personArray, setPersonArray] = useState([]);
    const navigate = useNavigate();

    const fetchData = async () => {
        const db = getDatabase(app);
        const dataRef = ref(db, "data/person");

        get(dataRef).then((snapshot) => {
            if (snapshot.exists()) {

                const myData = snapshot.val();
                const temporyArray =  Object.keys(myData).map(myFireId => {
                    return{
                        ...myData[myFireId],
                        idPerson: myFireId
                    }
                })   

                setPersonArray(temporyArray);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    const deleteData = async (idPersonParam) => {
        const db = getDatabase(app);
        const dataRef = ref(db, "data/person/" + idPersonParam);
        await remove(dataRef);
        window.location.reload();
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
                            <p>ID: {person.idPerson}</p>
                            <button onClick={() => navigate(`/updatewrite/${person.idPerson}`)}>Actualizar</button>
                            <button onClick={() => deleteData(person.idPerson)}>Borrar</button>
                        </li>
                    )
                })}
            </ul>
            <button onClick={ () => navigate("/")}>nuevo</button>
            <button onClick={ () => navigate("/read")}>personas</button>
        </div>

    )
}
export default Updateread;