import { Box, Button, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import projects from "./data/projects.json";
import { Link } from "react-router-dom";

function Projects() {
    const assets = require.context("../assets", true);
    
    return(
        <Box>
            <Typography variant="h2">My projects</Typography>
            <ImageList cols={3} gap={8}>
                { 
                    projects.map(project => { 
                        return (
                            <Button component={Link} to={`/projects/${project.id}`} key={project.project}>
                            <ImageListItem key={project.project} sx={{ boxShadow:3 }}>
                                <img 
                                    style={{ height: "100%", width: "25rem", objectFit: "contain" }}
                                    src={assets(`./${project.img}`)}
                                    alt={project.description}
                                />
                                <ImageListItemBar position="below" title={project.project} subtitle={project.dates} />
                            </ImageListItem>
                            </Button>
                        );        
                    })
                }
            </ImageList>
        </Box>
    );
}

export default Projects;