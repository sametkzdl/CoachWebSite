import styled from "styled-components";
import { device, theme } from "../utils/global";
import linkedin from "../public/icons/linkedin.svg";
import email from "../public/icons/email.svg";
import twitter from "../public/icons/twitter.svg";
import instagram from "../public/icons/instagram.svg";
import telegram from "../public/icons/telegram.svg";
import myLogo from "../public/icons/myLogo.png";
const WrapBanner = styled.div`
  position: relative;
  text-align: center;    
`;

const Title = styled.h3`
  font-size: 40px;
  font-weight: 500;
  letter-spacing: 1px;
  margin-block: 20px;
`;

const WrapImages = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const MediaImg = styled.img`
  width: 50px;
  height: 50px;
  transition: all 0.3s;
  @media ${device.mobileL} {
    width: 40px;
    height: 40px;
  }
  &:hover {
    scale: 1.1;
    filter: drop-shadow(0px 0px 15px red);
  }
`;

const Footer = () => {
  return (
    <WrapBanner id="footer">
      <Title>Bize Ulaşın</Title>
      <WrapImages>
        <a href="https://www.linkedin.com/">
          <MediaImg src={linkedin} alt="linkedin social media" />
        </a>
        <a href="mailto:sametkazdal_53@outlook.com">
          {" "}
          <MediaImg src={email} alt="email social media" />
        </a>
        <a href="https://x.com/?lang=tr">
          <MediaImg src={twitter} alt="twitter social media" />
        </a>
        <a href="https://instagram.com">
          <MediaImg src={instagram} alt="instagram social media" />
        </a>
        <a href="https://web.telegram.org/k/">
          <MediaImg src={telegram} alt="telegram social media" />
        </a>
      </WrapImages>
      <span style={{ display: "block", marginBlock: "25px" }}>© X Akademi</span>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        Created By
        <a href="https://www.linkedin.com/in/abdul-samet-kazdal-761a4819a/">
          <img src={myLogo} width={140} height={35} alt="maker social media" />
        </a>
      </p>
    </WrapBanner>
  );
};

export default Footer;
