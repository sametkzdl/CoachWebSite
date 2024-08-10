import styled, { keyframes } from "styled-components";
import Button from "./button";
import { Link } from "react-router-dom";
import { device, theme } from "../utils/global";
import grafik from "../public/images/grafik.png";
import downArrow from "../public/icons/down-arrow.svg";

const linearShake = keyframes`
 0% ,100%{ transform: translateY(-4px); }
 70% { transform: translateY(4px); }

`;

const Wrap = styled.div`
  padding: 1rem 2.5rem 4rem 2.5rem;
  background: linear-gradient(
    to bottom,
    ${theme.dark},
    ${theme.dark},
    ${theme.dark},
    ${theme.darkBlue}
  );
`;

const WrapBanner = styled.div`
  display: flex;

  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media ${device.tabletL} {
    flex-direction: column;
  }
`;

const WrapTitles = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleA = styled.h2`
  font-size: 6.25rem;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 0;
  margin-top: 0;
`;

const TitleB = styled.h2`
  font-size: 6.25rem;
  font-weight: 700;
  letter-spacing: 3px;
  margin-top: 5px;
  margin-bottom: 20px;
  background: linear-gradient(
    to bottom,
    ${theme.lightBlue},
    ${theme.lightBlue},
    ${theme.secondary},
    ${theme.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

const WrapImg = styled.img`
  width: 400px;
  height: 400px;
  @media ${device.tablet} {
    width: 300px;
    height: 300px;
  }
  @media ${device.mobileL} {
    width: 250px;
    height: 250px;
  }
`;
const StyledSpan = styled.span`
  font-size: 32px;
  font-weight: 300;
  display: block;
`;

const ArrowImage = styled.img`
  cursor: pointer;
  width: 60px;
  height: 60px;
  animation-name: ${linearShake};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;

const Banner = () => {
  return (
    <Wrap>
      <WrapBanner>
        <WrapTitles>
          <TitleA>YKS2025'te </TitleA>
          <TitleB>efsane ol</TitleB>
          <Button big="true">
            <Link
              to={"/FormApply"}
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Koçluk Al
            </Link>
          </Button>
        </WrapTitles>
        <WrapImg src={grafik} alt="graphic" />
      </WrapBanner>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems:"center"
        }}
      >
        <StyledSpan>daha fazla</StyledSpan>
        <a href="#slider">
          <ArrowImage src={downArrow} />
        </a>
      </div>
    </Wrap>
  );
};

export default Banner;
