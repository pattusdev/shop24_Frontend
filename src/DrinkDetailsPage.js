import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Trash } from 'react-bootstrap-icons';
import { PencilSquare } from 'react-bootstrap-icons';
import DashBoard from './Dashboard';

function DrinkDetailsPage() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8123/api/drinks');
      if (!response.ok) {
        throw new Error('Failed to fetch drinks');
      }
      const data = await response.json();
      setDrinks(data);
    } catch (error) {
      console.error('Error fetching drinks:', error);
    }
  };

  const handleDelete = async (drinkId, drinkName) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${drinkName}?`);
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:8123/api/drinks/delete/${drinkId}`, {
          method: 'GET'
        });
        if (!response.ok) {
          throw new Error('Failed to delete drink');
        }
        // Refetch drinks after successful deletion
        fetchData();
      } catch (error) {
        console.error('Error deleting drink:', error);
      }
    }
  };

  return (
    <><DashBoard />
    <div className="container">
      <h1 className="text-center text-primary">Drink Details</h1>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <table className="table table-bordered">
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
                    <button className="border-0 text-light bg-white"><PencilSquare color="royalblue" size={25} /></button>{' '}
                    <button className="border-0 text-light bg-white" onClick={() => handleDelete(drink.id, drink.name)}><Trash color="red" size={25} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" className="btn btn-primary">Create</button>
        </div>
      </div>
    </div></>
  );
}

export default DrinkDetailsPage;
