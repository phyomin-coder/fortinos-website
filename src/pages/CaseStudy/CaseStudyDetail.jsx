import React, { use } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import caseImage from '../../assets/images/process.png'; // replace with your image
import Vector1 from '../../assets/images/Vector1.png'; // replace with your image
import BusinessElevatorBanner from '../../components/BusinessElevatorBanner';
import { caseStudyData } from '../../data/caseStudiesData';
import { useParams } from 'react-router-dom';

const CaseStudyDetail = () => {

    const { id } = useParams(); // <-- get the id from the URL
    const caseId = parseInt(id, 10); // Convert string to number
    const caseDetail = caseStudyData.find((item) => item.id === caseId);


    return (
        <Box>
            <Box sx={{ width: '100%', minHeight: '100vh', bgcolor: '#F07E2C' }}>

                {/* ============== TOP WHITE SECTION ============== */}
                <Box
                    sx={{
                        textAlign: 'center',
                        px: { xs: 2, sm: 4 },
                        pt: { xs: 4, sm: 6 },
                        pb: { xs: 12, sm: 14 },
                        backgroundColor: '#FFFFFF',
                    }}
                >
                    <Typography sx={{ color: '#F07E2C', fontWeight: 700, fontSize: { xs: '0.9rem', sm: '1rem' }, letterSpacing: 2 }}>
                        CASE STUDY
                    </Typography>

                    <Typography
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: '1.3rem', sm: '2rem', md: '2rem', lg: '2.5rem' },
                            mt: 1,
                            textAlign: { xs: 'left', sm: 'left', md: 'center' },
                            px: { xs: 4, sm: 4, md: 0, lg: 0 },

                        }}
                    >
                        {caseDetail.title}
                        <Box component="br"
                            sx={{
                                display: {
                                    xs: 'none',
                                    sm: 'none',
                                    md: 'block',
                                    lg: 'block',
                                },
                            }}
                        />
                        {caseDetail.subtitle}
                    </Typography>

                    {/* IMAGE + COMPANY OVERVIEW */}
                    <Container maxWidth="lg">
                        <Box
                            sx={{
                                mt: 5,
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: 4,
                            }}
                        >
                            {/* IMAGE */}
                            <Box
                                component="img"
                                src={caseDetail.image}
                                alt="case"
                                sx={{
                                    width: { xs: '100%', sm: 600, md: 700 },
                                }}
                            />

                            {/* COMPANY OVERVIEW */}
                            <Box sx={{ maxWidth: 500, textAlign: 'left', }}>
                                <Typography sx={{ fontWeight: 800, mb: 4, fontSize: { xs: '1rem', sm: '1rem', md: '1.5rem', lg: '1.5rem' } }}>
                                    COMPANY OVERVIEW
                                </Typography>

                                <Typography sx={{ color: '#000000', fontSize: 18, lineHeight: 1.7 }}>
                                    {caseDetail.overview}
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
                </Box>
                <Box
                    component="img"
                    src={Vector1}
                    alt="bottom image"
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />

                {/* ============== ORANGE WAVE BACKGROUND SECTION ============== */}
                <Container maxWidth="lg">

                    <Box
                        sx={{
                            backgroundColor: '#F07E2C',
                            // px: { xs: 2, sm: 6 },
                            pb: { xs: 6, sm: 10 },
                            color: '#fff',
                        }}
                    >
                        <Typography sx={{ fontWeight: 800, mb: 1, px: { xs: 1.5, sm: 0, md: 0, lg: 3 }, py: 3, fontSize: 20 }}>
                            THE CHALLENGE
                        </Typography>
                        {/* GRID 2x2 */}
                        <Box
                            sx={{
                                maxWidth: 1100,
                                mx: 'auto',
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                                gap: 4,
                                px: { xs: 2, sm: 0 }
                            }}
                        >
                            {/* THE CHALLENGE */}
                            <Box>


                                <Typography sx={{ fontSize: 14, lineHeight: 1.7 }}>
                                    {caseDetail.challenge[0]}
                                </Typography>
                            </Box>

                            {/* CHALLENGE CONTINUED */}
                            <Box>
                                <Typography sx={{ fontSize: 14, lineHeight: 1.7 }}>
                                    {caseDetail.challenge[1]}

                                </Typography>
                            </Box>
                        </Box>

                        <Typography sx={{ fontWeight: 800, mb: 1, px: { xs: 1.5, sm: 0, md: 0, lg: 3 }, py: 3, fontSize: 20 }}>
                            THE SOLUTION
                        </Typography>

                        <Box
                            sx={{
                                maxWidth: 1100,
                                mx: 'auto',
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                                gap: 4,
                                px: { xs: 2, sm: 0 }
                            }}
                        >

                            {/* THE SOLUTION */}
                            <Box>

                                <Typography sx={{ fontSize: 14, lineHeight: 1.7 }}>
                                    {caseDetail.solution[0]}

                                </Typography>
                            </Box>

                            {/* SOLUTION CONTINUED */}
                            <Box>
                                <Typography sx={{ fontSize: 14, lineHeight: 1.7 }}>
                                    {caseDetail.solution[1]}
                                </Typography>
                            </Box>
                        </Box>

                        <Typography sx={{ fontWeight: 800, mb: 1, px: { xs: 1.5, sm: 0, md: 0, lg: 3 }, py: 3, fontSize: 20 }}>
                            RESULT AND BENEFITS
                        </Typography>

                        <Box
                            sx={{
                                maxWidth: 1100,
                                mx: 'auto',
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                                gap: 4,
                                px: { xs: 2, sm: 0 }
                            }}
                        >

                            {/* RESULT AND BENEFITS */}
                            <Box>

                                <Typography sx={{ fontSize: 14, lineHeight: 1.7 }}>
                                    {caseDetail.result[0]}
                                </Typography>
                            </Box>

                            {/* BENEFITS CONTINUED */}
                            <Box>
                                <Typography sx={{ fontSize: 14, lineHeight: 1.7 }}>
                                    {caseDetail.result[1]}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <BusinessElevatorBanner />
        </Box>
    );
};

export default CaseStudyDetail;
