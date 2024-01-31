import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import LogoBurger from "../../reusable-ui/LogoBurger";
import { PiUserCircleFill } from "react-icons/pi";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { BsChevronRight } from "react-icons/bs";

const LoginForm = () => {
  // state
  const [inputValue, setFirstName] = useState("Jojo");

  const navigate = useNavigate();

  // method
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/order/${inputValue}`);
    setFirstName("");
  };

  const handleChange = (event) => {
    setFirstName(event.target.value);
  };

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div className="background"></div>
      <LogoBurger className="logo-login-page" />
      <div className="title-form">Bienvenue chez nous!</div>
      <div className="subtitle-form">Connectez-vous</div>
      <div className="wrapper-input">
        <TextInput
          value={inputValue}
          onChange={handleChange}
          placeholder={"Entrez votre prénom"}
          required
          Icon={<PiUserCircleFill />}
          className="input-login"
        />
        <PrimaryButton
          className="inputForm"
          label="Accéder à mon espace"
          Icon={<BsChevronRight />}
        />
      </div>
    </LoginFormStyled>
  );
};

const LoginFormStyled = styled.form`
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/assets/img/burger-bg.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: darken;
    z-index: -1;
  }
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title-form {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P4};
    font-family: ${theme.fontFamilies.regularFont}, cursive;
    text-transform: uppercase;
    margin-top: 30px;
    &:after {
      content: "";
      margin: 30px auto;
      display: block;
      border: 1px solid #f56a2c;
      background-color: #f56a2c;
      border-radius: ${theme.borderRadius.round};
      height: 3px;
      width: 400px;
    }
  }

  .subtitle-form {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P3};
    font-family: ${theme.fontFamilies.regularFont}, cursive;
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  .input-login {
    margin-bottom: 30px;
  }

  .inputForm {
    margin-top: 30px;
  }

  .logo-login-page {
    transform: scale(2);
    margin-bottom: 30px;
  }
`;

export default LoginForm;
