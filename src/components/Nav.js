import React, { useState 

} from "react";
import { Box, Button, IconButton, List, ListItem, SwipeableDrawer, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import icons from "./data/icons.json"

function Nav() {
    const sizeMatch = useMediaQuery(useTheme().breakpoints.up("md"))
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();

    const links = [
        { 
            title: "Home",
            target: "/"
        }, 
        {
            title: "My Projects",
            target: "/projects"
        },
        {
            title: "About",
            target: "/about"
        },
        {
            title: "Contact",
            target: "/contact"
        }
    ]

    const toButtonLink = (link) => (
        <Button sx={{ backgroundColor: pathname === link.target || (link.target !== "/" && pathname.includes(link.target)) ? "whitesmoke" : "transparent"}} key={ link.target } color="black" component={Link} to={link.target}>
            <Icon height="24px" icon={icons[link.title]}/>
            {link.title}
        </Button>
    )
    
    if (sizeMatch) {
        return (
            <Box>
                {
                    links.map((link) => (
                        toButtonLink(link)
                    ))
                }
            </Box>
        );
    }
    return (
        <div>
            <IconButton 
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => { setOpen(true) }}>
                <MenuIcon/>
            </IconButton>
            <SwipeableDrawer open={open} onClose={() => { setOpen(false) }} >
                <Box onClick={() => { setOpen(false) }}>
                    <List>
                        {
                            links.map((link) => (
                                <ListItem key={link.target}>
                                    {toButtonLink(link)}
                                </ListItem>
                            ))
                        }
                    </List>
                </Box>
            </SwipeableDrawer>
        </div>
    )
}

export default Nav;
