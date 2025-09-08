import { styled } from 'styled-components'
import { PureLabel, } from '../inputs'
import { useToggle } from '../../hooks/use-toggle.hook'
import { Description } from '../inputDescription/Description'
import { Dropdown } from './Dropdown'

const LabeledSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const LabeledSelect = ({ label, description, state, setState, options }) => {
  const [isOpen, toggleOpen] = useToggle();
  const handleChange = (event) => {
    setState(event.target.innerText)
    toggleOpen();
  }
  return (
    <LabeledSelectWrapper>
      <PureLabel>{label}</PureLabel>
      <Dropdown options={options} handleChange={handleChange} state={state} isOpen={isOpen} toggleOpen={toggleOpen} />
      {description && <Description description={description} />}
    </LabeledSelectWrapper>
  )
}