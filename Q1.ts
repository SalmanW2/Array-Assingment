type Product= {
    name:string,
    price:number,
    inventory: {
        stock:number,
        colorOptions:string[]
    }
}
let products:Product[] = [{
    name: "Bike",
    price: 97999,
    inventory: {
        stock:234,
        colorOptions:["White" ,"silver", "black"]
} 
},
{
    name: "Washing Machine",
    price: 34999,
    inventory: {
        stock:54,
        colorOptions:["White" ,"silver"]
} 
},
{
    name: "Smart Phone",
    price: 23999,
    inventory: {
        stock:567,
        colorOptions:["silver", "black", "white", "golden"]
} 
}];

function changeColor(product:Product ,newColor:string){    
    if (product.inventory.colorOptions.indexOf(newColor) !== -1){
        console.log(`${newColor} is already mensioned you can puchase in same price $${product.price}.`);
        console.log('sffg');
    }
    else {
        switch(newColor){
            case `red`:
                product.price *= 1.1;
                console.log(`The Price of Product ${product.name} in ${newColor} color is adjusted to $${product.price}.`);
                break;
            case `blue`:
                product.price *= 0.95;
                console.log(`The Price of Product ${product.name} in ${newColor} color is adjusted to $${product.price}.`);
                break;
            default:
                console.log(`Sorry the ${newColor} isn't available.`);
        }
        
    }
}
changeColor(products[1], `red`)
products.forEach(product => {
    console.log(`🚀🎉Name: ${product.name}🚀🎉`);
    console.log(`💰Price: 💲${product.price}`);
    console.log(`Stock: ${product.inventory.stock}⏳🛒`);
    console.log(`Available Colors: ${product.inventory.colorOptions.join(`, `)}🌈\n`);
});

changeColor(products[2], `blue`);