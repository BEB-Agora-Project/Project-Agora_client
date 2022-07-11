import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MarketAccordian: React.FC = () => {
  return (
    <Stack>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>뱃지가 무엇인가요?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 2 }}>
          <Typography>
            뱃지는 닉네임의 오른쪽에 붙일 수 있는 치장용 아이템입니다. 한번
            구매하면 계속 사용할 수 있습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>NFT 아이템으로 무엇을 할 수 있나요?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 2 }}>
          <Typography>
            자신의 프로필 사진으로 등록하거나 글, 댓글에 첨부할 수 있습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>토큰을 어떻게 얻을 수 있나요?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 2 }}>
          <Typography>
            토큰은 아고라 내에서 쓰이는 가상화폐로, 커뮤니티 활동 등으로 획득할
            수 있습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};

export default MarketAccordian;
