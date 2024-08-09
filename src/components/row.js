import styled from "styled-components";

const StyledRow = styled.div`
  box-sizing: border-box;
  max-width: 1440px;
  margin-inline: auto;
  padding-inline: 1rem;
`;

const Row = ({ children }) => {
  return <StyledRow>{children}</StyledRow>;
};

export default Row;
