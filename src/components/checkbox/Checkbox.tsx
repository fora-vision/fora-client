import { CheckBlackIcon, CheckIcon, CheckWrapper, Input, Label } from "./Styled"

export const Checkbox = ({ isCheck, toggleCheck, error }: { isCheck: boolean, toggleCheck: () => void, error: string }) => {
  return (
    <CheckWrapper >
      <Input id="input" type="checkbox" checked={isCheck} onChange={toggleCheck} />
      <Label htmlFor="input" $isChecked={isCheck} $error={error} />
      {isCheck ? <CheckBlackIcon onClick={toggleCheck} /> : <CheckIcon onClick={toggleCheck} />}
    </CheckWrapper>
  )
}
