import styled from "styled-components";

const ButtonImg = styled.div`
  background-image: ${(props) => `url(${props.bgImg})`};
  background-color: ${(props) => props.bgColor};
  background-size: ${(props) => props.bgSize};
  background-repeat: no-repeat;
  background-position: center center;
  height: ${(props) => props.imgHeight};
  max-height: 43px;
  width: ${(props) => props.imgWidth};
  max-width: 66px;
  pointer-events: none;
`;

export default function ButtonImage(props) {
  return (
    <ButtonImg
      bgImg={props.bgImg}
      BgColor={props.BgColor}
      bgSize={props.bgSize}
      imgHeight={props.imgHeight}
      imgWidth={props.imgWidth}
    />
  );
}
