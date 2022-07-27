import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import ToggleButtonGroup from "../common/ToggleButtonGroup";
import ToggleButton from "../common/ToggleButton";
import ViewListIcon from "@mui/icons-material/ViewList";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "../../hooks/useMediaQuery";
import { theme } from "../../styles/theme";

interface Props {
  tabValue: string;
  viewType: "text" | "image";
  setViewType: (viewType: "image" | "text") => void;
  onChangeTab: (
    event: React.SyntheticEvent<Element, Event>,
    tabValue: string
  ) => void;
}

const BoardPostListTab: React.FC<Props> = ({
  tabValue,
  viewType,
  setViewType,
  onChangeTab,
}) => {
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  return (
    <Box
      sx={{
        display: "flex",
        borderBottom: 1,
        borderColor: "divider",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Tabs value={tabValue} onChange={onChangeTab}>
        <Tab label="전체" value="all" sx={{ fontSize: "1rem" }} />
        <Tab label="인기글" value="popular" sx={{ fontSize: "1rem" }} />
      </Tabs>
      <Box sx={{ mr: matches ? 4 : 2 }}>
        <ToggleButtonGroup>
          <ToggleButton
            active={viewType === "text"}
            onClick={() => setViewType("text")}
          >
            <MenuIcon />
          </ToggleButton>
          <ToggleButton
            active={viewType === "image"}
            onClick={() => setViewType("image")}
          >
            <ViewListIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
};

export default BoardPostListTab;
