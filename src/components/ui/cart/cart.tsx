import { FC, useEffect } from "react";
import { ICartProduct } from "@types";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementAmount,
  hideCart,
  incrementAmount,
  RootState,
} from "services";
import { Button } from "../form";
import { useNavigate } from "react-router-dom";

export const CartProduct: FC<ICartProduct> = ({ item }) => {
  const { id, images, title, description, price, amount } = item;
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center text-gray-200">
      <div className="flex items-center">
        <img src={images[0]} alt={title} className="w-20 h-full" />
        <div className="ml-4 flex flex-col gap-1">
          <h3 className="text-base font-bold">{title}</h3>
          <p className="text-sm">{description}</p>
          <div className="px-2 border border-gray-600 border-opacity-1 rounded-md w-_102 flex items-center justify-between">
            <button
              className="text-3xl"
              onClick={() => dispatch(decrementAmount({ id }))}
            >
              -
            </button>
            <span className="mx-2">{amount}</span>
            <button
              className="text-3xl"
              onClick={() => dispatch(incrementAmount({ id }))}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="ml-4">
          <h3 className="ttext-base font-bold">${price}</h3>
        </div>
      </div>
    </div>
  );
};

export const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.cart);
  const { displayCart, items, subTotal } = cart;
  const handleContinueShopping = () => {
    dispatch(hideCart());
    navigate("/shop-plants");
  };

  window.onpopstate = () => {
    if (displayCart) {
      dispatch(hideCart());
    }
  };

  useEffect(() => {
    if (displayCart) {
      dispatch(hideCart());
    }
  }, []);

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
        {items.length > 0 ? (
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-4 p-4 py-8 justify-between h-full">
              <div className="overflow-x-auto pr-4">
                {items.map((item) => (
                  <CartProduct key={item.id} item={item} />
                ))}
              </div>
              <div>
                <hr className="border-gray-600 border-opacity-1" />
                <div>
                  <p className="text-gray-200 text-sm mt-4 flex items-center justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </p>
                  <p className="text-gray-200 text-sm mt-4 flex items-center justify-between font-semibold">
                    <span>SubToal</span>
                    <span>USD${subTotal}</span>
                  </p>
                </div>
                <Button
                  className="w-full mt-4"
                  label="Continue shopping"
                  variant="secondary"
                  onClick={handleContinueShopping}
                />
                <Button className="w-full mt-4" label="Checkout" />
                <p className="text-center mt-5">
                  Got any questions?{" "}
                  <span className="text-green-100">Contact us</span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-full p-4">
            <h3 className="text-lg font-bold text-gray-200">
              Your cart is empty :( <br /> Add some products to your cart
            </h3>
            <Button className="w-full mt-4" label="Continue shopping" />
          </div>
        )}
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
