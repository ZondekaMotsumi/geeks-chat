import React from "react";
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";


///Copyrights function{footer}
const Footer = (props) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright ©SoloDev'}
            <Link color="inherit"
                  to="/"
            >
                Geeks Zone
            </Link>
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
export default Footer