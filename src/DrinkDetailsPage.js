import React from 'react';

function DrinkDetailsPage({ drinks }) {
  return (
    <div>
      <h1>Drink Details</h1>
      <table className="table">
        <thead>
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
  );
}

export default DrinkDetailsPage;
