import { useContext, createContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  items: [],
  totalamount: 0,
  isCheckout: false
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return {
          ...state,
          items: updatedItems,
          totalamount: state.totalamount + action.payload.price,
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          totalamount: state.totalamount + action.payload.price,
        };
      }
    }

    case "INCREASE_QUANTITY": {
      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return {
        ...state,
        items: updatedItems,
        totalamount: state.totalamount + action.payload.price,
      };
    }

    case "DECREASE_QUANTITY": {
      const updatedItems = state.items
        .map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

      return {
        ...state,
        items: updatedItems,
        totalamount: state.totalamount - action.payload.price,
      };
    }

    case "REMOVE_FROM_CART": {
      const removedItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        items: filteredItems,
        totalamount:
          state.totalamount - removedItem.price * removedItem.quantity,
      };
    }
    case "EMPTY_CART": {
     return initialState;
    }
    case "IS_CHECKOUT": {
      return {
        ...state,
        isCheckout: action.payload
      }
    }

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { useCartContext, CartProvider };
