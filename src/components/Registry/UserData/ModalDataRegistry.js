import UserModal from "../UserModal";
import DataRegistry from "./DataRegistry";

export default function UserDataRegistry(props) {
  return (
    <UserModal
      display={props.display}
      onClick={props.onCloseAction}
      title={"Cadastrar Usuário"}
    >
      <DataRegistry list={props.list} sendUserData={props.sendUserData} cancelButton={props.cancelButton}/>
    </UserModal>
  );
}
