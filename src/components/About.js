import { Box, List, ListItem, Typography } from "@mui/material";

function About() {
    return (
        <Box>
            <Typography variant="h2">About me</Typography>
            <List>
                <ListItem key={0}>
                    <Typography variant="h6">Education</Typography>
                </ListItem>
                <ListItem key={1}>
                    <Typography variant="body1">I have a Bachelors Degree in Engineering in Bionics</Typography>
                </ListItem>
                <ListItem key={2}>
                    <Typography variant="body1">I am a Professional Technician in Electronics</Typography>
                </ListItem>
                <ListItem key={3}>
                    <Typography variant="h6">Interests</Typography>
                </ListItem>
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
                    <Typography variant="body1">On my free time I always try to learn something new. I consider myself a Jack of all trades and a master of whatever the project needs form me!</Typography>
                </ListItem>
                <ListItem key={8}>
                    <Typography variant="h6">What is my Mision?</Typography>
                </ListItem>
                <ListItem key={9}>
                    <Typography variant="body1">To help people who need a technical hand to make all their great ideas come true</Typography>
                </ListItem>
                <ListItem key={10}>
                    <Typography variant="body1">To give robust and creative solutions to the peoples needs</Typography>
                </ListItem>
                <ListItem key={11}>
                    <Typography variant="h6">What is my Goal?</Typography>
                </ListItem>
                <ListItem key={12}>
                    <Typography variant="body1">To become the goto engineer for the people that I help build their dreams</Typography>
                </ListItem>
                <ListItem key={13}>
                    <Typography variant="body1">To continue growing and making even better solutions to problems</Typography>
                </ListItem>
            </List>
        </Box>
    );
}

export default About;