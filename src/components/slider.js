import styled, { css } from "styled-components";
import { device, theme } from "../utils/global";
import Button from "./button";
import { Link } from "react-router-dom";

const cardCss = css`
  text-align: center;
  padding: 2rem 1rem;
  border-radius: 50px;
  border: none;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    scale: 1.1;
    box-shadow: 5px 5px 20px ${theme.primary}, -5px -5px 20px ${theme.secondary};
  }
`;

const Wrap = styled.div`
  display: flex;
  padding: 6rem 2.5rem;
  background: linear-gradient(
    to bottom,
    ${theme.darkBlue},
    ${theme.dark},
    ${theme.dark},
    ${theme.darkBlue}
  );
  align-items: center;
  justify-content: space-evenly;
  gap: 3.5rem;
  flex-wrap: wrap;
  @media (max-width: 1210px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`;

const MainCard = styled.div`
  ${cardCss}
  max-width: 350px;
  background: linear-gradient(to right, #60d6e7, #024dae);
  @media (max-width: 1210px) {
    grid-column: 1/-1;
    grid-row: 2;
    justify-self: center;
  }
 
`;

const SmallCard = styled.div`
  ${cardCss}
  background: linear-gradient(to right, #fff5ae, #ffaaf7);
  max-width: 330px;
  @media (max-width: 1210px) {
    grid-column: 1;
    grid-row: 1;
    justify-self: right;
  }
`;

const SmallCard2 = styled.div`
  ${cardCss}
  background: linear-gradient(to right, #cdffd9, #95bafe);
  max-width: 330px;
  @media (max-width: 1210px) {
    grid-column: 2;
    grid-row: 1;
  }
`;

const MassiveTitle = styled.h3`
  white-space: nowrap;
  font-size: 32px;
  font-weight: 500;
  margin-top: 0;
  border-bottom: 4px solid #fff;
  padding-bottom: 10px;
  @media ${device.tablet} {
    font-size: 24px;
  }
`;

const SmallTitle = styled.h3`
  white-space: nowrap;
  font-size: 24px;
  font-weight: 500;
  margin-top: 0;
  border-bottom: 4px solid #fff;
  padding-bottom: 10px;
  @media ${device.tablet} {
    font-size: 20px;
  }
`;

const UlItem = styled.ul`
  position: relative;
  list-style: none;
  padding: 0;
`;

const LiItem = styled.li`
  white-space: auto;
  position: relative;
  margin-block: 12px;
  font-weight: 500;
  color: ${theme.darkBlue};
  font-size: 20px;
  white-space: pre-wrap;
`;

const Slider = () => {
  const localData = {
    first: [
      { title: "Her Alana Özel Günlük Görevlendirmeler" },
      { title: "Motivasyon Paylaşımları" },
      { title: "Soru-Cevap Paylaşımları" },
      { title: "Canlı Yayınlar" },
    ],
    second: [
      { title: "Ayda 2 Kez Görüşme" },
      { title: "7/24 İletişim" },
      { title: "7/24 Takip" },
      { title: "Haftalık Değil Günlük Program" },
      { title: "Konu Tabloları" },
      { title: "Deneme Analizi" },
      { title: "Alışkanlık Geliştirme" },
    ],
    third: [
      { title: "Derece Öğrencisiyle Birebir Görüşme" },
      { title: "Hedef Belirleme" },
      { title: "Tecrübe Aktarımı" },
      { title: "1 Saat Görüşme Süresi" },
    ],
  };
  return (
    <Wrap id="slider">
      <SmallCard>
        <SmallTitle>Tek Görüşme | 400 TL</SmallTitle>
        <UlItem>
          {localData.first.map(({ title }, index) => {
            return <LiItem key={index}>{title}</LiItem>;
          })}
        </UlItem>
        <Button>
          <Link
            to={"/FormApply"}
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Koçluk Al
          </Link>
        </Button>
      </SmallCard>
      <MainCard>
        <MassiveTitle>Koçluk | 1800 TL / ay</MassiveTitle>
        <UlItem>
          {localData.second.map(({ title }, index) => {
            return <LiItem key={index}>{title}</LiItem>;
          })}
        </UlItem>
        <Button>
          <Link
            to={"/FormApply"}
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Koçluk Al
          </Link>
        </Button>
      </MainCard>
      <SmallCard2>
        <SmallTitle>Özel Ders</SmallTitle>
        <UlItem>
          {localData.third.map(({ title }, index) => {
            return <LiItem key={index}>{title}</LiItem>;
          })}
        </UlItem>
        <Button>
          <Link
            to={"/FormApply"}
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Koçluk Al
          </Link>
        </Button>
      </SmallCard2>
    </Wrap>
  );
};

export default Slider;
