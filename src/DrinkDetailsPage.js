import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Trash } from 'react-bootstrap-icons';
import { PencilSquare } from 'react-bootstrap-icons';
import DashBoard from './Dashboard';

const EDrinkType = {
  Milk: 'Milk',
  Juice: 'Juice',
  Soda: 'Soda',
  Water: 'Water',
  Other: 'Other',
};

function DrinkDetailsPage() {
  const [drinks, setDrinks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newDrink, setNewDrink] = useState({ name: '', type: '', quantity: '' });
  const [dashboardKey, setDashboardKey] = useState(0); // State to control the key of DashBoard component


  useEffect(() => {
    fetchData();
  }, [dashboardKey]);

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
          method: 'GET',
        });
        if (!response.ok) {
          throw new Error('Failed to delete drink');
        }
        // Refetch drinks after successful deletion
        fetchData();
        // Refresh the dashboard by changing the key
      setDashboardKey((prevKey) => prevKey - 1);
      } catch (error) {
        console.error('Error deleting drink:', error);
      }
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewDrink({ ...newDrink, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8123/api/drinks/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDrink),
      });
      if (!response.ok) {
        throw new Error('Failed to create drink');
      }
      // Refetch drinks after successful creation
      fetchData();
      // Close the form
      setShowForm(false);
      // Reset the newDrink state
      setNewDrink({ name: '', type: '', quantity: '' });
      // Refresh the dashboard by changing the key
      setDashboardKey((prevKey) => prevKey + 1);
    } catch (error) {
      console.error('Error creating drink:', error);
    }
  };

  return (
    <>
      <DashBoard key={dashboardKey}/> {/* Pass the dashboardKey as key */}
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
                      <button className="border-0 text-light bg-white">
                        <PencilSquare color="royalblue" size={25} />
                      </button>{' '}
                      <button
                        className="border-0 text-light bg-white"
                        onClick={() => handleDelete(drink.id, drink.name)}
                      >
                        <Trash color="red" size={25} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="button" className="btn btn-primary" onClick={() => setShowForm(true)}>
              Create
            </button>
          </div>
        </div>
      </div>
      {showForm && (
        <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create New Drink</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowForm(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                     value={newDrink.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="type">Type</label>
                    <select
                      className="form-control"
                      id="type"
                      name="type"
                      value={newDrink.type}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Type</option>
                      {Object.values(EDrinkType).map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="quantity">Quantity</label>
                    <input
                      type="number"
                      className="form-control"
                      id="quantity"
                      name="quantity"
                      value={newDrink.quantity}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {showForm && <div className="modal-backdrop show"></div>}
    </>
  );
}

export default DrinkDetailsPage;