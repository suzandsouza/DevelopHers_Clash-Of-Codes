import './App.css';
import React from 'react';
import {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { Link } from '@material-ui/core';
const axios = require('axios');

function PanApp() {

	const [pan, setPan] = useState('');
	const [status, setStatus] = useState('');
	const handlePanChange = event => {
		let val = event.target.value 
		function success(){
			setPan('Success ! Valid PAN Number')
			window.open("https://localhost:3000/");
			axios.post('http://127.0.0.1:8000/panverify/', {
			panId: {val},
			
		  })
		  .then(function (response) {
			console.log(response['data'])
			setStatus(response['data']);
		  })
		  .catch(function (error) {
			console.log(error);
		  });
		}
		if (val.length == 10) {
			success()
			
	
			
		}
		else{
			setPan('Enter a 10 Digit valid PAN Number')
			setStatus('');
		}
		
	  };

  return (
    <div className="App">
	<AppBar position="static">
		<Toolbar>
			
			<Typography variant="h6" >
			DEVHERS PAN Verification App
			</Typography>
		</Toolbar>
	</AppBar>
	
      <div className='myForm'>
		<Typography variant="h6" >
			Please Enter your Pan Number 
		</Typography>
		<TextField 
		fullWidth
		className='panId' 
		onChange={handlePanChange} 
		label="Pan Number" 
		variant="filled" 
		color="primary" 
		focused />
		<h3>{pan}</h3>
		{/* <div><h2>{JSON.stringify(status)}</h2></div> */}
      </div>
		<div className='resp'>

		{Object.entries(status).map(([key,val]) => (
			<h3 style={ {color : "green" }}  key={key}><strong>{key}</strong>: {JSON.stringify(val)}</h3>
		))}
		
		</div>
    </div>
  );
}

export default PanApp;
