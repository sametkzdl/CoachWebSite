import styled from "styled-components";

const StyledRow = styled.div`
  box-sizing: border-box;
  margin-inline: auto;
`;

const Row = ({ children }) => {
  return <StyledRow>{children}</StyledRow>;
};

export default Row;
