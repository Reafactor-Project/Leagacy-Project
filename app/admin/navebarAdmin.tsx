"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'; 
import { useIdentity } from '../AuthorContext/IdentityContext';
import axios from 'axios';

interface UserType {
  id: number;
  user_name: string;
  user_role: string;
  user_phOrEmail: string; // corrected type
  user_img: string;
}

const Navbar: React.FC = () => {
  const router = useRouter();
  const { user } = useIdentity();
  const [data, setData] = useState<UserType[]>([]);
  const id = user === null ? 1 : user.id;

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
    <div className="columnAdmin">
      <div className="divAdmin3">
        <div className="divAdmin4">
          <div className="divAdmin5">
            <div className="divAdmin6">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ba1ba319e439fc67eb537da94e50530ff26a32623bd3fcc32d4412e3d8dbaba?"
                className="imgAdmin"
                alt="Admin"
              />
              <div className="divAdmin7">Admin</div>
            </div>

            <div className="divAdmin9">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3789b4da0ff7bbb401a51930e99f1964fd94e4f71c0e259abf6ece542a3cfb2a?"
                className="imgAdmin"
                alt="Dashboard"
              />
              <div className="divAdmin10"><h2>dashboard</h2></div>
            </div>

            <div className="divAdmin13"></div>

            <div className="divAdmin15" onClick={() => handleButtonClick('/admin/Client')}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ad67e24eee99acf595ceea4cfa35ee5d01f5d565023cd7b1ba4265fd85ffef3?"
                className="imgAdmin"
                alt="Clientes"
              />
              <div className="divAdmin16">Clientes</div>
            </div>

            <div className="divAdmin15" onClick={() => handleButtonClick('/admin/Seller')}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/85ef95a54d33f89a22b913eb3571f1204f8b42cca07f320006d7eee555fa0364?"
                className="imgAdmin"
                alt="Sellers"
              />
              <div className="divAdmin16">Sellers</div>
            </div>

            <div className="divAdmin15" onClick={() => handleButtonClick('/admin/Categories')}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/463861501310dc27db182a16aedd158acdfc08475c9e0e7c42a9a515a3b9a852?"
                className="imgAdmin"
                alt="Categories"
              />
              <div className="divAdmin16">categories</div>
            </div>

            <div className="divAdmin17" onClick={() => handleButtonClick('/admin/Orders')}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c05468233b11f9536a72cead6cc036c821fb23aaf6166b914842d292dfe5c51?"
                className="imgAdmin"
                alt="History"
              />
              <div className="divAdmin18"><h1>history</h1></div>
            </div>
          </div>
          <div className="divAdmin25">
            <img
              loading="lazy"
              src={data[0]?.user_img } 
              className="imgAdmin3"
              alt="Admin Image"
            />
            <div className="divAdmin26">
              <div className="divAdmin27">{data[0]?.user_phOrEmail}</div>
              <div className="divAdmin28">{data[0]?.user_name}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
