import { useContext, createContext, useReducer } from "react";

const cartContext = createContext();

const initialState = {
    items: [],
    totalamount: 0
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {

            //thats will fitst chekc the itm
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if (existingItem) {
                const updatedItems = state.items.map((itm) => itm.id == action.payload.id ? { ...itm, quantity: itm.quantity + 1 } : itm);
                return {
                    ...state,
                    items: updatedItems,
                    totalamount: state.totalamount + action.payload.price,

                };
                // here  is the diffrence if p[roduc ont in tha card then it incrreates tgat]
            } else {
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, quantity: 1 }],
                    totalamount: state.totalamount + action.payload + price,
                }
            }


        };
        case "INCREASE_QUANTITY": {

            const updatedProduct = state.items.map((item) => item.id == action.payload.id ? { ...item, quantity: item.quantity + 1 } : item)
            return {
                ...state,
                items: updatedProduct,
                totalamount: state.totalamount + action.payload.price,
            }
        };
        case "DECREASE_QUANTITY": {
            const updateQuantity = state.items.map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item)
            return {
                ...state,
                items: updateQuantity,
                totalamount: state.totalamount - action.payload.price
            }
        };
        case "REMOVE_FROM_CART": {
            const removeProduct = state.items.filter((item) => item.id === action.payload.id);
            return {
                ...state, items: !removeProduct,
                totalamount: state.totalamount - action.payload.id
            }
        }

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