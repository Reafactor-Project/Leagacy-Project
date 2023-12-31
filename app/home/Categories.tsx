import React from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./category.css";

const Categories: React.FC = () => {
  return (
    <div>
      <div className="sqandtxt">
      <div><img id="cetegories" src="https://i.postimg.cc/MG2XLS1W/Frame-624.png" alt="App" /></div>
      </div>
      <div className="category-flex">
      <IconButton style={{ marginRight: '10px',position:'relative', top: '-97px', left: '1350px', }} >
          <ArrowBackIcon />
        </IconButton>
        <div className="category-flex1">
          <img src="https://i.ibb.co/80MXDZ3/fb13b26f-bfcf-4783-a43b-feff2a96ce05.png" alt="icon" className="category-icon" />
        </div>
        <div className="category-flex1">
            <img src="https://i.ibb.co/RBFPJJH/f2bac1bd-f1d1-4900-bf29-ebd02727326a.png" alt="icon" className="category-icon"/>
        </div>
        <div className="category-flex1">
            <img src="https://i.ibb.co/JHGmW43/7b24288e-9058-4913-b5cc-b360c5b490ff.png" alt="icon" className="category-icon"/>
        </div>

        <div className="category-flex1">
            <img src="https://i.ibb.co/0ZbGC1j/9d2822eb-4fed-443a-a98e-42c55ad1ce2e.png" alt="icon" className="category-icon"/>
        </div>
        <div className="category-flex1">
            <img src="https://i.postimg.cc/7ZwWGmpv/32251648-c2a0-4d98-911b-15227844e0dd.png" alt="icon" className="category-icon"/>
        </div>
        <div className="category-flex1">
            <img src="https://i.ibb.co/2qFGVB1/80258f2b-5aec-49aa-a07b-d5b6f657f13c.png" alt="icon" className="category-icon"/>
        </div> 
        <IconButton style={{ fontSize: '10rem', marginRight: '10px',position:'relative', top: '-97px', left: '-20px' }} >
          <ArrowForwardIcon  />
        </IconButton>
      </div>
    </div>
  );
}

export default Categories;
