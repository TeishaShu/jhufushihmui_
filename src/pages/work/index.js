import React from 'react';

import {
  Box,
  Stack,
  Typography,
  Link
} from '@mui/material';

const Work = () => {

  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h4">工作</Typography>
      </Stack>

      <Typography variant="h5">[背景]</Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        我擁有5年的工作經驗，涵蓋了3年的前端程式開發和2年的網頁設計與網頁企劃經驗。這段歷程包括需求訪談、網頁設計規劃、使用者體驗、前端開發以及RWD響應式跨平臺應用。
      </Typography>

      <Typography variant="h5">[熱情]</Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        蠻喜歡前端這工作，因為結合了我視覺專業訓練7年的美學養成，以及美中又有規範化的工作流程。工作起來就像把鍵盤化身為調色盤，並且套用邏輯增加功能性，瞭解使用者需求後做出來的成品，讓我很有成就感。
      </Typography>

      <Typography variant="h5">[神的帶領]</Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        在禱告與神的對話中，神說我去寫程式可以幫助我空提! 即使一開始不擅長缺乏特別強的邏輯思維，但因為有 神的引導一路上 神會同在不會只有自己走。過程中得到了許多人的幫助，尤其在挑戰獨立作業中遇到困難時，卻變成信仰最好的時候，一直請教聖靈怎麼尋找並解決 bug，很感謝聖靈都特別同在並賜下靈感指引，讓我的轉職之路變得更加順利!
      </Typography>

      <Typography variant="h5">[交託與能力的訓練]</Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        回顧這段時間，意識到自己習慣做許多功課後再做決定。然而，不管做多少準備 神的引導都比手中的資料、認識的自己更適合，深刻感受到 神比我更瞭解自己。
        <br />
        往程式領域很像天外飛來一筆，原本生活幾乎接觸不到，轉職一段時間後原本科系反而成為我市場上的優勢。思維轉換是跨領域最大的挑戰，藝術創意需要打破慣性垂直思考，程式則強調邏輯的步驟性。當我遇到困難時，透過禱告的靈感和請教前輩來逐步前進。
        <br />
        這過程除了能力提升，也感受到一開始 神說寫程式可以幫助我空提的回應!瞭解在低潮時怎麼分析問題並向前邁進。成長過程讓我體會到「交託給神」的意義，以往禱告後還是壓力很大，但當 神成為我的方向盤時，只要把一個個問題解決也立下義的條件，當時機到神會引領我到最適合的位置，不會有任何的虧損、吃虧，一路上都是為長遠打下的基礎，很感謝神超有耐心的安排、帶領!
      </Typography>


      <Link href="https://teishashu.github.io/hexo_blogger/" target="_blank">程式相關的筆記</Link>

    </Box>
  );
};

export default Work;