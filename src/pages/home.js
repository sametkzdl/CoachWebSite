import Header from "../components/header";
import Row from "../components/row";
import Banner from "../components/banner";
import Swiper from "../components/swiper";
import Avatar from "../components/avatars";
import Detail from "../components/detail";
import Footer from "../components/footer";
import styled, { css } from "styled-components";
import { useBlurContext } from "../context/blurContext";
import { Fragment } from "react";

const Wrap = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  transition: all 0.5s ease;
  ${({ blurOpen }) =>
    blurOpen &&
    css`
      background-color: rgb(0, 0, 0, 0.8);
      width: 100%;
      height: 100%;
      z-index: 2;
    `};
`;

const Home = () => {
  const { blurOpen, setBlurOpen } = useBlurContext();
  return (
    <Fragment>
      <Wrap blurOpen={blurOpen} onClick={() => setBlurOpen(!blurOpen)} />
      <Header />
      <Row>
        <Banner />
        <Swiper />
        <Avatar />
        <Detail />
      </Row>
      <Footer />
    </Fragment>
  );
};

export default Home;
