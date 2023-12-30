"use client"
import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Footer from '../Footer/page';
import Header from '../Link/Header';

interface Product {
  id: string;
  product_name: string;
  price: number;
  quantity: number;
  image: string;
}

const ECommerceHomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/BuyMeAll/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };

    fetchData().catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="container mx-auto p-4 pt-6 md:p-8 lg:pt-12 xl:pt-16 2xl:pt-20">
        <Header value='' user={Object}/>  
      <header className="border-b-2 border-gray-200 py-8 shadow-md z-10 flex justify-content-space-between align-items-center">
        <h1 className="text-4xl font-bold leading-tight text-gray-800 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
          BuyMeAll
        </h1>
      </header>
      <main className="flex flex-wrap -mx-4">
        {loading ? (
          <div className="w-full p-4 animatedSpin">Loading...</div>
        ) : (
          products?.map((product) => (
            <div key={product.id} className="w-full p-4">
              <div className=" flex-col items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.product_name}
                  width={800}
                  height={600}
                  className="rounded overflowshadow w-24 h-24"
                />
                <div className="flex-colJustifyContentSpaceBetween">
                  <div className="text-lg leading-tight text-gray-800">
                    {product.product_name}
                  </div>
                  <div className="text-sm leading-tight text-gray-500">
                    ${product.price}.00
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </main>
      <footer >
      <Footer/>
      </footer>
    </div>
  );
};

export default ECommerceHomePage;