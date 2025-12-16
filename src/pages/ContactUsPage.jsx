import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
// import emailjs from 'emailjs-com';

const ContactUs = () => {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_n85xdfh',     // ✅ replace
            'template_rtqc945',    // ✅ replace
            formRef.current,
            'zFe8r5mSe80ZJ1HgV'      // ✅ replace
        ).then(
            (result) => {
                alert('Email sent successfully!');
                formRef.current.reset();
            },
            (error) => {
                alert('Failed to send email');
                console.log(error.text);
            }
        );
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: '#F07E2C',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: { xs: 2, sm: 4 },
                py: { xs: 6, sm: 8 },
            }}
        >
            <Box sx={{ width: '100%', maxWidth: 600 }}>

                {/* Header */}
                <Box sx={{ textAlign: 'center', color: '#fff', mb: 4 }}>
                    <Typography sx={{ fontWeight: 700 }}>CONTACT US</Typography>
                    <Typography sx={{ fontWeight: 800, fontSize: '1.5rem' }}>
                        We are here to help you
                    </Typography>
                </Box>

                {/* Form */}
                <Box
                    component="form"
                    ref={formRef}
                    onSubmit={sendEmail}
                    sx={{
                        backgroundColor: '#fff',
                        borderRadius: 3,
                        p: 4,
                        boxShadow: '0px 10px 30px rgba(0,0,0,0.15)',
                    }}
                >
                    <Typography sx={{ color: '#F07E2C', fontWeight: 800, textAlign: 'center', mb: 3 }}>
                        Get in touch with us
                    </Typography>

                    {/* Name */}
                    <Typography>Name</Typography>
                    <Box
                        component="input"
                        name="name"
                        required
                        sx={{ width: '100%', height: 50, border: '1px solid #E0E0E0', mb: 2, px: 1.5 }}
                    />

                    {/* Email */}
                    <Typography>Email</Typography>
                    <Box
                        component="input"
                        type="email"
                        name="email"
                        required
                        sx={{ width: '100%', height: 50, border: '1px solid #E0E0E0', mb: 2, px: 1.5 }}
                    />

                    {/* Phone */}
                    <Typography>Phone</Typography>
                    <Box
                        component="input"
                        name="phone"
                        sx={{ width: '100%', height: 50, border: '1px solid #E0E0E0', mb: 2, px: 1.5 }}
                    />

                    {/* Company */}
                    <Typography>Company</Typography>
                    <Box
                        component="input"
                        name="company"
                        sx={{ width: '100%', height: 50, border: '1px solid #E0E0E0', mb: 2, px: 1.5 }}
                    />

                    {/* Message */}
                    <Typography>Message</Typography>
                    <Box
                        component="textarea"
                        name="message"
                        rows={4}
                        required
                        sx={{ width: '100%', border: '1px solid #E0E0E0', mb: 3, px: 1.5, py: 1 }}
                    />

                    {/* Button */}
                    <Box
                        component="button"
                        type="submit"
                        sx={{
                            width: '100%',
                            height: 50,
                            backgroundColor: '#F07E2C',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 3,
                            fontWeight: 700,
                            cursor: 'pointer',
                        }}
                    >
                        Submit
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ContactUs;
