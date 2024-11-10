import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Write from './Components/write';
import Read from './Components/Read';
import UpdateRead from './Components/UpdateRead';
import UpdateWrite from './Components/UpdateWrite'; // Asegúrate de importar el componente UpdateWrite

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Write />} />
        <Route path="/read" element={<Read />} />
        <Route path="/updateread" element={<UpdateRead />} />
        <Route path="/updatewrite/:firebaseId" element={<UpdateWrite />} /> {/* Asegúrate de definir la ruta correctamente */}
      </Routes>
    </Router>
  );
};

export default App;