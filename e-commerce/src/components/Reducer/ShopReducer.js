
import { data } from '../../components/info/data';
import { TYPES } from '../Actions/Actions';
export const initialState = {
    products: data,
    cart:[]
}

export function shopReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
        /* Cambie products por product para probar */
            let newItem = data.find(x => x.id === action.product.id)
                    //Reviso si ya no tengo ese item
            let itemCart = state.cart.find(x => x.id === action.product.id)

            /* let indexItem = state.cart.findIndex((item) => item.id === action.product.id)
            if(indexItem < 0){
                state.cart.push({...item, quantity:1, total: item.total});
            } else{
                const newItem = {
                    ...state.cart[indexItem]
                }
                {...item, quantity: item.quantity}
            } */
        
            return itemCart?{
                    ...state,
                     //Si lo tengo sumar la cantidad y calcular el valor del total 
                cart: state.cart.map((item) => item.id === newItem.id 
                //cambie ... :item.quantity + 1, total: item.prize* item.quantity
                ?{...item, quantity: item.quantity + 1, total: item.prize * item.quantity}: item),}
                   
                
            :{
                    //Si no lo tengo, entonces el total es el precio y la cantidad 1
                ...state,
                cart: [...state.cart, {newItem, quantity: 1, total: newItem.prize}]
            }
        }
        case TYPES.REMOVE_ONE_FROM_CART: {
            let itemDelete = data.find(x => x.id === action.productId)
            return itemDelete.quantity > 1 ? {
                ...state,
                cart: state.cart.map((item)=> item.id === action.productId 
                ? {...item, quantity: item.quantity -1, total: item.prize * item.quantity}: item),
            }
            :
            {
/*Cambie productId por payload */
            ...state,
                cart: state.cart.filter(x=> x.id !== action.payload)
            }
        }

        case TYPES.CLEAR_CART: {
            return initialState
        }
        default: return state;
    }
}
