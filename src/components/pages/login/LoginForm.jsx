import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  // state
  const [firstName, setFirstName] = useState("");

  // method
  const handleSubmit = (event) => {
    event.preventDefault();
    //alert("Bonjour " + firstName);
    //clear field
    setFirstName("");
  };

  const handleChange = (event) => {
    setFirstName(event.target.value);
  };

  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <h1 className="title-form">Bienvenue chez nous !</h1>
        <h2 className="subtitle-form">Connectez-vous</h2>
        <input
          type="text"
          value={firstName}
          onChange={handleChange}
          placeholder="Entrez votre prénom ..."
          required
        />

        <Link to={`/order/${firstName}`}>
          <button>Accédez à votre espace</button>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
