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
  grid-template-rows: repeat(6, min-content);
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
  font-size: 26px;
  color: ${[theme.lightBlue]};
  font-weight: 600;
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
  grid-row: 6;
  text-align: center;
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
              <StyledLabel htmlFor="name">Ad ve Soyad</StyledLabel>

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
              <StyledLabel htmlFor="age">Yaş</StyledLabel>
              <Input
                id="age"
                placeholder="Yaş"
                type="number"
                {...register("age", { required: true })}
              />
              {errors.age && <Required>Yaş girilmesi zorunludur</Required>}
            </div>
            <div>
              <StyledLabel htmlFor="phone">Telefon</StyledLabel>
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
              <StyledLabel>Hangi Sınıftasınız?</StyledLabel>
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
              <StyledLabel>Alanınız ?</StyledLabel>
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
              <StyledLabel htmlFor="avarageTyt">Ortalama TYT Neti?</StyledLabel>
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
              <StyledLabel htmlFor="avarageAyt">Ortalama AYT Neti?</StyledLabel>
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
                  max: { value: 80, message: "AYT neti 80 den büyük olmamalıdır " },
                })}
              />
              {errors.ayt && <Required>{errors.ayt.message}</Required>}
            </div>
          </ThirdWrap>
          <FourthWrap>
            <div>
              <StyledLabel>Günde ortalama çalışma süreniz ?</StyledLabel>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                }}
              >
                <input
                  id="0 - 1.5"
                  type="radio"
                  value={"0 - 1.5"}
                  name="studyTime"
                  {...register("studyTime", { required: true })}
                />
                <StyledLabel style={{ color: "white" }} htmlFor="0 - 1.5">
                  0 - 1.5 (saat)
                </StyledLabel>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                }}
              >
                <input
                  id="1.5 - 4"
                  type="radio"
                  value={"1.5 - 4"}
                  name="studyTime"
                  {...register("studyTime", { required: true })}
                />
                <StyledLabel style={{ color: "white" }} htmlFor="1.5 - 4">
                  1.5 - 4 (saat)
                </StyledLabel>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                }}
              >
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
              </div>
              {errors.studyTime && (
                <Required>Günde ortalama çalışma girilmesi zorunludur</Required>
              )}
            </div>
          </FourthWrap>
          <FifthWrap>
            <div style={{ textAlign: "center" }}>
              <StyledLabel htmlFor="dreamDepartment">
                Hedefiniz (Sıralama, Üniversite veya Bölüm)
              </StyledLabel>
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
              <StyledLabel htmlFor="additional">
                Eklemek istedikleriniz ...
              </StyledLabel>
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
