"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Admin.css';
import Navbar from '../navebarAdmin'
import UsersDetails from "../Details"
import { IoSearch, IoTrashOutline } from "react-icons/io5";

interface UserType {
  id: number;
  user_name: string;
  user_role: string;
  user_phOrEmail:String;
  user_img: string;
}


const ListUsers = () => {
  const [one, setOne] = useState<UserType | null>(null);
  const [filteredData, setFilteredData] = useState<UserType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/BuyMeAll/users');
        const user = res.data.filter((e: UserType) => e.user_role === 'client');
        setFilteredData(user);
      } catch (err) {
        console.log(err);
        
      }
    };
    fetchAllUsers();
  }, [loading]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    const newData = filteredData.filter((user) =>
      user.user_name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(newData);
  };

  const handleDeleteClick = async (userId: number) => {
  
      try {
        await axios.delete(`http://localhost:3000/api/BuyMeAll/users/${userId}`);
        setLoading(!loading);
       
      } catch (err) {
        console.log(err);
      }
    }
  

  return (
    <div className="divAdmin">
      <div className="divAdmin2">
        <Navbar />
        <div className="divAdmin29">
      
            <>
              <div className="divAdmin30">
                {filteredData.length > 0 ? filteredData[0].user_role : "No Users"}
              </div>
              <div className="divAdmin31">
                <div className="nav-search">
                <IoSearch style={{ height: "100px", width: "40px" }} onClick={() => {}} />
                  <input
                    type="search"
                    placeholder="name"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>
              {filteredData.map((elem, i) => (
                <div className="divAdmin33" key={i}>
                  <img
                    loading="lazy"
                    srcSet={elem.user_img}
                    className="imgAdmin5"
                    onClick={() => setOne(elem)}
                    alt={`User ${elem.id}`}
                  />
                  <div className="divAdmin34">
                    <div className="divAdmin35">{elem.user_name}</div>
                    <div className="divAdmin36">{elem.id}</div>
                  </div>
                  <div>
                   
                     <IoTrashOutline
                      style={{ height: "100px", width: "40px", color: "white" }}
                      onClick={() => handleDeleteClick(elem.id)}
                    />
                  </div>
                </div>
              ))}
            </>
        
        </div>
        <UsersDetails one={one} />
      </div>
    </div>
  );
};

export default ListUsers;
