import React from 'react';
import './TableRow.css';

const TableRow = ({ index, row, deleteRow, handleRowChange }) => {
  const handleChange = (field, value) => {
    handleRowChange(index, field, value);
  };

  return (
    <tr className="table-row">
      <td className="table-cell">{index + 1}</td>
      <td className="table-cell">
        <input 
          type="text" 
          value={row.description} 
          onChange={(e) => handleChange('description', e.target.value)} 
          className="table-input"
        />
      </td>
      <td className="table-cell">
        <input 
          type="text" 
          value={row.uom} 
          onChange={(e) => handleChange('uom', e.target.value)} 
          className="table-input"
        />
      </td>
      <td className="table-cell">
        <input 
          type="number" 
          value={row.rate} 
          onChange={(e) => handleChange('rate', parseFloat(e.target.value))} 
          className="table-input"
        />
      </td>
      <td className="table-cell">
        <input 
          type="number" 
          value={row.quantity} 
          onChange={(e) => handleChange('quantity', parseFloat(e.target.value))} 
          className="table-input"
        />
      </td>
      <td className="table-cell">{row.amount}</td>
      <td className="table-cell">
        <button className="delete-button" onClick={() => deleteRow(index)}>🗑️</button>
      </td>
    </tr>
  );
}

export default TableRow;


