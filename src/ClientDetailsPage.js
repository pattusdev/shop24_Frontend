import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


function ClientDetailsPage({ clients }) {
  return (
    <div className="container">
    <h1 className="text-center">Client Details</h1>
    <div className="row justify-content-center">
      <div className="col-md-10">
        <table className="table">
          <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.address}</td>
              <td>{client.latitude}</td>
              <td>{client.longitude}</td>
              <td>{client.type}</td>
            </tr>
          ))}
        </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ClientDetailsPage;
