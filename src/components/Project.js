import React from "react";
import { Box, Button, Card, CardMedia, Link, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import projects from "./data/projects.json";
import Carousel from "./Carousel";

function Project() {
    const {id} = useParams();
    const project = projects.find(pr => pr.id == id);
    const assets = require.context("../assets", true); 

    return (
        <Box>
            <Typography variant="h2">{project.project}</Typography>
            <Typography variant="h6">{project.dates}</Typography>
            <Box sx={{ display: "flex", justifyContent:"center", alignContent: "center", height: "25rem", width: "80vw", margin:"auto", padding: 4 }}>
                <Carousel showMultiple={ project.img.length > 2 }>
                { project.img.map( image => (
                    <Card key={project.project}>
                        <CardMedia
                            component="img"
                            image={assets(`./${image}`)}
                            sx= {{ maxHeight: "25rem", margin: "auto", objectFit:"contain", }}
                            alt={`Images representing the work done in project ${project.project}`}
                        />
                    </Card>
                    )) }
                </Carousel>
            </Box>
            <Typography variant="body1">{project.description}</Typography>
            { project.url && <Button sx={{ background: "linear-gradient(135deg, rgba(234,21,198,1) 0%, rgba(21,198,234,1) 50%, rgba(198,234,21,1) 100%);", boxShadow: 3, margin: "1rem" }} component={Link} href={ project.url } color={"black"}>Try it out!</Button>}
        </Box>
    );
}

export default Project;