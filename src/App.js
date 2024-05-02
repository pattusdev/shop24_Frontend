import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import DrinkDetailsPage from './DrinkDetailsPage'; // Import DrinkDetailsPage.js
import OrderDetailsPage from './OrderDetailsPage';
import ReceiptDetailsPage from './ReceiptDetailsPage';
import ClientDetailsPage from './ClientDetailsPage';
import CargoDetailsPage from './CargoDetailsPage'; // Import CargoDetailsPage.js 
import Navigation from './Navigation'; // Import Navigation.js
import Footer from './Footer';
import About from './About';
import DashBoard from './Dashboard';
import Home from './Home';
import Contact from './Contact';



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
    <Router>
      <Navigation/>
      
      <Routes>
        
        <Route path="/drink-details" element={<DrinkDetailsPage drinks={drinks} />} />
        <Route path="/order-details" element={<OrderDetailsPage orders={orders} />} />
        <Route path="/receipts-details" element={<ReceiptDetailsPage receipts={receipts} />} />
        <Route path="/clients-details" element={<ClientDetailsPage clients={clients} />} />
        <Route path="/cargos-details" element={<CargoDetailsPage cargos={cargos} />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;


