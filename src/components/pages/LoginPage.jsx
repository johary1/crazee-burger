import { useState } from "react";
const LoginPage = () => {
  // state
  const [firstName, setFirstName] = useState("");

  // method
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Bonjour " + firstName);
    //clear field
    setFirstName("");
  };

  const handleChange = (event) => {
    setFirstName(event.target.value);
  };

  //render
  return (
    <div className="login-form">
      <h1 className="title-form">Bienvenue chez nous !</h1>
      <h2 className="subtitle-form">Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={handleChange}
          placeholder="Entrez votre prénom ..."
          required
        />

        <button>Accédez à votre espace</button>
      </form>
    </div>
  );
};

export default LoginPage;
