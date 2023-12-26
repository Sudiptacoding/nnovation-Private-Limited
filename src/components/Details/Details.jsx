import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { UserProvider } from '../../context/AuthContext';

const Details = () => {
    const data = useLoaderData()
    const [img, setImag] = useState(data?.thumbnail)
    const { addToCard, setAddToCard } = useContext(UserProvider)
    return (
        <div>
            <div class="bg-gray-100 dark:bg-gray-800 py-8">
                <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-col md:flex-row -mx-4">
                        <div class="md:flex-1 px-4">

                            <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img class="w-full h-full object-cover" src={img} alt="Product Image" />
                            </div>
                            <div class="flex items-center justify-center gap-3 mb-10">
                                {
                                    data?.images?.map((item, i) => {
                                        return <div key={i} onClick={() => setImag(item)} className='border border-black p-1 cursor-pointer' ><img className='w-20 h-10' src={item} alt="" /></div>
                                    })
                                }
                            </div>

                            <div class="flex -mx-2 mb-4">
                                <div class="w-1/2 px-2">
                                    <button onClick={() => setAddToCard([...addToCard, data])} class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                                </div>
                                <div class="w-1/2 px-2">
                                    <Link to='/product'> <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Go to Home</button></Link>
                                </div>
                            </div>
                        </div>
                        <div class="md:flex-1 px-4">
                            <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{data?.title}</h2>
                            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                {data?.description}
                            </p>
                            <div class="flex mb-4">
                                <div class="mr-4">
                                    <span class="font-bold text-gray-700 dark:text-gray-300">Price: </span>
                                    <span class="text-gray-600 dark:text-gray-300">${data?.price}</span>
                                </div>
                                <div>
                                    <span class="font-bold text-gray-700 dark:text-gray-300">Availability: </span>
                                    <span class="text-gray-600 dark:text-gray-300">{data?.stock} In Stock</span>
                                </div>
                            </div>
                            <div class="mb-4">
                                <span class="font-bold text-gray-700 dark:text-gray-300">Rating:</span>
                                <div class="flex items-center mt-2">
                                    <StarRatings
                                        rating={data?.rating}
                                        starDimension="30px"
                                        starSpacing="6px"
                                        starRatedColor="blue"
                                    />
                                </div>
                            </div>
                            <div class="flex mb-4">
                                <div class="mr-4">
                                    <span class="font-bold text-gray-700 dark:text-gray-300">DiscountPercentage: </span>
                                    <span class="text-gray-600 dark:text-gray-300">${data?.discountPercentage}</span>
                                </div>
                                <div>
                                    <span class="font-bold text-gray-700 dark:text-gray-300">Category: </span>
                                    <span class="text-gray-600 dark:text-gray-300">{data?.category} In Stock</span>
                                </div>
                            </div>
                            <div>
                                <span class="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                                <p class="text-gray-600 dark:text-gray-300 text-lg mt-2">
                                    {data?.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;