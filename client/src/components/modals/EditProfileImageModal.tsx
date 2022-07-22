import React, { useRef, useState } from "react";
import {
  Avatar,
  Box,
  Dialog,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "../../store";
import { modalActions } from "../../store/modalSlice";
import CloseIcon from "@mui/icons-material/Close";
import { grey } from "@mui/material/colors";
import ProfileImageFileInput from "../mypage/ProfileImageFileInput";
import CTAButton from "../common/CTAButton";
import { updateProfileImageAPI } from "../../lib/api/user";

const EditProfileImageModal: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState("");

  const isEditProfileImageModalOpen = useSelector(
    (state) => state.modal.isEditProfileImageModalOpen
  );

  const profileImageInputRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch();

  const onCloseEditProfileImageModal = () => {
    dispatch(modalActions.setIsEditProfileImageModalOpen(false));

    setImageFile(null);
    setImageSrc("");
  };

  const onClickSubmitButton = async () => {
    // API call
    console.log("EditProfileImageModal.tsx | imageFile");
    console.log(imageFile);

    const formData = new FormData();
    formData.append("image", imageFile || "null");

    const body = formData;

    setIsLoading(true);
    try {
      const response = await updateProfileImageAPI(body);
      console.log("EditProfileImageModal.tsx | updateProfileImageAPI response");
      console.log(response);

      window.location.reload();
    } catch (error) {
      console.log("EditProfileImageModal.tsx | updateProfileImageAPI error");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onClickImageFileInput = () => {
    if (!profileImageInputRef.current) return;
    profileImageInputRef.current.click();
  };

  const onChangeProfileImageInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      console.log("EditProfileImageModal.tsx | event.target.files[0]");
      console.log(event.target.files[0]);
      setImageFile(event.target.files[0]);
      setImageSrc(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <Dialog
      open={isEditProfileImageModalOpen}
      onClose={onCloseEditProfileImageModal}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 4 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            프로필 이미지 업데이트
          </Typography>
          <IconButton
            onClick={onCloseEditProfileImageModal}
            aria-label="edit-profile-image"
          >
            <CloseIcon />
          </IconButton>
        </Stack>
        <Typography sx={{ color: grey[500] }}>
          프로필 이미지는 10MB 이내의 JPEG, PNG 형식이어야 합니다.
        </Typography>
        <Typography variant="h6">이미지 업로드</Typography>
        <ProfileImageFileInput onClick={onClickImageFileInput} />
        <input
          type="file"
          accept="image/png, image/jpeg"
          style={{ display: "none" }}
          ref={profileImageInputRef}
          onChange={onChangeProfileImageInput}
        />
        <Typography variant="h6">이미지 미리보기</Typography>
        <Avatar
          sx={{ height: "10rem", width: "10rem", alignSelf: "center", my: 2 }}
          src={imageSrc}
        />
        <CTAButton isLoading={isLoading} onClick={onClickSubmitButton}>
          변경하기
        </CTAButton>
      </Box>
    </Dialog>
  );
};

export default EditProfileImageModal;
