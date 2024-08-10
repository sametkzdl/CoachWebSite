import { Link, useLocation, useParams } from "react-router-dom";
import { device, theme } from "../utils/global";
import Button from "./button";
import styled, { css } from "styled-components";
import { useBlurContext } from "../context/blurContext";
import { Example } from "./hamburger";
import { Fragment } from "react";

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
  font-size: 50px;
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
  transition: all 0.3s;
  &:hover {
    scale: 1.1;
    text-shadow: 20px 0 30px #fff, -20px 0 30px #fff;
  }
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

const FormBackWrap = styled.div`
  @media ${device.tablet} {
    display: none;
  }
`;

const FormLogoWrap = styled.div`
  @media ${device.tablet} {
    margin-inline: auto;
  }
`;

const Header = () => {
  const params = useLocation();
  const { bluropen, setBlurOpen } = useBlurContext();
  const NavigationData = [
    { title: "Fiyatlarımız", direction: "#slider" },
    { title: "Koçlarımız", direction: "#avatars" },
    { title: "İletişim", direction: "#footer" },
  ];

  return (
    <StyledHeader>
      {params.pathname === "/FormApply" ? (
        <FormLogoWrap>
          <LogoTitle style={{ marginInline: "auto" }}>
            <Link style={{ color: "#fff", textDecoration: "none" }} to={"/"}>
              X Akademi
            </Link>
          </LogoTitle>
        </FormLogoWrap>
      ) : (
        <LogoTitle>
          <Link style={{ color: "#fff", textDecoration: "none" }} to={"/"}>
            X Akademi
          </Link>
        </LogoTitle>
      )}
      {params.pathname === "/FormApply" ? (
        <FormBackWrap>
          <Button>
            <Link to={"/"} style={{ color: "#fff", textDecoration: "none" }}>
              Ana Sayfa
            </Link>
          </Button>
        </FormBackWrap>
      ) : (
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
      )}
      {params.pathname === "/FormApply" ? null : (
        <Fragment>
          <WrapHamburger>
            <Example />
          </WrapHamburger>
          <HamburgerMenu
            bluropen={bluropen ? "active" : undefined}
            onClick={() => setBlurOpen(!bluropen)}
          >
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
        </Fragment>
      )}
    </StyledHeader>
  );
};

export default Header;
