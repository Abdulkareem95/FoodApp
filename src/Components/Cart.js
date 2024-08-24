import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { clearCart } from "../Constants/cartSlice";
import { createSlice } from "@reduxjs/toolkit";
import ItemCategory from "./ItemCategory";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearcart = () => {
    dispatch(cartSlice.reducers.clearCart());
  };

  // console.log(cartItems);
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          onClick={handleClearcart}
          className="m-2 p-2 bg-black text-white rounded-lg"
        >
          Clear Cart
        </button>
        <ItemCategory items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
