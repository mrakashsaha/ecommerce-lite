import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-evenly p-4 border-b border-gray-400'>
            <Link href={"/"}>Products</Link>
            <Link href={"/add-product"}>Add Product</Link>
        </div>
    );
};

export default Header;