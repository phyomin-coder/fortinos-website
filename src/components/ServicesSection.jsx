import React from 'react';
import { Box, Typography } from '@mui/material';
import ExpertiseCard from './common/ExpertiseCard';
import ErpIcon from '../assets/images/erp.png'; // replace with your image
import WebIcon from '../assets/images/web.png'; // replace with your image
import ItIcon from '../assets/images/it.png'; // replace with your image

const PRIMARY_ORANGE = '#F07E2C';
const FONT_WEIGHT_BOLD = 800;

const servicesData = [
    {
        icon: ErpIcon,
        title: 'ERP & Business Consulting',
        description:
            'Optimize operations with tailored ERP and IT consulting. We guide businesses through process improvement, system integration, and Microsoft Business Central implementation for better control, efficiency, and strategic growth.',
    },
    {
        icon: WebIcon,
        title: 'Website/App Development',
        description:
            'Deliver seamless digital experiences with modern websites and mobile applications. Our team builds secure, responsive, and user-friendly solutions to enhance customer engagement and support your business goals effectively.',
    },
    {
        icon: ItIcon,
        title: 'IT Support / Corporate Training',
        description:
            'Equip your teams with practical digital skills. We provide hands-on corporate training in Power Platform, data tools, and IT systems to boost productivity, adaptability, and innovation across your organization.',
    },
];

const ServicesSection = () => {
    return (
        <Box sx={{ bgcolor: 'white', py: { xs: 6, md: 12 }, px: { xs: 4, md: 16 } }}>
            {/* Section Title */}
            <Box sx={{ mb: { xs: 4, md: 6 }, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { sm: 'flex-start', md: 'center' }, gap: 2 }}>
                <Box flex="40%">
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: FONT_WEIGHT_BOLD,
                            letterSpacing: { xs: '0.05em', },
                            textTransform: 'uppercase',
                            fontSize: { xs: '1.25rem', md: '2rem', lg: '2.5rem' },
                            mb: 1,
                            textAlign: { xs: 'center', sm: 'start' },
                        }}
                    >
                        MAXIMISE YOUR BUSINESS POTENTIAL
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ color: PRIMARY_ORANGE, fontWeight: FONT_WEIGHT_BOLD, mb: 2, fontSize: { xs: '0.8rem', md: '1.5rem' }, letterSpacing: { xs: 0, sm: '0.1em' }, textAlign: { xs: 'center', sm: 'start' }, }}
                    >
                        GROW WITH OUR DYNAMIC SERVICES
                    </Typography>
                </Box>
                <Box flex="40%">
                    <Typography variant="body1" sx={{ color: '#000000', lineHeight: 1.6, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                        Fotinos IT Solutions bridges the gap between technology and business needs —
                        helping SMEs turn challenges into opportunities through tailored digital solutions
                        and expert guidance. Unlock new opportunities for efficiency, and expansion
                        through our comprehensive range of IT solutions that help your organization adapt
                        faster, operate smarter.
                    </Typography>
                </Box>
            </Box>

            {/* Services Cards */}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 3,
                    justifyContent: 'space-between',
                }}
            >
                {servicesData.map((item, index) => (
                    <Box key={index} sx={{ flex: '1 1 calc(33% - 16px)', minWidth: 280 }}>
                        <ExpertiseCard {...item} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default ServicesSection;
