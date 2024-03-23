import React from 'react';

import {
  Box,
  Stack,
  Typography
} from '@mui/material';

const Sport = () => {

  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h4">運動</Typography>
      </Stack>

      <Typography variant="body1" sx={{ mb: 1 }}>
        面對工作和生活的壓力，運動是我很喜歡的放鬆方式。每次運動後，身心放鬆、思緒清晰、行動力也提升。除了進修外，很喜歡透過運動平衡身心健康與職場壓力。因此，期盼能找到一位有運動習慣的伴侶，彼此相輔相成、互相激勵成長。
      </Typography>

      (補圖)
      -以前在台中幾乎每週去爬山
      -現在在台北天氣多變改成室內運動（高強度間接、空中瑜珈）
      天氣好騎腳踏車
    </Box>
  );
};

export default Sport;