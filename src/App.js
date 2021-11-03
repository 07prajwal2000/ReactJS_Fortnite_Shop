import React from 'react';
import './App.css';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Nav from './Pages/Nav';
import Home from './Pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ShopFullDetails from './Pages/ShopFullDetails';

function App() {
  return (
    <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shopfulldetails/:itemId" exact  component={ShopFullDetails} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
