import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Invoice from "../../component/Invoice/Invoice";
import Order from "../../component/order/Order";
import Layout from "../../layout/Layout";
import classes from "./Checkout.module.scss";
const Checkout = () => {
  const { cart, total } = useSelector((state) => state.cart);
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
      <div className={classes.checkout}>
        <Invoice />
        <Order total={total} cart={cart} />
      </div>
    </Layout>
  );
};

export default Checkout;
