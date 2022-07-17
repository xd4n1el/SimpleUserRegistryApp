import styled from "styled-components";
import deleteIcon from "../../../images/delete-icon.png";

const Li = styled.li`
  display: flex;
  flex-wrap: wap;
  align-items: center;
  justify-content: space-around;
  background-color: #b5b5b5;
  height: 90px;
  width: 99.5%;
  margin: 1.2rem 0rem 0rem 0rem;
  padding: 0;
  border-radius: 5px;
`;

const Box = styled.div`

display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: transparent;
  align-items: baseline;
  width: 85%;
  margin: 0;
  padding: 0
  border: solid 1px black;
`;

const P = styled.p`
  font-size: 16px;
  padding: 0;
  margin: 0;
  font-weight: 400;
  width: 80%;

  &:first-child {
    width: 90%;
  }
`;

const Button = styled.button`
  background-image: url(${deleteIcon});
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: 110%;
  background-position: center center;
  height: 30px;
  width: 5%;
  cursor: pointer;
  border: none;
  margin: 0px 1rem 0px 0px;
`;

export default function UserInfo(props) {
  return (
    <Li>
      <Box>
        Id:<P>{props.id}</P>
        Apelido:<P>{props.nickname}</P>
        Gênero:<P>{props.gender}</P>
      </Box>
      <Button onClick={props.onClick} />
    </Li>
  );
}
