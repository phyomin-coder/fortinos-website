import { Box, Typography, Container, Paper, Stack } from '@mui/material'; // Removed useTheme for simplicity

const ExpertiseCardOne = ({ title, description, imageURL, imageSide }) => {
  const isImageLeft = imageSide === 'left';
  
  // Define a grey color directly, avoiding useTheme dependency
  const grey300 = '#FDF7F4'; 

  // Component structure that mimics a styled MUI Box (the dashed circle)
  const ImageBox = (
    <Box
      sx={{
        flexShrink: 0,
        p: 0,
        width: { xs: 80, sm: 200 },
        height: { xs: 80, sm: 200 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // border: '4px dashed',
        // borderColor: grey300,
        borderRadius: '50%',
        // boxShadow: 3,
        bgcolor: 'white',
        overflow: 'hidden',
        mr: isImageLeft ? { xs: 2, sm: 4 } : 0, // Margin right if image is left
        ml: isImageLeft ? 0 : { xs: 2, sm: 4 }, // Margin left if image is right
      }}
    >
      {/* Image element */}
      <img
        src={imageURL}
        alt={title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '50%',
        }}
        // Fallback for image loading error
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/120x120/cccccc/000000?text=Error" }}
      />
    </Box>
  );

  // Main Card structure using Paper and Stack for responsive layout
  return (
    <Paper
      elevation={8} // Shadow
      sx={{
        borderRadius: 3,
        mb: 3,
        p: { xs: 2, sm: 4 }, // Responsive padding
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          elevation: 16,
          transform: 'translateY(-4px)',
        },
      }}
    >
      <Stack
        // Use 'row' on all screens. We rely on the flexDirection property below for alternating.
        direction="row" 
        alignItems="center"
        spacing={{ xs: 2, sm: 4 }}
        sx={{
          // Use 'row' for Left side (default) or 'row-reverse' for Right side
          flexDirection: isImageLeft ? 'row' : 'row-reverse',
        }}
      >
        {ImageBox}
        
        {/* Content Box */}
        <Box sx={{ flexGrow: 1, p: { xs: 0, sm: 1 } }}>
          <Typography variant="h5" component="h3" fontWeight="bold" color="text.primary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
};

export default ExpertiseCardOne;