"use client";
import React, { useState, useEffect } from "react";
// import TopHeader from "../Top Header/TopHeader";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
import axios from "axios";
import "../WishList/Wishlist.css";

interface Product {
  id: number;
  product_name: string;
  image: string;
  price: number;
}

interface WishlistProps {
  user: { id: number } | null;
}

const Wishlist: React.FC<WishlistProps> = ({ user }) => {
  const [refrPo, setRefrPo] = useState<boolean>(false);
  const [postData, setPostData] = useState<Product[]>([]);

  useEffect(() => {
    const ids = user === null ? 0 : user.id;
    axios
      .get(`http://localhost:3000/api/BuyMeAll/favorite/${ids}`)
      .then((response) => {
        const responseData = response.data[0]?.products || [];
        setPostData(responseData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [refrPo, user]);

  const handleDelete = (productobj: { userId: number; productId: number }) => {
    axios
      .delete(`http://localhost:3000/api/BuyMeAll/favorite`, {
        data: productobj,
      })
      .then(() => {
        setRefrPo(!refrPo);
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  return (
    <>
      <div className="divWishlist">
        {/* <TopHeader />
        <Header /> */}

        <div className="divWishlist23">
          <div className="divWishlist24">Wishlist (4)</div>
          <div className="divWishlist25">Move All To Bag</div>
        </div>
        <div className="divWishlist26">
          <div className="divWishlist27">
            <div className="columnWishlist">
              {postData.map((e: Product, i: number) => (
                <div className="divWishlist28" key={i}>
                  <div className="divWishlist29">
                    <div className="divWishlist30">
                      <div className="divWishlist31">
                        <img
                          loading="lazy"
                          srcSet={e.image}
                          alt={e.product_name}
                          className="imgWishlist5"
                        />
                      </div>
                      <img
                        onClick={() =>
                          handleDelete({
                            userId: user?.id || 0,
                            productId: e.id,
                          })
                        }
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d9345dad452b03692cdbc613f709d144e723e1bbf5357d91182186f1925be37?"
                        alt={e.product_name}
                        className="imgWishlist6"
                      />
                    </div>
                  </div>
                  <div className="divWishlist36">{e.product_name}</div>
                  <div className="divWishlist37">
                    <div className="divWishlist38">{e.price}$</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Wishlist;
