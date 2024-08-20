import styled, { keyframes } from "styled-components";
import Button from "./button";
import { Link } from "react-router-dom";
import { device, theme } from "../utils/global";
import grafik from "../public/images/grafik.png";
import downArrow from "../public/icons/down-arrow.svg";

const textAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const blinkCursor = keyframes`
  0% {
    border-right-color: orange;
  }
  50% {
    border-right-color: transparent;
  }
  100% {
    border-right-color: transparent;
  }
`;

const linearShake = keyframes`
 0% ,100%{ transform: translateY(-4px);
   opacity:0; }
 70% { transform: translateY(4px); 
 opacity:1;  }
`;

const fadein = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const Wrap = styled.div`
  padding: 1rem 2.5rem 4rem 2.5rem;
  height: 100%;
  margin-top: 5rem;
  @media ${device.laptop} {
    height: unset;
    margin-top: unset;
  }
  background: linear-gradient(
    to bottom,
    ${theme.dark},
    ${theme.dark},
    ${theme.darkBlue},
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
  border-right: 4px solid orange;
  white-space: nowrap;
  font-size: 6.25rem;
  font-weight: 700;
  letter-spacing: 3px;
  overflow: hidden;
  width: 0;
  animation: ${textAnimation} 2s forwards,
    ${blinkCursor} 1.25s step-end forwards;
`;

const TitleB = styled.h2`
  font-size: 6.25rem;
  font-weight: 700;
  letter-spacing: 3px;
  margin-top: -3rem;
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
  animation: ${fadein} 3s;
  @media ${device.tablet} {
    width: 300px;
    height: 300px;
  }
  @media ${device.mobileL} {
    width: 200px;
    height: 200px;
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
          alignItems: "center",
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
