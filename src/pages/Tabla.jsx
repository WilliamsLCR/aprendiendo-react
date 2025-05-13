import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

const data = [
  { id: 1, nombre: 'Juan', edad: 28 },
  { id: 2, nombre: 'María', edad: 34 },
  { id: 3, nombre: 'Carlos', edad: 25 },
];

export default function TablaSimple() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Edad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((fila) => (
            <TableRow key={fila.id}>
              <TableCell>{fila.id}</TableCell>
              <TableCell>{fila.nombre}</TableCell>
              <TableCell>{fila.edad}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
