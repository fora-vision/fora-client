import { LabeledInputWrapper } from './LabeledInput'
import { PureInput, PureLabel } from '../inputs'
import { Description } from '../inputDescription/Description'

export const LabeledDateInput = ({ label, id, placeholder, description, state, setState }) => {
  const handleChange = (event) => {
    let value = event.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d\d)(\d)/g, "$1/$2");
    value = value.replace(/\/(\d\d)(\d)/g, "/$1/$2");

    if (value.length > 10) {
      value = value.substring(0, 10);
    }

    setState(value);
  }
  return (
    <LabeledInputWrapper>
      <PureLabel htmlFor={id}>{label}</PureLabel>
      <PureInput placeholder={placeholder} id={id} value={state} onChange={handleChange} />
      {description && <Description description={description} />}
    </LabeledInputWrapper>
  )
}