import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';

function Header() {
  const [{basket},dispatch] = useStateValue();
  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header_logo'
          src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='Amazon'
        />
      </Link>

      <div className='header_search'>
        <input type='text' className='header_searchInfo' />
        <SearchIcon className='header_searchIcon' />
      </div>
      <div className='header_nav'>
        <Link to="/login">
          <div className='header_option'>
            <span className='header_OptionLineOne'>Hello Guest</span>
            <span className='header_OptionLineTwo'>Signin</span>
          </div>
        </Link>

        <div className='header_option'>
          <span className='header_OptionLineOne'>Returns</span>
          <span className='header_OptionLineTwo'>& orders</span>
        </div>

        <div className='header_option'>
          <span className='header_OptionLineOne'>Your</span>
          <span className='header_OptionLineTwo'>Prime</span>
        </div>
        <Link to='/checkout'>
          <div className='header_optionBasket'>
            <ShoppingCartIcon />
            <span className='header_OptionLineTwo header_basketCount'>
              {' '}
              {basket?.length}{' '}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
