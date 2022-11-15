import React, { useReducer, useState } from 'react';
import { TYPES } from '../Actions/Actions';
import { data } from '../info/data';
import { shopReducer } from '../Reducer/ShopReducer';

export const shopContext = React.createContext({
    products: data,
    cart: [],

    addProductToCart: product => {},
    removeProductFromCart: productID => {}
});
function GlobalState (props) {
    const [products, setProductos] = useState(data);

    const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

    function addProductToCart (product){
        dispatch({type: TYPES.ADD_TO_CART, product: product});
    };

    function removeProductFromCart(productId){
        dispatch({type: TYPES.REMOVE_ONE_FROM_CART, productId: productId});
    };

    return(
        <shopContext.Provider
        value ={{
            products: products,
            cart: cartState.cart,
            addProductToCart: addProductToCart,
            removeProductFromCart: removeProductFromCart
        }}
        >
        {props.children}
        </shopContext.Provider>
    );
}
export default GlobalState;
