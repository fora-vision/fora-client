import React, { Dispatch, SetStateAction, useState } from 'react'
import { formatSizeError, imageNoError, imageSizeError, kilobytesInMegabytes, maxImageSizeInMegabytes } from '../utils/constants';

export const useLoadImage = (setImage: Dispatch<SetStateAction<File | null>>, setIsRequired: Dispatch<SetStateAction<boolean>>) => {
  const [imageName, setImageName] = useState("");
  const [imageSize, setImageSize] = useState("");
  const [imageError, setImageError] = useState(0)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      let hasError = false;
      if (file.size > maxImageSizeInMegabytes) {
        setImageError(imageSizeError);
        hasError = true;
      }
      const validExtensions = ['.png', '.jpeg', '.jpg', '.tiff'];
      const fileExtension = '.' + file.name.split('.').pop();
      if (!validExtensions.includes(fileExtension.toLowerCase())) {
        setImageError(formatSizeError);
        hasError = true;
      }
      if (!hasError) {
        setImageError(imageNoError);
        setIsRequired(true)
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImage(file);
          setImageName(file.name);
          setImageSize((file.size / kilobytesInMegabytes / kilobytesInMegabytes).toFixed(2));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return {
    imageName,
    imageSize,
    imageError,
    handleImageChange
  }
}
