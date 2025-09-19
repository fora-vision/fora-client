import { useTranslation } from "react-i18next";
import { IProfile } from "../../../interfaces/api/IProfile";
import { LabeledInput } from "../../labeledInput/LabeledInput";
import { ButtonWrapper, FormButton, InputsWrapper } from "./Styled";
import { Loader } from "../../loader/Loader";
import { useProfileUpdate } from "../../../hooks/use-profileUpdate.hook";
import { ProfileSectionWrapper } from "../emailSection/Styled";

export const ProfileDataSection = ({ profile }: { profile: IProfile }) => {
  const { t } = useTranslation();
  const { handleSubmit, isUpdating, states, setStates, isChanged } =
    useProfileUpdate(profile);
  const buttonContent = isUpdating ? <Loader /> : t("pages.profile.save");

  return (
    <ProfileSectionWrapper>
      <form onSubmit={handleSubmit}>
        <InputsWrapper>
          <LabeledInput
            label={t("pages.signup.group")}
            id="group"
            state={states.group}
            setState={setStates.setGroup}
            placeholder={t("pages.signup.optionally")}
          />
          <LabeledInput
            label={t("pages.signup.firstName")}
            id="name"
            state={states.name}
            setState={setStates.setName}
          />
          <LabeledInput
            label={t("pages.signup.lastName")}
            id="last-name"
            state={states.lastName}
            setState={setStates.setLastName}
          />
        </InputsWrapper>
        <ButtonWrapper>
          <FormButton disabled={isUpdating || !isChanged}>
            {buttonContent}
          </FormButton>
        </ButtonWrapper>
      </form>
    </ProfileSectionWrapper>
  );
};
