import { Link, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio'
import Tabla from './pages/Tabla';
import TablaApi from './pages/TablaApi';


export default function App() {
  return (
    <div>
      <nav>
        <ul>

          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/Tabla">Tabla</Link>
          </li>
          <li>
            <Link to="/TablaApi">Tabla con datos de una API</Link>
          </li>

        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Tabla" element={<Tabla />} />
        <Route path="/TablaApi" element={<TablaApi />} />
      </Routes>
    </div>
  );
}
