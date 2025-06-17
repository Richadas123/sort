

import "./App.css";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  // Auto-redirect to /dashboard after successful login
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  if (isLoading) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;





