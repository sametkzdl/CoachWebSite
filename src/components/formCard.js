import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import Row from "./row";
import Button from "./button";
import { theme } from "../utils/global";

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
  display: grid;
  justify-content: center;
  max-width: 300px;
  box-shadow: 0px 0px 10px rgba(174, 173, 173, 0.5);
  border-radius: 40px;
  color: black;
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

const StyledPhoneInput = styled(PhoneInput)`
  border: 1px solid #898989;
  outline: none;
  transition: all 0.5s;
  border-radius: 4px;
  margin-block: 0.8rem;
  overflow: hidden;
  z-index: 10;
  &:hover,
  &:focus {
    box-shadow: 4px 4px 12px rgba(35, 199, 222, 0.3),
      -4px -4px 12px rgba(35, 199, 222, 0.3);
    border-color: rgb(35, 199, 222);
  }
  > .flag-dropdown {
    border: none;
    background-color: transparent;
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

const Register = () => {
  const validatePhoneNumber = (phone) => {
    return phone.startsWith("90") && phone.replace(/[^0-9]/g, "").length === 12;
  };
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Wrap>
      <Row>
        <Title>X Akademi | Başvuru Formu</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <StyledLabel htmlFor="name">Ad ve Soyad</StyledLabel>
          <Input
            id="name"
            placeholder="Ad ve Soyad"
            type="text"
            {...register("name", { required: true })}
          />
          {errors.name && <Required>Ad ve Soyad girilmesi zorunludur</Required>}
          <StyledLabel htmlFor="age">Yaş</StyledLabel>
          <Input
            id="age"
            placeholder="Yaş"
            type="number"
            {...register("age", { required: true })}
          />
          {errors.age && <Required>Yaş girilmesi zorunludur</Required>}
          <StyledLabel htmlFor="telephone">Telefon</StyledLabel>
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              validate: validatePhoneNumber,
            }}
            render={({ field: { value, onChange } }) => (
              <StyledPhoneInput
                id="telephone"
                country={"tr"}
                value={value}
                onChange={(phone) => {
                  onChange(phone);
                  setValue("phone", phone, { shouldValidate: true });
                }}
                onlyCountries={["tr"]} // Sadece Türkiye
                inputStyle={{
                  border: "none",
                  overflow: "hidden",
                }}
              />
            )}
          />
          {errors.phone && errors.phone.type === "required" && (
            <Required>Telefon girilmesi zorunludur</Required>
          )}
          {errors.phone && errors.phone.type === "validate" && (
            <Required>Geçerli bir Türkiye telefon numarası giriniz</Required>
          )}
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
            <StyledLabel style={{ color: "white" }} htmlFor="Dil (İngilizce)">
              Dil (İngilizce)
            </StyledLabel>
          </div>
          {errors.field && <Required>Alan girilmesi zorunludur</Required>}
          <StyledLabel htmlFor="age">Ortalama TYT Neti ?</StyledLabel>
          <Input
            id="age"
            placeholder="TYT Neti"
            type="number"
            name="tyt"
            {...register("tyt", { required: true })}
          />
          {errors.tyt && <Required>TYT Neti girilmesi zorunludur</Required>}
          <StyledLabel htmlFor="age">Ortalama AYT Neti ?</StyledLabel>
          <Input
            id="age"
            placeholder="AYT Neti"
            type="number"
            name="ayt"
            {...register("ayt", { required: true })}
          />
          {errors.ayt && <Required>AYT Neti girilmesi zorunludur</Required>}
          <StyledLabel>Günde ortalama çalışma süreniz ?</StyledLabel>
          <div style={{ display: "flex", gap: "20px" }}>
            <input
              id="0 - 1.5"
              type="radio"
              value={"0 - 1.5"}
              name="studyTime"
              {...register("studyTime", { required: true })}
            />
            <StyledLabel style={{ color: "white" }} htmlFor="0 - 1.5">
              0 - 1.5
            </StyledLabel>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <input
              id="1.5 - 4"
              type="radio"
              value={"1.5 - 4"}
              name="studyTime"
              {...register("studyTime", { required: true })}
            />
            <StyledLabel style={{ color: "white" }} htmlFor="1.5 - 4">
              1.5 - 4
            </StyledLabel>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <input
              id="4 - 6"
              type="radio"
              value={"4 - 6"}
              name="studyTime"
              {...register("studyTime", { required: true })}
            />
            <StyledLabel style={{ color: "white" }} htmlFor="4 - 6">
              4 - 6
            </StyledLabel>
          </div>
          {errors.studyTime && (
            <Required>Günde ortalama çalışma girilmesi zorunludur</Required>
          )}
          <StyledLabel htmlFor="dreamDepartment">
            Hedefiniz (Sıralama, Üniversite veya Bölüm)
          </StyledLabel>
          <Input
            id="dreamDepartment"
            placeholder="Hedefiniz"
            type="text"
            name="dreamDepartment"
            {...register("dreamDepartment", { required: true })}
          />
          {errors.dreamDepartment && (
            <Required>Hedefiniz alanının girilmesi zorunludur</Required>
          )}
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
          <StyledButton>Başvur</StyledButton>
        </Form>
      </Row>
    </Wrap>
  );
};

export default Register;
