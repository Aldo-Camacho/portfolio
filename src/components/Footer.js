import React from "react";
import { BottomNavigation, IconButton, Paper } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import THMIcon from "./icons/THMIcon";

function Footer() {
    return (
        <Paper elevation={5} sx={{ marginBottom: 0, marginTop: 0, height: "fit-content", maxHeight: "10vh", backgroundColor: "transparent", minWidth: "100vw" }}>
            <BottomNavigation>
                <IconButton href="https://github.com/Aldo-Camacho">
                    <GitHubIcon/>
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/aldo-francisco-garcia-camacho">
                    <LinkedInIcon/>
                </IconButton>
                <IconButton href="https://tryhackme.com/p/camaccio">
                    <THMIcon />
                </IconButton>
            </BottomNavigation>
        </Paper>
    );
}

export default Footer;