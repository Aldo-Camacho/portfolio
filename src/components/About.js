import { Box, List, ListItem, Typography } from "@mui/material";

function About() {
    return (
        <Box>
            <Typography variant="h2">About me</Typography>
            <Typography variant="h6">Education</Typography>
            <List>
                <ListItem key={0}>I have a Bachelors Degree in Engineering in Bionics</ListItem>
                <ListItem key={1}>I am a Professional Technician in Electronics</ListItem>
            </List>
            <Typography variant="h6">Interests</Typography>
            <List>
                <ListItem key={0}>I love software developing and always want to work in projects that have a significant impact!</ListItem>
                <ListItem key={1}>I also love robotics and even if I don't work professionally on it I am capable of designing interesting prototypes!</ListItem>
                <ListItem key={2}>I am into Ethical Hacking and try to learn about CyberSecurity for Funsies!</ListItem>
                <ListItem key={3}>On my free time I always try to learn something new. I consider myself a Jack of all trades and a master of whatever the project needs form me!</ListItem>
            </List>
            <Typography variant="h6">What is my Mision?</Typography>
            <List>
                <ListItem key={0}>To help people who need a technical hand to make all their great ideas come true</ListItem>
                <ListItem key={1}>To give robust and creative solutions to the peoples needs</ListItem>
            </List>
            <Typography variant="h6">What is my Goal?</Typography>
            <List>
                <ListItem key={0}>To become the goto engineer for the people that I help build their dreams</ListItem>
                <ListItem key={1}>To continue growing and making even better solutions to problems</ListItem>
                <ListItem key={2} sx={{ color: "transparent" }}>To become rich</ListItem>
            </List>
        </Box>
    );
}

export default About;