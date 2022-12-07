import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { hideCart, RootState } from "services";

export const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const { displayCart } = cart;

  return (
    <div>
      <div
        className={clsx(
          "w-_500 fixed bg-gray-400 top-0 right-0 h-screen z-20",
          displayCart
            ? "transform translate-x-0 transition duration-500 ease-in-out"
            : "transform translate-x-full transition duration-500 ease-in-out"
        )}
      >
        Cart
      </div>
      <div
        className={clsx(
          "w-full h-full bg-black opacity-30 absolute top-0 right-0 cursor-pointer z-10",
          displayCart ? "block" : "hidden"
        )}
        onClick={() => dispatch(hideCart())}
      ></div>
    </div>
  );
};
