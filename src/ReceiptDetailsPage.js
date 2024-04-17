import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function ReceiptDetailsPage({ receipts }) {
  return (
    <div className="container">
      <h1 className="text-center text-primary">Receipt Details</h1>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
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
      </div>
    </div>
  );
}

export default ReceiptDetailsPage;
