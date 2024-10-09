import PropTypes from "prop-types";
const CartItem = (props) => {
  const {
    product: { id, title, price, quantityInCart },
  } = props;
  return (
    <li>
      {title} quantity = {quantityInCart} total={price * quantityInCart}
    </li>
  );
};
CartItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  quantityInCart: PropTypes.string,
};
export default CartItem;
