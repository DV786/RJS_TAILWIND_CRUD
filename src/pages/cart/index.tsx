import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../../redux/cart/slice";
import Header from "../../components/Header";

const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <div className="p-6">
        <h2 className="text-2xl font-bold">Shopping Cart</h2>
        {cart.items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.items.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 border">
              <img src={item.thumbnail} alt={item.title} className="w-16 h-16" />
              <h3>{item.title}</h3>
              <div className="flex items-center">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="bg-red-500 text-white px-2"
                >
                  -
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="bg-green-500 text-white px-2"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="bg-gray-500 text-white px-2"
              >
                Remove
              </button>
            </div>
          ))
        )}
        <div className="mt-4 text-lg font-bold">Total Quantity: {cart.totalQuantity}</div>
      </div>
    </div>
  );
};

export default CartPage;
