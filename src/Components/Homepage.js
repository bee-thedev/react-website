import React from 'react'
import "../index.css";
import VisualCenter from './VisualCenter';
import Cards from "./Cards";
import Footer from "./Footer";

function Homepage() {
    return (
       <React.Fragment>
           <VisualCenter />
           <Cards />
            <Footer />
       </React.Fragment>
    )
}

export default Homepage
