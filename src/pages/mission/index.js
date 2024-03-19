import React from 'react';

// material-ui
import {
  Box,
  Stack,
  Typography
} from '@mui/material';


// ==============================|| DASHBOARD - DEFAULT ||============================== //

const Mission = () => {

  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h4">傳道與銀河水使命</Typography>
      </Stack>
      {/* img: 舒適圈、機會 */}
      <Typography variant="body1">
        大約高中開始陸續有上圖的想法，覺得人只能做到想法的界線，但可以透過學習漸進式擴展思維，說不定會遇到更適合自己的生活方式。所以比起怕生希望有更多的機會、可能性，上大學時會跑附近學校分析資源並嘗試使用。
      </Typography>
      <Typography variant="h5">
        A. 傳道
      </Typography>
      <Typography variant="body1">
        因此在新生時聽到老師說要傳道，就主動跟姐姐們說想要去這話語很棒。印象中每年都有去做，即使畢業後經歷進修轉職、工作轉換地區換教會的過渡期還是持續去做。
        雖然目前沒有果實但是一路上被神訓練很多有很多成長。一路連結超過200人，大概6位生命聽課至少5課，其中也有通過卻在2023年的患難不見了，但是這些努力卻換來家人的聽課!
        覺得自己是積極嘗試與找方法的人努力，過程中為生命禱告，也與指導者討論，成效不太好會覺得很不擅長不太想做，但是接觸生命的過程卻是讓自己成長最多、最快很喜歡的部分，因此依舊持續下去。
      </Typography>
      <hr />
      <Typography variant="h5">
        B. 銀河水教師
      </Typography>
      <Typography variant="body1">
        帶領生命需要緣分、時機，後來跟神說希望有更多機會呼喊話語，也想了解創造目的的歷史是什麼樣子，後來被神引導來幫助二代。

        過程中蠻有趣的，一開始不太會跟小朋友相處，平時生活也沒有這樣的機會。
      </Typography>


      *聯絡簿、*聖經教材、*老師的故事ai相關
    </Box>
  );
};

export default Mission;