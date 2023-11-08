/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
      <h1>ErrorPage</h1>
      <br />
      <Link to="/">
        <button>Retourner à la page d'accueil</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
