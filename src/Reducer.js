export const initialState  = {
    cart: [],
    wishList: [],
};

const reducer = (state, action) => {
   
    // console.log(action);

    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
            };
        case 'ADD_TO_WISH_LIST':
            return {
                ...state,
                wishList: [...state.wishList, action.item],
            };
        default:
            return{
                ...state,
            };    
    }
    
}

export default reducer;