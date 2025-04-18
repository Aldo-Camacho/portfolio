import React from "react";
import { Box, Button, List, ListItem, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import PageBox from "./PageBox";
import ContactForm from "./ContactForm";
import { Icon } from "@iconify/react/dist/iconify.js";
import icons from "./data/icons.json"

const categories = [
    "Web",
    "Mobile",
    "Machine Learning",
]

const categoryColors = {
    "Web": "#2E91D1",
    "Mobile": "#D12E91",
    "Machine Learning": "#91D12E",
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
        title: "React",
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


const CategoryCard = ({ category, sizeMatch }) => {
    return (
    <Paper sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", borderRadius: 3, width: sizeMatch ? "25vw" : "80vw", alignSelf: sizeMatch ? "stretch" : "center", minHeight: "fit-content" }}>
        <Box sx={{ paddingX: 8, paddingY: 2 }}>
            <Icon icon={icons[category]} height="80px" width="80px" color={categoryColors[category]} style={{ paddingY: "8px" }}/>
        <Typography variant="h6" whiteSpace="nowrap">{category}</Typography>
        </Box>
        <List sx={{ flexGrow: 1 }}>
            {
            skills.filter((skill) => skill.category === category).map((skill) => (
                <ListItem key={skill.title}>
                    <Icon width="24px" height="24px" icon={icons[skill.title]}/>
                    <Typography variant="body1">{skill.title}</Typography>
                </ListItem>
            ))
            }
        </List>
        <Button sx={{ border: 2, borderRadius: 3, margin: 2, color: categoryColors[category] }} component={Link} to={{ pathname: "/projects", search: `?category=${category}` }}><Typography variant="body2" sx={{ fontWeight: "bold" }}>See Projects</Typography></Button>
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
