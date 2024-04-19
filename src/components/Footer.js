// import * as React from 'react';
// import Box from '@mui/material/Box';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

import InfoCards from "./InfoCards";
import FooterMain from "../assets/FooterMain.png";
import FooterLogo from "../assets/FooterLogo.png";
import SocialMediaIcons from "./SocialMediaIcon";
import { unstable_composeClasses } from "@mui/material";

function Footer({data,address}){
    
    return(
        <div>
            <img src={FooterMain}/>
            <InfoCards button={true} data={data} dataIndex={0}/>
            <div>
                <div>
                    <img src={FooterLogo}/>
                    <div>
                       <p> Address </p>
                        <p>
                            {address}   
                        </p> 
                    </div>
            
                    <SocialMediaIcons />

                    <div>
                        <a href="/aboutUs">About Us</a>
                        <a href="/services">Services</a>
                        <a href="/contactUs">Contact Us</a>
                    </div>

                    <p>Delivering Excellence, Every Mile. © [Back Block Logistics] [2024]. All rights reserved</p>
                </div>
                

            </div>

        </div>
    )
    
};

export default Footer;