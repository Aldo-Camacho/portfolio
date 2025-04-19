import React, { useState } from "react";
import { Paper, Box, Typography, TextField, Button } from "@mui/material";
import emailjs from "@emailjs/browser";
import validator from "validator";

const SERVICE_ID = "service_sxpg3gn";
const TEMPLATE_ID = "template_u073bzs";
const PUBLIC_KEY = "pRjl3ZBbI7ZHdEjku";
const NAME_EMPTY = "Full Name is needed!";
const EMAIL_INVALID = "Email Address is not valid!";
const MESSAGE_NEEDED = "Message is needed!";

function ContactForm({sx, hideSubtitle}) {
    const [ fullName, setFullName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ nameError, setNameError ] = useState(false);
    const [ emailError, setEmailError ] = useState(false);
    const [ messageError, setMessageError ] = useState(false);

    const validateName = (name) => {
        setNameError(validator.isEmpty(name));
        setFullName(fullName);
    }

    const validateMessage = (message) => {
        setMessageError(validator.isEmpty(message));
        setMessage(fullName);
    }

    const validateEmail = (email) => {
        setEmailError(!validator.isEmail(email));
        setEmail(email);
    }

    const sendForm = () => {
        if (nameError || emailError || messageError) {
            window.alert("There's an error in the contact form, please check the required fields")
            return;
        }
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
                    {!hideSubtitle && <Typography variant="h4" padding={4} paddingBottom={0}>Contact Me!</Typography>}
                    <Typography variant="boddy1" padding={2} paddingBottom={2}>Please add your contact info and your idea so I can get back at you!</Typography>
                    <TextField error={nameError} helperText={nameError ? NAME_EMPTY : null} onChange={(event) => {validateName(event.target.value)}} label="Full Name" margin="normal" required/>
                    <TextField error={emailError} helperText={emailError ? EMAIL_INVALID : null} type="email" onChange={(event) => {validateEmail(event.target.value)}} label="Email" margin="normal" required/>
                    <TextField error={messageError} helperText={messageError ? MESSAGE_NEEDED : null} multiline onChange={(event) => {validateMessage(event.target.value)}} minRows={2} label="Message" margin="normal" required/>
                    <Button sx={{ border: 2, borderRadius: 3, margin: 2, width: "fit-content", alignSelf: "center" }} onClick={sendForm}>Send!</Button>
                </Box>
            </Paper>
    );
}

export default ContactForm;