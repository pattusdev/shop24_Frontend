import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Trash } from 'react-bootstrap-icons';
import { PencilSquare } from 'react-bootstrap-icons';// import PencilSquare from react boostrap icons
import DashBoard from './Dashboard'; // Import Dashboard.js

function OrderDetailsPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8123/api/orders');
      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching order:', error);
    }
  };

  const handleDelete = async (orderId, orderName) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${orderName} Order?`);
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:8123/api/orders/delete/${orderId}`, {
          method: 'GET'
        });
        if (!response.ok) {
          throw new Error('Failed to delete order');
        }
        // Refetch drinks after successful deletion
        fetchData();
      } catch (error) {
        console.error('Error deleting order:', error);
      }
    }
  };
  return (
    <><DashBoard /><div className="container">
      <h1 className="text-center text-primary">Order Details</h1>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <table className="table table-bordered ">
            <thead className="thead-dark">
              <tr>
                <th>Timestamp</th>
                <th>Status</th>
                <th>Client Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.timestamp.join('-')}</td>
                  <td>{order.status}</td>
                  <td>{order.client ? order.client.name : 'N/A'}</td>
                  <td>
                    <button class="border-0 text-light bg-white"><PencilSquare color="royalblue" size={25} /></button>{' '}
                    <button className="border-0 text-light bg-white" onClick={() => handleDelete(order.id, order.client.name)}><Trash color="red" size={25} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" class="btn btn-primary">Create</button>
        </div>
      </div>
    </div></>
  );
}

export default OrderDetailsPage;
