import React from 'react';
import {
    Box,
    Typography,
    Container,
    Stack,
    IconButton,
} from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FaTiktok } from "react-icons/fa6";

import logo from '../assets/images/fotinos-logo.png';

// ================= TOP SECTION ==================
const TopFooterSection = () => (
    <Box
        sx={{
            backgroundColor: '#FFF7F4',
            px: { xs: 3, sm: 4, md: 6, lg: 10 },
            py: { xs: 5, sm: 6, md: 8 },
            textAlign: { xs: 'left', sm: 'center' }, // XS start, SM center
        }}
    >
        <Container maxWidth="lg">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' }, // XS column, SM row
                    alignItems: { xs: 'flex-start', sm: 'center' }, // XS start, SM center
                    justifyContent: { xs: 'flex-start', sm: 'center' },
                    gap: { xs: 3, sm: 5, md: 8 },
                }}
            >
                {/* Logo */}
                <Box
                    component="img"
                    src={logo}
                    sx={{
                        width: { xs: 100, sm: 100, md: 110 },
                        height: 'auto',
                    }}
                />

                {/* Text */}
                <Typography
                    variant="body1"
                    color="#000"
                    sx={{
                        maxWidth: { xs: '100%', sm: '60%', md: '50%' },
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' },
                        textAlign: { xs: 'left', sm: 'center' }, // XS left, SM center
                    }}
                >
                    Build apps, automate processes, and visualize insights – We help
                    you transform how your team works, saves time, and grows.
                </Typography>
            </Box>
        </Container>
    </Box>
);

// ================= BOTTOM SECTION ==================
const BottomFooterSection = () => {
    const primaryOrange = '#F07E2C';

    return (
        <Box
            sx={{
                backgroundColor: { xs: '#FDF7F4', md: primaryOrange },
                color: '#FFFFFF',
                pt: { xs: 0, sm: 5, md: 6 },
                pb: { xs: 0, md: 0 },
                px: { xs: 2, sm: 3, md: 5 },
                textAlign: { xs: 'left', sm: 'center' }, // XS start, SM center
            }}
        >
            <Container maxWidth="lg">

                {/* Title */}
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: { xs: '1rem', sm: '1rem', md: '1.2rem' },
                        mb: { xs: 1.5, sm: 2 },
                        color: { xs: '#F07E2C', md: '#FFFFFF' },
                        textAlign: { xs: 'left', sm: 'center' }, // XS start, SM center
                    }}
                >
                    Get in touch
                </Typography>

                {/* SOCIAL ICONS */}
                <Stack
                    direction="row"
                    spacing={{ xs: 2, sm: 3 }}
                    justifyContent={{ xs: 'flex-start', sm: 'center' }} // XS start, SM center
                >
                    <IconButton
                        aria-label="Facebook"
                        sx={{ color: '#2C3E50', '&:hover': { color: '#FFFFFF' } }}
                    >
                        <FacebookIcon sx={{ fontSize: { xs: 26, sm: 30 } }} />
                    </IconButton>

                    <IconButton
                        aria-label="LinkedIn"
                        sx={{ color: '#2C3E50', '&:hover': { color: '#FFFFFF' } }}
                    >
                        <LinkedInIcon sx={{ fontSize: { xs: 26, sm: 30 } }} />
                    </IconButton>

                    <IconButton
                        aria-label="TikTok"
                        sx={{ color: '#2C3E50', '&:hover': { color: '#FFFFFF' } }}
                    >
                        <FaTiktok style={{ fontSize: '28px' }} />
                    </IconButton>
                </Stack>

            </Container>
        </Box>
    );
};

// ================= MAIN FOOTER ==================
const BusinessFooter = () => (
    <footer>
        <TopFooterSection />
        <BottomFooterSection />

        {/* COPYRIGHT */}
        <Box sx={{ backgroundColor: '#F07E2C', textAlign: 'center' }}>
            <Typography
                variant="body2"
                sx={{
                    fontSize: { xs: '0.75rem', sm: '0.85rem' },
                    opacity: 0.9,
                    mt: 0,
                    mb: 4,
                    p: { xs: 4, md: 4 },
                    color: '#FFFFFF',
                }}
            >
                © 2026 FotinosITSolutions.com | All Rights Reserved
            </Typography>
        </Box>
    </footer>
);

export default BusinessFooter;
