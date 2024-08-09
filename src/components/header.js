import { Link } from "react-router-dom";
import { device, theme } from "../utils/global";
import Button from "./button";
import styled, { css } from "styled-components";
import hamburger from "../public/icons/hamburger.svg";
import { useBlurContext } from "../context/blurContext";

const StyledHeader = styled.header`
  background-color: ${theme.dark};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem;
`;

const LogoTitle = styled.h1`
  display: inline-block;
  font-weight: 700;
`;

const StyledANav = styled.nav`
  display: flex;
  gap: 2rem;
  @media ${device.tablet} {
    display: none;
  }
`;

const StyledA = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #fff;
  font-weight: 300;
  font-size: 24px;
`;

const WrapHamburger = styled.div`
  cursor: pointer;
  display: none;
  @media ${device.tablet} {
    display: flex;
    align-items: center;
  }
`;

const HamburgerMenu = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in;
  visibility: hidden;
  opacity: 0;
  ${({ bluropen }) =>
    bluropen &&
    css`
      opacity: 1;
      visibility: visible;
      width: 100px;
      height: 100px;
      z-index: 3;
    `};
`;

const HamburgerNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  box-sizing: border-box;
`;

const Header = () => {
  const { bluropen, setBlurOpen } = useBlurContext();
  const NavigationData = [
    { title: "Fiyatlarımız", direction: "#swiper" },
    { title: "Koçlarımız", direction: "#avatars" },
    { title: "İletişim", direction: "#footer" },
  ];

  return (
    <StyledHeader>
      <LogoTitle>
        <Link style={{ color: "#fff", textDecoration: "none" }} to={"/"}>
          X Akademi
        </Link>
      </LogoTitle>
      <StyledANav>
        {NavigationData.map(({ title, direction }, index) => (
          <StyledA href={direction} key={index}>
            {title}
          </StyledA>
        ))}
        <Button>
          <Link
            to={"/FormApply"}
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Koçluk Al
          </Link>
        </Button>
      </StyledANav>
      <WrapHamburger onClick={() => setBlurOpen(!bluropen)}>
        <img src={hamburger} width={40} height={40} alt="Menu" />
      </WrapHamburger>
      <HamburgerMenu bluropen={bluropen ? "active" : undefined} onClick={() => setBlurOpen(!bluropen)}>
        <HamburgerNav>
          {NavigationData.map(({ title, direction }, index) => (
            <StyledA href={direction} key={index}>
              {title}
            </StyledA>
          ))}
          <Button>
            <Link
              to={"/FormApply"}
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Koçluk Al
            </Link>
          </Button>
        </HamburgerNav>
      </HamburgerMenu>
    </StyledHeader>
  );
};

export default Header;
