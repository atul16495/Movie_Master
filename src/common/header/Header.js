import React, {Fragment, useEffect, useState,Component} from 'react';
import './Header.css';
import {Button,Tab,Tabs,Paper,TextField,FormControl,InputLabel,Input,Typography} from '@material-ui/core';
import Modal from "react-modal";
import BookShow from "../../screens/bookshow/BookShow.js";
import Box from '@material-ui/core/Box';
import Login from './Login.js'
import Signup from './Register.js'

// import {ReactComponent as ReactLogo} from '../../assets/logo.svg'; 


const  Header =() => {
   
  const [value,setValue]=useState(0)
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const paperStyle={
    width:340,
    margin:"auto",

     }

  const ModalStyles = {
    content: {
        width: 350,
        margin:"auto"
        
        
    },
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={props.value !== props.index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {props.value === props.index && (
          
            <Typography>{children}</Typography>
         
        )}
      </div>
    );
  }

  

const [loginIsOpen, setloginIsOpen] = useState(false)
const [ShowIsOpen, setShowIsOpen] = useState(false)
        
    
        return(
        <Fragment>

          {/*-------Header Component START-------*/}
        <div className="header">
          {/* <ReactLogo className="Logo"/> */}
          <img className="Logo" src={require("../../assets/logo.svg") }/>,
         <Button className="Login" variant="contained" color="default" onClick={()=>setloginIsOpen(true)}>
            Login 
         </Button>
         <Button className="Logout" variant="contained" color="default" >
            Logout 
         </Button>
         <Button className="BookShow" variant="contained" color="primary" onClick={()=>setShowIsOpen(true)} >
             Book Show
         </Button>
         
        </div>
        {/*-------Header Component END-------*/}
        

               
       {/*   <!-- login --> */}
           
     <Modal isOpen={loginIsOpen} style={ModalStyles} onRequestClose={()=> setShowIsOpen(false)}>
        <Paper style={paperStyle}>
        <Tabs
          value={value}
          className="Tabs"
          onChange={handleChange}          
        >
          <Tab label="Login"/>
          <Tab label="Register"  />
        </Tabs>
        <TabPanel value={value} index={0}>
         <Login handleChange={handleChange}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Signup/>
        </TabPanel>
        </Paper>
      </Modal>           
       
       {/*   <!-- BookShow --> */}
       <Modal isOpen={ShowIsOpen} style={ModalStyles} onRequestClose={()=> setShowIsOpen(false)}>
        <Paper style={paperStyle}>
        <Tabs
          value={value}
          className="Tabs"
          onChange={handleChange}          
        >
          <Tab label="Login"/>
          <Tab label="Register"  />
        </Tabs>
        <TabPanel value={value} index={0}>
         <Login handleChange={handleChange}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Signup/>
        </TabPanel>
        </Paper>
       
        
        
      </Modal>           
       
        </Fragment>
        )
    
}

export default Header;


