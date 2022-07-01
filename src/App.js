import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import IsPrivate from './components/IsPrivate'

import './App.css';

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from './pages/SignupPage';
import ErrorPage from './pages/ErrorPage';
import DetailsPage from './pages/DetailsPage';
import CreateEntryPage from './pages/CreateEntryPage';
import ProfilePage from './pages/ProfilePage';
import UpdateProfilePage from './pages/UpdateProfilePage';
import TestPage from "./pages/TestPage";
import TestFormPage from "./pages/TestFormPage";
import UpdateEntryPage from './pages/UpdateEntryPage';


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
         <Route path="/" element={ <HomePage />} />
         <Route path="/login" element={ <LoginPage />} />
         <Route path="/signup" element={ <SignUpPage />} />
         <Route path="/create-entry" element={<IsPrivate> <CreateEntryPage/> </IsPrivate> } /> 
         <Route path="/update-entry" element={<IsPrivate> <UpdateEntryPage/> </IsPrivate> } />            
         <Route path="/details/:Id" element={<IsPrivate> <DetailsPage/> </IsPrivate>} />
         <Route path="/profile" element={<IsPrivate> <ProfilePage /> </IsPrivate>} />
         <Route path="/update-profile" element={<IsPrivate> <UpdateProfilePage /> </IsPrivate>} />
         <Route path="/test-page" element={ <TestPage />} />
         <Route path="/test-form" element={ <TestFormPage />} />
         <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;