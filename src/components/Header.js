import React from "react";
import { AppBar, Box, Button, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import imgsrc from "../assets/AldiBearLogo_3D.png";

function Header() {
    const sizeMatch = useMediaQuery(useTheme().breakpoints.up("md"))
    return (
        <Box>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    <Button variant="biglink" component={Link} to="/" sx={{ display: "flex", flexDirection: sizeMatch ? "row" : "column", alignItems: "center", justifyContent: "center", gap: 0}}>
                        <Box sx={{  width: sizeMatch ? "8vw" : "20vw" }} component="img" alt="The Logo of Aldo Camacho's developer services" src={imgsrc}></Box>
                        <Typography variant={ sizeMatch ? "h4" : "h5"}>Aldo Camacho </Typography>
                        </Button>
                    <Nav/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;