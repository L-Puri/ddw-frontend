import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import IsPrivate from './components/IsPrivate'

import './App.css';

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from './pages/ErrorPage';
import DetailsPage from './pages/DetailsPage';
import CreateEntryPage from './pages/CreateEntryPage';
import ProfilePage from './pages/ProfilePage';
import UpdateProfilePage from './pages/UpdateProfilePage';
import TestPage from "./pages/TestPage";
import TestFormPage from "./pages/TestFormPage";


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
         <Route path="/" element={ <HomePage />} />
         <Route path="/login" element={ <LoginPage />} />
         {/* working example of protected route: */}
         <Route path="/create-entry" element={<IsPrivate> <CreateEntryPage/> </IsPrivate> } />                 
          {/* create dynamic routing for the following!!! */}
         <Route path="/details/:Id" element={ <DetailsPage />} />
         <Route path="/profile" element={ <ProfilePage />} />
         <Route path="/update-profile" element={ <UpdateProfilePage />} />
         <Route path="/test-page" element={ <TestPage />} />
         <Route path="/test-form" element={ <TestFormPage />} />
         <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
