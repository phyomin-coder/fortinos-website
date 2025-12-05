import React from 'react';
import {
    Box,
    Typography,
    Container,
    Stack,
    useMediaQuery
} from '@mui/material';
import ExpertiseCard from '../components/common/ExpertiseCard';
import ExpertiseCardOne from '../components/ExpertiseCardOne';

// Images
import expartiseImage1 from '../assets/images/expartise1.png';
import expartiseImage2 from '../assets/images/expartise2.png';
import erp from '../assets/images/erp.png';
import web from '../assets/images/web.png';
import it from '../assets/images/it.png';
import BusinessElevatorBanner from '../components/BusinessElevatorBanner';

// Data
const expertiseData = [
    {
        title: 'Power Platform Solutions',
        description:
            'Empower your business with no-code and low-code automation. We design custom Power Apps, Power Automate workflows, and Power Virtual Agents that simplify operations and boost productivity.',
        imageURL: expartiseImage1,
    },
    {
        title: 'Data Analytics & Power BI',
        description:
            'Our Power BI and analytics solutions help you track performance, identify trends, and make informed decisions with clear, interactive dashboards and real-time reports.',
        imageURL: expartiseImage2,
    },
    {
        title: 'ERP & Business Consulting',
        description:
            'Optimize operations with tailored ERP and IT consulting. We guide businesses through process improvement, system integration, and Microsoft Business Central implementation.',
        imageURL: erp,
    },
    {
        title: 'Website/App Development',
        description:
            'Deliver seamless digital experiences with modern websites and mobile applications.',
        imageURL: web,
    },
    {
        title: 'IT Support/Corporate Training',
        description:
            'Upskill your teams with practical digital skills and hands-on corporate training.',
        imageURL: it,
    },
];

const ServicePage = () => {
    // ✅ Detect mobile screen
    const isMobile = useMediaQuery('(max-width:900px)');

    return (
        <Box>
            <Box sx={{ minHeight: '100vh', bgcolor: '#F07E2C' }}>

                {/* HEADER */}
                <Box sx={{ color: '#fff', py: { xs: 6, md: 10 } }}>
                    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
                        <Typography
                            variant="h4"
                            fontWeight="900"
                            sx={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}
                            mb={2}
                        >
                            Our Expertise
                        </Typography>

                        <Typography sx={{ opacity: 0.9, fontSize: 16 }}>
                            Whether you're digitizing internal processes, building dashboards, or upgrading
                            enterprise systems, we help your business grow confidently.
                        </Typography>
                    </Container>
                </Box>

                {/* CONTENT */}
                <Container maxWidth="lg" sx={{ pb: 6 }}>
                    <Stack spacing={3}>
                        {expertiseData.map((item, index) => {
                            const imageSide = index % 2 === 0 ? 'left' : 'right';

                            return (
                                <React.Fragment key={index}>

                                    {/* ✅ MOBILE VIEW → SMALL CARD */}
                                    {isMobile && (
                                        <ExpertiseCard
                                            icon={item.imageURL}
                                            title={item.title}
                                            description={item.description}
                                        />
                                    )}

                                    {/* ✅ DESKTOP VIEW → BIG CARD */}
                                    {!isMobile && (
                                        <ExpertiseCardOne
                                            title={item.title}
                                            description={item.description}
                                            imageURL={item.imageURL}
                                            imageSide={imageSide}
                                        />
                                    )}

                                </React.Fragment>
                            );
                        })}
                    </Stack>
                </Container>

            </Box>
            <BusinessElevatorBanner />
        </Box>

    );
};

export default ServicePage;
