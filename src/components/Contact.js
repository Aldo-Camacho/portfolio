import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import PageBox from "./PageBox";
import ContactForm from "./ContactForm";

function Contact() {
    return (
        <PageBox>
            <Paper sx={{ width: "100vw", alignSelf: "center", margin: 0, paddingY: 4 }}>
                <Typography variant="h4">Contact me!</Typography>
                <Box>
                    <Typography variant="body1">Here are some ways you can contact me. Let me help you with your projects!</Typography>
                </Box>
            </Paper>
            <ContactForm hideSubtitle sx={{ margin: 8 }}/>
        </PageBox>
    );
}

export default Contact;