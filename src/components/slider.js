import styled, { css } from "styled-components";
import { device, leftDays, theme } from "../utils/global";
import Button from "./button";
import { Link } from "react-router-dom";
import calender from "../public/icons/calender.png";
import onay from "../public/icons/onay.png";
import tel from "../public/icons/tel.png";
import hedef from "../public/icons/hedef.png";
import video from "../public/icons/video.png";
import king from "../public/icons/king.png";
import money from "../public/icons/para.png";
import kupa from "../public/icons/kupa.png";

const cardCss = css`
  text-align: center;
  padding: 2rem 1rem;
  border-radius: 10px;
  border: none;
  transition: all 0.3s;
  cursor: pointer;
  max-width: 300px;
  &:hover {
    scale: 1.05;
  }
`;

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 300px));
  row-gap: 100px;
  column-gap: 100px;
  padding: 6rem 2rem;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to bottom,
    ${theme.darkBlue},
    ${theme.dark},
    ${theme.dark},
    ${theme.darkBlue}
  );
  > :nth-child(2) {
    scale: 1.2;
    &:hover {
      scale: 1.25;
    }
    @media ${device.mobileL} {
      scale: 1.05;
    }
  }
`;

const ValidCard = styled.div`
  ${cardCss}
  ${({ $gradient, $leftTop, $bottomRight }) =>
    $gradient &&
    css`
      background: linear-gradient(
        to right bottom,
        ${$leftTop},
        ${$bottomRight}
      );
      &:hover {
        box-shadow: 5px 5px 20px ${$leftTop}, -5px -5px 20px ${$leftTop};
      }
    `};
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin-top: 0;
  padding-bottom: 10px;
  color: #fff;
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
  font-size: 16px;
  width: 95%;
  gap: 15px;
  margin-inline: auto;
  text-align: left;
  img {
    height: 40px;
    width: 40px;
  }
`;

const StyledButton = styled(Button)`
  background: #fff;
  padding: 10px 20px;
  font-weight: 400;
  text-decoration: underline;
`;

const Slider = () => {
  const localData = {
    first: [
      {
        title: `${leftDays()} günlük programın ilk günden hazır`,
        icon: calender,
      },
      {
        title: "Hedef sıralamana ve bölümüne uygun koçla çalış",
        icon: hedef,
      },
      {
        title: "Telefon & Whatsapp üzerinden sınırsız erişim",
        icon: tel,
      },
      {
        title: "İki haftada bir görüntülü görüşme",
        icon: video,
      },
    ],
    second: [
      {
        title: "Aylık koçlukla aynı, yalnızca haftalık olarak ödeyin”",
        icon: onay,
      },
      {
        title: `${leftDays()} günlük programın ilk günden hazır`,
        icon: calender,
      },
      {
        title: "Hedef sıralamana ve bölümüne uygun koçla çalış",
        icon: hedef,
      },
      {
        title: "Daha ucuz & İstediğiniz zaman cayabilirsiniz",
        icon: money,
      },
    ],
    third: [
      {
        title: "Mustafa Ocak ile birebir görüşme",
        icon: king,
      },
      {
        title: "Programını Mustafa Ocak hazırlıyor",
        icon: kupa,
      },
      {
        title: `${leftDays()} günlük programın bir saatte hazır`,
        icon: calender,
      },
    ],
  };
  return (
    <Wrap id="slider">
      <ValidCard $gradient={true} $leftTop={"#69AFF5"} $bottomRight={"#F105D1"}>
        <Title>Aylık Koçluk / 1800₺ </Title>
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
            style={{ color: "#000" }}
          >
            Ücretsiz Katıl
          </Link>
        </StyledButton>
      </ValidCard>
      <ValidCard
        // style={{ scale: "1.2" }}
        $gradient={true}
        $leftTop={"#F326D5"}
        $bottomRight={"#FFE862"}
      >
        <Title>Haftalık Koçluk / 500₺</Title>
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
          <Link to={"/FormApply"} style={{ color: "#000" }}>
            Hemen Başvur
          </Link>
        </StyledButton>
      </ValidCard>
      <ValidCard $gradient={true} $leftTop={"#9753FC"} $bottomRight={"#28FB75"}>
        <Title>Tek Seferlik Görüşme / 750₺</Title>
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
          <Link to={"/FormApply"} style={{ color: "#000" }}>
            Başvur
          </Link>
        </StyledButton>
      </ValidCard>
    </Wrap>
  );
};

export default Slider;
