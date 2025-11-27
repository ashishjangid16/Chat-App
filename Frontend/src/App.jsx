import React from 'react';

import './App.css';
import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup.jsx';
import Home from './pages/home/Home.jsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/Authcontext.jsx';

function App() {
  // Fix: prevent errors by giving a default value if context is undefined
  const authContext = useAuthContext() || {};
  const { authUser } = authContext;

  return (
    <div className={authUser ? 'h-screen' : 'p-4 h-screen flex items-center justify-center'}>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to="/" /> : <Signup />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
