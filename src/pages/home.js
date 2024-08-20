import Header from "../components/header";
import Row from "../components/row";
import Banner from "../components/banner";
import Slider from "../components/slider";
import Avatar from "../components/avatars";
import Detail from "../components/detail";
import styled, { css } from "styled-components";
import { useBlurContext } from "../context/blurContext";
import { Fragment } from "react";
const Wrap = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  transition: all 0.5s ease;
  ${({ bluropen }) =>
    bluropen &&
    css`
      background-color: rgb(0, 0, 0, 0.8);
      width: 100%;
      height: calc(100% + 30px) ;
      z-index: 2;
    `};
`;

const Home = () => {
  const { bluropen, setBlurOpen } = useBlurContext();
  return (
    <Row>
      <div style={{ position: "relative" }}>
        <Wrap
          bluropen={bluropen ? "active" : undefined}
          onClick={() => setBlurOpen(!bluropen)}
        />
        <Fragment>
          <Header />
          <Banner />
        </Fragment>
      </div>
      <Slider />
      <Avatar />
      <Detail />
    </Row>
  );
};

export default Home;
