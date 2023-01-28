import React, {createContext, useReducer} from "react";

type CartState = {
    items:Array<{
        id:string;
        nome:string;
        valor:number;
    }>;
};

type CartAction = 
|{type:'ADD_ITEM'; item:CartState['items'][0]}
|{type:'REMOVE_ITEM'; itemid:string}
|{type:'CLEAR_CART'};

const initialState:CartState = {
    items:[]};

const cartReducer = (state:CartState, action:CartAction) => {
    switch (action.type) {
        case 'ADD_ITEM': return {items:[...state.items, action.item]};
        case 'REMOVE_ITEM': return {items:state.items.filter((item) => item.id !== action.itemid)};
        case 'CLEAR_CART': return initialState;
        default: return state;
    }
};

export const CartContext = createContext
<{state:CartState;
dispath:React.Dispatch<CartAction>;}>
({state:initialState,
    dispath:() => null,});

export const CartProvider:React.FC = ({children}) => {
    const [state, dispath] = useReducer(cartReducer, initialState);
    return (
        <CartContext.Provider value={{state, dispath}}>
            {children}
        </CartContext.Provider>
    )
}