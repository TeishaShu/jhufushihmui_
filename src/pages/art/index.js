import React from 'react';

import {
  Box,
  Stack,
  Typography
} from '@mui/material';

const Art = () => {

  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h4">藝術特質與使命</Typography>
      </Stack>
      <Typography variant="h5">[背景]</Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        大學時來教會參與各項使命，發現在攝影、聖歌隊、美術部的背後都蘊含與「美」相關的特質。<br />
        從國小二年級開始接觸繪畫，並持續到大學畢業，這段培養美感的旅程不僅提升了視覺敏銳度，也讓我深刻感受到美的力量、結構。
      </Typography>
      <Typography variant="h5">[神的帶領]</Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        神教導要成為特質的王，將世上學習的技能應用在教會中。因此，我透過攝影與 神對話，尋找活動中 神的啟示，並紀錄榮耀神的感人時刻；在聖歌隊中不只讚美，更試著以魂體、提升內心更專注向神獻上心情的告白；在美術部中發揮技能專長創作出作品。<br />
        每一刻，以為自己只是在努力服侍，但回顧時發現過程中不只提升能力，更感受到屬靈上、屬肉能力的共同成長，很感謝神一路的陪伴的帶領。
      </Typography>
      *玻璃門(介紹一下)
      *聖誕節卡片
      *ig搞笑
      *攝影-排球
    </Box>
  );
};

export default Art;