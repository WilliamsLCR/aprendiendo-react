import { Routes, Route, Link } from 'react-router-dom';

import Inicio from './pages/Inicio';
import Tabla from './pages/Tabla';
import TablaApi from './pages/TablaApi';
import Contador from './pages/Contador';
import UsoReactRoute from './pages/UsoReactRoute';
import GoogleMapas from './pages/GoogleMapas';
import GoogleMapasDirecciones from './pages/GoogleMapasDirecciones';
import GoogleMapasCluster from './pages/GoogleMapasCluster';
import GoogleMapasDT from './pages/GoogleMapasDT';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Button color="inherit" component={Link} to="/">Inicio</Button>
          <Button color="inherit" component={Link} to="/Contador">Contador</Button>
          <Button color="inherit" component={Link} to="/Tabla">Tabla</Button>
          <Button color="inherit" component={Link} to="/TablaApi">Tabla con API</Button>
          <Button color="inherit" component={Link} to="/UsoReactRoute">Routes</Button>
          <Button color="inherit" component={Link} to="/GoogleMapas">Google Maps</Button>
          <Button color="inherit" component={Link} to="/GoogleMapasDirecciones">Mapas Direcciones</Button>
          <Button color="inherit" component={Link} to="/GoogleMapasCluster">Mapas Cluster</Button>
          <Button color="inherit" component={Link} to="/GoogleMapasDT">Mapas Drawing Tools</Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ padding: 2 }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Contador" element={<Contador />} />
          <Route path="/Tabla" element={<Tabla />} />
          <Route path="/TablaApi" element={<TablaApi />} />
          <Route path="/UsoReactRoute" element={<UsoReactRoute />} />
          <Route path="/GoogleMapas" element={<GoogleMapas />} />
          <Route path="/GoogleMapasDirecciones" element={<GoogleMapasDirecciones />} />
          <Route path="/GoogleMapasCluster" element={<GoogleMapasCluster />} />
          <Route path="/GoogleMapasDT" element={<GoogleMapasDT />} />
        </Routes>
      </Box>
    </Box>
  );
}
