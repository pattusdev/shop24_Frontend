import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Container, Row, Col, Card } from 'react-bootstrap'; // Import Bootstrap components
import {Link} from 'react-router-dom';
import { Repeat } from 'react-bootstrap-icons'; // Import Repeat from React boostrap icon

function DashBoard(){
    const [drinks, setDrinks] = useState([]);
    const [orders, setOrders] = useState([]);
    const [receipts, setReceipts] = useState([]);
    const [clients, setClients] = useState([]);
    const [cargos, setCargos] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          // drinkResponse
          const drinkResponse = await fetch('http://localhost:8123/api/drinks');
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
  
         // clientsResponse
         const clientsResponse = await fetch('http://localhost:8123/api/clients');
         if (!clientsResponse.ok){
           throw new Error('Failed to fetch client');
         }
         const clientsData = await clientsResponse.json();
         setClients(clientsData);
  
  
         // cargosResponse
         const cargosResponse = await fetch('http://localhost:8123/api/cargos');
         if (!cargosResponse.ok){
           throw new Error('Failed to fetch cargos');
         }
         const cargosData = await cargosResponse.json();
         setCargos(cargosData);
        } catch (error) {
          console.error('Error fetching drinks:', error);
        }
      };
  
      fetchData();
    }, []);

    return (
        
          
          <Container>
          
            <h4 className="display-3">DashBoard <a href="/dashboard"><Repeat color="royalblue" size={25} /></a></h4>
            <p className="lead">All Details</p>
            <hr></hr>
            <br></br>
            
            <Row>
    
              {/* Drink */}
    
                <Col md={3} className="mb-4">
                  <Card className="d-flex align-items-center justify-content-center dashboard-card "> 
                    <Card.Body>
                      <Card.Title>Drinks</Card.Title>
                      <Card.Text>
                      {/* Render a link based on the length of drinks array */}
                      <Link to={drinks.length > 0 ? '/drink-details' : '/'}style={{fontSize: '2rem', display: 'block', textAlign: 'center', textDecoration: 'none', fontWeight: 'bold' }}>{drinks.length}</Link>
                    </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
    
                {/* Orders */}
                
                <Col md={3} className="mb-4">
                  <Card className="d-flex align-items-center justify-content-center dashboard-card">
                    <Card.Body>
                      <Card.Title>Orders </Card.Title>
                      <Card.Text>
                      {/* Render a link based on the length of drinks array */}
                      <Link to={orders.length > 0 ? '/order-details' : '/'} style={{fontSize: '2rem', display: 'block', textAlign: 'center', textDecoration: 'none', fontWeight: 'bold' }}>
                        {orders.length}
                      </Link>
                    </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
    
                {/* Receipts */}
    
                <Col md={3} className="mb-4">
                  <Card className="d-flex align-items-center justify-content-center dashboard-card">
                    <Card.Body>
                      <Card.Title>Receipts</Card.Title>
                      <Card.Text>
                      {/* Render a link based on the length of drinks array */}
                      <Link to={receipts.length > 0 ? '/receipts-details' : '/'}style={{fontSize: '2rem', display: 'block', textAlign: 'center', textDecoration: 'none', fontWeight: 'bold' }}>{receipts.length}</Link>
                    </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
    
                {/* Clients */}
    
                <Col md={3} className="mb-4">
                  <Card className="d-flex align-items-center justify-content-center dashboard-card">
                    <Card.Body>
                      <Card.Title>Clients</Card.Title>
                      <Card.Text>
                      {/* Render a link based on the length of drinks array */}
                      <Link to={clients.length > 0 ? '/clients-details' : '/'}style={{fontSize: '2rem', display: 'block', textAlign: 'center', textDecoration: 'none', fontWeight: 'bold' }}>{clients.length}</Link>
                    </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                
                {/* Cargo */}
    
                <Col md={3} className="mb-4">
                  <Card className="d-flex align-items-center justify-content-center dashboard-card">
                    <Card.Body>
                      <Card.Title>Cargo</Card.Title>
                      <Card.Text>
                      {/* Render a link based on the length of drinks array */}
                      <Link to={cargos.length > 0 ? '/cargos-details' : '/'}style={{fontSize: '2rem', display: 'block', textAlign: 'center', textDecoration: 'none', fontWeight: 'bold' }}>{cargos.length}</Link>
                    </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
            </Row>
            
            
            
          </Container>
          
                  
      );
}export default DashBoard;