 import React, { Component } from 'react';
 import Navbar from "./components/Navbar";

import Landing from './components/Landing';
import { Route , Switch } from "react-router-dom";
import Products from './components/Products';
import About from './components/About'; 

import Footer from './components/Footer';




class App extends Component {
  render() {
    return (
      <div>
         <Navbar/>
           <Switch>
              <Route path="/products" component={Products}/>
              <Route path="/About" component={About}/>
              <Route path="/" component={Landing}/>
           </Switch>
         <Footer/>
        
      </div>
    );
  }
}

export default App;