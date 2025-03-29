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
            <Carousel showMultiple={true} height={50}>
                { projects.map( project => (
                    <Card key={project.project}>
                        <Button sx={{ margin: "auto" }} component={Link} to={`/projects/${project.id}`}>
                        <CardMedia
                            component="img"
                            image={assets(`./${project.img[0]}`)}
                            sx= {{ width: "100%", margin: "auto", objectFit: "contain" }}
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
                            <Typography color="white" variant="body1" >
                            {project.shortDescription}
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