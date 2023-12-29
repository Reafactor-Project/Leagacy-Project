import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./BestSellers.css"

interface Product {
  id: string;
  sales: number;
  image?: string;
  product_name: string;
  price: number;
}

const BestSelling: React.FC = () => {
  const [bestSellingProducts, setBestSellingProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchBestSellingProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/BuyMeAll/products');
        const products: Product[] = response.data;
        const sortedProducts = products.sort((a, b) => b.sales - a.sales);
        const top5BestSelling = sortedProducts.slice(0, 5);

        setBestSellingProducts(top5BestSelling);
      } catch (error) {
        console.error('Error fetching best selling products:', error);
      }
    };

    fetchBestSellingProducts();
  }, []);

   return (
    <div>
      <div className="product-listt">
        {bestSellingProducts.map((product: Product) => (
          <div className="product">
            <img
              className="product-image"
              src={product.image ? product.image : ""}
              alt={product.product_name}
            />
            <h3>{product.product_name}</h3>
            <p className="product-price" >{product.price}$</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
