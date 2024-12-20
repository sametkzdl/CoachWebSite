import styled, { css } from "styled-components";
import { useForm } from "react-hook-form";
import "react-phone-input-2/lib/style.css";
import Row from "./row";
import Button from "./button";
import { device, theme } from "../utils/global";
import { useState } from "react";
import Footer from "../components/footer";

const Wrap = styled.div`
  padding: 2rem 2.5rem;
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

const Form = styled.form`
  margin-inline: auto;
  margin-block: 1rem;
  padding: 1.5rem;
  max-width: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(7, min-content);
  box-shadow: 0px 0px 10px rgba(174, 173, 173, 0.5);
  border-radius: 40px;
  color: black;
  row-gap: 30px;
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
  @media ${device.mobileL} {
    grid-template-columns: 1fr;
    justify-items: stretch;
  }
`;

const StyledLabel = styled.label`
  font-size: 22px;
  color: #fff;
  font-weight: 600;
  margin-block: 8px;
  @media ${device.mobileL} {
    font-size: 16px;
  }
`;

const Input = styled.input`
  display: block;
  padding: 7px 13px;
  margin-block: 0.8rem;
  width: auto;
  border: 1px solid #898989;
  outline: none;
  transition: all 0.5s;
  border-radius: 4px;
  &:hover,
  &:focus {
    box-shadow: 4px 4px 12px rgba(35, 199, 222, 0.3),
      -4px -4px 12px rgba(35, 199, 222, 0.3);
    border-color: rgb(35, 199, 222);
  }
`;

const Textarea = styled.textarea`
  padding: 7px 13px;
  margin-block: 0.8rem;
  width: auto;
  border: 1px solid #898989;
  outline: none;
  transition: all 0.5s;
  border-radius: 4px;
  background-color: #fff;
  &:hover,
  &:focus {
    box-shadow: 4px 4px 12px rgba(35, 199, 222, 0.3),
      -4px -4px 12px rgba(35, 199, 222, 0.3);
    border-color: rgb(35, 199, 222);
  }
  resize: none;
`;

const Required = styled.span`
  color: #ff0000;
  font-size: 16px;
  font-weight: 500;
  font-style: italic;
`;

const Title = styled.h3`
  color: white;
  font-size: 40px;
  font-weight: 500;
  display: block;
  text-align: center;
  margin-block: 30px;
`;

const SubTitle = styled.h4`
  font-size: 26px;
  color: ${theme.lightBlue};
  font-weight: 600;
  @media ${device.mobileL} {
    font-size: 22px;
  }
`;

const StyledButton = styled(Button)`
  margin: 10px;
  margin-inline: auto;
`;

const Notification = styled.div`
  display: ${({ $show }) => ($show ? "block" : "none")};
  color: white;
  padding: 15px;
  margin-bottom: 20px;
  text-align: center;
  border-radius: 4px;
  box-shadow: ${({ $show }) =>
    $show &&
    css`
      4px 4px 12px rgba(35, 199, 222, 0.3), -4px -4px 12px rgba(35, 199, 222, 0.3);
    `};
  background-color: ${({ $success }) => ($success ? "#4caf50" : "#f44336")};
`;

const FirstWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  grid-column: 1/-1;
  grid-row: 1;
  justify-content: center;
`;

const SecondWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  grid-column: 1/-1;
  grid-row: 2;
  justify-content: center;
`;
const ThirdWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  grid-column: 1/-1;
  grid-row: 3;
  justify-content: center;
`;
const FourthWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  grid-column: 1/-1;
  grid-row: 4;
  justify-content: center;
  @media ${device.mobileL} {
    display: block;
    text-align: center;
  }
`;

const AdditionalRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  grid-column: 1/-1;
  grid-row: 6;
  justify-content: center;
`;

const FifthWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-column: 1/-1;
  grid-row: 5;
  justify-content: center;
  @media ${device.mobileL} {
    display: block;
    text-align: center;
  }
`;

const SixthWrap = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1/-1;
  grid-row: 7;
  text-align: center;
`;

const WrapCount = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Register = () => {
  const [sending, setSending] = useState(false);
  const [notification, setNotification] = useState({
    message: "",
    success: false,
    show: false,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const Submit = (e) => {
    setSending(!sending);
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbycoM9SRG4llVIsqkc1vCeR-czezzwHRffJ7urKqlxObQAEU5MigBvewoIvGOEx0zl7vA/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        reset();
        setNotification({
          message: "Formunuz başarılı bir şekilde gönderildi!",
          success: true,
          show: true,
        });
        setTimeout(() => {
          setNotification({
            show: false,
          });
        }, 3 * 1000);
        setSending(false);
      })
      .catch((error) => {
        setNotification({
          message: "Formu gönderirken bir hata oluştu. Lütfen tekrar deneyin.",
          success: false,
          show: true,
        });
        setSending(false);
      });
  };
  return (
    <Wrap>
      <Row>
        <Title>X Akademi | Başvuru Formu</Title>
        <Form onSubmit={handleSubmit(Submit)}>
          <FirstWrap>
            <div>
              <SubTitle htmlFor="name">Ad ve Soyad</SubTitle>

              <Input
                id="name"
                placeholder="Ad ve Soyad"
                type="text"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <Required>Ad ve Soyad girilmesi zorunludur</Required>
              )}
            </div>
            <div>
              <SubTitle htmlFor="age">Yaş</SubTitle>
              <Input
                id="age"
                placeholder="Yaş"
                type="number"
                {...register("age", { required: true })}
              />
              {errors.age && <Required>Yaş girilmesi zorunludur</Required>}
            </div>
            <div>
              <SubTitle htmlFor="phone">Telefon</SubTitle>
              <Input
                id="phone"
                placeholder="Telefon Numarası"
                type="phone"
                {...register("phone", { required: true })}
              />
              {errors.phone && errors.phone.type === "required" && (
                <Required>Telefon girilmesi zorunludur</Required>
              )}
            </div>
          </FirstWrap>
          <SecondWrap>
            <div>
              <SubTitle>Hangi Sınıftasınız?</SubTitle>
              <div style={{ display: "flex", gap: "20px" }}>
                <input
                  id="11"
                  type="radio"
                  value={"11"}
                  name="class"
                  {...register("class", { required: true })}
                />
                <StyledLabel style={{ color: "white" }} htmlFor="11">
                  11
                </StyledLabel>
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                <input
                  id="12"
                  type="radio"
                  value={"12"}
                  name="class"
                  {...register("class", { required: true })}
                />
                <StyledLabel style={{ color: "white" }} htmlFor="12">
                  12{" "}
                </StyledLabel>
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                <input
                  id="mezun"
                  type="radio"
                  value={"mezun"}
                  name="class"
                  {...register("class", { required: true })}
                />
                <StyledLabel style={{ color: "white" }} htmlFor="mezun">
                  Mezun{" "}
                </StyledLabel>
              </div>
              {errors.class && <Required>Sınıf girilmesi zorunludur</Required>}
            </div>
            <div>
              <SubTitle>Alanınız ?</SubTitle>
              <div style={{ display: "flex", gap: "20px" }}>
                <input
                  id="Sayısal"
                  type="checkbox"
                  value={"Sayısal"}
                  name="field"
                  {...register("field", { required: true })}
                />
                <StyledLabel style={{ color: "white" }} htmlFor="Sayısal">
                  Sayısal
                </StyledLabel>
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                <input
                  id="Sözel"
                  type="checkbox"
                  value={"Sözel"}
                  name="field"
                  {...register("field", { required: true })}
                />
                <StyledLabel style={{ color: "white" }} htmlFor="Sözel">
                  Sözel
                </StyledLabel>
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                <input
                  id="Eşit Ağırlık"
                  type="checkbox"
                  value={"Eşit Ağırlık"}
                  name="field"
                  {...register("field", { required: true })}
                />
                <StyledLabel style={{ color: "white" }} htmlFor="Eşit Ağırlık">
                  Eşit Ağırlık
                </StyledLabel>
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                <input
                  id="Dil (İngilizce)"
                  type="checkbox"
                  value={"Dil (İngilizce)"}
                  name="field"
                  {...register("field", { required: true })}
                />
                <StyledLabel
                  style={{ color: "white" }}
                  htmlFor="Dil (İngilizce)"
                >
                  Dil (İngilizce)
                </StyledLabel>
              </div>
              {errors.field && <Required>Alan girilmesi zorunludur</Required>}
            </div>
          </SecondWrap>
          <ThirdWrap>
            <div>
              <SubTitle htmlFor="avarageTyt">Ortalama TYT Neti?</SubTitle>
              <Input
                id="avarageTyt"
                placeholder="TYT Neti"
                type="number"
                name="tyt"
                {...register("tyt", {
                  required: "TYT Neti girilmesi zorunludur",
                  min: {
                    value: 0,
                    message: "TYT neti sıfırdan küçük olmamalıdır ",
                  },
                  max: {
                    value: 120,
                    message: "TYT neti 120 den büyük olmamalıdır ",
                  },
                })}
              />
              {errors.tyt && <Required>{errors.tyt.message}</Required>}
            </div>
            <div>
              <SubTitle htmlFor="avarageAyt">Ortalama AYT Neti?</SubTitle>
              <Input
                id="avarageAyt"
                placeholder="AYT Neti"
                type="number"
                name="ayt"
                {...register("ayt", {
                  required: "AYT Neti girilmesi zorunludur",
                  min: {
                    value: 0,
                    message: "AYT neti sıfırdan küçük olmamalıdır ",
                  },
                  max: {
                    value: 80,
                    message: "AYT neti 80 den büyük olmamalıdır ",
                  },
                })}
              />
              {errors.ayt && <Required>{errors.ayt.message}</Required>}
            </div>
          </ThirdWrap>
          <FourthWrap>
            <div>
              <SubTitle>Günde ortalama çalışma süreniz ?</SubTitle>
              <WrapCount>
                <input
                  id="0 - 2"
                  type="radio"
                  value={"0 - 2"}
                  name="studyTime"
                  {...register("studyTime", { required: true })}
                />
                <StyledLabel style={{ color: "white" }} htmlFor="0 - 2">
                  0 - 2 (saat)
                </StyledLabel>
              </WrapCount>
              <WrapCount>
                <input
                  id="2 - 4"
                  type="radio"
                  value={"2 - 4"}
                  name="studyTime"
                  {...register("studyTime", { required: true })}
                />
                <StyledLabel style={{ color: "white" }} htmlFor="2 - 4">
                  2 - 4 (saat)
                </StyledLabel>
              </WrapCount>
              <WrapCount>
                <input
                  id="4 - 6"
                  type="radio"
                  value={"4 - 6"}
                  name="studyTime"
                  {...register("studyTime", { required: true })}
                />
                <StyledLabel style={{ color: "white" }} htmlFor="4 - 6">
                  4 - 6 (saat)
                </StyledLabel>
              </WrapCount>
              <WrapCount>
                <input
                  id="6 - 8"
                  type="radio"
                  value={"6 - 8"}
                  name="studyTime"
                  {...register("studyTime", { required: true })}
                />
                <StyledLabel style={{ color: "white" }} htmlFor="6 - 8">
                  6 - 8 (saat)
                </StyledLabel>
              </WrapCount>
              <WrapCount>
                <input
                  id="8+"
                  type="radio"
                  value={"8+"}
                  name="studyTime"
                  {...register("studyTime", { required: true })}
                />
                <StyledLabel style={{ color: "white" }} htmlFor="8+">
                  8+ (saat)
                </StyledLabel>
              </WrapCount>
              {errors.studyTime && (
                <Required>Günde ortalama çalışma girilmesi zorunludur</Required>
              )}
            </div>
          </FourthWrap>
          <AdditionalRow>
            <div>
              <SubTitle>Koçluk alma konusunda ?</SubTitle>
              <div style={{ display: "flex", gap: "20px" }}>
                <input
                  id="okey"
                  type="radio"
                  value={"Kararım net ve olumlu, koçluk almaya hazırım"}
                  name="coachPlan"
                  {...register("coachPlan", { required: true })}
                />
                <StyledLabel style={{ color: "white" }} htmlFor="okey">
                  🚀 Kararım net ve olumlu, koçluk almaya hazırım
                </StyledLabel>
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                <input
                  id="maybe"
                  type="radio"
                  value={"Emin değilim, sorularım var"}
                  name="coachPlan"
                  {...register("coachPlan", { required: true })}
                />
                <StyledLabel style={{ color: "white" }} htmlFor="maybe">
                  🤔 Emin değilim, sorularım var
                </StyledLabel>
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                <input
                  id="moneyProblem"
                  type="radio"
                  value={"Eminim ancak parasal olarak hazır değilim"}
                  name="coachPlan"
                  {...register("coachPlan", { required: true })}
                />
                <StyledLabel style={{ color: "white" }} htmlFor="moneyProblem">
                  😬 Eminim ancak parasal olarak hazır değilim
                </StyledLabel>
              </div>
              {errors.coachPlan && (
                <Required>Bu alanın girilmesi zorunludur</Required>
              )}
            </div>
            <div>
              <SubTitle>Koçluk hakkında bilgi almak için ?</SubTitle>
              <div style={{ display: "flex", gap: "20px" }}>
                <input
                  id="whatsapp"
                  type="checkbox"
                  value={"Whatsapp'tan sorularımı cevaplamanız yeterli"}
                  name="coachAbout"
                  {...register("coachAbout", { required: true })}
                />
                <StyledLabel style={{ color: "white" }} htmlFor="whatsapp">
                  💬 Whatsapp'tan sorularımı cevaplamanız yeterli
                </StyledLabel>
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                <input
                  id="call"
                  type="checkbox"
                  value={"Aranmak istiyorum"}
                  name="coachAbout"
                  {...register("coachAbout", { required: true })}
                />
                <StyledLabel style={{ color: "white" }} htmlFor="call">
                  ☎ Aranmak istiyorum
                </StyledLabel>
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                <input
                  id="faceToFace"
                  type="checkbox"
                  value={"Görüntülü görüşme gerçekleştirmek istiyorum"}
                  name="coachAbout"
                  {...register("coachAbout", { required: true })}
                />
                <StyledLabel style={{ color: "white" }} htmlFor="faceToFace">
                  📸 Görüntülü görüşme gerçekleştirmek istiyorum
                </StyledLabel>
              </div>
              {errors.coachAbout && (
                <Required>Bu alanın girilmesi zorunludur</Required>
              )}
            </div>
          </AdditionalRow>
          <FifthWrap>
            <div style={{ textAlign: "center" }}>
              <SubTitle htmlFor="dreamDepartment">
                Hedefiniz (Sıralama, Üniversite veya Bölüm)
              </SubTitle>
              <Input
                style={{ marginInline: "auto" }}
                id="dreamDepartment"
                placeholder="Hedefiniz"
                type="text"
                name="dreamDepartment"
                {...register("dreamDepartment", { required: true })}
              />
              {errors.dreamDepartment && (
                <Required>Hedefiniz alanının girilmesi zorunludur</Required>
              )}
            </div>
          </FifthWrap>
          <SixthWrap>
            <div style={{ display: "grid" }}>
              <SubTitle htmlFor="additional">
                Eklemek istedikleriniz <br /> (Tek Görüşme için başvurduysanız
                burada belirtebilirsiniz)
              </SubTitle>
              <Textarea
                rows={5}
                id="additional"
                placeholder="Eklemek istedikleriniz ..."
                type="text"
                name="additional"
                {...register("additional")}
              />
            </div>
            <div>
              <StyledButton>{sending ? "Gönderiliyor" : "Başvur"}</StyledButton>
              <Notification
                $success={notification.success}
                $show={notification.show}
              >
                {notification.message}
              </Notification>
            </div>
          </SixthWrap>
        </Form>
      </Row>
      <Footer />
    </Wrap>
  );
};

export default Register;
