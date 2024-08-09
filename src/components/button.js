import styled, { css } from "styled-components";
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
  transition: all .3s;
  &:hover {
    scale: 1.1;
    box-shadow: 10px 0 20px ${theme.primary},-10px 0 20px ${theme.secondary} ;
  }
  ${({ big }) =>
    big &&
    css`
      width: 150px;
      font-size: 24px;
      padding: 0.5rem 1rem;
    `}
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
