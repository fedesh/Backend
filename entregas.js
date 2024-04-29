const fs = require('fs');

class ProductManager {
    constructor(path) {
        this.path = path;
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(idProduct) {
        return this.products.find(product => product.code === idProduct);
    }

    deleteProduct(idProduct) {
        const index = this.products.findIndex(product => product.code === idProduct); // el findIndex se usa para encontrar el índice de un elemento en un arreglo que cumple con una determinada condición. 
        if (index !== -1) {
            this.products.splice(index, 1); // el splice es útil cuando necesitas modificar un arreglo, ya sea para eliminar elementos, agregar nuevos elementos o reemplazar elementos existentes.
            return 'Producto eliminado';
        } else {
            return 'Product not found';
        }
    }
}

const productManager = new ProductManager("./products.json");
productManager.addProduct('Tomate', 'Pure de tomate', '$2000', 'https', 111, []);
productManager.addProduct('Vinagre', 'Vinagre en alcohol', '$3000', 'https', 1111, []);

console.log(productManager.getProducts()); // Imprime los productos agregados

const idEliminate = 111; // ID del producto a eliminar
console.log(productManager.deleteProduct(idEliminate));
console.log(productManager.getProducts()); 
