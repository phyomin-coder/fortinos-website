import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import process from '../../assets/images/process.png';
import results from '../../assets/images/result.png';
import objectives from '../../assets/images/objective.png';
import CaseStudyCard from '../../components/common/CaseStudyCard';
import BusinessElevatorBanner from '../../components/BusinessElevatorBanner';

const caseStudyData = [
    { id: 1, title: 'Effortless Process', description: "We'll guide you through every step.", image: process },
    { id: 2, title: 'Exceptional Results', description: "Delivering exceptional results.", image: results },
    { id: 3, title: 'Reach Your Objectives', description: "Achieving greater success.", image: objectives },
];

const CasePage = () => {
    const primaryOrange = '#FFFFFF';

    return (
        <Box>
            <Box sx={{ minHeight: '100vh', width: '100%', py: { xs: 4, md: 8 }, px: { xs: 2, sm: 4, md: 16 }, backgroundColor: '#F07E2C' }}>

                {/* Title */}
                <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
                    <Typography variant="h4" component="h1" sx={{ color: primaryOrange, fontWeight: 'bold', textTransform: 'uppercase', fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem', lg: '2.5rem' } }}>
                        CASE STUDIES
                    </Typography>
                    <Typography variant="h6" component="p" sx={{ mt: 1, color: primaryOrange, fontWeight: 'bold', fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.75rem', lg: '1.9rem' } }}>
                        Real Impact Through Digital Solutions
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mt: 1, color: primaryOrange, fontWeight: '500', fontSize: { xs: '0.9rem', sm: '.0.9rem', md: '1rem', lg: '1rem' }, px: { xs: 2, sm: 10, md: 0 }, }}>
                        Discover how we help companies streamline workflows,<Box
                            component="br"
                            sx={{
                                display: {
                                    xs: 'none',
                                    sm: 'none',
                                    md: 'block',
                                    lg: 'block',
                                },
                            }}
                        />
                        automate processes, and transform data into decisions.
                    </Typography>
                </Box>

                {/* Cards */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {caseStudyData.map((item, index) => (
                        <CaseStudyCard key={index} title={item.title} description={item.description} image={item.image} />
                    ))}
                </Box>
            </Box>
            <BusinessElevatorBanner />
        </Box>
    );
};

export default CasePage;
