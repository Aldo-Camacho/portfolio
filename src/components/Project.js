import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import projects from "./data/projects.json";

function Project() {
    const {id} = useParams();
    const project = projects.find(pr => pr.id == id);
    const assets = require.context("../assets", true);

    return (
        <Box>
            <Typography variant="h2">{project.project}</Typography>
            <Typography variant="h6">{project.dates}</Typography>
            <Box sx={{  width: "25rem" }} component="img" alt={`Images representing the work done in project ${project.project}`} src={assets(`./${project.img}`)}></Box>
            <Typography variant="body1">{project.description}</Typography>
        </Box>
    );
}

export default Project;