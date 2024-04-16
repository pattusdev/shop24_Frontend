import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function OrderDetailsPage({ orders }) {
  return (
    <div>
      <h1>Order Details</h1>
      <table className="table">
        <thead>
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
  );
}

export default OrderDetailsPage;
