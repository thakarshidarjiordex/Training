type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
    stock: number;
};

const products: Product[] = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        category: "Electronics",
        stock: 10
    },
    {
        id: 2,
        name: "Mobile",
        price: 25000,
        category: "Electronics",
        stock: 20
    },
    {
        id: 3,
        name: "Shoes",
        price: 3000,
        category: "Fashion",
        stock: 15
    }
];


function displayProducts(products: Product[]): void {
    products.forEach(product => {
        console.log(`
ID: ${product.id}
Name: ${product.name}
Price: ₹${product.price}
Category: ${product.category}
Stock: ${product.stock}
------------------------
        `);
    });
}

displayProducts(products);


function findProduct(id: number): Product | undefined {
    return products.find(product => product.id === id);
}

console.log(findProduct(2));

function getProductsByCategory(category: string): Product[] {
    return products.filter(
        product => product.category === category
    );
}

console.log(getProductsByCategory("Electronics"));

function checkStock(product: Product): string {
    if (product.stock > 0) {
        return `${product.name} is available`;
    }

    return `${product.name} is out of stock`;
}
console.log(checkStock(products[0]));