import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { PSmall } from "../typographic";
import { DifficultLevelSticks } from "./DifficultLevelSticks";
import { Wrapper } from "./Level";

const DifficultWrapper = styled(Wrapper)`
  gap: 6px;
  padding: 8px 12px;
`;

export const DifficultLevel = ({
  difficultLevel,
}: {
  difficultLevel: number;
}) => {
  const { t } = useTranslation();
  let levelText;
  if (difficultLevel === 0) {
    levelText = t("difficulty.unspecified");
  } else if (difficultLevel === 1) {
    levelText = t("difficulty.easy");
  } else if (difficultLevel === 2) {
    levelText = t("difficulty.medium");
  } else if (difficultLevel === 3) {
    levelText = t("difficulty.hard");
  }
  return (
    <DifficultWrapper>
      <DifficultLevelSticks level={difficultLevel} />
      <PSmall>{levelText}</PSmall>
    </DifficultWrapper>
  );
};
