import styled from "styled-components";
import { device, theme } from "../utils/global";
import mustafa from "../public/images/mustafa_mini.png";
import yunusemre from "../public/images/yunusemre_mini.png";
import zahid from "../public/images/zahid_mini.png";
import zekeriya from "../public/images/zekeriya_mini.png";
import beşir from "../public/images/besir_mini.png";
import selma from "../public/images/yellow-girl.png";

const Wrap = styled.div`
  font-family: "Poppins", sans-serif;
  padding: 4rem 2.5rem;
  background: linear-gradient(
    to bottom,
    ${theme.darkBlue},
    ${theme.dark},
    ${theme.dark},
    ${theme.dark},
    ${theme.dark},
    ${theme.darkBlue}
  );
`;

const MainTitle = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  margin-block: 40px;
`;

const WrapAvatars = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  row-gap: 40px;
  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const AvatarCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.tablet} {
    width: 300px;
  }
`;

const NameTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 0;
`;

const SubTitle = styled.h3`
  font-size: 24px;
  color: #f8d270;
  font-weight: 700;
  text-align: center;
`;

const Zeki = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: right;
  transform: translateX(50%);
  @media ${device.tablet} {
    width: 300px;
    justify-content: none;
    transform: none;
  }
`;

const Besir = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: 3;
  grid-row: 2;
  justify-content: left;
  transform: translateX(-50%);
  @media ${device.tablet} {
    width: 300px;
    justify-content: none;
    transform: none;
  }
`;

const Avatar = () => {
  return (
    <Wrap id="avatars">
      <MainTitle>KOÇLARIMIZ</MainTitle>
      <WrapAvatars>
        <AvatarCard>
          <img
            src={mustafa}
            width={100}
            height={100}
            style={{ display: "block" }}
          />
          <NameTitle>MUSTAFA</NameTitle>
          <SubTitle>SAY 249. / EA 605. / SÖZ 214. TYT 102. / DİL 415.</SubTitle>
        </AvatarCard>
        <AvatarCard>
          <img
            src={selma}
            width={100}
            height={100}
            style={{ display: "block" }}
          />
          <NameTitle>SELMA</NameTitle>
          <SubTitle>SAY 6000</SubTitle>
        </AvatarCard>
        <AvatarCard>
          <img
            src={selma}
            width={100}
            height={100}
            style={{ display: "block" }}
          />
          <NameTitle>AFRA NUR</NameTitle>
          <SubTitle>EA 700</SubTitle>
        </AvatarCard>
        <AvatarCard>
          <img
            src={zahid}
            width={100}
            height={100}
            style={{ display: "block" }}
          />
          <NameTitle>ZAHİD</NameTitle>
          <SubTitle>SAY 8000</SubTitle>
        </AvatarCard>
        <AvatarCard>
          <img
            src={zekeriya}
            width={100}
            height={100}
            style={{ display: "block" }}
          />
          <NameTitle>ZEKERİYA</NameTitle>
          <SubTitle>SAY 4000</SubTitle>
        </AvatarCard>
        <AvatarCard>
          <img
            src={beşir}
            width={100}
            height={100}
            style={{ display: "block" }}
          />
          <NameTitle>BEŞİR</NameTitle>
          <SubTitle>SAY 3000</SubTitle>
        </AvatarCard>
        <AvatarCard>
          <img
            src={zahid}
            width={100}
            height={100}
            style={{ display: "block" }}
          />
          <NameTitle>AHMET</NameTitle>
          <SubTitle>EA 1000</SubTitle>
        </AvatarCard>
      </WrapAvatars>
    </Wrap>
  );
};

export default Avatar;
