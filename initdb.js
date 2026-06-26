const sqlite = require('better-sqlite3');
const db = sqlite('products.sqlite');

db.prepare(
   `CREATE TABLE IF NOT EXISTs products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price REAL,
    image TEXT
    
   )`
).run();

db.prepare(
    `INSERT INTO products (name, price, image) VALUES
    ('Banana', 20, 'banana.jpg'),
    ('Apple', 50, 'apple.jpg'),
    ('Orange', 40, 'orange.jpg'),
    ('Pinapple', 30, 'pineapple.jpg')
    `
).run();