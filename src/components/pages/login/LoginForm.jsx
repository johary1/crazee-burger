import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsChevronRight } from "react-icons/bs";
import LogoBurger from "../../reusable-ui/LogoBurger";
import { PiUserCircleFill } from "react-icons/pi";

import TextInput from "../../reusable-ui/TextInput";

const LoginForm = () => {
  // state
  const [inputValue, setFirstName] = useState("");

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
      <LogoBurger />
      <h1 className="title-form">Bienvenue chez nous!</h1>
      <h2 className="subtitle-form">Connectez-vous</h2>
      <TextInput
        value={inputValue}
        onChange={handleChange}
        placeholder={"Entrez votre prénom"}
        required
        Icon={<PiUserCircleFill />}
      />

      <button type="submit" className="link-account">
        Accéder à mon espace
        <BsChevronRight className="chevron-login" />
      </button>
    </LoginFormStyled>
  );
};

const LoginFormStyled = styled.form`
  :before {
    content: "";
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P5};
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

  h2 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P4};
    font-family: ${theme.fontFamilies.regularFont}, cursive;
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  .link-account {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-weight: ${theme.weights.semiBold};
    border: none;
    border-radius: ${theme.borderRadius.round};
    box-shadow: ${theme.shadows.greyLight};
    margin: ${theme.spacing.md} auto;
    min-width: 400px;
    min-height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }

    .chevron-login {
      margin-top: 2px;
      font-size: 12px;
    }
  }
`;

export default LoginForm;
