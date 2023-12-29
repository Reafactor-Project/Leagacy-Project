import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Allprod.css";
interface Product {
  id: string;
  sales: number;
  image?: string; 
  product_name: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/BuyMeAll/products"
        );
        const filteredProducts = response.data.filter(
          (product: Product) => product.sales > 0
        );

        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="product-list">
        {products.map((product: Product) => (
          <div className="product">
            <div className="sales-badge">{product.sales}%</div>
            <img
              className="product-image"
              src={product.image ? product.image : ""}
              alt={product.product_name}
            />
            <h3>{product.product_name}</h3>
            <p className="product-price" >{product.price}$</p>
            <div className="product-old-price">{(product.price/(1-(product.sales/100))).toFixed(2)}$</div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
