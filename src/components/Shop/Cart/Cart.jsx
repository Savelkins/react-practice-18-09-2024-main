import CartItem from "./Cartitem/CartItem";
import PropTypes from "prop-types";
const Cart = (props) => {
  const { cartProducts } = props;
  const showItem = (product) => <CartItem key={product.id} product={product} />;
  return (
    <section>
      <h2>Cart</h2>
      {cartProducts.length === 0 ? (
        <p>empty cart</p>
      ) : (
        <>
          <ol>{cartProducts.map(showItem)}</ol>
          <hr />
          <p>
            total:{" "}
            {cartProducts.reduce((summa, product) => {
              return summa + product.price * product.quantityInCart;
            }, 0)}
          </p>
        </>
      )}
    </section>
  );
};
Cart.propTypes = {
  cartProducts: PropTypes.array,
};
export default Cart;
