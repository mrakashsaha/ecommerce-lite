"use server";

import { redirect } from 'next/navigation';

const sqlite = require('better-sqlite3');
const db = sqlite('products.sqlite');

export const deleteProduct = async (productID) => {
    db.prepare(
        `DELETE FROM products WHERE products.id = ?`
    ).run(productID);

    redirect("/");
}