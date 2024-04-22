import React from 'react';

function Contact() {
  return (
    <div className="container">
      <div className="text-center mt-5">
        <h1 className="display-3">Contact Us</h1>
        <p className="lead">We are here to help you. Reach out to us for any queries.</p>
      </div>
      <div className="mt-5">
        <h2 className="text-primary">Contact Information</h2>
        <ul className="list-unstyled">
          <li><i className="bi bi-envelope"></i> Email: info@shop24.com</li>
          <li><i className="bi bi-telephone"></i> Phone: +250 123 456 789</li>
          <li><i className="bi bi-geo-alt"></i> Address: Kigali, Rwanda</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
