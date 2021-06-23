import React, {Fragment, useEffect, useState} from 'react';
import './Header.css';
import Button from "@material-ui/core/Button";
// import {ReactComponent as ReactLogo} from '../../assets/logo.svg'; 


const Header = function (props) {

   
    return (
        <Fragment>
        <div className="header">
          {/* <ReactLogo className="Logo"/> */}
          <img className="Logo" src={require("../../assets/logo.svg") }/>,
         <Button className="Login" variant="contained" color="default">
            Login 
         </Button>
         <Button className="Logout" variant="contained" color="default">
            Logout 
         </Button>
         <Button className="BookShow" variant="contained" color="primary" >
             Book Show
         </Button>
         
        </div>            
        </Fragment>
    )
}

export default Header;
