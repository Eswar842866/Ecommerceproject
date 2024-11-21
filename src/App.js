import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Container } from 'react-bootstrap';
import HomeScreen from './Screen/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductScreen from './Screen/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;