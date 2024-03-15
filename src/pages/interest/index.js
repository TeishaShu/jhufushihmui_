import React from 'react';

// material-ui
import {
  Box,
  Stack,
  Typography
} from '@mui/material';


// ==============================|| DASHBOARD - DEFAULT ||============================== //

const Interest = () => {

  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h4">興趣</Typography>
      </Stack>
      (找米粒介紹的影片寫~~充滿熱情的自我介紹)
      喜歡的理由表達出來-熱情，有追求很有魅力。

      興趣~參加讀書會、進修
    </Box>
  );
};

export default Interest;