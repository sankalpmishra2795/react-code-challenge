import  React from 'react';
import { Link } from 'react-router-dom';
import './Grid.css';

function Grid({data: {header = [], values = [], actions = []}}) {
  return (
    <>
      <table className='gridTable'>
        <thead>
          <tr>
            {header.map(colName => <th key={colName}>{colName}</th>)}
            {!!actions.length && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {values.map((row, index) => (
            <tr key={index}>
              {header.map((colName) => <td key={colName}>{row[colName]}</td>)}
              {!!actions.length && 
                <td className='gridActions'>
                  {actions.map(({label, action, path}) => <Link to={path}><button onClick={() => action(row)}>{label}</button></Link>)}
                </td>
              }
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );  
}

export default Grid;
