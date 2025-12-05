// src/components/ExpertiseCard.js
import React from 'react';
import { Box, Typography, styled } from '@mui/material';

const CardWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#FDF7F4',
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  boxShadow: theme.shadows[1],
  border: `1px solid ${theme.palette.grey[200]}`,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[4],
  },
}));

const ExpertiseCard = ({ icon, title, description }) => {
  return (
    <CardWrapper>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}>
        <Box
          sx={{
            width: 60,
            height: 60,
          }}
        >
          <Box
            component="img"
            src={icon}
            alt={title}
            sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </Box>
        <Typography
          variant="h6"
          sx={{ fontWeight: 'bold', color: '#F07E2C', fontSize: 14 }}
        >
          {title}
        </Typography>
      </Box>

      <Typography variant="body2" sx={{ color: '#000000', mt: 1 }}>
        {description}
      </Typography>
    </CardWrapper>
  );
};

export default ExpertiseCard;
