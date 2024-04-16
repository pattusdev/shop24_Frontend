import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function CargoDetailsPage({ cargos }) {
  return (
    <div className="container">
      <h1 className="text-center">Cargo Details</h1>
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
              {cargos.map((cargo) => (
                <tr key={cargo.id}>
                  <td>{cargo.name}</td>
                  <td>{cargo.address}</td>
                  <td>{cargo.latitude}</td>
                  <td>{cargo.longitude}</td>
                  <td>{cargo.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CargoDetailsPage;
