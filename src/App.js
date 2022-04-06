import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './js/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard'
import Layout from './components/Layout';
import Curriculum from './pages/Curriculum';
import Faculty from './pages/Faculty';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';

export default function App() {
  return (
    <div className='h-auto w-full bg-white '>
      <Router>
        <AuthProvider>
          <Routes>
            <Route index element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Layout />} >
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='curriculum' element={<Curriculum />} />
              <Route path='faculty' element={<Faculty />} />
              <Route path='profile' element={<Profile />} >
                <Route path='edit-profile' element={<EditProfile />} />
              </Route>
            </Route>

          </Routes>
        </AuthProvider>
      </Router>
    </div>
  )
}
