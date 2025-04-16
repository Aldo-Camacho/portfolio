import React, { useState } from "react";
import { Box, Button, List, ListItem, Paper, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Javascript, Android, Language, DeveloperMode } from "@mui/icons-material";
import PageBox from "./PageBox";
import ReactIcon from "./icons/ReactIcon";
import JavaIcon from "./icons/JavaIcon";
import SpringBootIcon from "./icons/SpringBootIcon";
import PythonIcon from "./icons/PythonIcon";
import PyTorchIcon from "./icons/PyTorchIcon";
import KotlinIcon from "./icons/KotlinIcon";
import MachineLearningIcon from "./icons/MachineLearningIcon";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

const categories = [
    "Web",
    "Mobile",
    "Machine Learning",
]

const categoryColors = {
    "Web": "primary",
    "Mobile": "secondary",
    "Machine Learning": "terciary",
}

const skills = [
    { 
        title: "Java",
        category: "Web",
    },
    { 
        title: "Spring",
        category: "Web",
    },
    { 
        title: "JavaScript",
        category: "Web",
    },
    { 
        title: "Python",
        category: "Machine Learning",
    },
    { 
        title: "PyTorch",
        category: "Machine Learning",
    },
    { 
        title: "Kotlin",
        category: "Mobile",
    },
    { 
        title: "Android",
        category: "Mobile",
    },
    { 
        title: "React Native",
        category: "Mobile",
    },
]

const categoryIcons = {
    "Web": Language,
    "Mobile": DeveloperMode,
    "Machine Learning": MachineLearningIcon,
}

const icons = {
    "Java": JavaIcon,
    "Kotlin": KotlinIcon,
    "Android": Android,
    "Python": PythonIcon,
    "PyTorch": PyTorchIcon,
    "JavaScript": Javascript,
    "React": ReactIcon,
    "React Native": ReactIcon,
    "Spring": SpringBootIcon,
}

const CategoryCard = ({ category, sizeMatch }) => {
    return (
    <Paper sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", borderRadius: 3, width: sizeMatch ? "25vw" : "80vw", alignSelf: sizeMatch ? "stretch" : "center", minHeight: "fit-content" }}>
        <Box sx={{ paddingX: 8, paddingY: 2 }}>
            {React.createElement(categoryIcons[category], { sx: { paddingY: 2, fontSize: 100 } , color: categoryColors[category] })}
        <Typography variant="h6" whiteSpace="nowrap">{category}</Typography>
        </Box>
        <List sx={{ flexGrow: 1 }}>
            {
            skills.filter((skill) => skill.category === category).map((skill) => (
                <ListItem key={skill.title}>
                    {React.createElement(icons[skill.title])}
                    <Typography variant="body1">{skill.title}</Typography>
                </ListItem>
            ))
            }
        </List>
        <Button color={ categoryColors[category] } sx={{ border: 2, borderRadius: 3, margin: 2 }} component={Link} to={{ pathname: "/projects", search: `?category=${category}` }}><Typography variant="body2" sx={{ fontWeight: "bold" }}>See Projects</Typography></Button>
    </Paper>
)
}

function Home() {
    const sizeMatch = useMediaQuery(useTheme().breakpoints.up("md"));

    return(
        <PageBox>
            <Paper sx={{ width: "100vw", alignSelf: "center", margin: 0, paddingY: 4 }}>
                <Typography variant="h4">Full-Stack Software Engineer</Typography>
                <Box>
                    <Typography variant="body1">My name is Aldo Camacho. I'm a pasionate engineer who wants to help people program their dreams</Typography>
                    <Typography variant="body1">Do you have any idea but don't know how to make it happen? I can program it for you!</Typography>
                </Box>
            </Paper>
            <Box display="flex" flexDirection={ sizeMatch ? "row" : "column" } alignContent="center" gap={2} margin="auto" marginTop={8} marginBottom={8} width="60vw">
                {
                    categories.map(category => (<CategoryCard key={category} category={category} sizeMatch={sizeMatch} />))
                }
            </Box>
            <ContactForm/>
        </PageBox>
    );
}

export default Home;
