import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Trash } from 'react-bootstrap-icons';
import { PencilSquare } from 'react-bootstrap-icons';
import DashBoard from './Dashboard';

function ReceiptDetailsPage() {
  const [receipts, setReceipts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8123/api/receipts');
      if (!response.ok) {
        throw new Error('Failed to fetch receipts');
      }
      const data = await response.json();
      setReceipts(data);
    } catch (error) {
      console.error('Error fetching receipt:', error);
    }
  };

  const handleDelete = async (receiptId, receiptName) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${receiptName}?`);
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:8123/api/receipts/delete/${receiptId}`, {
          method: 'GET'
        });
        if (!response.ok) {
          throw new Error('Failed to delete receipt');
        }
        // Refetch receipt after successful deletion
        fetchData();
      } catch (error) {
        console.error('Error deleting receipt:', error);
      }
    }
  };
  return (
    <><DashBoard /><div className="container">
      <h1 className="text-center text-primary">Receipt Details</h1>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Timestamp</th>
                <th>Status</th>
                <th>Order Client Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {receipts.map((receipt) => (
                <tr key={receipt.id}>
                  <td>{receipt.timestamp.join('-')}</td>
                  <td>{receipt.order.status}</td>
                  {/* Access client name from the nested client object */}
                  <td>{receipt.order.client.name}</td>
                  <td>
                    <button class="border-0 text-light bg-white"><PencilSquare color="royalblue" size={25} /></button>{' '}
                    <button className="border-0 text-light bg-white" onClick={() => handleDelete(receipt.id, receipt.order.client.name)}><Trash color="red" size={25} /></button>
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

export default ReceiptDetailsPage;
