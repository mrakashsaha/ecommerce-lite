
import React from 'react';
import { setProduct } from '../../../database/product';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/db/prisma';
import { NextResponse } from 'next/server';


const AddProduct = () => {

    // const handleSubmit = async (fromData) => {
    //     "use server";
    //     console.log(fromData)

    //     const newProduct = {
    //         name: fromData.get('name'),
    //         price: fromData.get('price'),
    //         image: fromData.get('image')
    //     }

    //     setProduct(newProduct);

    //     revalidatePath('/', 'page');

    //     redirect('/')

    // }

    const handleSubmit = async (formData) => {
        "use server"

        const productData = {
            name: formData.get('name'),
            price: parseFloat(formData.get('price')),
            image: formData.get('image').name
        }

        // const productDataArr = [
        //     {
        //         name: "Pineapple",
        //         price: 53.2,
        //         image: "pineapple.jpg"
        //     },

        //     {
        //         name: "Guava",
        //         price: 53.2,
        //         image: "guava.jpg"
        //     },

        //     {
        //         name: "Barries",
        //         price: 53.2,
        //         image: "baries.jpg"
        //     }
        // ]
        console.log(formData);
        await prisma.product.create({
            data: productData
        })

        // await prisma.product.createMany({
        //     data: productDataArr
        // })



        revalidatePath("/", "page");
        redirect("/");
    }

    return (
        <div className='m-16'>
            <form action={handleSubmit} className='max-w-3xl p-12 m-auto border border-gray-300 rounded-lg shadow-lg'>
                <div className='space-y-8'>
                    <div className='border-b border-gray-200 pb-8'>
                        <h1 className='text-2xl font-semibold leading-7 text-gray-900'>Add Product</h1>
                    </div>
                    <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                        <div className='sm:col-span-3 flex flex-col'>
                            <label className='text-md font-medium text-gray-900' htmlFor="">Product Name</label>
                            <input className='rounded-md border-0 p-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-xs placeholder:pl-2 focus:ring-1 foucus:ring-inset sm:text-md sm:leading6' type="text" name="name" placeholder='Apple' />
                        </div>
                        <div className='sm:col-span-3 flex flex-col'>
                            <label className='text-md font-medium text-gray-900' htmlFor="">Price</label>
                            <input className='rounded-md border-0 p-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-xs placeholder:pl-2 focus:ring-1 foucus:ring-inset sm:text-md sm:leading6' type="number" name="price" placeholder='$20' />
                        </div>
                        <div className='sm:col-span-full border-b border-gray-900/10 pb-8'>
                            <label className='text-md font-medium text-gray-900' htmlFor="">Product Image</label>
                            <div className='mt-2 flex justify-center rounded-lg border border-dashed borader-gray-900/25 px-6 py-5'>
                                <div className='text-center'>
                                    <div className='my-4 flex text-md text-gray-600'>
                                        <label className='block'>
                                            <input className='w-full text-md text-slate-700 file:mr-4 file:px-4 file:py-2 file:rounded-full file-border-0 file:text-md file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100' type="file" name="image" />
                                        </label>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">.PNG , .JPG , .HEIC</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-6 flex items-center justify-end gap-x-6'>
                    <button className='text-sm font-semibold leading-6 text-gray-900' type='button'>Cancel</button>
                    <button className='rounded-xl px-4 py-2 bg-indigo-600 px-3, text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 ' type='submit'>Save</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;