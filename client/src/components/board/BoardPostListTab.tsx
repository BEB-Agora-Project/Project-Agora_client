import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

interface Props {
  tabValue: string;
  onChangeTab: (
    event: React.SyntheticEvent<Element, Event>,
    tabValue: string
  ) => void;
}

const BoardPostListTab: React.FC<Props> = ({ tabValue, onChangeTab }) => {
  return (
    <Box
      sx={{
        display: "flex",
        borderBottom: 1,
        borderColor: "divider",
        justifyContent: "space-between",
      }}
    >
      <Tabs value={tabValue} onChange={onChangeTab}>
        <Tab label="전체" value="all" sx={{ fontSize: "1rem" }} />
        <Tab label="인기글" value="popular" sx={{ fontSize: "1rem" }} />
      </Tabs>
    </Box>
  );
};

export default BoardPostListTab;
