import { useContext, createContext, useReducer } from "react";

const cartContext = createContext();

const initialState = {
    items: [],
    totalamount: 0
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                items: [...state.items, action.payload],
                totalamount: state.totalamount + action.payload.price

            };
        case "REMOVE_TO_CART":
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
                totalamount: state.totalamount - action.payload.price
            };
        case "CLEAR_CART":
            return {
                ...state,
                items: [],
                totalamount: 0
            };

    }
}

//here we wil use context api

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState)
    return (
        <cartContext.Provider value={{ state, dispatch }}>
            {children}
        </cartContext.Provider>
    )
}

const useCartContext = () => useContext(cartContext);
export { useCartContext, CartProvider }