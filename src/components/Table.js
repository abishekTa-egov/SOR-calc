import React from 'react';
import TableRow from './TableRow';
import './Table.css';

const Table = ({ rows, addRow, deleteRow, handleRowChange, calculateTotal }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Description</th>
            <th>UOM</th>
            <th>Rate</th>
            <th>Estimated Quantity</th>
            <th>Estimated Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <TableRow 
              key={index} 
              index={index} 
              row={row} 
              deleteRow={deleteRow} 
              handleRowChange={handleRowChange} 
            />
          ))}
          <tr>
            <td colSpan="5">
              <button className="add-row-button" onClick={addRow}>Add Row</button>
            </td>
            <td>
              <strong>Grand Total: </strong>{calculateTotal()}
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;



