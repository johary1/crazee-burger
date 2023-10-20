import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
const LoginForm = () => {
  // state
  const [firstName, setFirstName] = useState("");
  const navigate = useNavigate();

  // method
  const handleSubmit = (event) => {
    event.preventDefault();
    //clear field
    setFirstName("");
    navigate(`/order/${firstName}`);
  };

  const handleChange = (event) => {
    setFirstName(event.target.value);
  };

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1 className="title-form">Bienvenue chez nous !</h1>
      <h2 className="subtitle-form">Connectez-vous</h2>
      <input
        type="text"
        value={firstName}
        onChange={handleChange}
        placeholder="Entrez votre prénom"
        required
      />

      <Link to={`/order/${firstName}`}>
        <button>Accéder à mon espace</button>
      </Link>
    </LoginFormStyled>
  );
};

const LoginFormStyled = styled.form`
  background-color: #fff;
`;

export default LoginForm;
