import styled from "styled-components";

const Paragraph = styled.p`
  width: ${props => props.pwidth};
  max-width: 370px;
  font-size: 1.5rem;
  line-height: 27px;
  pointer-events: none;
`;

export default function P(props) {
    return <Paragraph pWidth={props.width}>{props.children}</Paragraph>
}