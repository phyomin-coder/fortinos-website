import React from 'react';
import { Box, Typography } from '@mui/material';
import ExpertiseImage from '../assets/images/our-service.png';
import PowerPlatformImg from '../assets/images/expartise1.png';
import DataAnalyticsImg from '../assets/images/expartise2.png';
import ExpertiseCard from './common/ExpertiseCard'; // ✅ import new common component

const PRIMARY_ORANGE = '#F07E2C';
const FONT_WEIGHT_BOLD = 800;

const expertiseData = [
  {
    icon: PowerPlatformImg,
    title: 'Power Platform Solutions',
    description:
      'Empower your business with no-code and low-code automation. We design custom Power Apps, Power Automate workflows, and Power Virtual chatbots that simplify operations and boost productivity.',
  },
  {
    icon: DataAnalyticsImg,
    title: 'Data Analytics & Power BI',
    description:
      'Our Power BI and analytics solutions help you track performance, identify trends, and make informed decisions with clear, interactive dashboards and real-time reports to actionable insights.',
  },
];

const ExpertiseSection = () => {
  return (
    <Box sx={{ bgcolor: 'white', py: { xs: 4, md: 8 }, px: { xs: 4, md: 8 } }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: { xs: 'column', lg: 'row' },
          flexWrap: { xs: 'wrap', md: 'wrap' },
        }}
      >
        {/* LEFT COLUMN */}
        <Box sx={{ width: { xs: '100%', lg: '50%' }, boxSizing: 'border-box', pl: { md: 8 } }}>
          {/* Section Title */}
          <Box sx={{ mb: { xs: 3, md: 6 }, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: 20, height: 3, bgcolor: PRIMARY_ORANGE, borderRadius: 1, mr: 1.5 }} />
            <Typography
              variant="h4"
              sx={{
                color: PRIMARY_ORANGE,
                fontWeight: FONT_WEIGHT_BOLD,
                letterSpacing: { xs: '0.1em', md: '0.2em' },
                textTransform: 'uppercase',
                fontSize: { xs: '1rem', md: '2rem' },
              }}
            >
              OUR EXPERTISE
            </Typography>
          </Box>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.125rem' },
              lineHeight: 1.6,
              color: '#000000',
              mb: { xs: 4, md: 6 },
            }}
          >
            Whether you're digitizing internal processes, building business dashboards,
            or upgrading enterprise systems, we combine technical expertise with local
            understanding to help your organization grow faster, work smarter, and
            compete confidently in today’s digital economy.
          </Typography>

          {/* Expertise Cards */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'center', sm: 'stretch' },
            }}
          >
            {expertiseData.map((item, index) => (
              <Box key={index} sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)' } }}>
                <ExpertiseCard {...item} /> {/* ✅ Use common component */}
              </Box>
            ))}
          </Box>
        </Box>

        {/* RIGHT COLUMN */}
        <Box
          sx={{
            width: { xs: '100%', lg: '45%' },
            display: { xs: 'none', sm: 'flex' },
            justifyContent: 'center',
            alignItems: 'center',
            mt: { xs: 4, md: 4 },
          }}
        >
          <Box component="img" src={ExpertiseImage} alt="Expertise" sx={{ width: '90%', maxWidth: 500 }} />
        </Box>
      </Box>
    </Box>
  );
};

export default ExpertiseSection;
