const fs = require('fs')

class ProductMaganer {
    path= "";
    constructor(path){
        this.path = path;
    }

    addProducts(title, description, price, thumbnail, code, stock){
        const products = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock:[]
        };
        this.products.push(products)
    }
    getProdut(){
        return this.products;
    }


    addProducts(idProduts){
        const products = this.getProdut(idProduts);
        if(products){
            if(!products.title.includes(idProduts)) products.title.push(idProduts)
        } else console.log('this event not exist')
        
        
    }

    getProduts(idProduts){
        return this.products.find((products) => products.id == idProduts);
    }

    getProductById(idProduts, newProducte, newTitle, newImage, newCode, newPrice) {
        const products =  this.getProdut(idProduts)
        if(products){
            const newProduct = {
                ...products,
                title: newTitle,
                description: newProducte,
                price: newPrice,
                thumbnail: newImage,
                code: newCode,
                stock: newStock,

            };
            this.products.push(newProduct);
        } else return'this event no exist';
    }

}
const productMaganer =  new ProductMaganer( "./products.json");
productMaganer.addProducts('Tomate', 'pure de tomate', '$2000', 'https',111);
productMaganer.addProducts('vinagre', 'vinagre en alcohol', '$3000', 'https',1111);
console.log(productMaganer.getProduts())


