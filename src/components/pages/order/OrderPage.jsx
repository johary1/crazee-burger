import { Link, useParams } from "react-router-dom";

const OrderPage = () => {
  const { firstName } = useParams();
  return (
    <div>
      <h1>Bonjour {firstName}</h1>
      <br />
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
};

export default OrderPage;
