import React from "react";
import { Box, Button, Card, CardMedia, Link, Typography, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import PageBox from "./PageBox";
import Carousel from "./Carousel";
import { Icon } from "@iconify/react/dist/iconify.js";
import projects from "./data/projects.json";
import icons from "./data/icons.json"

function Project() {
    const {id} = useParams();
    const project = projects.find(pr => pr.id == id);
    const assets = require.context("../assets", true); 

    return (
        <PageBox>
            <Paper sx={{ width: "100vw", alignSelf: "center", margin: 0, padding: 4 }}>
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
            <Paper sx={{ borderRadius: 8, width: "95vw", alignSelf: "center", margin: 0, padding: 4 }}>
            <Typography variant="body1">{project.description}</Typography>
            { project.stack && 
                <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} gap={"1vw"}>
                    {project.stack.map((tech) => (
                        <Box key={tech}>
                            <Icon width="24px" height="24px" icon={icons[tech]}/>
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