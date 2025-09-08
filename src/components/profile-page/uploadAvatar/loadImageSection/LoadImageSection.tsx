import { Dispatch, SetStateAction } from "react";
import { InputsWrapper } from "./Styled";
import { PreviewInput } from "./previewInput/PreviewInput";
import { InputWrapper } from "./InputWrapper/InputWrapper";
import { ImagePreview } from "./ImagePreview";
import { IProfile } from "../../../../interfaces/api/IProfile";
import { useLoadImage } from "../../../../hooks/use-loadImage.hook";

interface ILoadImage {
  profile: IProfile,
  image: File | null,
  setImage: Dispatch<SetStateAction<File | null>>,
  setIsRequired: Dispatch<SetStateAction<boolean>>,
}

export const LoadImageSection = ({ profile, image, setImage, setIsRequired }: ILoadImage) => {
  const { imageName, imageSize, imageError, handleImageChange } = useLoadImage(setImage, setIsRequired)

  return (
    <InputsWrapper>
      {image
        ? <PreviewInput handleImageChange={handleImageChange} imageName={imageName} imageSize={imageSize} image={image} imageError={imageError} />
        : <InputWrapper handleImageChange={handleImageChange} />
      }
      {!!imageError ? <InputWrapper handleImageChange={handleImageChange} /> : <ImagePreview image={image} profile={profile} />}
    </InputsWrapper>
  )
}
