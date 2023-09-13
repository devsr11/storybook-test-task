import styled from "@emotion/styled";
import { Button, Typography } from "antd";
const { Text } = Typography;

export const StyledButton = styled(Button)`
  background-color: ${(props) =>
    props?.type === "primary"
      ? "#5850EC"
      : props?.type === "text"
      ? "transparent"
      : ""};
  border-color: ${(props) => (props?.type === "default" ? "#e5edff" : "")};
  color: #fff;

  &:hover {
    border-color: ${(props) =>
      props?.type === "default" ? "#e5edff !important" : ""};
  }
`;

export const Label = styled(Text)`
  margin-right: 8px;
  color: ${(props) => props.color || "#fff"};
`;

export const CounterLabel = styled(Text)`
  margin-right: ${(props) => props?.style?.marginRight ?? 0}px;
  color: #8da2fb;
`;
