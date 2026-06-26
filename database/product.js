const sqlite = require('better-sqlite3');
const db = sqlite('products.sqlite');

export default function getProducts () {

   return db.prepare(`SELECT * FROM products`).all();
   
}


export function setProduct (product) {
    db.prepare (
        `INSERT INTO products (name, price, image) VALUES
        (?, ?, ?)`
    ).run(product.name, product.price, product.image.name);

}


