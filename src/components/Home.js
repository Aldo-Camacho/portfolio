import { Box, List, ListItem, Typography } from "@mui/material";
import { Javascript, Android } from "@mui/icons-material";
import ReactIcon from "./icons/ReactIcon";
import JavaIcon from "./icons/JavaIcon";
import SpringBootIcon from "./icons/SpringBootIcon";
import PythonIcon from "./icons/PythonIcon";
import PyTorchIcon from "./icons/PyTorchIcon";
import KotlinIcon from "./icons/KotlinIcon";

function Home(props) {
    return(
        <Box>
            <Typography variant="h2">Aldo Camacho</Typography>
            <Typography variant="h4">Full-Stack Software Engineer</Typography>
            <Typography variant="body1">I'm a pasionate engineer who wants to help people program their dreams</Typography>
            <Typography variant="body1">Do you have any idea but don't know how to make it happen? I can program it for you!</Typography>
            <Box sx={{textAlign:"left", paddingTop: 8}}>
                <Typography variant="h6">My Skills:</Typography>
                <List>
                    <ListItem key={0}>
                        <JavaIcon/>
                        <Typography variant="body1">Java</Typography>
                    </ListItem>
                    <ListItem key={1}>
                        <SpringBootIcon/>
                        <Typography variant="body1">SpringBoot</Typography>
                    </ListItem>
                    <ListItem key={2}>
                        <Javascript/>
                        <Typography variant="body1">Javascript</Typography>
                    </ListItem>
                    <ListItem key={3}>
                        <ReactIcon/>
                        <Typography variant="body1">ReactJS and React Native</Typography>
                    </ListItem>
                    <ListItem key={4}>
                        <PythonIcon/>
                        <Typography variant="body1">Python</Typography>
                    </ListItem>
                    <ListItem key={5}>
                        <PyTorchIcon/>
                        <Typography variant="body1">Pytorch</Typography>
                    </ListItem>
                    <ListItem key={6}>
                        <KotlinIcon/>
                        <Typography variant="body1">Kotlin</Typography>
                    </ListItem>
                    <ListItem key={7}>
                        <Android/>
                        <Typography variant="body1">Android</Typography>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
}

export default Home;
