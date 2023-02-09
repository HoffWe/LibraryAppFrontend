import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AddReview } from './Components/AddReview';
import {AddBook} from "./Components/AddBook";

function App() {
  return (
    <div className="App">
      <AddReview userName={"Testowy Test"} title={"Zmierzch"} />
        <AddBook/>
    </div>
  );
}

export default App;
