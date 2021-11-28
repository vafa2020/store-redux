import classes from "./Cart.module.scss";
import Layout from "../../layout/Layout";
import Cartsummery from "../../component/cartSummery/Cartsummery";
import Cartdetails from "../../component/cartDetails/Cartdetails";
const Cart = () => {
  return (
    <Layout>
      <div>
        <Cartsummery />
        <Cartdetails />
      </div>
    </Layout>
  );
};

export default Cart;
