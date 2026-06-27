"use server";

import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

const sqlite = require('better-sqlite3');
const db = sqlite('products.sqlite');

export const deleteProduct = async (productID) => {
    db.prepare(
        `DELETE FROM products WHERE products.id = ?`
    ).run(productID);

    revalidateTag("revalTag");
    redirect("/");
}