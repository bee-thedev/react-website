import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navigationbar from "./Components/Navigationbar";
import Homepage from "./Components/Homepage";
import './index.css';


function App() {
  return (
   <React.Fragment>
        <Router>
              <Navigationbar />
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    

                </Switch>
        </Router>
      
   </React.Fragment>
      
   
  );
}

export default App;
