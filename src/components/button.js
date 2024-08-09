import styled from "styled-components";
import { theme } from "../utils/global";

const StyledButton = styled.button`
  width: 100px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 100px;
  background: linear-gradient(to right, ${theme.primary}, ${theme.secondary});
  color: #fff;
  padding: 0.5rem;
  text-shadow: rgb(43, 43, 40) 1px 0 10px;
  cursor: pointer;
  white-space: nowrap;
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
