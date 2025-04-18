import React from "react";
import { List, ListItem, Typography, Paper, Box, Divider, Button } from "@mui/material";
import PageBox from "./PageBox";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

function About() {
    return (
        <PageBox>
            <Paper sx={{ width: "100vw", alignSelf: "center", margin: 0, paddingY: 4  }}>
                <Typography variant="h5" >About me</Typography>
                <Typography variant="body1" >Know me better!</Typography>
            </Paper>
            <Paper sx={{ borderRadius: 8, width: "90vw", alignSelf: "center", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", margin: "auto", marginTop: 8, marginBottom: 4, padding: 4 }}>
                <Divider sx={{ borderColor: "#2E91D1", borderWidth: 1, alignSelf:"flex-start", width:"95%", paddingX: 4 }} />
                <Typography variant="body1" alignSelf="flex-start" color="primary" >Education</Typography>
                <Box width="100%" display="flex" flexDirection="row" justifyContent="left" paddingBottom={4}>
                    <Box sx={{ paddingRight: 8, paddingY: 0, alignSelf:"flex-start" }}>
                        <Icon icon="qlementine-icons:education-16" color="#2E91D1" width="80px" height="80px"/>
                    </Box>
                    <List >
                    <ListItem key={1} >
                        <Icon icon="icon-park-outline:dot"/>
                        <Typography variant="h5">Engineer in Bionics | Instituto Politécnico Nacional</Typography>
                    </ListItem>
                    <Typography variant="body1" textAlign="left" paddingX={6} >Combining Biology with tech to design innovative systems</Typography>
                    <ListItem key={2} >
                        <Icon icon="icon-park-outline:dot"/>
                        <Typography variant="h5">Professional Technician in Electronics | Colegio Nacional De Educación Profesional Técnica</Typography>
                    </ListItem>
                    <Typography variant="body1" textAlign="left" paddingX={6} >Hands on experience in Hardware and Software prototyping and design </Typography>
                    </List>
                </Box>
                <Divider sx={{ borderColor: "#D12E91", borderWidth: 1, alignSelf:"flex-start", width:"95%", paddingX: 4 }} />
                <Typography variant="body1" alignSelf="flex-start" color="secondary" >Interests and Expertise</Typography>
                <Box width="100%" display="flex" flexDirection="row" justifyContent="left" paddingBottom={4}>
                    <Box sx={{ paddingRight: 8, paddingY: 0, alignSelf:"flex-start" }}>
                        <Icon icon="material-symbols:interests-outline-rounded" color="#D12E91" width="80px" height="80px"/>
                    </Box>
                    <List>
                    <ListItem key={4}>
                        <Icon icon="icon-park-outline:dot"/>
                        <Typography variant="h5">Full Stack Development</Typography>
                    </ListItem>
                    <Typography variant="body1" textAlign="left" paddingX={6} >Passionate about building scalable apps that solve real problems</Typography>
                    <ListItem key={5}>
                        <Icon icon="icon-park-outline:dot"/>
                        <Typography variant="h5">Robotics Hobbyist</Typography>
                    </ListItem>
                    <Typography variant="body1" textAlign="left" paddingX={6} >Design prototypes that bridge Hardware and Software</Typography>
                    <ListItem key={6}>
                        <Icon icon="icon-park-outline:dot"/>
                        <Typography variant="h5">CyberSecurity Enthusiast</Typography>
                    </ListItem>
                    <Typography variant="body1" textAlign="left" paddingX={6} >Constantly exploring ethical hacking to build more secure systems (and just for the thrill of breaking them... responsibly)</Typography>
                    <ListItem key={7}>
                        <Icon icon="icon-park-outline:dot"/>
                        <Typography variant="h5">Jack of all trades?</Typography>
                    </ListItem>
                    <Typography variant="body1" textAlign="left" paddingX={6} >More like: "A FULL stack engineer with experience on the tools needed to get the job done"</Typography>
                    </List>
                </Box>
                <Divider sx={{ borderColor: "#91D12E", borderWidth: 1, alignSelf:"flex-start", width:"95%", paddingX: 4 }} />
                <Typography variant="body1" alignSelf="flex-start" color="terciary" >My mission</Typography>
                <Box width="100%" display="flex" flexDirection="row" justifyContent="left" paddingBottom={4}>
                    <Box sx={{ paddingRight: 8, paddingY: 0, alignSelf:"flex-start" }}>
                        <Icon icon="charm:rocket" color="#91D12E" width="80px" height="80px"/>
                    </Box>
                    <List>
                    <ListItem key={9}>
                        <Icon icon="icon-park-outline:dot"/>
                        <Typography variant="h5">To be the technical ally who transforms BOLD ideas into reality</Typography>
                    </ListItem>
                    <Typography variant="body1" textAlign="left" paddingX={6} >* A Startup's MVP needing full-stack magic? Sure</Typography>
                    <Typography variant="body1" textAlign="left" paddingX={6} >* Want a robotics prototype that blurs the line between sci-fi and reality? No problem</Typography>
                    <Typography variant="body1" textAlign="left" paddingX={6} >* Need to work on your systems security and testing it? Consider it done</Typography>
                    <ListItem key={10}>
                        <Icon icon="icon-park-outline:dot"/>
                        <Typography variant="h5">I don't just write code; I build solutions that empower people</Typography>
                    </ListItem>
                    </List>
                </Box>
                <Divider sx={{ borderColor: "#2E91D1", borderWidth: 1, alignSelf:"flex-start", width:"95%", paddingX: 4 }} />
                <Typography variant="body1" alignSelf="flex-start" color="primary" >Interests and Expertise</Typography>
                <Box width="100%" display="flex" flexDirection="row" justifyContent="left" paddingBottom={4}>
                    <Box sx={{ paddingRight: 8, paddingY: 0, alignSelf:"flex-start" }}>
                        <Icon icon="octicon:goal-16" color="#2E91D1" width="80px" height="80px"/>
                    </Box>
                    <List>
                    <ListItem key={12}>
                        <Icon icon="icon-park-outline:dot"/>
                        <Typography variant="h5">To become the goto engineer for visionaries who refue to settle for "good enough"</Typography>
                    </ListItem>
                    <Typography variant="body1" textAlign="left" paddingX={6} >How? By delivering tobust, creative and user centric systems and leveling up every project</Typography>
                    </List>
                </Box>
                <Button sx={{ border: 2, borderRadius: 3, margin: 2 }} color="secondary" component={Link} to="/contact">Contact me!</Button>
            </Paper>
        </PageBox>
    );
}

export default About;