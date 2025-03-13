import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Login from './pages/LoginPage';
import Signup from './pages/SignupPage';
import AdminDashboard from './pages/AdminDashboard';
import Inventory from './pages/InventoryPage';
import Reports from './pages/ReportsPage';
import OrderHistory from './pages/OrderHistoryPage';
import UsersPage from './pages/UsersPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/user-settings" element={<UsersPage />} />
      </Routes>
    </Router>
  </StrictMode>,
)
