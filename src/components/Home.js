import React from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import { Javascript, Android } from "@mui/icons-material";
import PageBox from "./PageBox";
import ReactIcon from "./icons/ReactIcon";
import JavaIcon from "./icons/JavaIcon";
import SpringBootIcon from "./icons/SpringBootIcon";
import PythonIcon from "./icons/PythonIcon";
import PyTorchIcon from "./icons/PyTorchIcon";
import KotlinIcon from "./icons/KotlinIcon";

const skills = [
    "Java",
    "Spring",
    "JavaScript",
    "React",
    "Python",
    "PyTorch",
    "Kotlin",
    "Android",
]

const icons = {
    "Java": JavaIcon,
    "Kotlin": KotlinIcon,
    "Android": Android,
    "Python": PythonIcon,
    "PyTorch": PyTorchIcon,
    "JavaScript": Javascript,
    "React": ReactIcon,
    "Spring": SpringBootIcon,
}

function Home() {
    return(
        <PageBox>
            <Typography variant="h2">Full-Stack Software Engineer</Typography>
            <Typography variant="body1">My name is Aldo Camacho. I'm a pasionate engineer who wants to help people program their dreams</Typography>
            <Typography variant="body1">Do you have any idea but don't know how to make it happen? I can program it for you!</Typography>
            <List>
                <ListItem key={"header"}>
                    <Typography variant="h6">My Skills:</Typography>
                </ListItem>
               {
                skills.map((skill) => (
                    <ListItem key={skill}>
                        {React.createElement(icons[skill])}
                        <Typography variant="body1">{skill}</Typography>
                    </ListItem>
                ))
               }
            </List>
        </PageBox>
    );
}

export default Home;
