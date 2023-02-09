import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AddReview } from './Components/AddReview';

function App() {
  return (
    <div className="App">
      <AddReview userName={"Testowy Test"} title={"Zmierzch"} />
    </div>
  );
}

export default App;
