import React from 'react';
import Instagram from './Instagram.png';
import Home from '@mui/icons-material/Home';
import AddBox from '@mui/icons-material/AddBoxOutlined';
import Explore from '@mui/icons-material/ExploreOutlined';
import Favorite from '@mui/icons-material/FavoriteBorderRounded';
import Account from '@mui/icons-material/AccountCircleOutlined';
import TextField from '@mui/material/TextField';
import  {ReactComponent as Inbox} from '../Header/inbox.svg';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
import './Header.css';




const Header = () => {
  return (
    <nav className='Nav'>
        <a className='Nav-brand-logo' href="/">
          <img style={{paddingTop:'5px', height: 45, width: 150 }} alt='logo' src={Instagram} />
        </a>
        <div className='Menu'>
          <TextField
             className='Search'
              id="input-with-icon-textfield"
              placeholder='Search'
              InputProps={{
              startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
        <div className='icon'>
            <Home className='icon'  />
            <Inbox className='icon' />
            <AddBox className='icon'/>
            <Explore className='icon' />
            <Favorite className='icon' />
            <Account className='icon' />
          </div>
              </div>
    </nav>
  );
}

export default Header;