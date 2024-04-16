import React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';


const Header = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: 'black', marginBottom: 50 }}>
            <Toolbar>
                <a href="https://zwellhome.com">
                    <IconButton edge="start" color="inherit" aria-label="logo">
                        <img src="/ZwellLogo.png" alt="logo" style={{ height: '50px' }} />
                    </IconButton>
                </a>
            </Toolbar>
        </AppBar>
    );
}
export default Header;