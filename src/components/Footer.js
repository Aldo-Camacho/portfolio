import React from "react";
import { BottomNavigation, IconButton, Paper } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import icons from "./data/icons.json";

function Footer() {
    return (
        <Paper elevation={5} sx={{ marginBottom: 0, marginTop: 0, height: "fit-content", maxHeight: "10vh", backgroundColor: "transparent", minWidth: "100vw" }}>
            <BottomNavigation>
                <IconButton href="https://github.com/Aldo-Camacho">
                    <Icon icon={icons["GitHub"]}/>
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/aldo-francisco-garcia-camacho">
                    <Icon icon={icons["LinkedIn"]}/>
                </IconButton>
                <IconButton href="https://tryhackme.com/p/camaccio">
                    <Icon icon={icons["TryHackMe"]}/>
                </IconButton>
            </BottomNavigation>
        </Paper>
    );
}

export default Footer;