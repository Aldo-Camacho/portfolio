import React from "react";
import { AppBar, Box, Button, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import imgsrc from "../assets/AldiBearLogo_3D.png";

function Header() {
    const theme = useTheme();
    const sizeMatch = useMediaQuery(theme.breakpoints.up("md"))
    const extraSmall = useMediaQuery(theme.breakpoints.up("sm"))
    return (
        <Box >
            <AppBar position="static" color="transparent" elevation={0} sx={{ maxHeight: "15vh" }}>
                <Toolbar>
                    <Button variant="biglink" component={Link} to="/" sx={{ height: sizeMatch ? "auto" : "15vh", display: "flex", flexDirection: "row" , alignItems: "center", justifyContent: "center", gap: 0}}>
                        <Box sx={{ maxHeight: "15vh" }} component="img" alt="The Logo of Aldo Camacho's developer services" src={imgsrc}></Box>
                        { sizeMatch && <Typography variant={ "h4" }>Aldo Camacho </Typography> }
                        </Button>
                    <Nav/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;