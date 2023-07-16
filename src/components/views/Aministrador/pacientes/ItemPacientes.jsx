import React from 'react';
import { Button } from 'react-bootstrap';

const ItemPacientes = () => {
  return (
    <tr>
    <td>1</td>
    <td>Emanuel Ruiz</td>
    <td>Ruiz</td>
    <td>Ruizemanuelok@gmail.com</td>
    <td>3813153665</td>
    <td>24 de septiembre 129</td>
    <td className='text-center'>
      <Button variant="info">🐶</Button>
    </td>
    <td className='text-center '>
      <Button className='m-1' variant="success">Editar</Button>
      <Button className='m-1' variant="danger">Eliminar</Button>
    </td>
  </tr>
  );
};

export default ItemPacientes;