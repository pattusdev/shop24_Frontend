import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Trash } from 'react-bootstrap-icons'; // Import Trash form React BootStrap Icons
import { PencilSquare } from 'react-bootstrap-icons'; // Import PencilSquare from React Bootstrap Icons
import DashBoard from './Dashboard'; // Im[ort Dashboard.js]


function CargoDetailsPage() {
  const [cargos, setCargos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8123/api/cargos');
      if (!response.ok) {
        throw new Error('Failed to fetch cargos');
      }
      const data = await response.json();
      setCargos(data);
    } catch (error) {
      console.error('Error fetching cargo:', error);
    }
  };

  const handleDelete = async (cargoId, cargoName) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${cargoName}?`);
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:8123/api/cargos/delete/${cargoId}`, {
          method: 'GET'
        });
        if (!response.ok) {
          throw new Error('Failed to delete cargo');
        }
        // Refetch drinks after successful deletion
        fetchData();
      } catch (error) {
        console.error('Error deleting cargo:', error);
      }
    }
  };
  return (
    <><DashBoard />
      <div className="container">
        <h1 className="text-center text-primary">Cargo Details</h1>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Latitude</th>
                  <th>Longitude</th>
                  <th>Type</th>
                  <th>Action</th>
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
                    <td>
                      <button class="border-0 text-light bg-white"><PencilSquare color="royalblue" size={25} /></button>{' '}
                      <button className="border-0 text-light bg-white" onClick={() => handleDelete(cargo.id, cargo.name)}><Trash color="red" size={25} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="button" class="btn btn-primary">Create</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CargoDetailsPage;
