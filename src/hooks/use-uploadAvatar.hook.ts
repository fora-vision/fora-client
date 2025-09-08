import React, { useState } from 'react'
import { sessionStore } from '../store/sessionStore';
import { sendAvatarToApi, updateProfileAvatar } from '../utils/API/user/api-user';
import { userStore } from '../store/profileStore';

export const useUploadAvatar = (toggleAvatarUploading: () => void) => {
  const [image, setImage] = useState<File | null>(null);
  const [isRequired, setIsRequired] = useState<boolean>(false);
  const profile = userStore.getUserProfile()
  const profileId = profile.id;

  const handleWrapperClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as Element;
    if (target.closest('.modal')) {
      return;
    }
    toggleAvatarUploading()
  };

  const handleSave = async () => {
    const token = sessionStore.getSessionCode()
    if (image && token) {
      const formData = new FormData();
      formData.append('file', image);

      try {
        const response = await sendAvatarToApi(formData, profileId, token);
        const uploadedImageUrl = response.url;

        await updateProfileAvatar(uploadedImageUrl, token);
        userStore.updateAvatar(uploadedImageUrl);

        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return { handleWrapperClick, handleSave, image, setImage, isRequired, setIsRequired }
}

