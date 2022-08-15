let initialState = {
    itemQuantity: 0,
    products: [],
    buyList: [],
    totalPrice: 0,
    totalItem: 0,
};
if (JSON.parse(localStorage.getItem("products"))) {
    initialState = {
        itemQuantity: JSON.parse(localStorage.getItem("itemQuantity")),
        products: JSON.parse(localStorage.getItem("products")),
        buyList: [],
        totalPrice: 0,
        totalItem: 0,
    };
}



const CartEvents = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_ITEM":
            let isNewProduct = true;
            const addQuantityForProduct = (productIndex, quantity) => {
                state.products[productIndex].quantity += quantity
            }
            state.products.forEach((item, index) => {
                const itemId = item._id;
                if (itemId === action.value.itemInfo._id) {
                    addQuantityForProduct(index, action.value.quantity)
                    isNewProduct = false;
                }
            });
            state.buyList.forEach((item, index) => {
                if (item._id === action.value.itemInfo._id) {
                    state.totalPrice += (action.value.itemInfo.buyPrice);
                    state.totalItem++;
                }
            });
            if (isNewProduct) {
                return {
                    ...state,
                    itemQuantity: (state.itemQuantity + action.value.quantity),
                    products: [...state.products, action.value.itemInfo]
                };
            }
            return {
                ...state,
                itemQuantity: (state.itemQuantity + action.value.quantity)
            }
        case "DELETE_ITEM":
            const quantityDelete = action.value.productInfo.quantity;
            state.products.splice(action.value.productIndex, 1);
            return {
                ...state,
                itemQuantity: (state.itemQuantity - quantityDelete)
            }
        case "DECREASE_ITEM":
            if (state.products[action.value.itemIndex].quantity > 1) {
                state.products[action.value.itemIndex].quantity -= 1;
                state.buyList.forEach((item, index) => {
                    if (item._id === action.value.item._id) {
                        state.totalPrice -= (action.value.item.buyPrice);
                        state.totalItem -= 1;
                    }
                });
                return {
                    ...state,
                    itemQuantity: (state.itemQuantity - 1)
                }
            }
            return state;
        case "ADD_TO_BUY_LIST":
            state.totalPrice += (action.value.product.buyPrice * action.value.product.quantity);
            state.totalItem += (action.value.product.quantity);
            return {
                ...state,
                buyList: [...state.buyList, action.value.product],
            }
        case "REMOVE_FROM_BUY_LIST":
            state.totalPrice -= (action.value.product.buyPrice * action.value.product.quantity);
            state.totalItem -= (action.value.product.quantity);
            let newBuyList = [];
            state.buyList.forEach((item, index) => {
                if (item._id === action.value.product._id) {
                    // buyList.splice(index, 1);
                    newBuyList = newBuyList.concat(
                        state.buyList.slice(0, index),
                        state.buyList.slice(index + 1),
                    );
                }
            });
            return {
                ...state,
                buyList: newBuyList
            }
        case "SELECT_ALL_ITEM":
            const getTotalPrice = (items) => {
                let totalPrice = 0;
                items.forEach((item) => {
                    totalPrice += (item.buyPrice * item.quantity)
                });
                return totalPrice;
            }
            const getTotalItemQuantity = (items) => {
                let totalItem = 0;
                items.forEach((item) => {
                    totalItem += (item.quantity)
                });
                return totalItem;
            }
            return {
                ...state,
                buyList: state.products,
                totalPrice: getTotalPrice(state.products),
                totalItem: getTotalItemQuantity(state.products),
            }
        case "REMOVE_ALL_ITEM":
            return {
                ...state,
                buyList: [],
                totalPrice: 0,
                totalItem: 0
            }
        default:
            return state;
    }
};

export default CartEvents;
