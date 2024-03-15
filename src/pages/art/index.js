import React from 'react';

// material-ui
import {
  Box,
  Stack,
  Typography
} from '@mui/material';


// ==============================|| DASHBOARD - DEFAULT ||============================== //

const Art = () => {

  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h4">藝術特質與使命</Typography>
      </Stack>
      <Typography variant="body1">
          大學時期來教會開始參與各項使命，發現在攝影、聖歌隊、美術部的使命中都跟「美」的特質有關。
          <br />
          從國小二年級開始接觸繪畫，一路到大學畢業，這段培養美感的旅程不僅提升了視覺敏銳度，更讓我感受到美的力量、結構。
          <br />
          神教導要成為特質的王，也說要把在世上學習的技術應用在教會裡。因此，我透過攝影與 神對話，尋找活動中的 神的啟示，並紀錄榮耀神的感人瞬間；在聖歌隊中不只讚美，也試著以魂體、提升內心向神獻上告白；在美術部中發揮技能專長創作出作品。
          <br />
          每一個時刻，以為自己只是在努力服侍，回顧時發現過程中不只提升能力，更感受到屬靈上的成長與 神的點點滴滴，很感謝神的帶領。
          <br />
          <br />
          下面是一些作品的分享
        </Typography>

        *玻璃門(介紹一下)
        *聖誕節卡片
        *ig搞笑
        *攝影-排球
    </Box>
  );
};

export default Art;