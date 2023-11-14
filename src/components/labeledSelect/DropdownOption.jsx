import styled from 'styled-components';

export const Wrapper = styled.div`
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const DropdownOption = ({ option, handleChange }) => {
  return (
    <Wrapper onClick={handleChange}>{option}</Wrapper>
  )
}
