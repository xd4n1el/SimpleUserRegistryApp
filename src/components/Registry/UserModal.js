import styled from "styled-components";
import P from "../UI/P";
import closeIcon from "../../images/close-icon.png";

const Div = styled.div`
  display: ${(props) => (props.display === "yes" ? "flex" : "none")};
  position: absolute;
  transform: translate(0%, 2%);
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  height: 70%;
  max-height: 526px;
  width: 40%;
  max-width: 611px;
  margin: 5rem;
  border-radius: 5px;
  z-index: 99;

  @media screen and (max-width: 1400px) {
    width: 60%;
    max-width: 60%;
  }

  @media screen and (max-width: 1001px) {
    width: 80%;
    max-width: 80%;
    max-height: 90%;
  }

  @media screen and (max-width: 800px) {
    height: 100%;
    max-height: 100%;
    width: 100%;
    max-width: 100%;
    margin: 0;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  height: 50px;
  margin: 2rem 0rem 0rem 6rem;

  @media screen and (max-width: 800px) {
    margin: 0;
    margin: 2rem 0rem 0 10rem;
    width: 50%;
  }
`;

const Button = styled.button`
  background-image: url(${closeIcon});
  background-color: transparent;
  background-position: center center;
  background-size: 100%;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
`;

export default function UserList(props) {
  return (
    <Div display={props.display}>
      <Box>
        <P>{props.title}</P>
        <Button onClick={props.onClick} />
      </Box>
      {props.children}
    </Div>
  );
}
