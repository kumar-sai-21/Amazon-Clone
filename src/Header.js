import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    const myFunction=()=>{
        
    }
    return (
        <div className = "header">
        <img 
        className="header__logo"
        src ="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White2.png"
        alt =""/>
        <div className="header_options">
        <div className= "header__search">
        <input
        className="header__searchInput"
        type="text"/>
        {/*logo*/}
        <SearchIcon className="header__searchIcon"/>
        </div>

        <div className="header__nav">
            <div className='header_option'>
            <span className='header_optionLineOne'>
            Hello Guest</span>
            <span
            className='header_optionLineTwo'>Sign In </span>
        </div>

        <div className='header_option'>
        <div className='header_option'/>
            <span className='header_optionLineOne'>
            Return </span>
            <span
            className='header_optionLineTwo'>Order </span>
        
        </div>

        <div className='header_option'>
        <div className='header_option'/>
            <span className='header_optionLineOne'>
            Yours</span>
            <span
            className='header_optionLineTwo'>Prime </span>

        </div>

            <div className="header_optionBasket">
                <ShoppingBasketIcon/>
                <span
                className='header_optionLineTwo headerbasketCount'> 0 </span>
            </div>

        </div>
        </div>
       
        
         <i  onclick="myFunction()" className="fa fa-bars"></i>
    
        </div>
    )
}

export default Header
