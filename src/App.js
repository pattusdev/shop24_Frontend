// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Container, Row, Col, Card } from 'react-bootstrap'; // Import Bootstrap components
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import {Switch} from 'react-router-dom';
import DrinkDetailsPage from './DrinkDetailsPage';



function App() {
  const [drinks, setDrinks] = useState([]);
  const [orders, setOrders] = useState([]);
  const [receipts, setReceipts] = useState([]);
  const [clients, setClients] = useState([]);
  const [cargos, setCargos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // drinkResponse
        const drinkResponse = await fetch('http://localhost:8123/api/drinks')
             if (!drinkResponse.ok) {
            console.log('Failed to fetch drinks',drinkResponse);
        }
        const drinkData = await drinkResponse.json()
        setDrinks(drinkData);

//        // ordersResponse
//        const ordersResponse = await fetch('http://localhost:8123/api/orders');
//        if (!ordersResponse.ok){
//          throw new Error('Failed to fetch orders');
//        }
//        const ordersData = await ordersResponse.json();
//        setOrders(ordersData);
//
//        // receiptsResponse
//        const receiptsResponse = await fetch('http://localhost:8123/api/receipts');
//        if (!receiptsResponse.ok){
//          throw new Error('Failed to fetch receipt');
//        }
//        const receiptsData = await receiptsResponse.json();
//        setReceipts(receiptsData);
//
//        // clientsResponse
//        const clientsResponse = await fetch('http://localhost:8123/api/clients');
//        if (!clientsResponse.ok){
//          throw new Error('Failed to fetch client');
//        }
//        const clientsData = await clientsResponse.json();
//        setClients(clientsData);
//
//
//        // cargosResponse
//        const cargosResponse = await fetch('http://localhost:8123/api/cargos');
//        if (!cargosResponse.ok){
//          throw new Error('Failed to fetch cargos');
//        }
//        const cargosData = await cargosResponse.json();
//        setCargos(cargosData);
      } catch (error) {
        console.error('Error fetching drinks:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Container>
        <h1 className="mt-4 mb-4">Drinks</h1>
        <Row>
          {drinks.map((item) => (
            <Col key={item.id} md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    Type: {item.type}
                    <br />
                    Quantity: {item.quantity}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Drinks</Card.Title>
                  <Card.Text>
                  {/* Render a link based on the length of drinks array */}
                  <Link to={drinks.length > 0 ? '/drink-details' : '/'}>{drinks.length}</Link>
                </Card.Text>
                </Card.Body>
              </Card>
            </Col>
        </Row>
      </Container>
      <Routes>
        {/* Define the route for DrinkDetailsPage */}
        <Route path="/drink-details" element={<DrinkDetailsPage drinks={drinks} />} />
      </Routes>
       
    </Router>
  );
}

export default App;


