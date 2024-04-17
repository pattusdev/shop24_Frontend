import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function OrderDetailsPage({ orders }) {
  return (
    <div className="container">
      <h1 className="text-center text-primary">Order Details</h1>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
          <tr>
            <th>Timestamp</th>
            <th>Status</th>
            <th>Client Name</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.timestamp.join('-')}</td>
              <td>{order.status}</td>
              {/* Access client name from the nested client object */}
              <td>{order.client.name}</td>
            </tr>
          ))}
        </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailsPage;
