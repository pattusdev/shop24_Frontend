import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Container, Row, Col, Card } from 'react-bootstrap'; // Import Bootstrap components
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import DrinkDetailsPage from './DrinkDetailsPage';
import OrderDetailsPage from './OrderDetailsPage';
import ReceiptDetailsPage from './ReceiptDetailsPage';


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

       // ordersResponse
       const ordersResponse = await fetch('http://localhost:8123/api/orders');
       if (!ordersResponse.ok){
        throw new Error('Failed to fetch orders');
       }
       const ordersData = await ordersResponse.json();
       setOrders(ordersData);

       // receiptsResponse
       const receiptsResponse = await fetch('http://localhost:8123/api/receipts');
       if (!receiptsResponse.ok){
         throw new Error('Failed to fetch receipt');
       }
       const receiptsData = await receiptsResponse.json();
       setReceipts(receiptsData);

      //  // clientsResponse
      //  const clientsResponse = await fetch('http://localhost:8123/api/clients');
      //  if (!clientsResponse.ok){
      //    throw new Error('Failed to fetch client');
      //  }
      //  const clientsData = await clientsResponse.json();
      //  setClients(clientsData);


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
        <h1 className="mt-4 mb-4">DashBoard</h1>
        
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

            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Orders</Card.Title>
                  <Card.Text>
                  {/* Render a link based on the length of drinks array */}
                  <Link to={orders.length > 0 ? '/order-details' : '/'}>{orders.length}</Link>
                </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Receipts</Card.Title>
                  <Card.Text>
                  {/* Render a link based on the length of drinks array */}
                  <Link to={receipts.length > 0 ? '/receipts-details' : '/'}>{receipts.length}</Link>
                </Card.Text>
                </Card.Body>
              </Card>
            </Col>
        </Row>
        
        
      </Container>
      <Routes>
        {/* Define the route for DrinkDetailsPage */}
        <Route path="/drink-details" element={<DrinkDetailsPage drinks={drinks} />} />
        <Route path="/order-details" element={<OrderDetailsPage orders={orders} />} />
        <Route path="/receipts-details" element={<ReceiptDetailsPage receipts={receipts} />} />
      </Routes>
       
    </Router>
  );
}

export default App;


