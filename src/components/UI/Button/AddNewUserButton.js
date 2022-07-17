import ButtonImage from "./ButtonImage";
import addIcon from "../../../images/add-icon.png";
import ButtonModel from "./ButtonModel";
import P from "../P";

export default function AddNewUserButton(props) {
  return (
    <ButtonModel
      flex={true}
      buttonBg={"#FFFFFF"}
      buttonHeight={"103px"}
      buttonWidth={"100%"}
      textAlign={"left"}
      buttonBorder={"5px"}
      type={"button"}
      onClick={props.onClick}
    >
      <ButtonImage
        bgImg={addIcon}
        BgColor={"transparent"}
        imgHeight={"100%"}
        imgWidth={"50%"}
      />
      <P>Cadastrar Novo Usuário</P>
    </ButtonModel>
  );
}
