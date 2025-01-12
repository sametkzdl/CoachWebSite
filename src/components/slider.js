import styled, { css } from "styled-components";
import { device, theme } from "../utils/global";
import Button from "./button";
import { Link } from "react-router-dom";
import calender from "../public/icons/calender.png";
import profile from "../public/icons/profile.png";
import tel from "../public/icons/tel.png";
import community from "../public/icons/community.png";
import video from "../public/icons/video.png";
import king from "../public/icons/king.png";

const cardCss = css`
  text-align: center;
  padding: 2rem 1rem;
  border-radius: 50px;
  border: none;
  transition: all 0.3s;
  cursor: pointer;
  max-width: 600px;
  &:hover {
    scale: 1.05;
    box-shadow: 5px 5px 20px ${theme.primary}, -5px -5px 20px ${theme.secondary};
  }
`;

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content min-content;
  padding: 6rem 2rem;
  justify-content: center;
  gap: 20px;
  background: linear-gradient(
    to bottom,
    ${theme.darkBlue},
    ${theme.dark},
    ${theme.dark},
    ${theme.darkBlue}
  );
  @media ${device.tabletL} {
    grid-template-columns: 1fr;
  }
`;

const MainCard = styled.div`
  ${cardCss}
  background-color: #002b5b;
  grid-column: 1;
  grid-row: 1/-1;
  justify-self: center;
  align-self: center;
  @media ${device.tabletL} {
    grid-row: 1;
  }
`;

const SmallCard = styled.div`
  ${cardCss}
  background-color: #00669c;
  justify-self: center;
  width: 100%;
  @media ${device.tabletL} {
    grid-row: 2;
    width: auto;
  }
`;

const SmallCard2 = styled.div`
  ${cardCss}
  background-color: #21486f;
  justify-self: center;
  width: 100%;
  @media ${device.tabletL} {
    grid-row: 3;
    width: auto;
  }
`;

const Title = styled.h3`
  white-space: nowrap;
  font-size: 32px;
  font-weight: 600;
  margin-top: 0;
  padding-bottom: 10px;
  color: #ffde59;
  @media ${device.tablet} {
    font-size: 24px;
    white-space: pre-wrap;
  }
`;

const UlItem = styled.ul`
  position: relative;
  list-style: none;
  padding: 0;
`;

const LiItem = styled.li`
  position: relative;
  display: flex;
  margin-block: 16px;
  font-weight: 400;
  font-size: 20px;
  width: 75%;
  gap: 30px;
  margin-inline: auto;
  text-align: left;
  img {
    height: 50px;
    width: 50px;
  }
`;

const StyledButton = styled(Button)`
  background: #ffde59;
`;

const Slider = () => {
  const localData = {
    first: [
      {
        title: "Derece öğrencisinden sınırsız saat özel ders",
        icon: profile,
      },
      {
        title: "Kişiye özel program hazırlama",
        icon: calender,
      },
      {
        title: "Telefon & Whatsapp üzerinden sınırsız erişim",
        icon: tel,
      },
      {
        title: "Sosyal gelişim etkinlikleri",
        icon: community,
      },
    ],
    second: [
      {
        title: "Kişiye özel program hazırlama",
        icon: calender,
      },
      {
        title: "Telefon & Whatsapp üzerinden sınırsız erişim",
        icon: tel,
      },
      {
        title: "İki haftada bir görüntülü konuşma",
        icon: video,
      },
    ],
    third: [
      {
        title: "Mustafa Ocak ile birebir görüşme",
        icon: king,
      },
      {
        title: "Kişiye özel program hazırlama",
        icon: calender,
      },
    ],
  };
  return (
    <Wrap id="slider">
      <MainCard>
        <Title>Özel Ders Destekli Mentörlük </Title>
        <UlItem>
          {localData.first.map(({ title, icon }, index) => {
            return (
              <LiItem key={index}>
                <img src={icon} alt={icon} />
                {title}
              </LiItem>
            );
          })}
        </UlItem>
        <StyledButton>
          <Link
            to={"http://wa.me/905511349656?text=Merhaba ben Mustafa Ocak"}
            style={{ color: "#000", textDecoration: "none" }}
          >
            Hemen Başvur!
          </Link>
        </StyledButton>
      </MainCard>
      <SmallCard>
        <Title>Sadece Mentörlük / 1800TL</Title>
        <UlItem>
          {localData.second.map(({ title, icon }, index) => {
            return (
              <LiItem key={index}>
                <img src={icon} alt={icon} />
                {title}
              </LiItem>
            );
          })}
        </UlItem>
        <StyledButton>
          <Link
            to={"/FormApply"}
            style={{ color: "#000", textDecoration: "none" }}
          >
            Başvur
          </Link>
        </StyledButton>
      </SmallCard>
      <SmallCard2>
        <Title>Tek Seferlik Görüşme / 600TL</Title>
        <UlItem>
          {localData.third.map(({ title, icon }, index) => {
            return (
              <LiItem key={index}>
                <img src={icon} alt={icon} />
                {title}
              </LiItem>
            );
          })}
        </UlItem>
        <StyledButton>
          <Link
            to={"/FormApply"}
            style={{ color: "#000", textDecoration: "none" }}
          >
            Başvur
          </Link>
        </StyledButton>
      </SmallCard2>
    </Wrap>
  );
};

export default Slider;
