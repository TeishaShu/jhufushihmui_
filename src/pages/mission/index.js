import React from 'react';

import {
  Box,
  Stack,
  Typography
} from '@mui/material';

const Mission = () => {

  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h4">傳道與銀河水使命</Typography>
      </Stack>
      {/* img: 舒適圈、機會 */}
      <Typography variant="body1" sx={{ mb: 1 }}>
        生活中很能感受到上圖的想法：人只能做到想法的界線，但可以透過學習漸進式擴展思維，更好的機會、更適合自己的方式可能在認知之外。<br />
        所以比起怕生希望有更多的機會、可能性，不管是大學、上班後一直以來都很積極地向外探索、整合資源。
      </Typography>
      <Typography variant="h5">
        [A. 傳道]
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        新生時覺得話語超棒，也聽到老師說要傳道，便主動告訴姐姐們想一同參與。每年都有去做，即使畢業後經歷進修轉職、工作轉換、搬家換地區換教會的過渡期還是持續去做。<br />
        儘管目前沒有果實，一路上連結超過300人，其中大約有6位生命聽超過5課(有甚至聽了20幾課)，其中也有通過卻在2023年的患難失去了蹤影，然而這些努力卻換來家人的聽課! (繼續努力)<br />
        覺得自己是積極嘗試與尋找方法的人。過程中為生命禱告、與指導者討論，即使成效不太好，有時會感到力不從心，甚至不想繼續，但接觸生命的過程卻是 神對我訓練、成長最多的時刻，因此很喜歡會持續做下去。
      </Typography>

      <Typography variant="h5">
        [B. 銀河水教師]
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        帶領生命需要緣分、時機，後來跟神說希望有更多機會呼喊話語，也想了解創造目的的歷史是什麼樣子，後來被神引導來幫助二代。
        <br />
        過程中有很多的突破:<br /><br />
        1.與小朋友相處:<br />
        平時生活沒有這樣的環境，慢慢觀察也請教前輩。後來發現跟他們的互動中，自己會回歸正真實的狀態，可以退去在社會拚搏中的緊縮感。<br /><br />
        2.教主日學:<br />
        擔任小一的教師，上學期像是幼稚園，下學期卻是成長飛速的小孩，因此需要用他們能理解的方式來分享主日內容。在沒有主日學 PPT的情況，我會依照主日來做教材，有 PPT 時則整合幼兒部、國小部的內容傳達。<br /><br />
        3.主日學教材: <br />
        幼兒部一開始沒有教材，主日對他們太難了，所以教師們一起整理聖經人物故事協助教師教學。我整理了以利亞、撒姆爾、約西亞的故事。這過程中很像在靈修，尤其對以利亞的故事很深刻。<br /><br />
        
        為了要恢復以色列的信仰不是拜偶像，遇到了巨大挑戰，面對悖逆的人民，他不是有告知就好。
        而是為了達成神的旨意，人民警告後繼續拜偶像遇到3年的旱災，這期間以利亞到溪邊為了勝利立下禱告3.5年的條件(這期間有烏鴉飯的故事)，後來神的時機成熟，跟850名假先知 PK，最後降下火得勝。
        
        他為了達成神的旨意，當下遇到極為困難的挑戰，很迷茫、看不到希望，過得很辛苦像是流浪漢，但是他很堅持為了實現神的旨意，帶著信心和禱告到相信神一定會降下火的程度，來讓人民迴轉歸向神。
        這部份很觸動我，覺得遇到困難也要像以利亞這樣努力之後，要放棄再放棄。
      </Typography>


      *聯絡簿、*聖經教材、*老師的故事ai相關
    </Box>
  );
};

export default Mission;