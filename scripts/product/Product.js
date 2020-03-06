export const Products = (product) =>{
    return `
        <div class="product">
            <div class="products__header">${product.name}</div>
            <div class="products__info">${product.beanType}</div>
            <div class="products__info">${product.roastType}</div>
            <div class="products__info">${product.price}</div>
        </div>
    `
}