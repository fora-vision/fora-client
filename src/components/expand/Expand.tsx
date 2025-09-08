import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from '../../images/arrow-icon.svg'

type ArrowIconImageProps = {
  $reverse: boolean;
}

const ArrowIconImage = styled(ArrowIcon) <ArrowIconImageProps>`
  transform: rotate(${props => props.$reverse ? '180deg' : '0deg'});
  transition: all 0.1s;
`;

export const Expand = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <ArrowIconImage $reverse={isOpen} />
  )
}
