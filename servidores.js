import express from "express";
import { ProductManager } from "./entregas.js";

const app = express();

// Crear una instancia de ProductManager antes de usarla en las rutas
const productManager = new ProductManager("./products.json");

app.get('/home', (req, res) => {
    res.send();
});

app.get('/products/:code', (req, res) => {
    const { code } = req.params;
    const product = productManager.getProductById(parseInt(code));
    if (!product) res.json({ message: 'Producto no encontrado' });
    else res.json(product);
});

const PORT = 8080;

app.listen(PORT, () => console.log(`Servidor en funcionamiento en el puerto ${PORT}`));

