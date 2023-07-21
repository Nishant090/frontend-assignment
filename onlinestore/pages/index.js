import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getProducts } from './utils/api';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
        console.log(products)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
    <section class="text-gray-600 body-font">
  <div class="container pt-10 pb-24 mx-auto">
    <div class="flex flex-wrap -mb-10 text-center">
      <div class="sm:w-1/2 mb-10 md:w-full ">
        <div class="rounded-lg h-96">
        <h1 class="absolute text-white font-medium text-5xl pl-10 pt-28 md:text-8xl md:pl-[29rem]">Online Store</h1>
          <h1 class="absolute text-white font-medium text-xl pl-[4.5rem] pt-[10rem] md:text-3xl md:pt-[14rem] md:pl-[36rem]">You Seek || We Provide</h1>
          <img alt="background" class="object-cover object-center h-full w-full" src='/images/background.jpg'/>
        </div>
      </div>
    </div>
  </div>
</section>
 <div class=" container pl-32 my-4">
      <h1 className="text-5xl font-bold mb-24 pl-[35rem]">Products</h1>
      <div className="grid grid-cols-3 gap-4 ">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
             <img alt="ecommerce" class=" object-center w-[40%] h-[40%] block " src={product.image}></img>
              <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1 w-1/2">{product.title}</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">{product.category}</h2>
          <p class="mt-1">${product.price}</p>
        </div>
          </Link>
        ))}
        </div>
      </div> 
      
      
   
    </>
  );
};

export default ProductsPage;
