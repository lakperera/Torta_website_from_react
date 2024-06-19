import "../App.css"
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function Main(){
    return(
        <div>
        <main>

      {/* 
      - BANNER
       */}

    <div className="banner">

      <div className="container">

        <div className="slider-container has-scrollbar">

          <div className="slider-item">

            <img src="./assets/images/cover.jpg" alt="women's latest fashion sale" className="banner-img"/>

            {/*  <div className="banner-content">

              <p className="banner-subtitle">Trending item</p>

              <h2 className="banner-title">Women's latest fashion sale</h2>

              <p className="banner-text">
                starting at &dollar; <b>20</b>.00
              </p>

              <a href="#" className="banner-btn">Shop now</a>

            </div>  */}

          </div>

          <div className="slider-item">

            <img src="./assets/images/banner-2.jpg" alt="modern sunglasses" className="banner-img"/>

            <div className="banner-content">

              {/* <p className="banner-subtitle">Trending accessories</p>

              <h2 className="banner-title">Modern sunglasses</h2>

              <p className="banner-text">
                starting at &dollar; <b>15</b>.00
              </p>

              <a href="#" className="banner-btn">Shop now</a> */}

            </div>

          </div>

          <div className="slider-item">

            <img src="./assets/images/banner-3.jpg" alt="new fashion summer sale" className="banner-img"/>

            {/*  <div className="banner-content">

              <p className="banner-subtitle">Sale Offer</p>

              <h2 className="banner-title">New fashion summer sale</h2>

              <p className="banner-text">
                starting at &dollar; <b>29</b>.99
              </p>

              <a href="#" className="banner-btn">Shop now</a>

            </div> */}

          </div>

        </div>

      </div>

    </div>





    {/* 
      - CATEGORY
     */}

    <div className="category">

      <div className="container">

        <div className="category-item-container has-scrollbar">

          <div className="category-item">

            <div className="category-img-box">
              <img src="./assets/images/icons/cakes.svg" alt="dress & frock" width="30"/>
            </div>

            <div className="category-content-box">

              <div className="category-content-flex">
                <h3 className="category-item-title">Cakes</h3>

                <p className="category-item-amount">(53)</p>
              </div>

              <a href="#" className="category-btn">Show all</a>

            </div>

          </div>

          <div className="category-item">

            <div className="category-img-box">
              <img src="./assets/images/icons/brownies.svg" alt="winter wear" width="30"/>
            </div>

            <div className="category-content-box">

              <div className="category-content-flex">
                <h3 className="category-item-title">brownies</h3>

                <p className="category-item-amount">(58)</p>
              </div>

              <a href="#" className="category-btn">Show all</a>

            </div>

          </div>

          <div className="category-item">

            <div className="category-img-box">
              <img src="./assets/images/icons/pizza.svg" alt="glasses & lens" width="30"/>
            </div>

            <div className="category-content-box">

              <div className="category-content-flex">
                <h3 className="category-item-title">Pizza</h3>

                <p className="category-item-amount">(68)</p>
              </div>

              <a href="#" className="category-btn">Show all</a>

            </div>

          </div>

          <div className="category-item">

            <div className="category-img-box">
              <img src="./assets/images/icons/pudding.svg" alt="shorts & jeans" width="30"/>
            </div>

            <div className="category-content-box">

              <div className="category-content-flex">
                <h3 className="category-item-title">Pudding</h3>

                <p className="category-item-amount">(84)</p>
              </div>

              <a href="#" className="category-btn">Show all</a>

            </div>

          </div>

          <div className="category-item">

            <div className="category-img-box">
              <img src="./assets/images/icons/lasanga.svg" alt="t-shirts" width="30"/>
            </div>

            <div className="category-content-box">

              <div className="category-content-flex">
                <h3 className="category-item-title">lasanga</h3>

                <p className="category-item-amount">(35)</p>
              </div>

              <a href="#" className="category-btn">Show all</a>

            </div>

          </div>

          <div className="category-item">

            <div className="category-img-box">
              <img src="./assets/images/icons/ChocolateMousse.svg" alt="jacket" width="30"/>
            </div>

            <div className="category-content-box">

              <div className="category-content-flex">
                <h3 className="category-item-title">Chocolate Mousse</h3>

                <p className="category-item-amount">(16)</p>
              </div>

              <a href="#" className="category-btn">Show all</a>

            </div>

          </div>

          <div className="category-item">

            <div className="category-img-box">
              <img src="./assets/images/icons/wedding.svg" alt="watch" width="30"/>
            </div>

            <div className="category-content-box">

              <div className="category-content-flex">
                <h3 className="category-item-title">Wedding Structures</h3>

                <p className="category-item-amount">(27)</p>
              </div>

              <a href="#" className="category-btn">Show all</a>

            </div>

          </div>

          <div className="category-item">

            <div className="category-img-box">
              <img src="./assets/images/icons/cupcake.svg" alt="hat & caps" width="30"/>
            </div>

            <div className="category-content-box">

              <div className="category-content-flex">
                <h3 className="category-item-title">CupCakes</h3>

                <p className="category-item-amount">(39)</p>
              </div>

              <a href="#" className="category-btn">Show all</a>

            </div>

          </div>

        </div>

      </div>

    </div>





    {/* 
      - PRODUCT
     */}

    <div className="product-container">

      <div className="container">


        {/* 
          - SIDEBAR
         */}

        <div className="sidebar  has-scrollbar" data-mobile-menu>

        <div className="sidebar-category">

          <div className="sidebar-top">
            <h2 className="sidebar-title">Category</h2>

            <button className="sidebar-close-btn" data-mobile-menu-close-btn="">
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>

          <ul className="sidebar-menu-category-list">

            <li className="sidebar-menu-category">

              <button className="sidebar-accordion-menu" data-accordion-btn>

                <div className="menu-title-flex">
                  <img src="./assets/images/icons/cakes.svg" alt="clothes" width="20" height="20"
                    className="menu-title-img"/>

                  <p className="menu-title">cakes</p>
                </div>

                <div>
                  <ion-icon name="add-outline" className="add-icon"></ion-icon>
                  <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                </div>

              </button>

              <ul className="sidebar-submenu-category-list" data-accordion>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">chocolateCake</p>
                    <data value="300" className="stock" title="Available Stock">300</data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Cheese Cake</p>
                    <data value="60" className="stock" title="Available Stock">60</data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Lava Cake </p>
                    <data value="50" className="stock" title="Available Stock">50</data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Birthday Cake</p>
                    <data value="87" className="stock" title="Available Stock">87</data>
                  </a>
                </li>

              </ul>

            </li>

            <li className="sidebar-menu-category">

              <button className="sidebar-accordion-menu" data-accordion-btn>

                <div className="menu-title-flex">
                  <img src="./assets/images/icons/brownies.svg" alt="footwear" className="menu-title-img" width="20"
                    height="20"/>

                  <p className="menu-title">Brownies</p>
                </div>

                <div>
                  <ion-icon name="add-outline" className="add-icon"></ion-icon>
                  <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                </div>

              </button>

              <ul className="sidebar-submenu-category-list" data-accordion>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">White Brownies</p>
                    <data value="45" className="stock" title="Available Stock">45</data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Chocolate Brownis</p>
                    <data value="75" className="stock" title="Available Stock">75</data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">weddingCake Brownies</p>
                    <data value="35" className="stock" title="Available Stock">35</data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">sample 01</p>
                    <data value="26" className="stock" title="Available Stock">26</data>
                  </a>
                </li>

              </ul>

            </li>

            <li className="sidebar-menu-category">

              <button className="sidebar-accordion-menu" data-accordion-btn>

                <div className="menu-title-flex">
                  <img src="./assets/images/icons/pizza.svg" alt="clothes" className="menu-title-img" width="20"
                    height="20"/>

                  <p className="menu-title">pizza</p>
                </div>

                <div>
                  <ion-icon name="add-outline" className="add-icon"></ion-icon>
                  <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                </div>

              </button>

              <ul className="sidebar-submenu-category-list" data-accordion>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Chicken</p>
                    <data value="46" className="stock" title="Available Stock">46</data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Breef</p>
                    <data value="73" className="stock" title="Available Stock">73</data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Cheese</p>
                    <data value="61" className="stock" title="Available Stock">61</data>
                  </a>
                </li>

              </ul>

            </li>

            <li className="sidebar-menu-category">

              <button className="sidebar-accordion-menu" data-accordion-btn>

                <div className="menu-title-flex">
                  <img src="./assets/images/icons/pudding.svg" alt="perfume" className="menu-title-img" width="20"
                    height="20"/>

                  <p className="menu-title">pudding</p>
                </div>

                <div>
                  <ion-icon name="add-outline" className="add-icon"></ion-icon>
                  <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                </div>

              </button>

              <ul className="sidebar-submenu-category-list" data-accordion>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">sample 01</p>
                    <data value="12" className="stock" title="Available Stock">12 pcs</data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">sample 02</p>
                    <data value="60" className="stock" title="Available Stock">60 pcs</data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">sample 03</p>
                    <data value="50" className="stock" title="Available Stock">50 pcs</data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">sample 04k</p>
                    <data value="87" className="stock" title="Available Stock">87 pcs</data>
                  </a>
                </li>

              </ul>

            </li>

            <li className="sidebar-menu-category">

              <button className="sidebar-accordion-menu" data-accordion-btn>

                <div className="menu-title-flex">
                  <img src="./assets/images/icons/buriani.svg" alt="cosmetics" className="menu-title-img" width="20"
                    height="20"/>

                  <p className="menu-title">buriani</p>
                </div>

                <div>
                  <ion-icon name="add-outline" className="add-icon"></ion-icon>
                  <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                </div>

              </button>

              <ul className="sidebar-submenu-category-list" data-accordion>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">sample 01</p>
                    <data value="68" className="stock" title="Available Stock">68</data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">sample 02</p>
                    <data value="46" className="stock" title="Available Stock">46</data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">sample 03</p>
                    <data value="79" className="stock" title="Available Stock">79</data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">sample 04</p>
                    <data value="23" className="stock" title="Available Stock">23</data>
                  </a>
                </li>

              </ul>

            </li>

            {/*  <li className="sidebar-menu-category">

              <button className="sidebar-accordion-menu" data-accordion-btn>

                <div className="menu-title-flex">
                  <img src="./assets/images/icons/glasses.svg" alt="glasses" className="menu-title-img" width="20"
                    height="20"/>

                  <p className="menu-title">Glasses</p>
                </div>

                <div>
                  <ion-icon name="add-outline" className="add-icon"></ion-icon>
                  <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                </div>

              </button>

              <ul className="sidebar-submenu-category-list" data-accordion>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Sunglasses</p>
                    <data value="50" className="stock" title="Available Stock">50</data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Lenses</p>
                    <data value="48" className="stock" title="Available Stock">48</data>
                  </a>
                </li>

              </ul>

            </li> */}

            {/* <!-- <li className="sidebar-menu-category">

              <button className="sidebar-accordion-menu" data-accordion-btn>

                <div className="menu-title-flex">
                  <img src="./assets/images/icons/bag.svg" alt="bags" className="menu-title-img" width="20" height="20">

                  <p className="menu-title">Bags</p>
                </div>

                <div>
                  <ion-icon name="add-outline" className="add-icon"></ion-icon>
                  <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                </div>

              </button>

              <ul className="sidebar-submenu-category-list" data-accordion>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Shopping Bag</p>
                    <data value="62" className="stock" title="Available Stock">62</data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Gym Backpack</p>
                    <data value="35" className="stock" title="Available Stock">35</data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Purse</p>
                    <data value="80" className="stock" title="Available Stock">80</data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Wallet</p>
                    <data value="75" className="stock" title="Available Stock">75</data>
                  </a>
                </li> -->

              </ul>

            </li> */}

          </ul>

        </div>

        {/*  side bar best saler avalability   */}

        <div className="product-showcase">

          <h3 className="showcase-heading">best sellers</h3>

          <div className="showcase-wrapper">

            <div className="showcase-container">

              <div className="showcase">

                <a href="#" className="showcase-img-box">
                  <img src="./assets/images/product/event/21.jpg" alt="baby fabric shoes" width="75" height="75"
                    className="showcase-img"/>
                </a>

                <div className="showcase-content">

                  <a href="#">
                    <h4 className="showcase-title">annyversary cake</h4>
                  </a>

                  <div className="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <div className="price-box">
                    <del>$5.00</del>
                    <p className="price">$4.00</p>
                  </div>

                </div>

              </div>

              <div className="showcase">

                <a href="#" className="showcase-img-box">
                  <img src="./assets/images/product/birthday/26.jpg" alt="men's hoodies t-shirt" className="showcase-img"
                    width="75" height="75"/>
                </a>

                <div className="showcase-content">

                  <a href="#">
                    <h4 className="showcase-title">white cream</h4>
                  </a>
                  <div className="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-half-outline"></ion-icon>
                  </div>

                  <div className="price-box">
                    <del>$17.00</del>
                    <p className="price">$7.00</p>
                  </div>

                </div>

              </div>

              <div className="showcase">

                <a href="#" className="showcase-img-box">
                  <img src="./assets/images/product/birthday/28.jpg" alt="girls t-shirt" className="showcase-img" width="75"
                    height="75"/>
                </a>

                <div className="showcase-content">

                  <a href="#">
                    <h4 className="showcase-title">oreo chocolateCake</h4>
                  </a>
                  <div className="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-half-outline"></ion-icon>
                  </div>

                  <div className="price-box">
                    <del>$5.00</del>
                    <p className="price">$3.00</p>
                  </div>

                </div>

              </div>

              <div className="showcase">

                <a href="#" className="showcase-img-box">
                  <img src="./assets/images/product/birthday/42.jpg" alt="woolen hat for men" className="showcase-img" width="75"
                    height="75"/>
                </a>

                <div className="showcase-content">

                  <a href="#">
                    <h4 className="showcase-title">dairy milk chocolate</h4>
                  </a>
                  <div className="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <div className="price-box">
                    <del>$15.00</del>
                    <p className="price">$12.00</p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        </div>



        <div className="product-box">

          {/* <!--
            - PRODUCT MINIMAL
          --> */}

          <div className="product-minimal">

            <div className="product-showcase">

              <h2 className="title">New Arrivals</h2>

              <div className="showcase-wrapper has-scrollbar">

                <div className="showcase-container">

                  <div className="showcase">
                  
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/product/chocolateCake/1.jpg" alt="relaxed short full sleeve t-shirt" width="70" className="showcase-img"/>
                    </a>

                    <div className="showcase-content">

                      

                      <Link to ="/cart"><h4 className="showcase-title">Chocolate & white </h4></Link>

                      <div className="price-box">
                        <p className="price">$45.00</p>
                        <del>$12.00</del>
                      </div>

                    </div>

                  </div>

                  <div className="showcase">
                  
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/product/event/6.jpg" alt="girls pink embro design top" className="showcase-img" width="70"/>
                    </a>
                  
                    <div className="showcase-content">
                  
                      <Link to="/cart"><h4 className="showcase-title">Gold with lover cake</h4></Link>
                  
                      <div className="price-box">
                        <p className="price">$61.00</p>
                        <del>$9.00</del>
                      </div>
                  
                    </div>
                  
                  </div>

                  <div className="showcase">
                  
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/product/event/22.jpg" alt="black floral wrap midi skirt" className="showcase-img"
                        width="70"/>
                    </a>
                  
                    <div className="showcase-content">

                    <Link to="/cart"><h4 className="showcase-title">Annyversary celebration</h4></Link>
                  
                  
                      <div className="price-box">
                        <p className="price">$76.00</p>
                        <del>$25.00</del>
                      </div>
                  
                    </div>
                  
                  </div>

                  <div className="showcase">
                  
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/product/weddingCake/27.jpg" alt="pure garment dyed cotton shirt" className="showcase-img"
                        width="70"/>
                    </a>
                  
                    <div className="showcase-content">
                    <Link to="/cart"> <h4 className="showcase-title">for engagement</h4></Link>
                  
                  
                      <div className="price-box">
                        <p className="price">$68.00</p>
                        <del>$31.00</del>
                      </div>
                  
                    </div>
                  
                  </div>

                </div>

                {/* <div className="showcase-container">
                
                  <div className="showcase">
                
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/products/jacket-5.jpg" alt="men yarn fleece full-zip jacket" className="showcase-img"
                        width="70"/>
                    </a>
                
                    <div className="showcase-content">
                
                      <a href="#">
                        <h4 className="showcase-title">MEN Yarn Fleece Full-Zip Jacket</h4>
                      </a>
                
                      <a href="#" className="showcase-category">Winter wear</a>
                
                      <div className="price-box">
                        <p className="price">$61.00</p>
                        <del>$11.00</del>
                      </div>
                
                    </div>
                
                  </div>
                
                  <div className="showcase">
                
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/products/jacket-1.jpg" alt="mens winter leathers jackets" className="showcase-img"
                        width="70"/>
                    </a>
                
                    <div className="showcase-content">
                
                      <a href="#">
                        <h4 className="showcase-title">Mens Winter Leathers Jackets</h4>
                      </a>
                
                      <a href="#" className="showcase-category">Winter wear</a>
                
                      <div className="price-box">
                        <p className="price">$32.00</p>
                        <del>$20.00</del>
                      </div>
                
                    </div>
                
                  </div>
                
                  <div className="showcase">
                
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/products/jacket-3.jpg" alt="mens winter leathers jackets" className="showcase-img"
                        width="70"/>
                    </a>
                
                    <div className="showcase-content">
                
                      <a href="#">
                        <h4 className="showcase-title">Mens Winter Leathers Jackets</h4>
                      </a>
                
                      <a href="#" className="showcase-category">Jackets</a>
                
                      <div className="price-box">
                        <p className="price">$50.00</p>
                        <del>$25.00</del>
                      </div>
                
                    </div>
                
                  </div>
                
                  <div className="showcase">
                
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/products/shorts-1.jpg" alt="better basics french terry sweatshorts" className="showcase-img"
                        width="70"/>
                    </a>
                
                    <div className="showcase-content">
                
                      <a href="#">
                        <h4 className="showcase-title">Better Basics French Terry Sweatshorts</h4>
                      </a>
                
                      <a href="#" className="showcase-category">Shorts</a>
                
                      <div className="price-box">
                        <p className="price">$20.00</p>
                        <del>$10.00</del>
                      </div>
                
                    </div>
                
                  </div>
                
                </div> */}

              </div>

            </div>

            <div className="product-showcase">
            
              <h2 className="title">Trending</h2>
            
              <div className="showcase-wrapper  has-scrollbar">
            
                <div className="showcase-container">
            
                  <div className="showcase">
            
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/product/buruani/14.jpg" alt="running & trekking shoes - white" className="showcase-img"
                        width="70"/>
                    </a>
            
                    <div className="showcase-content">
            
                    <Link to="/cart"><h4 className="showcase-title">sawan</h4></Link>
            
            
                      <div className="price-box">
                        <p className="price">$49.00</p>
                        <del>$15.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div className="showcase">
            
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/product/buruani/15.jpg" alt="trekking & running shoes - black" className="showcase-img"
                        width="70"/>
                    </a>
            
                    <div className="showcase-content">
            
                    <Link to="/cart"><h4 className="showcase-title">biryani pot</h4></Link>
            
            
                      <div className="price-box">
                        <p className="price">$78.00</p>
                        <del>$36.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div className="showcase">
            
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/product/buruani/19.jpg" alt="womens party wear shoes" className="showcase-img"
                        width="70"/>
                    </a>
            
                    <div className="showcase-content">
            
                    <Link to="/cart"><h4 className="showcase-title">for perperson</h4></Link>
            
                      <div className="price-box">
                        <p className="price">$94.00</p>
                        <del>$42.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div className="showcase">
            
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/product/buruani/17.jpg" alt="sports claw women's shoes" className="showcase-img"
                        width="70"/>
                    </a>
            
                    <div className="showcase-content">
            
                      <Link to="/cart"><h4 className="showcase-title">five person</h4></Link>
            
            
                      <div className="price-box">
                        <p className="price">$54.00</p>
                        <del>$65.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                </div>
            
                {/* <div className="showcase-container">
            
                  <div className="showcase">
            
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/products/sports-6.jpg" alt="air tekking shoes - white" className="showcase-img"
                        width="70"/>
                    </a>
            
                    <div className="showcase-content">
            
                      <a href="#">
                        <h4 className="showcase-title">Air Trekking Shoes - white</h4>
                      </a>
            
                      <a href="#" className="showcase-category">Sports</a>
            
                      <div className="price-box">
                        <p className="price">$52.00</p>
                        <del>$55.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div className="showcase">
            
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/products/shoe-3.jpg" alt="Boot With Suede Detail" className="showcase-img" width="70"/>
                    </a>
            
                    <div className="showcase-content">
            
                      <a href="#">
                        <h4 className="showcase-title">Boot With Suede Detail</h4>
                      </a>
            
                      <a href="#" className="showcase-category">boots</a>
            
                      <div className="price-box">
                        <p className="price">$20.00</p>
                        <del>$30.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div className="showcase">
            
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/products/shoe-1.jpg" alt="men's leather formal wear shoes" className="showcase-img"
                        width="70"/>
                    </a>
            
                    <div className="showcase-content">
            
                      <a href="#">
                        <h4 className="showcase-title">Men's Leather Formal Wear shoes</h4>
                      </a>
            
                      <a href="#" className="showcase-category">formal</a>
            
                      <div className="price-box">
                        <p className="price">$56.00</p>
                        <del>$78.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div className="showcase">
            
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/products/shoe-2.jpg" alt="casual men's brown shoes" className="showcase-img" width="70"/>
                    </a>
            
                    <div className="showcase-content">
            
                      <a href="#">
                        <h4 className="showcase-title">Casual Men's Brown shoes</h4>
                      </a>
            
                      <a href="#" className="showcase-category">Casual</a>
            
                      <div className="price-box">
                        <p className="price">$50.00</p>
                        <del>$55.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                </div> */}
            
              </div>
            
            </div>

            <div className="product-showcase">
            
              <h2 className="title">Top Rated</h2>
            
              <div className="showcase-wrapper  has-scrollbar">
            
                <div className="showcase-container">
            
                  <div className="showcase">
            
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/product/brownies'/10.jpg" alt="pocket watch leather pouch" className="showcase-img"
                        width="70"/>
                    </a>
            
                    <div className="showcase-content">
            
                    <Link to="/cart"><Link to="/cart"><h4 className="showcase-title">brownies</h4></Link></Link>
            
            
                      <div className="price-box">
                        <p className="price">$50.00</p>
                        <del>$34.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div className="showcase">
            
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/product/brownies'/37.jpg" alt="silver deer heart necklace" className="showcase-img"
                        width="70"/>
                    </a>
            
                    <div className="showcase-content">
            
                    <Link to="/cart"><h4 className="showcase-title">white & chocolate</h4></Link>
            
            
                      <div className="price-box">
                        <p className="price">$84.00</p>
                        <del>$30.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div className="showcase">
            
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/product/brownies'/38.jpg" alt="titan 100 ml womens perfume" className="showcase-img"
                        width="70"/>
                    </a>
            
                    <div className="showcase-content">
            
                    <Link to="/cart"><h4 className="showcase-title">wedding favors</h4></Link>
            
            
                      <div className="price-box">
                        <p className="price">$42.00</p>
                        <del>$10.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div className="showcase">
            
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/product/brownies'/45.jpg" alt="men's leather reversible belt" className="showcase-img"
                        width="70"/>
                    </a>
            
                    <div className="showcase-content">
            
                    <Link to="/cart"><h4 className="showcase-title">strawberry & chocolate</h4></Link>
            
            
                      <div className="price-box">
                        <p className="price">$24.00</p>
                        <del>$10.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                </div>
            
                {/* <div className="showcase-container">
            
                  <div className="showcase">
            
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/products/jewellery-2.jpg" alt="platinum zircon classic ring" className="showcase-img"
                        width="70"/>
                    </a>
            
                    <div className="showcase-content">
            
                      <a href="#">
                        <h4 className="showcase-title">platinum Zircon Classic Ring</h4>
                      </a>
            
                      <a href="#" className="showcase-category">jewellery</a>
            
                      <div className="price-box">
                        <p className="price">$62.00</p>
                        <del>$65.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div className="showcase">
            
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/products/watch-1.jpg" alt="smart watche vital plus" className="showcase-img" width="70"/>
                    </a>
            
                    <div className="showcase-content">
            
                      <a href="#">
                        <h4 className="showcase-title">Smart watche Vital Plus</h4>
                      </a>
            
                      <a href="#" className="showcase-category">Watches</a>
            
                      <div className="price-box">
                        <p className="price">$56.00</p>
                        <del>$78.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div className="showcase">
            
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/products/shampoo.jpg" alt="shampoo conditioner packs" className="showcase-img"
                        width="70"/>
                    </a>
            
                    <div className="showcase-content">
            
                      <a href="#">
                        <h4 className="showcase-title">shampoo conditioner packs</h4>
                      </a>
            
                      <a href="#" className="showcase-category">cosmetics</a>
            
                      <div className="price-box">
                        <p className="price">$20.00</p>
                        <del>$30.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div className="showcase">
            
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/products/jewellery-1.jpg" alt="rose gold peacock earrings" className="showcase-img"
                        width="70"/>
                    </a>
            
                    <div className="showcase-content">
            
                      <a href="#">
                        <h4 className="showcase-title">Rose Gold Peacock Earrings</h4>
                      </a>
            
                      <a href="#" className="showcase-category">jewellery</a>
            
                      <div className="price-box">
                        <p className="price">$20.00</p>
                        <del>$30.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                </div> */}
            
              </div>
            
            </div>

          </div>



          {/* <!--
            - PRODUCT FEATURED
          --> */}

          <div className="product-featured">

            <h2 className="title">Deal of the day</h2>

            <div className="showcase-wrapper has-scrollbar">

              <div className="showcase-container">

                <div className="showcase">
                  
                  <div className="showcase-banner">
                    <img src="./assets/images/product/birthday/20.jpg" alt="shampoo, conditioner & facewash packs" className="showcase-img"/>
                  </div>

                  <div className="showcase-content">
                    
                    <div className="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                    </div>

                    <a href="#">
                      <h3 className="showcase-title">blue,white & chocolate</h3>
                    </a>

                    <p className="showcase-desc">
                      "Indulging in a Symphony of Blue, White, and Chocolate Bliss! 🍰✨"
                    </p>

                    <div className="price-box">
                      <p className="price">$150.00</p>

                      <del>$200.00</del>
                    </div>

                    <button className="add-cart-btn">add to cart</button>

                    <div className="showcase-status">
                      <div className="wrapper">
                        <p>
                          already sold: <b>20</b>
                        </p>

                        <p>
                          available: <b>40</b>
                        </p>
                      </div>

                      <div className="showcase-status-bar"></div>
                    </div>

                    <div className="countdown-box">

                      <p className="countdown-desc">
                        Hurry Up! Offer ends in:
                      </p>

                      <div className="countdown">

                        <div className="countdown-content">

                          <p className="display-number">360</p>

                          <p className="display-text">Days</p>

                        </div>

                        <div className="countdown-content">
                          <p className="display-number">24</p>
                          <p className="display-text">Hours</p>
                        </div>

                        <div className="countdown-content">
                          <p className="display-number">59</p>
                          <p className="display-text">Min</p>
                        </div>

                        <div className="countdown-content">
                          <p className="display-number">00</p>
                          <p className="display-text">Sec</p>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div className="showcase-container">
              
                <div className="showcase">
              
                  <div className="showcase-banner">
                    <img src="./assets/images/product/pudding/35.jpg" alt="Rose Gold diamonds Earring" className="showcase-img"/>
                  </div>
              
                  <div className="showcase-content">
              
                    <div className="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                    </div>
              
                    <h3 className="showcase-title">
                      <a href="#" className="showcase-title">white and chocolate mousse</a>
                    </h3>
              
                    <p className="showcase-desc">
                      "Indulge in the harmonious blend of velvety white and rich chocolate mousse perfection."
                    </p>
              
                    <div className="price-box">
                      <p className="price">$1990.00</p>
                      <del>$2000.00</del>
                    </div>
              
                    <button className="add-cart-btn">add to cart</button>
              
                    <div className="showcase-status">
                      <div className="wrapper">
                        <p> already sold: <b>15</b> </p>
              
                        <p> available: <b>40</b> </p>
                      </div>
              
                      <div className="showcase-status-bar"></div>
                    </div>
              
                    <div className="countdown-box">
              
                      <p className="countdown-desc">Hurry Up! Offer ends in:</p>
              
                      <div className="countdown">
                        <div className="countdown-content">
                          <p className="display-number">360</p>
                          <p className="display-text">Days</p>
                        </div>
              
                        <div className="countdown-content">
                          <p className="display-number">24</p>
                          <p className="display-text">Hours</p>
                        </div>
              
                        <div className="countdown-content">
                          <p className="display-number">59</p>
                          <p className="display-text">Min</p>
                        </div>
              
                        <div className="countdown-content">
                          <p className="display-number">00</p>
                          <p className="display-text">Sec</p>
                        </div>
                      </div>
              
                    </div>
              
                  </div>
              
                </div>
              
              </div>

            </div>

          </div>



          {/* <!--
            - PRODUCT GRID
          --> */}

          <div className="product-main">

            <h2 className="title">New Products</h2>

            <div className="product-grid">

              <div className="showcase">

                <div className="showcase-banner">

                  <img src="./assets/images/product/birthday/12.jpg" alt="Mens Winter Leathers Jackets" width="300" className="product-img default"/>
                  <img src="./assets/images/product/birthday/8.jpg" alt="Mens Winter Leathers Jackets" width="300" className="product-img hover"/>

                  <p className="showcase-badge">15%</p>

                  <div className="showcase-actions">

                    <button className="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>

                    <button className="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>

                    <button className="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>

                  </div>

                </div>

                <div className="showcase-content">

                  <a href="#" className="showcase-category">jacket</a>

                  <a href="#">
                    <h3 className="showcase-title">Mens Winter Leathers Jackets</h3>
                  </a>

                  <div className="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                  </div>

                  <div className="price-box">
                    <p className="price">$48.00</p>
                    <del>$75.00</del>
                  </div>

                </div>

              </div>

              <div className="showcase">
              
                <div className="showcase-banner">
                  <img src="./assets/images/product/birthday/24.jpg" alt="Pure Garment Dyed Cotton Shirt" className="product-img default"
                    width="300"/>
                  <img src="./assets/images/product/birthday/28.jpg" alt="Pure Garment Dyed Cotton Shirt" className="product-img hover"
                    width="300"/>
              
                  <p className="showcase-badge angle black">sale</p>
              
                  <div className="showcase-actions">
                    <button className="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div className="showcase-content">
                  <a href="#" className="showcase-category">shirt</a>
              
                  <h3>
                    <a href="#" className="showcase-title">Pure Garment Dyed Cotton Shirt</a>
                  </h3>
              
                  <div className="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                  </div>
              
                  <div className="price-box">
                    <p className="price">$45.00</p>
                    <del>$56.00</del>
                  </div>
              
                </div>
              
              </div>

              <div className="showcase">
              
                <div className="showcase-banner">
                  <img src="./assets/images/product/brownies'/10.jpg" alt="MEN Yarn Fleece Full-Zip Jacket" className="product-img default"
                    width="300"/>
                  <img src="./assets/images/product/brownies'/43.jpg" alt="MEN Yarn Fleece Full-Zip Jacket" className="product-img hover"
                    width="300"/>
              
                  <div className="showcase-actions">
                    <button className="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div className="showcase-content">
                  <a href="#" className="showcase-category">Jacket</a>
              
                  <h3>
                    <a href="#" className="showcase-title">MEN Yarn Fleece Full-Zip Jacket</a>
                  </h3>
              
                  <div className="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                  </div>
              
                  <div className="price-box">
                    <p className="price">$58.00</p>
                    <del>$65.00</del>
                  </div>
              
                </div>
              
              </div>

              <div className="showcase">
              
                <div className="showcase-banner">
                  <img src="./assets/images/product/pudding/29.jpg" alt="Black Floral Wrap Midi Skirt" className="product-img default"
                    width="300"/>
                  <img src="./assets/images/product/pudding/7.jpg" alt="Black Floral Wrap Midi Skirt" className="product-img hover"
                    width="300"/>
              
                  <p className="showcase-badge angle pink">new</p>
              
                  <div className="showcase-actions">
                    <button className="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div className="showcase-content">
                  <a href="#" className="showcase-category">skirt</a>
              
                  <h3>
                    <a href="#" className="showcase-title">Black Floral Wrap Midi Skirt</a>
                  </h3>
              
                  <div className="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
              
                  <div className="price-box">
                    <p className="price">$25.00</p>
                    <del>$35.00</del>
                  </div>
              
                </div>
              
              </div>

              <div className="showcase">
              
                <div className="showcase-banner">
                  <img src="./assets/images/product/buruani/19.jpg" alt="Casual Men's Brown shoes" className="product-img default"
                    width="300"/>
                  <img src="./assets/images/product/buruani/16.jpg" alt="Casual Men's Brown shoes" className="product-img hover"
                    width="300"/>
              
                  <div className="showcase-actions">
                    <button className="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div className="showcase-content">
                  <a href="#" className="showcase-category">casual</a>
              
                  <h3>
                    <a href="#" className="showcase-title">Casual Men's Brown shoes</a>
                  </h3>
              
                  <div className="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
              
                  <div className="price-box">
                    <p className="price">$99.00</p>
                    <del>$105.00</del>
                  </div>
              
                </div>
              
              </div>

              <div className="showcase">
              
                <div className="showcase-banner">
                  <img src="./assets/images/product/chocolateCake/2.jpg" alt="Pocket Watch Leather Pouch" className="product-img default"
                    width="300"/>
                  <img src="./assets/images/product/chocolateCake/25.jpg" alt="Pocket Watch Leather Pouch" className="product-img hover"
                    width="300"/>
              
                  <p className="showcase-badge angle black">sale</p>
              
                  <div className="showcase-actions">
                    <button className="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div className="showcase-content">
                  <a href="#" className="showcase-category">watches</a>
              
                  <h3>
                    <a href="#" className="showcase-title">Pocket Watch Leather Pouch</a>
                  </h3>
              
                  <div className="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                  </div>
              
                  <div className="price-box">
                    <p className="price">$150.00</p>
                    <del>$170.00</del>
                  </div>
              
                </div>
              
              </div>

              <div className="showcase">
              
                <div className="showcase-banner">
                  <img src="./assets/images/product/event/40.jpg" alt="Smart watche Vital Plus" className="product-img default"
                    width="300"/>
                  <img src="./assets/images/product/event/41.jpg" alt="Smart watche Vital Plus" className="product-img hover" width="300"/>
              
                  <div className="showcase-actions">
                    <button className="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div className="showcase-content">
                  <a href="#" className="showcase-category">watches</a>
              
                  <h3>
                    <a href="#" className="showcase-title">Smart watche Vital Plus</a>
                  </h3>
              
                  <div className="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                  </div>
              
                  <div className="price-box">
                    <p className="price">$100.00</p>
                    <del>$120.00</del>
                  </div>
              
                </div>
              
              </div>

              <div className="showcase">
              
                <div className="showcase-banner">
                  <img src="./assets/images/product/birthday/3.jpg" alt="Womens Party Wear Shoes" className="product-img default"
                    width="300"/>
                  <img src="./assets/images/product/birthday/26.jpg" alt="Womens Party Wear Shoes" className="product-img hover"
                    width="300"/>
              
                  <p className="showcase-badge angle black">sale</p>
              
                  <div className="showcase-actions">
                    <button className="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div className="showcase-content">
                  <a href="#" className="showcase-category">party wear</a>
              
                  <h3>
                    <a href="#" className="showcase-title">Womens Party Wear Shoes</a>
                  </h3>
              
                  <div className="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                  </div>
              
                  <div className="price-box">
                    <p className="price">$25.00</p>
                    <del>$30.00</del>
                  </div>
              
                </div>
              
              </div>

              {/* <div className="showcase">
              
                <div className="showcase-banner">
                  <img src="./assets/images/products/jacket-1.jpg" alt="Mens Winter Leathers Jackets" className="product-img default"
                    width="300"/>
                  <img src="./assets/images/products/jacket-2.jpg" alt="Mens Winter Leathers Jackets" className="product-img hover"
                    width="300"/>
              
                  <div className="showcase-actions">
                    <button className="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div className="showcase-content">
                  <a href="#" className="showcase-category">jacket</a>
              
                  <h3>
                    <a href="#" className="showcase-title">Mens Winter Leathers Jackets</a>
                  </h3>
              
                  <div className="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                  </div>
              
                  <div className="price-box">
                    <p className="price">$32.00</p>
                    <del>$45.00</del>
                  </div>
              
                </div>
              
              </div>

              <div className="showcase">
              
                <div className="showcase-banner">
                  <img src="./assets/images/products/sports-2.jpg" alt="Trekking & Running Shoes - black" className="product-img default"
                    width="300"/>
                  <img src="./assets/images/products/sports-4.jpg" alt="Trekking & Running Shoes - black" className="product-img hover"
                    width="300"/>
              
                  <p className="showcase-badge angle black">sale</p>
              
                  <div className="showcase-actions">
                    <button className="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div className="showcase-content">
                  <a href="#" className="showcase-category">sports</a>
              
                  <h3>
                    <a href="#" className="showcase-title">Trekking & Running Shoes - black</a>
                  </h3>
              
                  <div className="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                  </div>
              
                  <div className="price-box">
                    <p className="price">$58.00</p>
                    <del>$64.00</del>
                  </div>
              
                </div>
              
              </div>

              <div className="showcase">
              
                <div className="showcase-banner">
                  <img src="./assets/images/products/shoe-1.jpg" alt="Men's Leather Formal Wear shoes" className="product-img default"
                    width="300"/>
                  <img src="./assets/images/products/shoe-1_1.jpg" alt="Men's Leather Formal Wear shoes" className="product-img hover"
                    width="300"/>
              
                  <div className="showcase-actions">
                    <button className="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div className="showcase-content">
                  <a href="#" className="showcase-category">formal</a>
              
                  <h3>
                    <a href="#" className="showcase-title">Men's Leather Formal Wear shoes</a>
                  </h3>
              
                  <div className="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                  </div>
              
                  <div className="price-box">
                    <p className="price">$50.00</p>
                    <del>$65.00</del>
                  </div>
              
                </div>
              
              </div>

              <div className="showcase">
              
                <div className="showcase-banner">
                  <img src="./assets/images/products/shorts-1.jpg" alt="Better Basics French Terry Sweatshorts"
                    className="product-img default" width="300"/>
                  <img src="./assets/images/products/shorts-2.jpg" alt="Better Basics French Terry Sweatshorts"
                    className="product-img hover" width="300"/>
              
                  <p className="showcase-badge angle black">sale</p>
              
                  <div className="showcase-actions">
                    <button className="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div className="showcase-content">
                  <a href="#" className="showcase-category">shorts</a>
              
                  <h3>
                    <a href="#" className="showcase-title">Better Basics French Terry Sweatshorts</a>
                  </h3>
              
                  <div className="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                  </div>
              
                  <div className="price-box">
                    <p className="price">$78.00</p>
                    <del>$85.00</del>
                  </div>
              
                </div>
              
              </div> */}

            </div>

          </div>

        </div>

      </div>

    </div>





    {/* <!--
      - TESTIMONIALS, CTA & SERVICE
    --> */}

    <div>

      <div className="container">

        <div className="testimonials-box">

          {/* <!--
            - TESTIMONIALS
          --> */}

          <div className="testimonial">

            <h2 className="title">testimonial</h2>

            <div className="testimonial-card">

              <img src="./assets/images/testimonial-1.png" alt="alan doe" className="testimonial-banner" width="80" height="80"/>

              <p className="testimonial-name">Alan Doe</p>

              <p className="testimonial-title">CEO & Founder Invision</p>

              <img src="./assets/images/icons/quotes.svg" alt="quotation" className="quotation-img" width="26"/>

              <p className="testimonial-desc">
                Lorem ipsum dolor sit amet consectetur Lorem ipsum
                dolor dolor sit amet.
              </p>

            </div>

          </div>



          {/* <!--
            - CTA
          --> */}

          <div className="cta-container">

            <img src="./assets/images/cta-banner.jpg" alt="summer collection" className="cta-banner"/>

            <a href="#" className="cta-content">

              <p className="discount">25% Discount</p>

              <h2 className="cta-title">Summer collection</h2>

              <p className="cta-text">Starting @ $10</p>

              <button className="cta-btn">Shop now</button>

            </a>

          </div>



          {/* <!--
            - SERVICE
          --> */}

          <div className="service">

            <h2 className="title">Our Services</h2>

            <div className="service-container">

              <a href="#" className="service-item">

                <div className="service-icon">
                  <ion-icon name="boat-outline"></ion-icon>
                </div>

                <div className="service-content">

                  <h3 className="service-title">Islanddwide Delivery</h3>
                  <p className="service-desc">For Order Over $100</p>

                </div>

              </a>

              <a href="#" className="service-item">
              
                <div className="service-icon">
                  <ion-icon name="rocket-outline"></ion-icon>
                </div>
              
                <div className="service-content">
              
                  <h3 className="service-title">Fast delivery</h3>
                  <p className="service-desc">Around the torta area Orders Only</p>
              
                </div>
              
              </a>

              <a href="#" className="service-item">
              
                <div className="service-icon">
                  <ion-icon name="call-outline"></ion-icon>
                </div>
              
                <div className="service-content">
              
                  <h3 className="service-title">Best Online Support</h3>
                  <p className="service-desc">Hours: 8AM - 11PM</p>
              
                </div>
              
              </a>

              <a href="#" className="service-item">
              
                <div className="service-icon">
                  <ion-icon name="arrow-undo-outline"></ion-icon>
                </div>
              
                <div className="service-content">
              
                  <h3 className="service-title">Return Policy</h3>
                  <p className="service-desc">Easy & Free Return</p>
              
                </div>
              
              </a>

              <a href="#" className="service-item">
              
                <div className="service-icon">
                  <ion-icon name="ticket-outline"></ion-icon>
                </div>
              
                <div className="service-content">
              
                  <h3 className="service-title">30% money back</h3>
                  <p className="service-desc">For Order Over $100</p>
              
                </div>
              
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>





    {/* <!--
      - BLOG
    --> */}

    <div className="blog">

      <div className="container">

        <div className="blog-container has-scrollbar">

          <div className="blog-card">

            <a href="#">
              <img src="./assets/images/blog-1.jpg" alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width="300" className="blog-banner"/>
            </a>

            <div className="blog-content">

              <a href="#" className="blog-category">Cakes</a>

              <a href="#">
                <h3 className="blog-title">Street-side Dessert Delights: Mastering the Curbside Cake Craze.</h3>
              </a>

              <p className="blog-meta">
                By <cite>Mr Admin</cite> / <time datetime="2022-04-06">Apr 06, 2022</time>
              </p>

            </div>

          </div>

          <div className="blog-card">
          
            <a href="#">
              <img src="./assets/images/blog-2.jpg" alt="Curbside fashion Trends: How to Win the Pickup Battle."
                className="blog-banner" width="300"/>
            </a>
          
            <div className="blog-content">
          
              <a href="#" className="blog-category">Brownies</a>
          
              <h3>
                <a href="#" className="blog-title">Curbside Cravings: Conquer the Pickup Competition with Irresistible Brownie Bliss.</a>
              </h3>
          
              <p className="blog-meta">
                By <cite>Mr Robin</cite> / <time datetime="2022-01-18">Jan 18, 2022</time>
              </p>
          
            </div>
          
          </div>

          <div className="blog-card">
          
            <a href="#">
              <img src="./assets/images/blog-3.jpg" alt="EBT vendors: Claim Your Share of SNAP Online Revenue."
                className="blog-banner" width="300"/>
            </a>
          
            <div className="blog-content">
          
              <a href="#" className="blog-category">buriani</a>
          
              <h3>
                <a href="#" className="blog-title">Biriani Bonanza: Secure Your Slice of Online EBT Revenue for Vendors.</a>
              </h3>
          
              <p className="blog-meta">
                By <cite>Mr Selsa</cite> / <time datetime="2022-02-10">Feb 10, 2022</time>
              </p>
          
            </div>
          
          </div>

          <div className="blog-card">
          
            <a href="#">
              <img src="./assets/images/blog-4.jpg" alt="Curbside fashion Trends: How to Win the Pickup Battle."
                className="blog-banner" width="300"/>
            </a>
          
            <div className="blog-content">
          
              <a href="#" className="blog-category">Pudding</a>
          
              <h3>
                <a href="#" className="blog-title">Curbside Confections: Mastering the Pickup Frenzy with Delectable Pudding Pleasures.</a>
              </h3>
          
              <p className="blog-meta">
                By <cite>Mr Pawar</cite> / <time datetime="2022-03-15">Mar 15, 2022</time>
              </p>
          
            </div>
          
          </div>

        </div>

      </div>

    </div>  
        </main>

        </div>
    );
}

export default Main;