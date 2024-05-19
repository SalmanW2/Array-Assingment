var products = [{
        name: "Bike",
        price: 97999,
        inventory: {
            stock: 234,
            colorOptions: ["White", "silver", "black"]
        }
    },
    {
        name: "Washing Machine",
        price: 34999,
        inventory: {
            stock: 54,
            colorOptions: ["White", "silver"]
        }
    },
    {
        name: "Smart Phone",
        price: 23999,
        inventory: {
            stock: 567,
            colorOptions: ["silver", "black", "white", "golden"]
        }
    }];
function changeColor(product, newColor) {
    if (product.inventory.colorOptions.indexOf(newColor) !== -1) {
        console.log("".concat(newColor, " is already mensioned you can puchase in same price $").concat(product.price, "."));
        console.log('sffg');
    }
    else {
        switch (newColor) {
            case "red":
                product.price *= 1.1;
                console.log("The Price of Product ".concat(product.name, " in ").concat(newColor, " color is adjusted to $").concat(product.price, "."));
                break;
            case "blue":
                product.price *= 0.95;
                console.log("The Price of Product ".concat(product.name, " in ").concat(newColor, " color is adjusted to $").concat(product.price, "."));
                break;
            default:
                console.log("Sorry the ".concat(newColor, " isn't available."));
        }
    }
}
changeColor(products[1], "red");
products.forEach(function (product) {
    console.log("\uD83D\uDE80\uD83C\uDF89Name: ".concat(product.name, "\uD83D\uDE80\uD83C\uDF89"));
    console.log("\uD83D\uDCB0Price: \uD83D\uDCB2".concat(product.price));
    console.log("Stock: ".concat(product.inventory.stock, "\u23F3\uD83D\uDED2"));
    console.log("Available Colors: ".concat(product.inventory.colorOptions.join(", "), "\uD83C\uDF08\n"));
});
changeColor(products[2], "blue");
