"use client"

import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import './UpdateCategory.css';

interface AddCategoryProps {
  refrechers: any; // Replace with the actual type of refrechers
  setRefrechers: React.Dispatch<React.SetStateAction<any>>; // Replace with the actual type of setRefrechers
}

const AddCategory: React.FC<AddCategoryProps> = ({ refrechers, setRefrechers }) => {
  const [view, setView] = useState(false);
  const [formData, setFormData] = useState({
    ca_name: '',
    ca_img: null as string | null, // Replace with the actual type of ca_img
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const form = new FormData();
      form.append('file', file);
      form.append('upload_preset', 'patient');

      try {
        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/dodim9flq/image/upload',
          form,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        const imageUrl = response.data.secure_url;
        setFormData((prev) => ({ ...prev, ca_img: imageUrl }));
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleClick = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/api/BuyMeAll/category`, formData);
      setView(!view);
      setRefrechers(!refrechers);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ backgroundColor: '#1a1a1c' }}>
      <button onClick={() => setView(!view)} className="button1" type="button">
        ADD CATEGORY
      </button>

      {view ? (
        <form>
          <div className="form-container">
            <div className="form__group field">
              <input
                type="text"
                className="form__field"
                placeholder="CategoryName"
                required
                name="ca_name"
                onChange={handleChange}
              />
              <label htmlFor="name" className="form__label">
                Name
              </label>
            </div>
            <div className="input-div">
              <label className="file-label">
                <input
                  className="input"
                  name="picture"
                  type="file"
                  onChange={handleImageUpload}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="icon"
                >
                  <polyline points="16 16 12 12 8 16"></polyline>
                  <line y2="21" x2="12" y1="12" x1="12"></line>
                  <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                  <polyline points="16 16 12 12 8 16"></polyline>
                </svg>
              </label>
            </div>

            <p>
              <button onClick={handleClick} className="button1" type="submit">
                ADD
              </button>
            </p>
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default AddCategory;
