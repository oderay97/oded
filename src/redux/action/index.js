import Product from "../../component/Product"

// for Add Item to cart
export const addCart = (Product) =>{
    return{
        type : "ADDITEM",
        payload : Product
    }
}

// For Delete Item From Cart
export const delCart = (Product) => {
    return {
        type : "DELITEM",
        payload : Product
    }
}