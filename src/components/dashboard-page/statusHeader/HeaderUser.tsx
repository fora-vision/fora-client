import { useNavigate } from "react-router-dom";
import { Level } from "../../level/Level";
import { AccountPhoto } from "../../header/account-panel/AccountPhoto";
import { HeaderUserWrapper, HeaderUsername, PhotoWrapper } from "./Styled";

interface IHeaderUser {
  username: string;
  level: number;
}

export const HeaderUser = ({ username, level }: IHeaderUser) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/profile");
  };

  return (
    <HeaderUserWrapper onClick={handleClick}>
      <PhotoWrapper>
        <AccountPhoto />
      </PhotoWrapper>
      <HeaderUsername>{username}</HeaderUsername>
      <Level score={level} />
    </HeaderUserWrapper>
  );
};
