import styled from "styled-components";

const Button = styled.button`
  display: ${(props) => (props.flex ? "flex" : "")};
  justify-content: ${(props) => (props.flex ? "space-around" : "")};
  align-items: ${(props) => (props.flex ? "center" : "")};
  background-color: ${(props) => props.buttonBg};
  width: ${(props) => props.buttonWidth};
  height: ${(props) => props.buttonHeight};
  text-align: ${(props) => props.textAlign};
  border-radius: ${(props) => props.buttonBorder};
  color: ${(props) => props.textColor};
  border: none;
  cursor: pointer;
  user-select none;
  box-shadow: 2px 2px grey;
`;

export default function ButtonModel(props) {
  return (
    <Button
      id={props.id}
      flex={props.flex}
      buttonBg={props.buttonBg}
      buttonHeight={props.buttonHeight}
      buttonWidth={props.buttonWidth}
      buttonBorder={props.buttonBorder}
      textAlign={props.textAlign}
      textColor={props.textColor}
      type={props.buttonType}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </Button>
  );
}
