import React from "react";
import { Box, Button, Card, CardMedia, CardContent, CardActions, Typography } from "@mui/material";
import projects from "./data/projects.json";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

function Projects() {
    const assets = require.context("../assets", true);
    
    return(
        <Box>
            <Typography variant="h2">My projects</Typography>
            <Box sx={{paddingTop:10}}>
            <Carousel showMultiple={true} >
                { projects.map( project => (
                    <Card key={project.project}>
                        <Button component={Link} to={`/projects/${project.id}`}>
                        <CardMedia
                            component="img"
                            image={assets(`./${project.img[0]}`)}
                            sx= {{ maxHeight: "15rem",margin: "auto", objectFit: "contain" }}
                            alt={`Images representing the work done in project ${project.project}`}
                        />
                        </Button>
                        <Box>
                        <CardContent>
                            <Typography color="white" gutterBottom variant="h4" component="div">
                            {project.project}
                            </Typography>
                            <Typography color="white" variant="body1" >
                            {project.dates}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button color="white" component={Link} to={`/projects/${project.id}`} size="small">Learn More</Button>
                        </CardActions>
                        </Box>
                    </Card>
                    )) }
            </Carousel>
            </Box>
        </Box>
    );
}

export default Projects;