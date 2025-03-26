import { AppBar, Box, Button, Toolbar } from "@mui/material"
import { Link } from "react-router-dom"
import Nav from "./Nav"
import imgsrc from "./assets/favicon-96x96.png"

function Header() {
    return (
        <Box>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    <Button variant="biglink" component={Link} to='/'>
                        <Box component="img" alt="The Logo of Aldo Camacho's developer services" src={imgsrc}></Box>
                        Aldo Camacho
                        </Button>
                    <Nav/>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header