import { Box, Typography } from '@mui/material';
import React from 'react';

const About = () => {
  return (
    <div>
     <Box display="flex" flexDirection="column" alignItems="center">
      <Typography sx={{ fontFamily:"fantasy"}} variant="h2"> This is a Library</Typography>
      <Typography sx={{ fontFamily:"fantasy"}} variant="h3">You can find all kind of books here</Typography>
     </Box>
    </div>
  );
};

export default About;