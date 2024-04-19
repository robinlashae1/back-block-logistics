import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Favorite from '@mui/icons-material/Favorite';
import HeaderLogo from "../assets/HeaderLogo.png"

function Header(){
    return(
        <div>
            <a href="/">
               <img src={HeaderLogo}/> 
            </a>
            
            <a href='/aboutUs'>
                <button >
                    About Us
                </button>
            </a>
            <a href='/services'>
                <button>
                    Services
                </button>
            </a>
            <a href='/contactUs'>
                <button>
                    Contact
                </button>  
            </a>
            {/* <a href='/about'> */}
                <button>
                    Qet a quote
                </button>
            {/* </a> */}
        </div>
    )
};

export default Header;