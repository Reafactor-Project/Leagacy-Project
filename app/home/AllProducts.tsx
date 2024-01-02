import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllProducts.css";

interface Product {
  id: string;
  sales: number;
  image?: string;
  product_name: string;
  price: number;
}

const ProductDisplay: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Product[]>(
          "http://localhost:3000/api/BuyMeAll/products"
        );
        const initialProducts = response.data;
        setProducts(initialProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  const displayProducts = products.length > 0 ? products.slice(0, 5) : [];
  const remainingProducts = products.length > 5 ? products.slice(5) : [];

  const handleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  return (
    <div>
      <div className="product-listssss">
        {displayProducts.map((product: Product) => (
          <div key={product.id} className="producttt">
            <img
              className="product-image"
              src={product.image ? product.image : ""}
              alt={product.product_name}
            />
            <h3>{product.product_name}</h3>
            <p>{product.price}$</p>
          </div>
        ))}
      </div>
      {showAll && (
        <div className="product-listsss">
          {remainingProducts.map((product: Product) => (
            <div key={product.id} className="producttt">
              <img
                className="product-image"
                src={product.image ? product.image : ""}
                alt={product.product_name}
              />
              <h3>{product.product_name}</h3>
              <p>{product.price}$</p>
            </div>
          ))}
        </div>
      )}
      <img
        onClick={handleShowAll}
        src={
          showAll
            ? "https://images2.imgbox.com/7c/f3/itdIzTwq_o.png"
            : "https://images2.imgbox.com/13/1b/RQC8W1qM_o.png"
        }
        alt={showAll ? "Show Less Products" : "Show More Products"}
        className={`product-image ${showAll ? "show-less" : "show-more"}`}
      />
    </div>
  );
};

export default ProductDisplay;
