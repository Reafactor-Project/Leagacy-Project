import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Search from '@mui/icons-material/Search';
import  Link  from 'next/link'

interface Props {
    value: string;
    user: any;
  }
 
const Header: React.FC<Props> = ({ value, user }) => {
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      <Link href="/">nav menu</Link>;
    };
  
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      <Link href="/profile">user menu</Link>;
    };
  
    const handleCloseNavMenu = () => {
      <Link href="/">close nav menu</Link>;
    };
  
    const handleCloseUserMenu = () => {
      <Link href="/profile">close user menu</Link>;
    };
  
    const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
      if (newValue === 0) {
        <Link href="/">home</Link>;
      } else if (newValue === 3) {
        <Link href="/signin">sign in</Link>;
      }
    };
  
    const profileVerif = () => {
      user !== null ? <Link href="/profile">profile</Link> : <Link href="/signin">sign in</Link>;
    };
  
    const logOut = () => {
      clearUser();
      <Link href="/" style={{"color":"black"}}>log out</Link>;
    };
  
    const handleWish = () => {
      user !== null ? <Link href="/wishlist">wish list</Link> : <Link href="/signin">sign in</Link>;
    };
  
    const handleItem = (i: number) => {
      if (i === 0) {
        profileVerif();
      } else if (i === 2) {
        logOut();
      }
    };
    function clearUser() {
        throw new Error('Function not implemented.');
    }
    return (
      <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton sx={{ p: 0 }}>
              <div>
                <input
                  placeholder="type to search"
                  //onChange={handleSearch}
                />
              </div>
            </IconButton>
            <Box sx={{ flexGrow: 1 }}>
              <Tabs value={value} onChange={handleTabChange} aria-label="basic tabs example">
              
              </Tabs>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ p: 0 }}>
                <Badge badgeContent={user?.cartItems?.length || 0} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton sx={{ p: 0 }}>
                <Badge badgeContent={user?.favorites?.length || 0} color="error">
                  <FavoriteIcon />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  };
  
  export default Header;


