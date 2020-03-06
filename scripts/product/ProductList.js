import { Products } from "./Product.js";
import { useProducts } from "./productDataProvider.js";

export const ProductList = () =>{
    const contentTarget = document.querySelector(".products")
    const productArray = useProducts()
    for (const productObj of productArray) {
        contentTarget.innerHTML += Products(productObj)
    }
}