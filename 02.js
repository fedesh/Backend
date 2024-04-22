const fs = require('fs')

class ProductsManager {
    constructor(path){
        this.path = path;
    };

    async getProduts(){
        try{
            if (fs.existsSync(this.path)){
                const produts = await fs.promises.readFile(this.path, 'utf-8');
                return JSON.parse(produts)
            } else return[]
        } catch (error) {
            console.log(error)
        
            }

    } ;

    async addProduts(products){
        try {
            const produts = await this.getProduts();
            produts.push(produts);
            await fs.promises.readFile(this.path, JSON.stringify(produts))

        } catch(error) {
            console.log(error)
        }
    }
}

const productos = new ProductsManager('./productos.json');

const product1 = {
    id: 2,
    title: 'teclado',
    description: 'teclado mecanico',
    price: 60000,
    thumbnail: 'https',
    code: '0001',
    stock: 10,

}
const product2 = {
    id: 1,
    title: 'Joystick',
    description: 'Joystick Inalambrico',
    price: 50000,
    thumbnail: 'https',
    code: '0002',
    stock: 7,
}
const test = async() => {
    console.log(await productos.getProduts())
    await productos.addProduts(product1)
    await productos.addProduts(product2)
    console.log(await manager.getProduts)
}
 test()