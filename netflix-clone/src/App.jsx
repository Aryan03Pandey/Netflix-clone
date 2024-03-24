import React from 'react';
import HomeScreen from './homescreen';
import './App.css';
import LoginScreen from './LoginScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const user = "good";

  return (
    <div className="app">
     {!user? (
      <LoginScreen />
     ) : (
      <Router>
      <Routes>
        <Route exact path='/' element={<HomeScreen />} />
      </Routes>
     </Router>
     )}

     
    </div>
  );
}

export default App;
