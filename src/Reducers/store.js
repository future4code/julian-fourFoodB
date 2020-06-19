export const initialState = {
    cart: [], 
}

export const storeReducer = (state, action) => {
    switch(action.type) {
        case "ADD_CART": 
            const productInCart = state.cart.findIndex(product => {
                return product.id === action.product.id
            })

            let newCart

            if(productInCart === -1){
                newCart = [...state.cart, {...action.product, quantity: 1}]
            } else{
                newCart = state.cart.map(product => {
                    if(product.id === action.product.id){
                        return{
                            ...product,
                            quantity: product.quantity + 1
                        }
                    }
                    return product
                })
                
            }  
            return { ...state, cart: newCart };
        case "REMOVE_CART": 
            newCart = state.cart.filter(product => {
                return product.id !== action.productId
            })
            return {...state, cart: newCart}
        default: 
            return state     
    }
}