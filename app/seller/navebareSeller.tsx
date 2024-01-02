"use client"
import React, { useEffect, useState } from "react";
import './Seller.css'
import { useRouter } from 'next/navigation';
import axios from 'axios'
import {useIdentity} from '../AuthorContext/IdentityContext'



interface UserType {
  id: number;
  user_name: string;
  user_role: string;
  user_phOrEmail:String;
  user_img: string;
}

const NavbarSeller: React.FC = () => {
  const router = useRouter();
  const { user } = useIdentity();
  const [data, setData] =useState<UserType[]>([]);
  const id = user === null ? 3 : user.id;
  const handleButtonClick = (link: string) => {
    router.push(link);
  };

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/BuyMeAll/users');
        const user = res.data.filter((e: UserType) => e.id === id);
        setData(user);
      } catch (err) {
        console.log(err);
        
      }
    };
    fetchAllUsers();
  }, []);

  return (
    
    <div className="columnSeller">
      <div className="divSeller3">
        <div className="divSeller4">
          <div className="divSeller5">
            <div className="divSeller6">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/85ef95a54d33f89a22b913eb3571f1204f8b42cca07f320006d7eee555fa0364?"
                className="imgAdmin"
                alt="Admin"
              />
              <div className="divSeller7"><h2>Seller interface</h2></div>
            </div>

            <div className="divSeller9">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3789b4da0ff7bbb401a51930e99f1964fd94e4f71c0e259abf6ece542a3cfb2a?"
                className="imgAdmin"
                alt="Dashboard"
              />
              <div className="divSeller10"><h2>dashboard</h2></div>
            </div>

            <div className="divSeller13"></div>

            <div className="divSeller15" onClick={() => handleButtonClick('/seller/profile')}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ad67e24eee99acf595ceea4cfa35ee5d01f5d565023cd7b1ba4265fd85ffef3?"
                className="imgAdmin"
                alt="Clientes"
              />
              <div className="divSeller16">Profile</div>
            </div>

            <div className="divSeller15" onClick={() => handleButtonClick('/seller/products')}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b61d376b4d70deb6a8b1146b4ee34ae92c08f27314940ef2d936d9411e0421fd?"
                className="imgAdmin"
                alt="Sellers"
              />
              <div className="divSeller16">Products</div>
            </div>
          </div>
          <div className="divSeller25">
          
                <img
                  loading="lazy"
                  src={data[0]?.user_img}
                  className="imgAdmin3"
                  alt="Admin Image"
                />
                <div className="divSeller26">
                  <div className="divSeller27">{data[0]?.user_phOrEmail}</div>
                  <div className="divSeller28">{data[0]?.user_name}</div>
                </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarSeller;
