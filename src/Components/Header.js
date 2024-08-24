import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import useOnlineStatus from "./useOnlineStatus";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", (event) => {
      setOnlineStatus(true);
    });
  }, []);
  useEffect(() => {
    window.addEventListener("offline", (event) => {
      setOnlineStatus(false);
    });
  }, []);

  return onlineStatus;
};

const Header = () => {
  console.log(useOnlineStatus);
  const status = useOnlineStatus();
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="w-56">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3iC6MRnkewXJCzlTs09EHiYjP_ZmwTMW2FHEQgQxQt_r75MnvERHXHkFZ3-MQmtQ9zPQ&usqp=CAU"></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className=" px-4">online status :{status ? "ON" : "OF"}</li>
          <li className=" px-4">
            <Link to="/">Home</Link>
          </li>
          <li className=" px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className=" px-4">
            <Link to="/about">About</Link>
          </li>
          <li className=" px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>{" "}
          </li>
          <li className=" px-4">Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
