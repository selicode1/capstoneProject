import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import ConsumerSignup from './pages/ConsumerSignup'
import ProducerSignup from './pages/ProducerSignup'
import SelectionScreen from './pages/SelectionScreen'
import AgricultureSection from './components/AgricultureSection'
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import Statistics from './pages/Statistics';
import Audience from './pages/Audience';
import ProducerLogin from './pages/ProducerLogin';
import ConsumerLogin from './pages/CosumerLogin';
import LoginSelectionScreen from './pages/LoginSelectionScreen';
import LandingPageConsumer from '../src/Consumers/pages/landingPage'
import CosumerLandingPage from './pages/CosumerLandingPage';
import { AuthProvider } from './AuthContext';
import ConsumerProductPage from './pages/ConsumerProductPage';
import ConsumerProductDetails from './pages/ConsumerProductDetails';
import ConsumerCartPage from './pages/ConsumerCartPage';
import ConsumerCheckoutPage from './pages/ConsumerCheckoutPage';

function App() {
  return (
    <AuthProvider>
          <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/selection" element={<SelectionScreen />} />
      <Route path="/login-selection" element={<LoginSelectionScreen />} />
      <Route path="/consumer" element={<ConsumerSignup />} />
      <Route path="/producer" element={<ProducerSignup />} />
      <Route path="/producerlogin" element={<ProducerLogin />} />
      <Route path="/consumerlogin" element={<ConsumerLogin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/product" element={<Product />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/audience" element={<Audience />} />
      {/* <Route path="/landing" element={<LandingPageConsumer />} /> */}
      <Route path="/landing" element={<CosumerLandingPage />} />
      <Route path="/shop" element={<ConsumerProductPage />} />
      <Route path="/details" element={<ConsumerProductDetails />} />
      <Route path="/cart" element={<ConsumerCartPage />} />
      <Route path="/checkout" element={<ConsumerCheckoutPage />} />


      
    </Routes>
  </Router>
    </AuthProvider>
  // <Dashboard/>
  )
}

export default App
