import styled from "styled-components";
import P from "../../UI/P";
import Gender from "./Gender";
import ButtonModel from "../../UI/Button/ButtonModel";
import { useState } from "react";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 75%;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 89%;
  height 50px;
  margin-top: 2rem;
`;

const Input = styled.input`
  width: 75%;
  border: none;
  background-color: #d9d9d9;
  border-radius: 5px;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

export default function DataRegistry(props) {
  const [userData, setUserData] = useState({
    name: "",
    nickname: "",
    gender: "Homem",
  });

  const resetForms = () => {
    setUserData((user) => {
      return { ...user, name: "", nickname: "" };
    });
  };

  const setName = (event) => {
    setUserData((user) => {
      return { ...user, name: event.target.value };
    });
  };

  const setNickname = (event) => {
    setUserData((user) => {
      return { ...user, nickname: event.target.value };
    });
  };

  const setGender = (optionGender) => {
    setUserData((user) => {
      return { ...user, gender: optionGender };
    });
  };

  const sendUserData = () => {
    if (userData.nickname === "") {
      return;
    }
    props.sendUserData(userData);
    resetForms();
  };

  return (
    <Div>
      <Box>
        <P>Nome: </P>
        <Input value={userData.name} onChange={setName} />
      </Box>
      <Box>
        <P>Apelido: </P>
        <Input value={userData.nickname} onChange={setNickname} />
      </Box>
      <Box>
        <P>Gênero: </P>
        <Gender onGetGender={setGender} />
      </Box>
      <Box>
        <ButtonModel
          buttonBg={"#DB3A3A"}
          buttonHeight={"100%"}
          buttonWidth={"40%"}
          buttonBorder={"10px"}
          textColor={"#ffffff"}
          onClick={props.cancelButton}
        >
          Cancelar
        </ButtonModel>
        <ButtonModel
          buttonBg={"#22AA48"}
          buttonHeight={"100%"}
          buttonWidth={"40%"}
          buttonBorder={"5px"}
          textColor={"#ffffff"}
          onClick={sendUserData}
        >
          Salvar
        </ButtonModel>
      </Box>
    </Div>
  );
}
