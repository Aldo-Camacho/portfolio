import React from "react";
import { Box, Button, Card, CardMedia, CardContent, CardActions, Typography, Paper } from "@mui/material";
import projects from "./data/projects.json";
import { Link, useSearchParams } from "react-router-dom";
import PageBox from "./PageBox";
import Carousel from "./Carousel";

function Projects() {
    const assets = require.context("../assets", true);
    const [ searchParams, setSearchParams ] = useSearchParams();
    const categoryFilter = searchParams.get("category");
    const categorizedProjects = categoryFilter ? projects.filter(proj => proj.categories.includes(categoryFilter)) : projects;
    return(
        <PageBox>
            <Paper sx={{ borderRadius: 8, width: "95vw", alignSelf: "center", margin: 8, paddingY: 4  }}>
                <Typography variant="h4">My Projects</Typography>
            </Paper>
            <Box>
            <Carousel showMultiple={true} height={50} >
                { categorizedProjects.map( project => (
                    <Card key={project.project}>
                        <Button sx={{ margin: "auto" }} component={Link} to={`/projects/${project.id}`}>
                        <CardMedia
                            component="img"
                            image={assets(`./${project.thumbnail}`)}
                            sx= {{ width: "100%", maxHeight: "15vh", margin: "auto", objectFit: "contain" }}
                            alt={`Images representing the work done in project ${project.project}`}
                        />
                        </Button>
                        <Box bottom={0}>
                        <CardContent>
                            <Typography color="white" gutterBottom variant="h6" component="div">
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
            { categoryFilter && <Button sx={{ backgroundColor: "whitesmoke", boxShadow: 3, margin: "1rem", width: "fit-content", alignSelf: "center", border: 2, borderRadius: 3, margin: 2 }} onClick={() => {setSearchParams(searchParams.delete("category"))}}>See All Projects</Button> }
            </Box>
        </PageBox>
    );
}

export default Projects;