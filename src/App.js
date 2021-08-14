import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navigationbar from "./Components/Navigationbar";
import Homepage from "./Components/Homepage";
import './index.css';
import Services from "./Components/Services";
import Products from "./Components/Products";
import SignUp from "./Components/SignUp";


function App() {
  return (
   <React.Fragment>
        <Router>
              <Navigationbar />
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/sign-up" component={SignUp} />
                </Switch>
        </Router>
      
   </React.Fragment>
      
   
  );
}

export default App;
