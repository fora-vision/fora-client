import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { DropdownOption } from './DropdownOption';
import { DropdownOptionsWrapper } from './DropdownOptionsWrapper';
import { DropdownHeader } from './DropdownHeader';
import { ReactComponent as SelectArrow } from '../../images/select-arrow.svg'
import { ReactComponent as SelectArrowUp } from '../../images/select-arrow-up.svg'

const DropdownContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const Dropdown = ({ options, handleChange, state, isOpen, toggleOpen }) => {
  const { t } = useTranslation();
  return (
    <DropdownContainer>
      <DropdownHeader onClick={toggleOpen}>
        {state ? state : t('components.select.default')}
        {isOpen ? <SelectArrowUp /> : <SelectArrow />}
      </DropdownHeader>
      {isOpen && (
        <DropdownOptionsWrapper>
          {options.map(option => {
            return <DropdownOption key={option} option={option} handleChange={handleChange} />
          })}
        </DropdownOptionsWrapper>
      )}
    </DropdownContainer>
  )
}
