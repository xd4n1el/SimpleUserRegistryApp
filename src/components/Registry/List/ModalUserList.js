import styled from "styled-components";
import UserModal from "../UserModal";
import UserInfo from "./UserInfo";
import P from "../../UI/P";

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  min-height: 0%;
  max-height: 75%;
  overflow: auto;
  list-style: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #000000;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: 878686;
  }

  @media screen and (max-width: 800px) {
    max-height: 85%;
  }
`;
export default function UserModalRegistry(props) {
  const userList = props.userList;

  const deleteUser = (userId) => {
    props.sentDeletedUser(userId);
  };

  const userListRender = (userList) => {
    return userList.map((user, index) => {
      return (
        <UserInfo
          key={index}
          id={user.id}
          nickname={user.nickname}
          gender={user.gender}
          onClick={() => deleteUser(user.id)}
        />
      );
    });
  };

  return (
    <UserModal
      display={props.display}
      onClick={props.onCloseAction}
      title={"Listagem de Usuários"}
    >
      {userList.length === 0 ? (
        <P>Não há usuários cadastrados</P>
      ) : (
        <Ul>{userListRender(userList)}</Ul>
      )}
    </UserModal>
  );
}
