import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
function Nav() {
    return (
        <Box>
            <Button color="black" component={Link} to="/">Home</Button>
            <Button color="black" component={Link} to="/projects">My Projects</Button>
            <Button color="black" component={Link} to="/about">About</Button>
            <Button color="black" component={Link} to="/contact">Contact</Button>
        </Box>
    );
}

export default Nav;
