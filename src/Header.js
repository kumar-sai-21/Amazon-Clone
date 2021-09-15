import React,{useState} from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    const [toggle,setToggle] = useState(false)

    const myFunction=()=>{
        
        if(toggle){
            console.log(toggle,"close")
            document.querySelector('.header_mobile').style.opacity = "0";
            document.querySelector('.header_mobile').style.height = "0vh";

        }
        else{
            document.querySelector('.header_mobile').style.opacity = "1";
            document.querySelector('.header_mobile').style.height = "30vh";
            console.log(toggle,"open")
        }
        setToggle(!toggle)
    }

    return (
        <div className="nav_head">
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
       
            <span className='header_optionLineOne'>
            Return </span>
            <span
            className='header_optionLineTwo'>Order </span>
        
        </div>

        <div className='header_option'>
       
            <span className='header_optionLineOne'>
            Yours</span>
            <span
            className='header_optionLineTwo'>Prime </span>

        </div>

           

        </div>
        </div>

        <div className="header_optionBasket">
                <ShoppingBasketIcon/>
                <span
                className='header_optionLineTwo headerbasketCount'> 0 </span>
            </div>
       
        
         <i  onClick={myFunction} className="fa fa-bars hamburger" style={{fontSize:"2rem",marginRight:"1rem",color:"#e6880d"}}></i>
    
        </div>
        
        
    <div className="header_mobile">
        <div className="header__nav_mobile">
            <div className='header_option_mobile'>
            <span className='header_option_mobileLineOne'>
            Hello Guest</span>
            <span className='header_option_mobileLineOne'>
            Return </span>
            <span className='header_option_mobileLineOne'>
            Your Orders </span>
            <span className='header_option_mobileLineOne'>
            Prime </span>
            </div>      
        </div>
        <div className= "header__search">
        <input
        className="header__searchInput"
        type="text"/>
        {/*logo*/}
        <SearchIcon className="header__searchIcon"/>
        </div>
        </div>
     
        </div>
        
    )
}

export default Header
