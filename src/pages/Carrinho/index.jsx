import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const Cart = () => {
  /*const history = useHistory(); 

  const { cart } = useCart();*/

  return (
    <div>
      <h1>Carrinho - Caio</h1>
      <Link to="/login">Login</Link>
      <div></div>
      <Link to="/">Home</Link>
    </div>
  );
};
