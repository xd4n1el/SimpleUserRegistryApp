import styled from "styled-components";
import AddNewUserButton from "./Button/AddNewUserButton";
import UserListButton from "./Button/UserListButton";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 42.5%;
  max-width: 525px;
  height: 30%;
  margin: 5rem;

  @media screen and (max-width: 1200px) {
    height: 40%;
  }

  @media screen and (max-width: 1000px) {
    width: 80%;
    max-width: 80%;
    margin: 2rem;
  }

  @media screen and (max-width: 750px) {
    width: 95%;
    max-width: 95%;
  }
`;

export default function ButtonHome(props) {
  return (
    <Div>
      <AddNewUserButton onClick={props.onAddNewUserClick} />
      <UserListButton onClick={props.onUserListClick} list={props.list}/>
    </Div>
  );
}
