import { Avatar, Box, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { getBadgeImageSrc, parseDateAbsolute } from "../../lib/utils";
import { theme } from "../../styles/theme";
import PostDetailMoreButton from "./PostDetailMoreButton";

interface Props {
  postDetail?: PostDetailType;
  isMyPost: boolean;
  onClickEditButton: () => void;
  onClickDeleteButton: () => void;
}

const BoardPostDetailProfile: React.FC<Props> = ({
  postDetail,
  isMyPost,
  onClickEditButton,
  onClickDeleteButton,
}) => {
  const matches = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: "1rem",
        p: "1rem",
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Avatar src={postDetail?.User.profile_image} />
        <Stack>
          <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              {postDetail?.User.username}
            </Typography>
            <Avatar
              src={getBadgeImageSrc(postDetail?.User.badge || "")}
              sx={{
                width: "1.25rem",
                height: " 1.25rem",
              }}
            />
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body2" color={grey[500]}>
              {parseDateAbsolute(postDetail?.createdAt)}
            </Typography>
            {matches && (
              <Typography variant="body2" color={grey[500]}>
                조회수 {postDetail?.hit}
              </Typography>
            )}
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        {isMyPost && (
          <Stack direction="row" spacing={2}>
            <Typography
              variant="body2"
              onClick={onClickEditButton}
              sx={{ cursor: "pointer" }}
            >
              수정
            </Typography>

            <Typography
              variant="body2"
              onClick={onClickDeleteButton}
              sx={{ cursor: "pointer" }}
            >
              삭제
            </Typography>
          </Stack>
        )}
        {!isMyPost && <PostDetailMoreButton postId={1} />}
      </Stack>
    </Box>
  );
};

export default BoardPostDetailProfile;
