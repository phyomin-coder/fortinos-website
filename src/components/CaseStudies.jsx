import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CaseStudyCard from './common/CaseStudyCard';
import process from '../assets/images/process.png';
import results from '../assets/images/result.png';
import objectives from '../assets/images/objective.png';
import { useNavigate } from 'react-router-dom';

const caseStudyData = [
    { id: 1, title: 'Effortless Process', description: "We'll guide you through every step.", image: process },
    { id: 2, title: 'Exceptional Results', description: "Delivering exceptional results.", image: results },
    { id: 3, title: 'Reach Your Objectives', description: "Achieving greater success.", image: objectives },
];

const CaseStudies = () => {
    const primaryOrange = '#F07E2C';
    const navigate = useNavigate();

    return (
        <Box sx={{ minHeight: '100vh', width: '100%', py: { xs: 4, md: 8 }, px: { xs: 2, sm: 4, md: 16 } }}>

            {/* Title */}
            <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
                <Typography variant="h4" component="h1" sx={{ color: primaryOrange, fontWeight: 'bold', textTransform: 'uppercase', fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem', lg: '2.5rem' } }}>
                    CASE STUDIES
                </Typography>
                <Typography variant="h6" component="p" sx={{ mt: 1, color: '#333', fontWeight: 'bold', fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem', lg: '2rem' } }}>
                    From Manual To Magical
                </Typography>
            </Box>

            {/* Cards */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {caseStudyData.map((item, index) => (
                    <CaseStudyCard key={index} title={item.title} description={item.description} image={item.image} id={item.id} />
                ))}
            </Box>

            {/* CTA Button */}
            <Box sx={{ textAlign: 'center', mt: 6 }}>
                <Button
                    onClick={() => navigate('/cases')}
                    variant="contained"
                    size="large"
                    sx={{
                        backgroundColor: primaryOrange,
                        color: '#FFFFFF',
                        fontWeight: 'bold',
                        borderRadius: '999px',
                        py: 1,
                        px: 6,
                        boxShadow: '0 5px 15px rgba(255, 153, 0, 0.4)',
                        '&:hover': {
                            backgroundColor: '#FFFFFF',
                            color: '#F07E2C',
                            boxShadow: '0 6px 18px rgba(254, 197, 54, 0.55)',
                        },
                        textTransform: 'none',
                        fontSize: '1.1rem',
                        width: { xs: '90%', sm: 'auto' },
                    }}
                >
                    Learn More
                </Button>
            </Box>
        </Box>
    );
};

export default CaseStudies;
