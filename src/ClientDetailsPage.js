import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Trash } from 'react-bootstrap-icons';
import { PencilSquare } from 'react-bootstrap-icons';
import DashBoard from './Dashboard'; // Import Dashboard.js

function ClientDetailsPage() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8123/api/clients');
      if (!response.ok) {
        throw new Error('Failed to fetch clients');
      }
      const data = await response.json();
      setClients(data);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  const handleDelete = async (clientId, clientName) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${clientName}?`);
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:8123/api/clients/delete/${clientId}`, {
          method: 'GET'
        });
        if (!response.ok) {
          throw new Error('Failed to delete client');
        }
        // Refetch drinks after successful deletion
        fetchData();
      } catch (error) {
        console.error('Error deleting client:', error);
      }
    }
  };
  return (
    <><DashBoard/>
      <div className="container">
      <h1 className="text-center text-primary">Client Details</h1>
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
            {clients.map((client) => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.address}</td>
                <td>{client.latitude}</td>
                <td>{client.longitude}</td>
                <td>{client.type}</td>
                <td>
                  <button class="border-0 text-light bg-white"><PencilSquare color="royalblue" size={25} /></button>{' '}
                  <button className="border-0 text-light bg-white" onClick={() => handleDelete(client.id, client.name)}><Trash color="red" size={25} /></button>
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

export default ClientDetailsPage;
