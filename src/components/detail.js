import styled from "styled-components";
import { device, theme } from "../utils/global";
import { Link } from "react-router-dom";
import Button from "./button";
import spring from "../public/images/hedef.png";
import Footer from "./footer";

const Wrap = styled.div`
  padding: 4rem 2.5rem;

  background: linear-gradient(
    to bottom,
    ${theme.darkBlue},
    ${theme.dark},
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
  @media ${device.laptop} {
    flex-direction: column;
    gap: 20px;
  }
`;

const WrapTitles = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleA = styled.h2`
  font-size: 6.25rem;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 0;
  margin-bottom: -4rem;
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
  width: 350px;
  height: 350px;
  @media ${device.tablet} {
    width: 300px;
    height: 300px;
  }
  @media ${device.mobileL} {
    width: 220px;
    height: 220px;
  }
`;

const Detail = () => {
  return (
    <Wrap>
      <WrapBanner>
        <WrapTitles>
          <TitleA>Erken davran</TitleA>
          <TitleB>derece ol</TitleB>
          <Button big="true">
            <Link
              to={"/FormApply"}
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Koçluk Al
            </Link>
          </Button>
        </WrapTitles>
        <WrapImg src={spring} alt="graphic" />
      </WrapBanner>
      <Footer />
    </Wrap>
  );
};

export default Detail;
