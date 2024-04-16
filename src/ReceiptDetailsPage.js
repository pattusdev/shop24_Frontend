import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function ReceiptDetailsPage({ receipts }) {
  return (
    <div>
      <h1>Receipts Details</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Status</th>
            <th>Order Client Name</th>
          </tr>
        </thead>
        <tbody>
          {receipts.map((receipt) => (
            <tr key={receipt.id}>
              <td>{receipt.timestamp.join('-')}</td>
              <td>{receipt.order.status}</td>
              {/* Access client name from the nested client object */}
              <td>{receipt.order.client.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReceiptDetailsPage;
