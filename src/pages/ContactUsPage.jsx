import React from 'react';
import { Box, Typography } from '@mui/material';

const ContactUs = () => {
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
            {/* Wrapper */}
            <Box sx={{ width: '100%', maxWidth: 600 }}>

                {/* Header */}
                <Box sx={{ textAlign: 'center', color: '#fff', mb: 4 }}>
                    <Typography sx={{ fontSize: { xs: '1rem' }, fontWeight: 700, mb: 1 }}>
                        CONTACT US
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '1.5rem', lg: '2rem' }, fontWeight: 800 }}>
                        We are here to help you
                        <Box component={'br'}
                            sx={{ display: { xs: 'block', sm: 'block', md: 'block', lg: 'block' } }} />
                        transform your business
                    </Typography>
                </Box>

                {/* Form Card */}
                <Box
                    sx={{
                        backgroundColor: '#fff',
                        borderRadius: 3,
                        p: { xs: 3, sm: 4, md: 5, lg: 10 },
                        boxShadow: '0px 10px 30px rgba(0,0,0,0.15)',
                    }}
                >
                    <Typography
                        sx={{
                            color: '#F07E2C',
                            fontWeight: 800,
                            textAlign: 'center',
                            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.5rem', lg: '2rem' },
                            mb: 3,
                        }}
                    >
                        Get in touch with us
                    </Typography>

                    <Typography
                        sx={{
                            textAlign: 'center',
                            fontSize: { xs: '0.8rem', sm: '0.8rem', md: '0.8rem', lg: '0.9rem' },
                            color: '#000000',
                            mb: 3,
                        }}
                    >
                        Share some details about your needs and we'll be in touch to discuss.
                    </Typography>

                    {/* Name */}
                    <Typography sx={{ fontSize: 16, mb: 0.5 }}>Name</Typography>
                    <Box
                        component="input"
                        placeholder="Name"
                        sx={{
                            width: '100%',
                            height: 50,
                            border: '1px solid #E0E0E0',
                            borderRadius: 1,
                            px: 1.5,
                            mb: 2,
                        }}
                    />

                    {/* Email */}
                    <Typography sx={{ fontSize: 16, mb: 0.5 }}>Email</Typography>
                    <Box
                        component="input"
                        placeholder="Email"
                        sx={{
                            width: '100%',
                            height: 50,
                            border: '1px solid #E0E0E0',
                            borderRadius: 1,
                            px: 1.5,
                            mb: 2,
                        }}
                    />

                    {/* Phone */}
                    <Typography sx={{ fontSize: 16, mb: 0.5 }}>Phone number</Typography>
                    <Box
                        component="input"
                        placeholder="Phone number"
                        sx={{
                            width: '100%',
                            height: 50,
                            border: '1px solid #E0E0E0',
                            borderRadius: 1,
                            px: 1.5,
                            mb: 2,
                        }}
                    />

                    {/* Company */}
                    <Typography sx={{ fontSize: 16, mb: 0.5 }}>
                        Company/business name
                    </Typography>
                    <Box
                        component="input"
                        placeholder="Company/business name"
                        sx={{
                            width: '100%',
                            height: 50,
                            border: '1px solid #E0E0E0',
                            borderRadius: 1,
                            px: 1.5,
                            mb: 2,
                        }}
                    />

                    {/* Message */}
                    <Typography sx={{ fontSize: 16, mb: 0.5 }}>
                        What would you like to discuss?
                    </Typography>
                    <Box
                        component="textarea"
                        placeholder="Enter message"
                        rows={4}
                        sx={{
                            width: '100%',
                            height: 140,          // ✅ FIXED HEIGHT (px)
                            border: '1px solid #E0E0E0',
                            borderRadius: 1,
                            px: 1.5,
                            py: 1,
                            mb: 3,
                            resize: 'none',      // ✅ prevents weird resizing
                        }}
                    />


                    {/* Submit Button */}
                    <Box
                        component="button"
                        sx={{
                            width: '100%',
                            height: 50,
                            backgroundColor: '#F07E2C',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 3,
                            fontWeight: 700,
                            cursor: 'pointer',
                            '&:hover': {
                                backgroundColor: '#E56F1F',
                            },
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
