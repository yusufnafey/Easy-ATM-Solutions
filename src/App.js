import React from 'react';
import './App.scss';
import './App.css';
import Navigation from './Navigation'
import Footer from './Footer'
import { Alert, Button } from 'reactstrap';

function App() {
  return (
    <div className="App">
    <Navigation />
      <header className="App-header">
      <div class="under-construction-container">
        <h1 class="under-construction-title">🚧UNDER CONSTRUCTION🚧</h1>
        <h4 class="under-construction-subtitle">(Coming Spring 2020)</h4>
      </div>

        {/* <p>
Easy ATM Solutions
        </p> */}
        {/* <Footer /> */}
        {/* <Alert color="primary">
  This is a primary Alert — check it out!
</Alert>
        <Button outline color="primary">
  This is a primary button — check it out!
</Button> */}
      </header>
    </div>
  );
}

export default App;
