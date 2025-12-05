import { Box, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ImagePlaceholder = ({ image, title }) => (
  <Box
    sx={{
      width: '100%',
      mb: 2,
    }}
  >
    <img
      src={image}
      alt={title}
      style={{
        width: '100%',
        height: 'auto',
        display: 'block',
      }}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src =
          'https://placehold.co/300x200/cccccc/000000?text=Illustration+Unavailable';
      }}
    />
  </Box>
);

const CaseStudyCard = ({ title, description, image, id }) => {

    const navigate = useNavigate();
  const cardStyles = {
    width: {
      xs: 'calc(100% - 16px)',      // 1 card per row on extra-small screens
      sm: 'calc(50% - 16px)',       // 2 cards per row on small screens
      md: 'calc(33.333% - 16px)',   // 3 cards per row on medium screens
      lg: 'calc(33.333% - 16px)',   // 3 cards per row on large screens
    },
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow:
      'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FDF7F4',
    pb: 4,
    m: 1, // margin between cards
  };

  return (
    <Paper elevation={0} sx={cardStyles} onClick={() => navigate(`/cases/${id}`)}>
      <ImagePlaceholder image={image} title={title} />

      <Box sx={{ px: 2, flexGrow: 1 }}>
        <Typography
          variant="h6"
          component="h3"
          sx={{
            mt: 1,
            mb: 1,
            fontWeight: 'bold',
            color: '#F07E2C',
          }}
        >
          {title}
        </Typography>

        <Typography variant="body1" sx={{ color: '#000000', px: 1 }}>
          {description}
        </Typography>
      </Box>
    </Paper>
  );
};

export default CaseStudyCard;
