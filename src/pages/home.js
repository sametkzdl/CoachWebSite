import Header from "../components/header";
import Row from "../components/row";
import Banner from "../components/banner";
import Slider from "../components/slider";
import Avatar from "../components/avatars";
import Detail from "../components/detail";
import Footer from "../components/footer";
import styled, { css } from "styled-components";
import { useBlurContext } from "../context/blurContext";
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
      height: 100%;
      z-index: 2;
    `};
`;

const Home = () => {
  const { bluropen, setBlurOpen } = useBlurContext();
  return (
    <Row>
      <div style={{position:"relative"}}>
        <Wrap
          bluropen={bluropen ? "active" : undefined}
          onClick={() => setBlurOpen(!bluropen)}
        />
        <Header />
        <Banner />
      </div>
      <Slider />
      <Avatar />
      <Detail />
    </Row>
  );
};

export default Home;
