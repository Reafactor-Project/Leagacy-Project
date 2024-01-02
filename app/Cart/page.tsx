"use client";
import React from "react";
// import Footer from '../Footer/page';
// import TopHeader from '../TopHeader/page'
// import Header from '../Header/Header';
import "../Cart/Cart.css";
import { useRouter } from "next/navigation";
import axios from "axios";

interface Product {
  id: number;
  price: number;
  image: string;
  product_name: string;
}

interface CartProps {
  taktak: (image: string) => string[];
  user: {
    id: number;
  } | null;
}

const Cart: React.FC<CartProps> = ({ taktak, user }) => {
  const router = useRouter();

  const stor: Product[] =
    JSON.parse(localStorage.getItem("basket") as string) || [];

  const totalPrice = () => {
    const totalArray = stor.map((el) => el.price);
    return totalArray.reduce((acc, curr) => acc + curr, 0);
  };

  const addOrder = async (obj: {
    send: boolean;
    userId: number;
    productId: number;
  }) => {
    try {
      await axios.post("http://localhost:3000/api/BuyMeAll/orders", obj);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePurchase = () => {
    stor.forEach((el) => {
      addOrder({
        send: false,
        userId: user ? user.id : 0,
        productId: el.id,
      });
    });
    localStorage.removeItem("basket");
    alert("Thanks for your purchase");
    router.push("/");
  };

  return (
    <>
      <div className="divCart">
        {/* <TopHeader/>
      <Header/> */}

        <div className="divCart23">
          <div className="divCart27">
            <div className="divCart28">
              <div className="divCart29">Product</div>
              <div className="divCart29">Price</div>
              <div className="divCart29">Quantity</div>
              <div className="divCart29">Subtotal</div>
            </div>
          </div>
          {stor.length ? (
            stor.map((el, i) => (
              <div key={i} className="divCart33">
                <div className="divCart34">
                  <img
                    loading="lazy"
                    srcSet={taktak(el.image)[0]}
                    className="imgCart5"
                  />
                </div>
                <div className="divCart36">{el.product_name}</div>
                <div>1</div>
                <div className="divCart37">{el.price}</div>
              </div>
            ))
          ) : (
            <h1>Empty Busket</h1>
          )}

          <div className="divCart43"></div>
          <div className="divCart46">
            <div className="divCart47">
              <div className="columnCart2">
                <div className="divCart51">
                  <div className="divCart52">Cart Total</div>
                  <div className="divCart53">
                    <div className="divCart54">Subtotal:</div>
                    <div className="divCart55">${totalPrice()}</div>
                  </div>
                  <div className="divCart56" />
                  <div className="divCart57">
                    <div className="divCart58">Shipping:</div>
                    <div className="divCart59">Free</div>
                  </div>
                  <div className="divCart60" />
                  <div className="divCart61">
                    <div className="divCart62">Total:</div>
                    <div className="divCart63">${totalPrice()}</div>
                  </div>
                  <div
                    className="divCart64"
                    onClick={() => {
                      user === null ? router.push("/login") : handlePurchase();
                    }}
                  >
                    Purchase
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer/> */}
      </div>
    </>
  );
};

export default Cart;
