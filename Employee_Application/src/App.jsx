import Navbar from './components/Navbar';
import Home from './components/Home';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';

import Main from './components/Main';
import Privateroutes from './components/Privateroutes';
import './App.css'
import EmployeeMain from './components/EmployeeMain';
import EmployeeForm from './components/EmployeeForm';

function App() {
 

  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<Privateroutes />}>
          <Route path="/employeemain" element={<Main child={<EmployeeMain />} />} />
          <Route path="/employeeform" element={<Main child={<EmployeeForm />} />} />
        </Route>
        <Route path="*" element={<Navigate to="/employeefrom" replace />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
