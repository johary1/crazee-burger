import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { PiUserCircleFill } from "react-icons/pi";
import { BsChevronRight } from "react-icons/bs";
import LogoBurger from "../../generic/LogoBurger";

const LoginForm = () => {
  // state
  const [firstName, setFirstName] = useState("");

  const navigate = useNavigate();

  // method
  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName.trim() === "") {
      return;
    }
    navigate(`/order/${firstName}`);
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
      <div className="input-form">
        <PiUserCircleFill />
        <input
          type="text"
          value={firstName}
          onChange={handleChange}
          placeholder="Entrez votre prénom"
          required
        />
      </div>
      <button type="submit" className="link-account">
        Accéder à mon espace
        <BsChevronRight />
      </button>
    </LoginFormStyled>
  );
};

const LoginFormStyled = styled.form`
  background-image: url("/assets/img/burger-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.95;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .logo {
    display: flex;
    justify-content: center;
    align-content: center;
    color: ${theme.colors.primary};
    font-size: 72px;
    font-family: ${theme.fontFamilies.regularFont};
    letter-spacing: 1.5px;
    > img {
      width: 120px;
    }
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P5};
    font-family: ${theme.fontFamilies.regularFont};
    text-transform: uppercase;
    margin-top: 61px;
    &:after {
      content: "";
      margin: 50px auto;
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
    font-family: ${theme.fontFamilies.regularFont};
    text-transform: uppercase;
    margin-bottom: 61px;
  }

  .input-form {
    background-color: ${theme.colors.white};
    width: 400px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px, 30px, 18px, 30px;
    border-radius: ${theme.borderRadius.round};
    gap: 12.8px;
    input {
      border: none;
      width: 324px;
    }
  }

  .link-account {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: none;
    border-radius: ${theme.borderRadius.round};
    box-shadow: ${theme.shadows.greyLight};
    margin: ${theme.spacing.md} auto;
    width: 400px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
  }
`;

export default LoginForm;
