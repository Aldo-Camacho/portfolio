import React, { useState } from "react";
import { Paper, Box, Typography, TextField, Button } from "@mui/material";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_sxpg3gn";
const TEMPLATE_ID = "template_u073bzs";
const PUBLIC_KEY = "pRjl3ZBbI7ZHdEjku";

function ContactForm({sx}) {
    const [ fullName, setFullName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ message, setMessage ] = useState("");

    const sendForm = () => {
        const templateParams = {
            name: fullName,
            time: new Date(Date.now()).toString(),
            email: email,
            message: message,
        }
        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY }).then(
            (response) => {
                window.alert('Thanks for contacting me!', response.text);
            },
            (error) => {
                window.alert('An error ocurred...', error);
            }
        )
    }
    return (
        <Paper sx={{ borderRadius: 8, width: "95vw", alignSelf: "center", margin: 0, ...sx }}>
                <Box margin={4} display="flex" flexDirection="column">
                    <Typography variant="h4" padding={4} paddingBottom={0}>Contact Me!</Typography>
                    <Typography variant="boddy1" padding={2} paddingBottom={2}>Please add your contact info and your idea so I can get back at you!</Typography>
                    <TextField onChange={(event) => {setFullName(event.target.value)}} label="Full Name" margin="normal" required/>
                    <TextField type="email" onChange={(event) => {setEmail(event.target.value)}} label="Email" margin="normal" required/>
                    <TextField multiline onChange={(event) => {setMessage(event.target.value)}} minRows={2} label="Message" margin="normal" required/>
                    <Button sx={{ border: 2, borderRadius: 3, margin: 2, width: "fit-content", alignSelf: "center" }} onClick={sendForm}>Send!</Button>
                </Box>
            </Paper>
    );
}

export default ContactForm;