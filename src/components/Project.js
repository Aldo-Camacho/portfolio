import React from "react";
import { Box, Button, Card, CardMedia, Link, Typography, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import { Javascript, Android } from "@mui/icons-material";
import projects from "./data/projects.json";
import Carousel from "./Carousel";
import PageBox from "./PageBox";
import JavaIcon from "./icons/JavaIcon";
import KotlinIcon from "./icons/KotlinIcon";
import PythonIcon from "./icons/PythonIcon";
import PyTorchIcon from "./icons/PyTorchIcon";
import ReactIcon from "./icons/ReactIcon";
import SpringBootIcon from "./icons/SpringBootIcon";

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

function Project() {
    const {id} = useParams();
    const project = projects.find(pr => pr.id == id);
    const assets = require.context("../assets", true); 

    return (
        <PageBox>
            <Paper sx={{ borderRadius: 8, width: "95vw", alignSelf: "center", margin: 8, marginBottom: 4, padding: 4 }}>
                <Typography variant="h4">{project.project}</Typography>
                <Typography variant="h6">{project.dates}</Typography>
            </Paper>
            <Box sx={{ display: "flex", justifyContent:"center", alignItems: "center", width: "80vw", margin:"auto", padding: 4 }}>
                <Carousel showMultiple={ project.img.length > 2 }>
                { project.img.map( image => (
                    <Card key={project.project}>
                        <CardMedia
                            component="img"
                            image={assets(`./${image}`)}
                            sx= {{ maxHeight: "100%", margin: "auto", objectFit:"contain", }}
                            alt={`Images representing the work done in project ${project.project}`}
                        />
                    </Card>
                    )) }
                </Carousel>
            </Box>
            <Paper sx={{ borderRadius: 8, width: "95vw", alignSelf: "center", margin: 4, padding: 4 }}>
            <Typography variant="body1">{project.description}</Typography>
            { project.stack && 
                <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} gap={"1vw"}>
                    {project.stack.map((tech) => (
                        <Box key={tech}>
                            {React.createElement(icons[tech])}
                            <Typography variant="body1">{tech}</Typography>
                        </Box>
                    ))}
                </Box>
            }
            { project.url && <Button sx={{ backgroundColor: "whitesmoke", boxShadow: 3, margin: "1rem", width: "fit-content", alignSelf: "center", border: 2, borderRadius: 3, margin: 2 }} component={Link} href={ project.url } >Check it out!</Button>}
            </Paper>
        </PageBox>
    );
}

export default Project;