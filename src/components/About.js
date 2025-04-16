import React from "react";
import { List, ListItem, Typography, Paper, Box } from "@mui/material";
import PageBox from "./PageBox";
import { Interests, RocketLaunch, School } from "@mui/icons-material";
import TargetIcon from "./icons/TargetIcon";

function About() {
    return (
        <PageBox>
            <Paper sx={{ width: "100vw", alignSelf: "center", margin: 0, paddingY: 4  }}>
                <Typography variant="h4" >About me</Typography>
                <Typography variant="body1" >Know me better!</Typography>
            </Paper>
            <Paper sx={{ borderRadius: 8, width: "95vw", alignSelf: "center", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", margin: "auto", marginTop: 8, marginBottom: 4 }}>
                <Box sx={{ paddingX: 8, paddingY: 2 }}>
                    <School/>
                    <Typography variant="h6">Education</Typography>
                </Box>
                <List>
                <ListItem key={1}>
                    <Typography variant="body1">I have a Bachelors Degree in Engineering in Bionics</Typography>
                </ListItem>
                <ListItem key={2}>
                    <Typography variant="body1">I am a Professional Technician in Electronics</Typography>
                </ListItem>
            </List>
            </Paper>
            <Paper sx={{ borderRadius: 8, width: "95vw", alignSelf: "center", margin: "auto", marginTop: 4, marginBottom: 4 , display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                <Box sx={{ paddingX: 8, paddingY: 2 }}>
                    <Interests/>
                    <Typography variant="h6">Interests</Typography>
                </Box>
                <List>
                <ListItem key={4}>
                    <Typography variant="body1">I love software developing and always want to work in projects that have a significant impact!</Typography>
                </ListItem>
                <ListItem key={5}>
                    <Typography variant="body1">I also love robotics and even if I don't work professionally on it I am capable of designing interesting prototypes!</Typography>
                </ListItem>
                <ListItem key={6}>
                    <Typography variant="body1">I am into Ethical Hacking and try to learn about CyberSecurity for Funsies!</Typography>
                    </ListItem>
                <ListItem key={7}>
                    <Typography variant="body1">On my free time I always try to learn something new. I consider myself a Jack of all trades and a master of whatever the project needs from me!</Typography>
                </ListItem>
                </List>
            </Paper>
            <Paper sx={{ borderRadius: 8, width: "95vw", alignSelf: "center", margin: "auto", marginTop: 4, marginBottom: 4 , display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                <Box sx={{ paddingX: 8, paddingY: 2 }}>
                <RocketLaunch/>
                <Typography variant="h6">What is my Mision?</Typography>
                </Box>
                <List>
                <ListItem key={9}>
                    <Typography variant="body1">To help people who need a technical hand to make all their great ideas come true</Typography>
                </ListItem>
                <ListItem key={10}>
                    <Typography variant="body1">To give robust and creative solutions to the people's needs</Typography>
                </ListItem>
                </List>
            </Paper>
            <Paper sx={{ borderRadius: 8, width: "95vw", alignSelf: "center", margin: "auto", marginTop: 4, marginBottom: 4, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                <Box sx={{ paddingX: 8, paddingY: 2 }}>
                <TargetIcon/>
                <Typography variant="h6">What is my Goal?</Typography>
                </Box>
                <List>
                <ListItem key={12}>
                    <Typography variant="body1">To become the goto engineer for the people that I help build their dreams</Typography>
                </ListItem>
                <ListItem key={13}>
                    <Typography variant="body1">To continue growing and making even better solutions to problems</Typography>
                </ListItem>
                </List>
            </Paper>
        </PageBox>
    );
}

export default About;