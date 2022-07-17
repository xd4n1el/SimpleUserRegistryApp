import ButtonImage from "./ButtonImage";
import menuIcon from "../../../images/menu-icon.png";
import ButtonModel from "./ButtonModel";
import P from "../P";

export default function UserListButton(props) {

  return (
    <ButtonModel
      id={"userListButton"}
      flex={true}
      buttonBg={"#FFFFFF"}
      buttonHeight={"103px"}
      buttonWidth={"100%"}
      textAlign={"left"}
      buttonBorder={"5px"}
      type={"button"}
      onClick={props.onClick}
      disabled={props.list.length === 0}
    >
      <ButtonImage
        bgImg={menuIcon}
        BgColor={"transparent"}
        bgSize={"55%"}
        imgHeight={"100%"}
        imgWidth={"50%"}
      />
      <P width={'20%'}>Listar Usuários</P>
    </ButtonModel>
  );
}
