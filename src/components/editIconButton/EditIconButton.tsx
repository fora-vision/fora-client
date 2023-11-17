import { EditButton, Wrapper } from "./Styled"
import { ReactComponent as EditIcon } from '../../images/profile/edit-icon.svg'

interface IEditIcon {
  toggleAvatarUploading: () => void
}

export const EditIconButton = ({ toggleAvatarUploading }: IEditIcon) => {
  return (
    <Wrapper>
      <EditButton onClick={toggleAvatarUploading}>
        <EditIcon />
      </EditButton>
    </Wrapper>
  )
}
