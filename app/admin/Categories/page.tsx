"use client"

import '../admin.css'
import Navbar from '../navebarAdmin';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Collapse,
  Box,
  Typography,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import UpdateCategory from './UpdateCategory';
import AddCategory from './AddCategory';

interface Category {
  id: number;
  ca_img: string;
  ca_name: string;
  createdAt: string;
}

const ListCategories = () => {
    const [data, setData] = useState<Category[]>([]);
    const [openRows, setOpenRows] = useState<{ [key: number]: boolean }>({});
    const [refrechers, setRefrechers] = useState<boolean>(false);
  
    useEffect(() => {
      const fetchAllUsers = async () => {
        try {
          const res = await axios.get<Category[]>('http://localhost:3000/api/BuyMeAll/category');
          setData(res.data);
          console.log(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchAllUsers();
    }, [refrechers]);
  
    const handleDelete = async (id: number) => {
      try {
        await axios.delete(`http://localhost:3000/api/BuyMeAll/category/${id}`);
        setRefrechers(!refrechers);
      } catch (err) {
        console.log(err);
      }
    };
  
    const handleRowToggle = (id: number) => {
      setOpenRows((prev) => ({ ...prev, [id]: !prev[id] }));
    };
  
    return (
        <div className="divAdmin">
        <div className="divAdmin2">
          <Navbar/>
      <div className="divAdmin299">
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }} />
                <TableCell style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>Category picture</TableCell>
                <TableCell style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>Category ID</TableCell>
                <TableCell style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>Category Name</TableCell>
                <TableCell style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>Category Created At</TableCell>
                <TableCell style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <React.Fragment key={row.id}>
                  <TableRow>
                    <TableCell style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => handleRowToggle(row.id!)} // Add non-null assertion here
                      >
                        {openRows[row.id!] ? <KeyboardArrowUpIcon style={{ color: '#ffffff' }} /> : <KeyboardArrowDownIcon style={{ color: '#ffffff' }} />}
                      </IconButton>
                    </TableCell>
                    <TableCell style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>
                      <img
                        loading="lazy"
                        srcSet={row.ca_img}
                        className="imgAdmin5"
                      />
                    </TableCell>
                    <TableCell style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>{row.id}</TableCell>
                    <TableCell style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>{row.ca_name}</TableCell>
                    <TableCell style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>{row.createdAt}</TableCell>
                    <TableCell style={{ backgroundColor: '#1a1a1c', color: '#ffffff' }}>
                      <button className="button1" onClick={() => handleDelete(row.id!)}>Delete</button> {/* Add non-null assertion here */}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0, backgroundColor: '#1a1a1c', color: '#ffffff' }} colSpan={6}>
                      <Collapse in={openRows[row.id!]} timeout="auto" unmountOnExit> {/* Add non-null assertion here */}
                        <Box sx={{ margin: 1 }}>
                          <Typography variant="h6" gutterBottom component="div">
                            <UpdateCategory id={row.id!} refrechers={refrechers} setRefrechers={setRefrechers} setOpenRows={setOpenRows} /> {/* Add non-null assertion here */}
                          </Typography>
                          {/* Add additional information here */}
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className='adddiv'>
          <AddCategory refrechers={refrechers} setRefrechers={setRefrechers} />
        </div>
      </div>
      </div>
      </div>
    );
  };
  
  export default ListCategories;
  
