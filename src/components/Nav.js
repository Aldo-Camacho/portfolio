import React, { useState 

} from "react";
import { Box, Button, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import { Link, useNavigate } from "react-router-dom";

function Nav() {
    const sizeMatch = useMediaQuery(useTheme().breakpoints.up("md"))
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose= () => {
        setAnchorEl(null);
    }

    const handleClick = (target) => {
        handleClose();
        navigate(target)
    }

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

    if (sizeMatch) {
        return (
            <Box>
                {
                    links.map((link) => (
                        <Button key={ link.target } color="black" component={Link} to={link.target}>{link.title}</Button>
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
                onClick={handleMenu}>
                <MenuIcon/>
            </IconButton>
            <Menu 
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                {
                    links.map((link) => (
                        <MenuItem key={link.target} onClick={() => handleClick(link.target)}>{link.title}</MenuItem>
                    ))
                }
            </Menu>
        </div>
    )
}

export default Nav;
