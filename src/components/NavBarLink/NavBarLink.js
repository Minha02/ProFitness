import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
import Logo from './assets/logo1.png';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const NavBarContainer = styled(AppBar)`
  background-color: #333;
`;

const NavLink = styled(Link)`
  color: White;
  text-decoration: none;
  margin: 0 10px;
  &:hover{
    color: #f0f0f0;
  }
  border-radius:5px;
`;

const LogoImage = styled.img`
  max-height: 50px;
  margin-right:10px
`;


const NavBarLink = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) =>{
    setAnchorEl(event.currentTarget);
  };

  const handelClose = () =>{
    setAnchorEl(null);
  };


  return (
    <NavBarContainer position='static'>
      <Toolbar>
        <LogoImage src={Logo} alt ='Logo'/>
        <Button color="inherit">
          <NavLink to='/'>Home</NavLink>
        </Button>
        <Button color="inherit" onClick={handleMenu}>
          About
        </Button>
        <Menu
          id='about-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handelClose}
          ManuListProps= {{
            'aria-labelledby':'about-button',
          }}
        >
          <MenuItem onClick={handelClose} style={{ backgroundColor: 'white', color: 'black' }}>
            <NavLink to ='/about/team' style={{ color: 'black' }}>Team</NavLink>
          </MenuItem>
          <MenuItem onClick={handelClose} style={{ backgroundColor: 'white', color: 'black' }}>
            <NavLink to ='/about/values' style={{ color: 'black' }}>Values</NavLink>
          </MenuItem>
          <MenuItem onClick={handelClose} style={{ backgroundColor: 'white', color: 'black' }}>
            <NavLink to ='/about/history' style={{ color: 'black' }}>History</NavLink>
          </MenuItem>
        </Menu>
        <Button color="inherit">
          <NavLink to='/contact'>Contact</NavLink>
        </Button>
        <Button color="inherit">
          <NavLink to='/login'>Login</NavLink>
        </Button>
      </Toolbar>
    </NavBarContainer>
  )
}

export default NavBarLink;
