import React from "react";
import { AppBar, Box, Button, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import imgsrc from "../assets/AldiBearLogo_3D.png";

function Header() {
    const theme = useTheme();
    const sizeMatch = useMediaQuery(theme.breakpoints.up("md"))
    return (
        <Box >
            <AppBar position="static" color="transparent" elevation={3} sx={{ maxHeight: "15vh", borderRadius: "10px" }}>
                <Toolbar>
                    <Button variant="biglink" component={Link} to="/" sx={{ height: sizeMatch ? "auto" : "15vh", display: "flex", flexDirection: "row" , alignItems: "center", justifyContent: "center", gap: 0}}>
                        <Box sx={{ maxHeight: "12vh" }} component="img" alt="The Logo of Aldo Camacho's developer services" src={imgsrc}></Box>
                        { sizeMatch && <Box display="flex" flexDirection="column" alignItems="flex-start" margin={2} ><Typography variant={ "h4" }>Aldo</Typography><Typography variant={ "h4" }>Camacho</Typography></Box> }
                        </Button>
                    <Nav/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;