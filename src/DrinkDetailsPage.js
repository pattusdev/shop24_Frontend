import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Link } from 'react-router-dom'; // Import Bootstrap components

function DrinkDetailsPage({ drinks }) {
  return (
    <div className="container">
      <h1 className="text-center text-primary">Drink Details</h1>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <table className="table table-bordered table-striped ">
            <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {drinks.map((drink) => (
            <tr key={drink.id}>
              <td>{drink.name}</td>
              <td>{drink.type}</td>
              <td>{drink.quantity}</td>
              <td>
                
                <button>
                  <a>✏️</a> 
                </button>
                <a> </a>
                <button>
                  <a>❌</a> 
                </button>
                
              </td>
            </tr>
          ))}
        </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DrinkDetailsPage;
