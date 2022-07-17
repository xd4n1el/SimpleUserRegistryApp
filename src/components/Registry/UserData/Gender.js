import { Select } from "react-functional-select";
import styled from "styled-components";

const options = [
  {
    key: 1,
    label: "Homem",
    value: "Homem",
  },
  {
    key: 2,
    label: "Mulher",
    value: "Mulher",
  },
];

const Div = styled.div`
  width: 70%;
`;

const themes = {
  control: {
    minHeight: "38px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "5px",
    boxShadow: "0 0 0 0.2rem",
    padding: "0.375rem 0.75rem",
  },
  menu: {
    option: {
      textAlign: "center",
      selectedColor: "#B5B5B5",
      selectedBgColor: "#",
      padding: "0",
      focusedBgColor: "#",
    },
  },
  placeholder: {
    animation: "FADE_IN_KEYFRAMES 0.25s ease-in-out",
  },
};
export default function Gender(props) {
  const getGender = (option) => {
    props.onGetGender(option.value);
  };
  
  return (
    <Div>
      <Select
        initialValue={options[0]}
        options={options}
        isSearchable={false}
        placeholder={"Seu Gênero"}
        menuItemSize={40}
        themeConfig={themes}
        onOptionChange={(option) => getGender(option)}
      />
    </Div>
  );
}
