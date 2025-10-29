import React from "react";
import { useCartContext } from "../context/cardContext";

export const CartPopUp = ({ setShowCart }) => {
  const { state, dispatch } = useCartContext();


  const totalItems = state?.items?.reduce((acc, item) => acc + item.quantity, 0);


  const totalAmount = state?.items?.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );


  const handleOutsideClick = (e) => {
    if (e.target.id === "cartOverlay") setShowCart(false);
  };

  return (
    <div
      id="cartOverlay"
      onClick={handleOutsideClick}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[400px] max-h-[80vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={() => setShowCart(false)}
          className="absolute top-3 right-3 text-gray-600 text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4">
          Your Cart ({totalItems} {totalItems === 1 ? "item" : "items"})
        </h2>

        {state.items.length > 0 ? (
          <>
            {state.items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b border-gray-200 py-3"
              >
                {/* Product Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name || "product"}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold">{item.name || item.slug}</p>
                    <p className="text-sm text-gray-500">
                      ₹{item.price} × {item.quantity}
                    </p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      dispatch({ type: "DECREASE_QUANTITY", payload: item })
                    }
                    className="px-2 py-1 border rounded text-sm"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch({ type: "INCREASE_QUANTITY", payload: item })
                    }
                    className="px-2 py-1 border rounded text-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}

            {/* Total and Checkout */}
            <div className="mt-6 flex justify-between font-semibold text-lg text-[#191919]">
              <span>Total:</span>
              <span>₹{totalAmount.toLocaleString()}</span>
            </div>

            <button className="mt-5 w-full bg-[#D87D4A] text-white py-2 rounded-md hover:bg-[#b9622e] transition-all">
              Checkout
            </button>
          </>
        ) : (
          <p className="text-gray-500 text-center py-6">Your cart is empty 🛒</p>
        )}
      </div>
    </div>
  );
};
