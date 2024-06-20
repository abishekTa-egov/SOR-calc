import React, { useState } from 'react';
import Table from './Table';
import './Table.css';

const SorCalculation = () => {
  const [rows, setRows] = useState([
    { description: '', uom: '', rate: 0, quantity: 0, amount: 0 }
  ]);

  const addRow = () => {
    setRows([...rows, { description: '', uom: '', rate: 0, quantity: 0, amount: 0 }]);
  };

  const deleteRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  const handleRowChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    newRows[index].amount = newRows[index].rate * newRows[index].quantity;
    setRows(newRows);
  };

  const calculateTotal = () => {
    return rows.reduce((total, row) => total + row.amount, 0);
  };

  const handleSubmit = () => {
    console.log(rows);
  };

  return (
    <div className="sor-calculation-container">
      <h1>SOR Calculation</h1>
      <Table 
        rows={rows} 
        addRow={addRow} 
        deleteRow={deleteRow} 
        handleRowChange={handleRowChange} 
        calculateTotal={calculateTotal} 
      />
      
    </div>
  );
}

export default SorCalculation;

