import classes from "./Cart.module.scss";
import Layout from "../../layout/Layout";
import Cartsummery from "../../component/cartSummery/Cartsummery";
import Cartdetails from "../../component/cartDetails/Cartdetails";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart, total } = useSelector((state) => state);
  if (!cart.length) {
    return (
      <Layout>
        <main className={classes.empty}>
          <p>متاسفانه سبد خرید شما خالی است</p>
          <Link to="/">میخوام یه سر برم فروشگاه</Link>
        </main>
      </Layout>
    );
  }
  return (
    <Layout>
      <div className={classes.cart}>
        <Cartdetails cart={cart} />
        <Cartsummery total={total} cart={cart} />
      </div>
    </Layout>
  );
};

export default Cart;
