import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
// import Axios from "axios";

import HomePage from "./pages/HomePage";
import ErrorPage from './pages/ErrorPage';
import DetailsPage from './pages/DetailsPage';
import CreateEntryPage from './pages/CreateEntryPage';
import ProfilePage from './pages/ProfilePage';
import UpdateProfilePage from './pages/UpdateProfilePage';

function App() {
  return (
    <div>
      {/* insert navbar here */}
      <Routes>
         <Route path="/" element={ <HomePage />} />
         <Route path="/create-entry" element={ <CreateEntryPage />} />
          {/* create dynamic routing for the following: */}
         <Route path="/details/:Id" element={ <DetailsPage />} />
         <Route path="/profile/:Id" element={ <ProfilePage />} />
         <Route path="/update-profile/:id" element={ <UpdateProfilePage />} />
         <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
