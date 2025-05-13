import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

export default function TablaApi() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsuarios(data))
      .catch(err => console.error('Error al cargar usuarios:', err));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Teléfono</TableCell>
            <TableCell>Ciudad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usuarios.map(usuario => (
            <TableRow key={usuario.id}>
              <TableCell>{usuario.id}</TableCell>
              <TableCell>{usuario.name}</TableCell>
              <TableCell>{usuario.email}</TableCell>
              <TableCell>{usuario.phone}</TableCell>
              <TableCell>{usuario.address.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
