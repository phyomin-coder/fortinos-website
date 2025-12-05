import React from 'react';
import { Box, Typography, Button, Container, styled } from '@mui/material';
import Digital from '../assets/images/digital.png';
import { useNavigate } from 'react-router-dom';

// Define the custom primary color requested by the user
const PRIMARY_ORANGE = '#F07E2C';
const LIGHT_ORANGE = '#F79649'; // Used for subtle accents/connections
const FONT_WEIGHT_BOLD = 800;
const SHADOW_COLOR = 'rgba(240, 126, 44, 0.4)';


const Driving = () => {
    const navigate = useNavigate();
    return (
        // Main page container setup: full height, background color, center alignment, responsive padding
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                pt: { xs: 6, sm: 8 }, // pt-20 / sm:pt-32
                pb: { xs: 6, sm: 8 }, // pb-20
            }}
        >
            {/* The main content card, simulating the white background area in the image */}
            <Box
                sx={{
                    textAlign: 'center',
                }}
            >
                {/* Title Part 1: Black, Uppercase */}
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        fontWeight: FONT_WEIGHT_BOLD,
                        color: 'text.primary',
                        letterSpacing: { xs: '0.2em' }, // tracking-wide
                        mb: 1.5, // mb-2
                        fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' } // Responsive font size
                    }}
                >
                    DRIVING BUSINESS GROWTH THROUGH
                </Typography>

                {/* Title Part 2: Orange, Uppercase */}
                <Typography
                    variant="h3"
                    component="h1"
                    sx={{
                        fontWeight: FONT_WEIGHT_BOLD,
                        color: PRIMARY_ORANGE,
                        letterSpacing: { xs: '0.2em' }, // tracking-wider
                        mb: 3, // mb-8
                        fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' } // Responsive font size
                    }}
                >
                    DIGITAL TRANSFORMATION
                </Typography>

                {/* Body Text */}
                <Typography
                    variant="body1"
                    sx={{
                        maxWidth: '900px',
                        mx: 'auto', // mx-auto
                        mb: 3, // mb-10
                        fontSize: { xs: '0.9rem', sm: '1rem' }, // text-lg sm:text-xl
                        lineHeight: 1.5, // leading-relaxed
                        color: '#000000',
                        p: { xs: 4, sm: 4 }, // Add horizontal padding for smaller screens if needed
                        textAlign: { xs: 'start', sm: 'start', md: 'center' },
                    }}
                >
                    We empower SMEs and organizations across Myanmar and Asia to accelerate digital transformation with modern, scalable, and cost-effective technology. As a trusted Microsoft Power Platform expert, we deliver end-to-end services – from workflow automation, data analytics to ERP, web, and mobile development. Our team helps businesses streamline operations and gain actionable insights through innovative IT solutions.
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', }}>
                    {/* Button */}
                    <Button
                        onClick={() => navigate('/about')}
                        variant="contained"
                        disableRipple
                        sx={{
                            width: { xs: '80%', sm: 'auto', md: 'auto' },
                            backgroundColor: PRIMARY_ORANGE,
                            color: 'white',
                            fontWeight: 600,
                            fontSize: { xs: '1rem', md: '1.125rem' },
                            paddingX: 4,
                            paddingY: 1,
                            borderRadius: 10,
                            textTransform: 'none',
                            boxShadow: `0 8px 16px -4px ${SHADOW_COLOR}`,
                            '&:hover': {
                                backgroundColor: '#FFFFFF',
                                color: '#F07E2C',
                                boxShadow: '0 6px 18px rgba(240, 126, 44, 0.75)',
                            },
                        }}
                    >
                        Learn More
                    </Button>

                    <Box
                        component="img"
                        src={Digital}
                        alt="bottom image"
                        sx={{
                            mt: '-5px',
                            width: 90,
                            height: 90,
                            objectFit: 'cover',
                            // mt: { xs: '-2px', sm: '-5px', md: '-10px', lg: '-20px' },
                            mb: 0,
                        }}
                    />
                </Box>

            </Box>

        </Box>
    );
};

export default Driving;