import { Box, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import img from "./assets/favicon-96x96.png"

const projects = [
    {
        dates: "2025 - Present",
        place: "Porfolio",
        description: "This portfolio is a Frontend application to sumarize my work as a Software Engineer. I used React JS and Material UI for frontend",  
        img: img,
    },
    {
        dates: "2022 - Present",
        place: "Jalasoft",
        description: "I worked in a E-Procurement Web Application", 
        img: img,
    },
    {
        dates: "2022 - 2022",
        place: "Fundacion Jala",
        description: "A Full Stack Development Specialization in which I worked on an internal project for Fundacion Jala. I developed a Micro Frontend with React JS using Material UI and a MicroServices based backend with SpringBoot in Java",
        img: img,  
    },
]

function Projects() {
    return(
        <Box>
            <Typography variant="h2">My projects</Typography>
            <ImageList cols={3} gap={8}>
                { 
                    projects.map(project => { 
                        return (
                            <ImageListItem key={project.place}>
                                <img 
                                    style={{ height: '25rem', width: '25rem' }}
                                    src={project.img}
                                    alt={project.description}
                                />
                                <ImageListItemBar title={project.place} subtitle={project.dates} />
                            </ImageListItem>
                        )        
                    })
                }
            </ImageList>
        </Box>
    )
}

export default Projects;