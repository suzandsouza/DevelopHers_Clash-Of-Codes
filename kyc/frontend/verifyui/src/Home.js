import './App.css';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

function Home() {

  return (
    <div className="App">
	<AppBar position="static">
		<Toolbar>
			<IconButton edge="start"  color="inherit" aria-label="menu">
						</IconButton>
			<Typography variant="h6" >
			Devhers SETU Verification App
			</Typography>
           
		</Toolbar>
	</AppBar>
	<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCyjm8LrN-Qfaj_kJvuPu3ugeILL_bOnG7Ww&usqp=CAU"></img>
  <div style={ { padding :"50%", fontsize:"40px"}}>
            <Button href="panapp"> PAN </Button>       
            </div>
    </div>
  );
}

export default Home;
