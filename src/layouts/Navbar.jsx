import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import logo from "../assets/image.png";
import { navTags } from "../utills/featuredData";
import { useCartContext } from "../context/cardContext";

const Navbar = () => {
  const { state } = useCartContext();
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = state?.items?.length || 0;

  // ✅ Disable background scroll when cart popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // ✅ Calculate total amount properly
  const totalAmount = state?.items?.reduce((acc, item) => {
    return acc + Number(item.price) * item.quantity;
  }, 0);

  return (
    <nav className="bg-[#191919] h-[100px] flex items-center relative">
      <div className="custom-container w-full flex items-center justify-between gap-[200px] border-b-2 h-full border-zinc-700">
        {/* Logo */}
        <div>
          <h1 className="text-white font-extrabold text-3xl">
            <img src={logo} alt="logo" className="object-cover" />
          </h1>
        </div>

        {/* Nav Links */}
        <div className="flex items-center justify-center tracking-wide gap-[39px]">
          {navTags.map((tag, index) => (
            <Link
              to={tag.link}
              key={index}
              className="font-semibold text-[17px] leading-1 tracking-wide text-white"
            >
              {tag.name.toUpperCase()}
            </Link>
          ))}
        </div>

        {/* Cart Icon */}
        <div
          className="flex items-center justify-center relative cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsCart3 className="text-white w-8 h-8" />
          <span className="h-4 w-4 bg-red-600 rounded-full absolute -top-1.5 left-[22px] flex items-center justify-center text-white text-sm font-semibold">
            {totalItems}
          </span>
        </div>
      </div>

      {/* ✅ Cart Popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-[400px] rounded-2xl shadow-lg p-5 relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4">Your Cart</h2>

            {state.items.length === 0 ? (
              <p className="text-gray-600 text-center">Your cart is empty 🛒</p>
            ) : (
              <div className="flex flex-col gap-4">
                {state.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between border-b pb-2 text-gray-800"
                  >
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        ₹{Number(item.price)} × {item.quantity}
                      </p>
                    </div>
                    <p className="font-bold">
                      ₹{Number(item.price) * item.quantity}
                    </p>
                  </div>
                ))}

                <div className="flex justify-between mt-4 font-bold text-lg border-t pt-2">
                  <p>Total:</p>
                  <p>₹{totalAmount.toLocaleString()}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
