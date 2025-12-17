import React from 'react';
import { Box, Typography } from '@mui/material';
import AboutImage from '../assets/images/Photo.png'; // replace with your image path
import BusinessElevatorBanner from '../components/BusinessElevatorBanner';

const AboutUsPage = () => {
    return (
        <Box>
            {/* About Section */}
            <Box
                sx={{
                    backgroundColor: '#F07E2C',
                    color: '#FFFFFF',
                    py: { xs: 4, sm: 6, md: 8, lg: 10, xl: 12 },
                    px: { xs: 2, sm: 4, md: 6, lg: 12, xl: 16 },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: { xs: 4, sm: 6, md: 8, lg: 10, xl: 12 },
                    }}
                >
                    {/* Left Text Section */}
                    <Box sx={{ flex: 1 }}>
                        {/* Main Heading */}
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 'bold',
                                mb: { xs: 2, sm: 3, md: 4 },
                                fontSize: { xs: '1.5rem', sm: '1.7rem', md: '2rem', lg: '2.5rem', xl: '2.75rem' },
                            }}
                        >
                            We Help To Get Solutions
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                mb: { xs: 3, sm: 4 },
                                lineHeight: 1.7,
                                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem', lg: '1.1rem', xl: '1.15rem' },
                            }}
                        >
                            We help organizations solve business challenges by designing and delivering intelligent solutions using the Microsoft Power Platform. Through Power Apps, Power Automate, Power BI, and Power Virtual Agents, we simplify complex processes, reduce manual work, and enable teams to work smarter and faster. Our focus is on creating secure, scalable, and user-friendly solutions that drive real business value.
                        </Typography>

                        {/* Image only for xs and sm between heading and missions/visions */}
                        <Box
                            component="img"
                            src={AboutImage}
                            alt="About Us"
                            sx={{
                                display: { xs: 'block', sm: 'block', md: 'none' },
                                width: '100%',
                                borderRadius: '12px',
                                
                                mb: 3, // spacing below the image
                                padding: 2
                            }}
                        />

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                gap: { xs: 3, sm: 4, md: 6, lg: 8 },
                            }}
                        >
                            {/* Our Missions */}
                            <Box sx={{ flex: 1 }}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 'bold',
                                        mb: 1,
                                        fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem', lg: '1.15rem', xl: '1.2rem' },
                                    }}
                                >
                                    Our Missions
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem', lg: '1rem', xl: '1.05rem' },
                                        lineHeight: 1.6,
                                    }}
                                >
                                    Our mission is to deliver efficient, reliable, and future-ready Power Platform solutions that streamline operations and enhance productivity. We are committed to understanding our clients’ needs, providing expert guidance, and building solutions that support long-term growth, automation, and data-driven success.
                                </Typography>
                            </Box>

                            {/* Our Visions */}
                            <Box sx={{ flex: 1 }}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 'bold',
                                        mb: 1,
                                        fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem', lg: '1.15rem', xl: '1.2rem' },
                                    }}
                                >
                                    Our Visions
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem', lg: '1rem', xl: '1.05rem' },
                                        lineHeight: 1.6,
                                    }}
                                >
                                    Our vision is to empower businesses of all sizes to achieve digital excellence through low-code innovation. We aim to be a trusted Power Platform partner that enables organizations to transform ideas into impactful solutions, improve decision-making, and stay agile in a rapidly evolving digital world.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* Right Image Section for md and larger */}
                    <Box
                        sx={{
                            flex: 1,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Box
                            component="img"
                            src={AboutImage}
                            alt="About Us"
                            sx={{
                                width: { md: '80%', lg: '75%', xl: '70%' },
                                borderRadius: '12px',
                                boxShadow: 3,
                            }}
                        />
                    </Box>
                </Box>
            </Box>

            {/* Banner Section */}
            <BusinessElevatorBanner />
        </Box>
    );
};

export default AboutUsPage;
