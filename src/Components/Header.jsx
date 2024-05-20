import React, {useState} from 'react';
import './SearchBar.css';
import searchItem from './SearchData.json'
import SearchResult from "./SearchResult";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export const Header = ({setResults,result}) => {
    const [input , setInput] = useState("");
    const history = useNavigate();

      
        const handleLoginClick = (e) => {
            e.preventDefault();
            // const isLoggedIn = checkIfUserIsLoggedIn();
            if(true){
                history('/login')
            }else{

                // history('/login');
            }
        };




    // const history = useHistory();

            const fetchData = (value) => {
                const filteredUsers = searchItem.filter((user) =>
                    value && user && user.name && user.name.toLowerCase().includes(value.toLowerCase())
                );

                setResults(filteredUsers);
                 // Assuming setResults is a state setter function
            }

            const handaleChange = (value) => {
                setInput(value);
                fetchData(value);     
            }
            
            // const handleClick = () => {
            //     // Reload the profile page
            //     history.push('/profile');
            //   };
            
    return (
    <div>
         <header>
            <div className="header-top">

            <div className="container">

                <ul className="header-social-container">

                    <li>
                        <a href="https://web.facebook.com/torta900sl/about_profile_transparency" className="social-link">
                        <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                    </li>

                    <li>
                        <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D%252B94710468135%26data%3DARCo03LfsMzgxtPBhtMZHgjvTDB1aWC3lRxtRtYHDLB9hFj_NHv3FujHjPb5GYttiJK03NwLMvLANphbHc_Zw2KXj98bMmD5V1h0ZdhOIwZ9Eal0rT1dKdAH3SwvRrpUlL_Mfo56sUPjX9Bgi1qtvT70sQ%26source%3DFB_Page%26app%3Dfacebook%26entry_point%3Dpage_cta%26fbclid%3DIwAR1yeDibKFaKX7AXVl83KqzIvOATK21jza8gPEW0QPc8irBs6ADl5POI5n8&h=AT2KEtHPrXZ5t8ZDFDlMvLdaVE3VhuoZ1wpmsR1hjkJc3lHOLdOzCYYPNSQ4Fe6SpnOg0ox9QSDYFDeHG-wJsBwmT1PmmEwzF7IIfQcqhTqX8jhgdBTcTQTpElDNf2f95xuB6A" className="social-link">
                        <ion-icon name="logo-whatsApp"></ion-icon>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="social-link">
                        <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="social-link">
                        <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                    </li>

                </ul>

                <div className="header-alert-news">
                <p>
                    <b>Free Shipping</b>
                    This Week Order Over - LKR 550.00
                </p>
                </div>

                <div className="header-top-actions">

                <select name="currency">

                    <option value="eur">LKR </option>
                    <option value="usd">USD &dollar;</option>

                </select>

                <select name="language">

                    <option value="en-US">English</option>
                    <option value="es-ES">Sinhala</option>
                    <option value="fr">Tamil</option>

                </select>

                </div>

            </div>

            </div>

            <div className="header-main">

            <div className="container">

                <a href="#" className="header-logo">
                <img src="./assets/images/logo/tortalogo.svg" alt="Anon's logo" width="56" height="150"/>
                </a>
                    <div className="searchContainer">
                        <div className="header-search-container">

                            <input type="search" name="search" className="search-field" placeholder="Enter your product name..."
                             value = {input}
                              onChange={
                                (e) => 
                                handaleChange(e.target.value)
                                // console.log(e.target.value)
                            }   
                            />
                                
                            <button className="search-btn"  >
                                <ion-icon name="search-outline">
                                   
                                </ion-icon>
                            </button>

                            
                            <div className="searchResult">
                                <ui className="List">
                                    {/* list item when you search for a product */}
                                    <SearchResult result={result}/>
                                
                                </ui>
                            </div>
                        </div>
                    </div>
                <div className="header-user-actions">
                    <button className="action-btn" onClick={handleLoginClick}>
                        
                        <ion-icon name="person-outline"></ion-icon>
                    </button>

                    <button className="action-btn">
                        <ion-icon name="heart-outline"></ion-icon>
                        <span className="count">0</span>
                    </button>

                    <button className="action-btn" >
                        <Link to={"/cart"}>
                        <ion-icon name="bag-handle-outline"></ion-icon>
                        <span className="count">0</span>
                        </Link>
                    </button>

                </div>

            </div>
            </div>

            
            <nav className="desktop-navigation-menu">

            <div className="container">

                <ul className="desktop-menu-category-list">

                <li className="menu-category">
                    <a href="#" className="menu-title">Home</a>
                </li>

                <li className="menu-category">
                    <a href="#" className="menu-title">Categories</a>

                    <div className="dropdown-panel">

                    <ul className="dropdown-panel-list">

                        <li className="menu-title">
                        <a href="#">Cakes</a>
                        </li>

                        <li className="panel-list-item">
                        <a href="#">Chocolate Cake</a>
                        </li>

                        <li className="panel-list-item">
                        <a href="#">Cheese Cake</a>
                        </li>

                        <li className="panel-list-item">
                        <a href="#">Lava Cake</a>
                        </li>

                        <li className="panel-list-item">
                        <a href="#">Birthday Cake</a>
                        </li>

                        <li className="panel-list-item">
                        <a href="#">Customize owner design</a>
                        </li>

                        <li className="panel-list-item">
                        <a href="#">
                            <img src="./assets/images/cake.jpg" alt="headphone collection" width="250"
                            height="119"/>
                        </a>
                        </li>

                    </ul>

                    <ul className="dropdown-panel-list">

                        <li className="menu-title">
                        <a href="#">Brownies</a>
                        </li>

                        <li className="panel-list-item">
                        <a href="#">White Brownies</a>
                        </li>

                        <li className="panel-list-item">
                        <a href="#">Chocolate Brownis</a>
                        </li>

                        <li className="panel-list-item">
                        <a href="#">Wedding cake Brownies</a>
                        </li>

                        <li className="panel-list-item">
                        <a href="#">sample 1</a>
                        </li>

                        <li className="panel-list-item">
                        <a href="#">sample 2</a>
                        </li>

                        <li className="panel-list-item">
                        <a href="#">
                            <img src="./assets/images/brownies_cover.jpg" alt="men's fashion" width="250" height="119"/>
                        </a>
                        </li>

                    </ul>

                    <ul className="dropdown-panel-list">

                        <li className="menu-title">
                        <a href="#">Pizza</a>
                        </li>

                        <li className="panel-list-item">
                        <a href="#">Chicken</a>
                        </li>

                        <li className="panel-list-item">
                        <a href="#">Breef</a>
                        </li>

                        <li className="panel-list-item">
                        <a href="#">Cheese</a>
                        </li>

                        <li className="panel-list-item">
                        <a href="#">Fish & egg</a>
                        </li>

                        <li className="panel-list-item">
                        <a href="#">Vagitable</a>
                        </li>

                        <li className="panel-list-item">
                        <a href="#">
                            <img src="./assets/images/pizza.jpg" alt="women's fashion" width="250" height="119"/>
                        </a>
                        </li>

                    </ul>

                    <ul className="dropdown-panel-list">

                        <li className="menu-title">
                        <a href="#">Pudding</a>
                        </li>

                        <li className="panel-list-item">
                        <a href="#">sample 01</a>
                        </li>

                        <li className="panel-list-item">
                        <a href="#">sample 02</a>
                        </li>

                        <li className="panel-list-item">
                        <a href="#">sample 03</a>
                        </li>

                        <li className="panel-list-item">
                        <a href="#">sample 04</a>
                        </li>

                        <li className="panel-list-item">
                        <a href="#">sample 05</a>
                        </li>

                        <li className="panel-list-item">
                        <a href="#">
                            <img src="./assets/images/pudding.jpg" alt="mouse collection" width="250" height="119"/>
                        </a>
                        </li>

                    </ul>

                    </div>
                </li>

                {/* <!-- <li className="menu-category">
                    <a href="#" className="menu-title">Men's</a>

                    <ul className="dropdown-list">

                    <li className="dropdown-item">
                        <a href="#">Shirt</a>
                    </li>

                    <li className="dropdown-item">
                        <a href="#">Shorts & Jeans</a>
                    </li>

                    <li className="dropdown-item">
                        <a href="#">Safety Shoes</a>
                    </li>

                    <li className="dropdown-item">
                        <a href="#">Wallet</a>
                    </li>

                    </ul>
                </li> --> */}

                <li className="menu-category">
                    <a href="#" className="menu-title">about-torta</a>
                    {/* <!-- <a href="#" className="menu-title">Women's</a>

                    <ul className="dropdown-list">

                    <li className="dropdown-item">
                        <a href="#">Dress & Frock</a>
                    </li>

                    <li className="dropdown-item">
                        <a href="#">Earrings</a>
                    </li>

                    <li className="dropdown-item">
                        <a href="#">Necklace</a>
                    </li>

                    <li className="dropdown-item">
                        <a href="#">Makeup Kit</a>
                    </li>

                    </ul> --> */}
                </li>

                {/* <!-- <li className="menu-category">
                    <a href="#" className="menu-title">Jewelry</a>

                    <ul className="dropdown-list">

                    <li className="dropdown-item">
                        <a href="#">Earrings</a>
                    </li>

                    <li className="dropdown-item">
                        <a href="#">Couple Rings</a>
                    </li>

                    <li className="dropdown-item">
                        <a href="#">Necklace</a>
                    </li>

                    <li className="dropdown-item">
                        <a href="#">Bracelets</a>
                    </li>

                    </ul>
                </li> --> */}

                {/* <!-- <li className="menu-category">
                    <a href="#" className="menu-title">Perfume</a>

                    <ul className="dropdown-list">

                    <li className="dropdown-item">
                        <a href="#">Clothes Perfume</a>
                    </li>

                    <li className="dropdown-item">
                        <a href="#">Deodorant</a>
                    </li>

                    <li className="dropdown-item">
                        <a href="#">Flower Fragrance</a>
                    </li>

                    <li className="dropdown-item">
                        <a href="#">Air Freshener</a>
                    </li> -->

                    <!-- </ul>
                </li> --> */}

                <li className="menu-category">
                    <a href="#" className="menu-title">Order</a>
                </li>

                <li className="menu-category">
                    <a href="#" className="menu-title">Contact-Us</a>
                </li>

                </ul>

            </div>

            </nav>

            <div className="mobile-bottom-navigation">

            <button className="action-btn" data-mobile-menu-open-btn>
                <ion-icon name="menu-outline"></ion-icon>
            </button>

            <button className="action-btn">
                <ion-icon name="bag-handle-outline"></ion-icon>

                <span className="count">0</span>
            </button>

            <button className="action-btn">
                <ion-icon name="home-outline"></ion-icon>
            </button>

            <button className="action-btn">
                <ion-icon name="heart-outline"></ion-icon>

                <span className="count">0</span>
            </button>

            <button className="action-btn" data-mobile-menu-open-btn>
                <ion-icon name="grid-outline"></ion-icon>
            </button>

            </div>

            <nav className="mobile-navigation-menu  has-scrollbar" data-mobile-menu>

            <div className="menu-top">
                <h2 className="menu-title">Menu</h2>

                <button className="menu-close-btn" data-mobile-menu-close-btn>
                <ion-icon name="close-outline"></ion-icon>
                </button>
            </div>

            <ul className="mobile-menu-category-list">

                <li className="menu-category">
                <a href="#" className="menu-title">Home</a>
                </li>

                <li className="menu-category">

                <button className="accordion-menu" data-accordion-btn>
                    <p className="menu-title">Men's</p>

                    <div>
                    <ion-icon name="add-outline" className="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                    </div>
                </button>

                <ul className="submenu-category-list" data-accordion>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Shirt</a>
                    </li>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Shorts & Jeans</a>
                    </li>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Safety Shoes</a>
                    </li>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Wallet</a>
                    </li>

                </ul>

                </li>

                <li className="menu-category">

                <button className="accordion-menu" data-accordion-btn>
                    <p className="menu-title">Women's</p>

                    <div>
                    <ion-icon name="add-outline" className="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                    </div>
                </button>

                <ul className="submenu-category-list" data-accordion>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Dress & Frock</a>
                    </li>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Earrings</a>
                    </li>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Necklace</a>
                    </li>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Makeup Kit</a>
                    </li>

                </ul>

                </li>

                <li className="menu-category">

                <button className="accordion-menu" data-accordion-btn>
                    <p className="menu-title">Jewelry</p>

                    <div>
                    <ion-icon name="add-outline" className="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                    </div>
                </button>

                <ul className="submenu-category-list" data-accordion>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Earrings</a>
                    </li>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Couple Rings</a>
                    </li>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Necklace</a>
                    </li>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Bracelets</a>
                    </li>

                </ul>

                </li>

                <li className="menu-category">

                <button className="accordion-menu" data-accordion-btn>
                    <p className="menu-title">Perfume</p>

                    <div>
                    <ion-icon name="add-outline" className="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                    </div>
                </button>

                <ul className="submenu-category-list" data-accordion>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Clothes Perfume</a>
                    </li>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Deodorant</a>
                    </li>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Flower Fragrance</a>
                    </li>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Air Freshener</a>
                    </li>

                </ul>

                </li>

                <li className="menu-category">
                <a href="#" className="menu-title">Blog</a>
                </li>

                <li className="menu-category">
                <a href="#" className="menu-title">Hot Offers</a>
                </li>

            </ul>

            <div className="menu-bottom">

                <ul className="menu-category-list">

                <li className="menu-category">

                    <button className="accordion-menu" data-accordion-btn>
                    <p className="menu-title">Language</p>

                    <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                    </button>

                    <ul className="submenu-category-list" data-accordion>

                    <li className="submenu-category">
                        <a href="#" className="submenu-title">English</a>
                    </li>

                    <li className="submenu-category">
                        <a href="#" className="submenu-title">Espa&ntilde;ol</a>
                    </li>

                    <li className="submenu-category">
                        <a href="#" className="submenu-title">Fren&ccedil;h</a>
                    </li>

                    </ul>

                </li>

                <li className="menu-category">
                    <button className="accordion-menu" data-accordion-btn>
                    <p className="menu-title">Currency</p>
                    <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                    </button>

                    <ul className="submenu-category-list" data-accordion>
                    <li className="submenu-category">
                        <a href="#" className="submenu-title">USD &dollar;</a>
                    </li>

                    <li className="submenu-category">
                        <a href="#" className="submenu-title">EUR &euro;</a>
                    </li>
                    </ul>
                </li>

                </ul>

                <ul className="menu-social-container">

                <li>
                    <a href="#" className="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                </li>

                <li>
                    <a href="#" className="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                </li>

                <li>
                    <a href="#" className="social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                </li>

                <li>
                    <a href="#" className="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                </li>

                </ul>

            </div>

            </nav>

            </header>
                    
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

    </div>
    );
}
