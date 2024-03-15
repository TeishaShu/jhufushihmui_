import React from 'react';

// material-ui
import {
  Box,
  Stack,
  Typography
} from '@mui/material';


// ==============================|| DASHBOARD - DEFAULT ||============================== //

const Sport = () => {

  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h4">運動</Typography>
      </Stack>
      (找米粒介紹的影片寫~~充滿熱情的自我介紹)
      喜歡的理由表達出來-熱情，有追求很有魅力。

      平時的工作、生活壓力比較大，也很多用眼，除非要進修，不然都會出門親近大自然，以前住台中幾乎每周都會去爬山，後來到台北天氣的因素比較多室內運動 Ex:高強度間接性運動、空中瑜珈。天氣好時也會去騎腳踏車到處晃晃。
      除了健康外，每次運動後想法都會比較開，實踐力也比較強，因此也希望自己的對象也是有運動的人。
    </Box>
  );
};

export default Sport;