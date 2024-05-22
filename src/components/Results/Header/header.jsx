import React from 'react';
import logo from './logo.png'
import { AppBar, Toolbar, IconButton } from '@mui/material';


const Header = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: 'black', marginBottom: 50 }}>
            <Toolbar>
                <a href="https://zwellhome.com" style={{textDecoration: 'none',marginLeft: '10px'}}>
                    <div style={{display :'flex'}}>
                        <IconButton edge="start" color="inherit" aria-label="logo" padding ='10px'>
                            <img src={logo} alt="logo" style={{ height: '50px' }} />
                        </IconButton>
                        <div style={{letterSpacing: '2px', padding: '8px', fontSize: '22px', color: 'white', fontFamily: 'initial', marginTop: '18px'}}>Zwell</div>
                    </div>
                </a>
            </Toolbar>
        </AppBar>
    );
}
export default Header;