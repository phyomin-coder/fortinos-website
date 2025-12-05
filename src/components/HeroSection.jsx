import React, { use } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Vector from '../assets/images/Vector.png';
import { useNavigate } from 'react-router-dom';

const HeroSection = ({ RocketImage }) => {

    const navigate = useNavigate();
    return (
        <Box
            sx={{
                position: 'relative',
                backgroundColor: '#F07E2C',

                // ⭐ BACKGROUND IMAGE ONLY FOR XS
                backgroundImage: {
                    xs: `url(${RocketImage})`,
                    sm: 'none'
                },
                backgroundPosition: { xs: 'right bottom', sm: 'right bottom' },
                backgroundSize: { xs: '58%', sm: 'initial' },
                backgroundRepeat: { xs: 'no-repeat', sm: 'initial' },

                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box
                sx={{
                    pt: { xs: '100px', sm: '40px', md: '40px', lg: '40px' }, // more top space because image is behind
                    pl: { xs: '40px', sm: '40px', md: '80px', lg: '120px' },

                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden',
                    height: { xs: 'auto', sm: '60vh', md: '80vh', lg: '80vh' },
                }}
            >
                {/* LEFT TEXT */}
                <Box
                    sx={{
                        flex: { xs: '1 1 100%', sm: '1 1 50%' },
                        zIndex: 2,
                        color: 'white',
                        textAlign: { xs: 'start', sm: 'left' },
                        pb: { xs: '40px', sm: '50px', md: '80px', lg: '100px' },
                    }}
                >
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{
                            lineHeight: 1.2,
                            mb: 1,
                            fontSize: { xs: '1.5rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' },
                        }}
                    >
                        EMPOWERING
                    </Typography>

                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{
                            lineHeight: 1.2,
                            mb: 1,
                            fontSize: { xs: '1.5rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' },
                        }}
                    >
                        YOUR DIGITAL GROWTH
                    </Typography>

                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{
                            color: '#FCD450',
                            lineHeight: 1.2,
                            mb: 3,
                            fontSize: { xs: '1.5rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' },
                        }}
                    >
                        FOTINOS IT SOLUTIONS
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            mb: 4,
                            fontSize: { xs: '0.9rem', sm: '0.9rem', md: '1.1rem', lg: '1.1rem' },
                            // px: { xs: '20px', sm: 0 },
                            paddingRight: { xs: 20, sm: '20px', md: 0 }
                        }}
                    >
                        With Microsoft Power Platform, we enable you to build custom apps,
                        automate workflows, and turn data into action — driving innovation
                        from the ground up.
                    </Typography>

                    <Button
                        onClick={() => navigate('/contact')}
                        variant="contained"
                        sx={{
                            backgroundColor: '#FCD450',
                            color: 'black',
                            fontWeight: 'bold',
                            padding: { xs: '8px 20px', sm: '10px 25px', md: '10px 30px' },
                            borderRadius: '50px',
                            fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                            '&:hover': {
                                backgroundColor: '#FFFFFF',
                                color: '#F07E2C',
                                boxShadow: '0 6px 18px rgba(240, 205, 9, 0.75)',
                            },

                            mx: { xs: 'auto', sm: 0 },
                            // flexShrink: 0,
                        }}
                    >
                        Get A Free Consultation
                    </Button>
                </Box>

                {/* ⭐ RIGHT IMAGE — ONLY FROM SM AND ABOVE */}
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        flex: { sm: '1 1 45%' },
                        height: { sm: '50vh', md: '80vh', lg: '80vh' },
                        backgroundImage: `url(${RocketImage})`,
                        backgroundPosition: { xs: 'right', sm: 'center', md: 'center', lg: 'center' },
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '110%',
                    }}
                />
            </Box>

            {/* VECTOR BOTTOM */}
            <Box
                component="img"
                src={Vector}
                alt="bottom image"
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            />
        </Box>
    );
};

export default HeroSection;
