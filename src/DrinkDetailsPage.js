import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


function DrinkDetailsPage({ drinks }) {
  return (
    <div className="container">
      <h1 className="text-center">Drink Details</h1>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <table className="table">
            <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {drinks.map((drink) => (
            <tr key={drink.id}>
              <td>{drink.name}</td>
              <td>{drink.type}</td>
              <td>{drink.quantity}</td>
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
