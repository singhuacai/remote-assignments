function avg(data) {
    let total = 0;
    for(let i = 0 ; i < data.products.length ; i++){
        total += data.products[i].price;
    }    
    return total/data.products.length;
}

console.log(
    avg({
        size: 3,
        products: [
            {
                name: "Product 1",
                price: 100
            },
            {
                name: "Product 2",
                price: 700
            },
            {
                name: "Product 3",
                price: 250
            }
        ]
    })
) // should print the average price of all products
