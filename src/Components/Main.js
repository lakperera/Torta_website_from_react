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

    <div class="banner">

      <div class="container">

        <div class="slider-container has-scrollbar">

          <div class="slider-item">

            <img src="./assets/images/cover.jpg" alt="women's latest fashion sale" class="banner-img"/>

            {/*  <div class="banner-content">

              <p class="banner-subtitle">Trending item</p>

              <h2 class="banner-title">Women's latest fashion sale</h2>

              <p class="banner-text">
                starting at &dollar; <b>20</b>.00
              </p>

              <a href="#" class="banner-btn">Shop now</a>

            </div>  */}

          </div>

          <div class="slider-item">

            <img src="./assets/images/banner-2.jpg" alt="modern sunglasses" class="banner-img"/>

            <div class="banner-content">

              {/* <p class="banner-subtitle">Trending accessories</p>

              <h2 class="banner-title">Modern sunglasses</h2>

              <p class="banner-text">
                starting at &dollar; <b>15</b>.00
              </p>

              <a href="#" class="banner-btn">Shop now</a> */}

            </div>

          </div>

          <div class="slider-item">

            <img src="./assets/images/banner-3.jpg" alt="new fashion summer sale" class="banner-img"/>

            {/*  <div class="banner-content">

              <p class="banner-subtitle">Sale Offer</p>

              <h2 class="banner-title">New fashion summer sale</h2>

              <p class="banner-text">
                starting at &dollar; <b>29</b>.99
              </p>

              <a href="#" class="banner-btn">Shop now</a>

            </div> */}

          </div>

        </div>

      </div>

    </div>





    {/* 
      - CATEGORY
     */}

    <div class="category">

      <div class="container">

        <div class="category-item-container has-scrollbar">

          <div class="category-item">

            <div class="category-img-box">
              <img src="./assets/images/icons/cakes.svg" alt="dress & frock" width="30"/>
            </div>

            <div class="category-content-box">

              <div class="category-content-flex">
                <h3 class="category-item-title">Cakes</h3>

                <p class="category-item-amount">(53)</p>
              </div>

              <a href="#" class="category-btn">Show all</a>

            </div>

          </div>

          <div class="category-item">

            <div class="category-img-box">
              <img src="./assets/images/icons/brownies.svg" alt="winter wear" width="30"/>
            </div>

            <div class="category-content-box">

              <div class="category-content-flex">
                <h3 class="category-item-title">brownies</h3>

                <p class="category-item-amount">(58)</p>
              </div>

              <a href="#" class="category-btn">Show all</a>

            </div>

          </div>

          <div class="category-item">

            <div class="category-img-box">
              <img src="./assets/images/icons/pizza.svg" alt="glasses & lens" width="30"/>
            </div>

            <div class="category-content-box">

              <div class="category-content-flex">
                <h3 class="category-item-title">Pizza</h3>

                <p class="category-item-amount">(68)</p>
              </div>

              <a href="#" class="category-btn">Show all</a>

            </div>

          </div>

          <div class="category-item">

            <div class="category-img-box">
              <img src="./assets/images/icons/pudding.svg" alt="shorts & jeans" width="30"/>
            </div>

            <div class="category-content-box">

              <div class="category-content-flex">
                <h3 class="category-item-title">Pudding</h3>

                <p class="category-item-amount">(84)</p>
              </div>

              <a href="#" class="category-btn">Show all</a>

            </div>

          </div>

          <div class="category-item">

            <div class="category-img-box">
              <img src="./assets/images/icons/lasanga.svg" alt="t-shirts" width="30"/>
            </div>

            <div class="category-content-box">

              <div class="category-content-flex">
                <h3 class="category-item-title">lasanga</h3>

                <p class="category-item-amount">(35)</p>
              </div>

              <a href="#" class="category-btn">Show all</a>

            </div>

          </div>

          <div class="category-item">

            <div class="category-img-box">
              <img src="./assets/images/icons/ChocolateMousse.svg" alt="jacket" width="30"/>
            </div>

            <div class="category-content-box">

              <div class="category-content-flex">
                <h3 class="category-item-title">Chocolate Mousse</h3>

                <p class="category-item-amount">(16)</p>
              </div>

              <a href="#" class="category-btn">Show all</a>

            </div>

          </div>

          <div class="category-item">

            <div class="category-img-box">
              <img src="./assets/images/icons/wedding.svg" alt="watch" width="30"/>
            </div>

            <div class="category-content-box">

              <div class="category-content-flex">
                <h3 class="category-item-title">Wedding Structures</h3>

                <p class="category-item-amount">(27)</p>
              </div>

              <a href="#" class="category-btn">Show all</a>

            </div>

          </div>

          <div class="category-item">

            <div class="category-img-box">
              <img src="./assets/images/icons/cupcake.svg" alt="hat & caps" width="30"/>
            </div>

            <div class="category-content-box">

              <div class="category-content-flex">
                <h3 class="category-item-title">CupCakes</h3>

                <p class="category-item-amount">(39)</p>
              </div>

              <a href="#" class="category-btn">Show all</a>

            </div>

          </div>

        </div>

      </div>

    </div>





    {/* 
      - PRODUCT
     */}

    <div class="product-container">

      <div class="container">


        {/* 
          - SIDEBAR
         */}

        <div class="sidebar  has-scrollbar" data-mobile-menu>

        <div class="sidebar-category">

          <div class="sidebar-top">
            <h2 class="sidebar-title">Category</h2>

            <button class="sidebar-close-btn" data-mobile-menu-close-btn="">
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>

          <ul class="sidebar-menu-category-list">

            <li class="sidebar-menu-category">

              <button class="sidebar-accordion-menu" data-accordion-btn>

                <div class="menu-title-flex">
                  <img src="./assets/images/icons/cakes.svg" alt="clothes" width="20" height="20"
                    class="menu-title-img"/>

                  <p class="menu-title">cakes</p>
                </div>

                <div>
                  <ion-icon name="add-outline" class="add-icon"></ion-icon>
                  <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                </div>

              </button>

              <ul class="sidebar-submenu-category-list" data-accordion>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">chocolateCake</p>
                    <data value="300" class="stock" title="Available Stock">300</data>
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Cheese Cake</p>
                    <data value="60" class="stock" title="Available Stock">60</data>
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Lava Cake </p>
                    <data value="50" class="stock" title="Available Stock">50</data>
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Birthday Cake</p>
                    <data value="87" class="stock" title="Available Stock">87</data>
                  </a>
                </li>

              </ul>

            </li>

            <li class="sidebar-menu-category">

              <button class="sidebar-accordion-menu" data-accordion-btn>

                <div class="menu-title-flex">
                  <img src="./assets/images/icons/brownies.svg" alt="footwear" class="menu-title-img" width="20"
                    height="20"/>

                  <p class="menu-title">Brownies</p>
                </div>

                <div>
                  <ion-icon name="add-outline" class="add-icon"></ion-icon>
                  <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                </div>

              </button>

              <ul class="sidebar-submenu-category-list" data-accordion>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">White Brownies</p>
                    <data value="45" class="stock" title="Available Stock">45</data>
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Chocolate Brownis</p>
                    <data value="75" class="stock" title="Available Stock">75</data>
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">weddingCake Brownies</p>
                    <data value="35" class="stock" title="Available Stock">35</data>
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">sample 01</p>
                    <data value="26" class="stock" title="Available Stock">26</data>
                  </a>
                </li>

              </ul>

            </li>

            <li class="sidebar-menu-category">

              <button class="sidebar-accordion-menu" data-accordion-btn>

                <div class="menu-title-flex">
                  <img src="./assets/images/icons/pizza.svg" alt="clothes" class="menu-title-img" width="20"
                    height="20"/>

                  <p class="menu-title">pizza</p>
                </div>

                <div>
                  <ion-icon name="add-outline" class="add-icon"></ion-icon>
                  <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                </div>

              </button>

              <ul class="sidebar-submenu-category-list" data-accordion>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Chicken</p>
                    <data value="46" class="stock" title="Available Stock">46</data>
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Breef</p>
                    <data value="73" class="stock" title="Available Stock">73</data>
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Cheese</p>
                    <data value="61" class="stock" title="Available Stock">61</data>
                  </a>
                </li>

              </ul>

            </li>

            <li class="sidebar-menu-category">

              <button class="sidebar-accordion-menu" data-accordion-btn>

                <div class="menu-title-flex">
                  <img src="./assets/images/icons/pudding.svg" alt="perfume" class="menu-title-img" width="20"
                    height="20"/>

                  <p class="menu-title">pudding</p>
                </div>

                <div>
                  <ion-icon name="add-outline" class="add-icon"></ion-icon>
                  <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                </div>

              </button>

              <ul class="sidebar-submenu-category-list" data-accordion>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">sample 01</p>
                    <data value="12" class="stock" title="Available Stock">12 pcs</data>
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">sample 02</p>
                    <data value="60" class="stock" title="Available Stock">60 pcs</data>
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">sample 03</p>
                    <data value="50" class="stock" title="Available Stock">50 pcs</data>
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">sample 04k</p>
                    <data value="87" class="stock" title="Available Stock">87 pcs</data>
                  </a>
                </li>

              </ul>

            </li>

            <li class="sidebar-menu-category">

              <button class="sidebar-accordion-menu" data-accordion-btn>

                <div class="menu-title-flex">
                  <img src="./assets/images/icons/buriani.svg" alt="cosmetics" class="menu-title-img" width="20"
                    height="20"/>

                  <p class="menu-title">buriani</p>
                </div>

                <div>
                  <ion-icon name="add-outline" class="add-icon"></ion-icon>
                  <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                </div>

              </button>

              <ul class="sidebar-submenu-category-list" data-accordion>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">sample 01</p>
                    <data value="68" class="stock" title="Available Stock">68</data>
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">sample 02</p>
                    <data value="46" class="stock" title="Available Stock">46</data>
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">sample 03</p>
                    <data value="79" class="stock" title="Available Stock">79</data>
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">sample 04</p>
                    <data value="23" class="stock" title="Available Stock">23</data>
                  </a>
                </li>

              </ul>

            </li>

            {/*  <li class="sidebar-menu-category">

              <button class="sidebar-accordion-menu" data-accordion-btn>

                <div class="menu-title-flex">
                  <img src="./assets/images/icons/glasses.svg" alt="glasses" class="menu-title-img" width="20"
                    height="20"/>

                  <p class="menu-title">Glasses</p>
                </div>

                <div>
                  <ion-icon name="add-outline" class="add-icon"></ion-icon>
                  <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                </div>

              </button>

              <ul class="sidebar-submenu-category-list" data-accordion>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Sunglasses</p>
                    <data value="50" class="stock" title="Available Stock">50</data>
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Lenses</p>
                    <data value="48" class="stock" title="Available Stock">48</data>
                  </a>
                </li>

              </ul>

            </li> */}

            {/* <!-- <li class="sidebar-menu-category">

              <button class="sidebar-accordion-menu" data-accordion-btn>

                <div class="menu-title-flex">
                  <img src="./assets/images/icons/bag.svg" alt="bags" class="menu-title-img" width="20" height="20">

                  <p class="menu-title">Bags</p>
                </div>

                <div>
                  <ion-icon name="add-outline" class="add-icon"></ion-icon>
                  <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                </div>

              </button>

              <ul class="sidebar-submenu-category-list" data-accordion>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Shopping Bag</p>
                    <data value="62" class="stock" title="Available Stock">62</data>
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Gym Backpack</p>
                    <data value="35" class="stock" title="Available Stock">35</data>
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Purse</p>
                    <data value="80" class="stock" title="Available Stock">80</data>
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Wallet</p>
                    <data value="75" class="stock" title="Available Stock">75</data>
                  </a>
                </li> -->

              </ul>

            </li> */}

          </ul>

        </div>

        {/*  side bar best saler avalability   */}

        <div class="product-showcase">

          <h3 class="showcase-heading">best sellers</h3>

          <div class="showcase-wrapper">

            <div class="showcase-container">

              <div class="showcase">

                <a href="#" class="showcase-img-box">
                  <img src="./assets/images/product/event/21.jpg" alt="baby fabric shoes" width="75" height="75"
                    class="showcase-img"/>
                </a>

                <div class="showcase-content">

                  <a href="#">
                    <h4 class="showcase-title">annyversary cake</h4>
                  </a>

                  <div class="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <div class="price-box">
                    <del>$5.00</del>
                    <p class="price">$4.00</p>
                  </div>

                </div>

              </div>

              <div class="showcase">

                <a href="#" class="showcase-img-box">
                  <img src="./assets/images/product/birthday/26.jpg" alt="men's hoodies t-shirt" class="showcase-img"
                    width="75" height="75"/>
                </a>

                <div class="showcase-content">

                  <a href="#">
                    <h4 class="showcase-title">white cream</h4>
                  </a>
                  <div class="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-half-outline"></ion-icon>
                  </div>

                  <div class="price-box">
                    <del>$17.00</del>
                    <p class="price">$7.00</p>
                  </div>

                </div>

              </div>

              <div class="showcase">

                <a href="#" class="showcase-img-box">
                  <img src="./assets/images/product/birthday/28.jpg" alt="girls t-shirt" class="showcase-img" width="75"
                    height="75"/>
                </a>

                <div class="showcase-content">

                  <a href="#">
                    <h4 class="showcase-title">oreo chocolateCake</h4>
                  </a>
                  <div class="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-half-outline"></ion-icon>
                  </div>

                  <div class="price-box">
                    <del>$5.00</del>
                    <p class="price">$3.00</p>
                  </div>

                </div>

              </div>

              <div class="showcase">

                <a href="#" class="showcase-img-box">
                  <img src="./assets/images/product/birthday/42.jpg" alt="woolen hat for men" class="showcase-img" width="75"
                    height="75"/>
                </a>

                <div class="showcase-content">

                  <a href="#">
                    <h4 class="showcase-title">dairy milk chocolate</h4>
                  </a>
                  <div class="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <div class="price-box">
                    <del>$15.00</del>
                    <p class="price">$12.00</p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        </div>



        <div class="product-box">

          {/* <!--
            - PRODUCT MINIMAL
          --> */}

          <div class="product-minimal">

            <div class="product-showcase">

              <h2 class="title">New Arrivals</h2>

              <div class="showcase-wrapper has-scrollbar">

                <div class="showcase-container">

                  <div class="showcase">
                  
                    <a href="#" class="showcase-img-box">
                      <img src="./assets/images/product/chocolateCake/1.jpg" alt="relaxed short full sleeve t-shirt" width="70" class="showcase-img"/>
                    </a>

                    <div class="showcase-content">

                      

                      <Link to ="/cart"><h4 class="showcase-title">Chocolate & white </h4></Link>

                      <div class="price-box">
                        <p class="price">$45.00</p>
                        <del>$12.00</del>
                      </div>

                    </div>

                  </div>

                  <div class="showcase">
                  
                    <a href="#" class="showcase-img-box">
                      <img src="./assets/images/product/event/6.jpg" alt="girls pink embro design top" class="showcase-img" width="70"/>
                    </a>
                  
                    <div class="showcase-content">
                  
                      <Link to="/cart"><h4 class="showcase-title">Gold with lover cake</h4></Link>
                  
                      <div class="price-box">
                        <p class="price">$61.00</p>
                        <del>$9.00</del>
                      </div>
                  
                    </div>
                  
                  </div>

                  <div class="showcase">
                  
                    <a href="#" class="showcase-img-box">
                      <img src="./assets/images/product/event/22.jpg" alt="black floral wrap midi skirt" class="showcase-img"
                        width="70"/>
                    </a>
                  
                    <div class="showcase-content">

                    <Link to="/cart"><h4 class="showcase-title">Annyversary celebration</h4></Link>
                  
                  
                      <div class="price-box">
                        <p class="price">$76.00</p>
                        <del>$25.00</del>
                      </div>
                  
                    </div>
                  
                  </div>

                  <div class="showcase">
                  
                    <a href="#" class="showcase-img-box">
                      <img src="./assets/images/product/weddingCake/27.jpg" alt="pure garment dyed cotton shirt" class="showcase-img"
                        width="70"/>
                    </a>
                  
                    <div class="showcase-content">
                    <Link to="/cart"> <h4 class="showcase-title">for engagement</h4></Link>
                  
                  
                      <div class="price-box">
                        <p class="price">$68.00</p>
                        <del>$31.00</del>
                      </div>
                  
                    </div>
                  
                  </div>

                </div>

                {/* <div class="showcase-container">
                
                  <div class="showcase">
                
                    <a href="#" class="showcase-img-box">
                      <img src="./assets/images/products/jacket-5.jpg" alt="men yarn fleece full-zip jacket" class="showcase-img"
                        width="70"/>
                    </a>
                
                    <div class="showcase-content">
                
                      <a href="#">
                        <h4 class="showcase-title">MEN Yarn Fleece Full-Zip Jacket</h4>
                      </a>
                
                      <a href="#" class="showcase-category">Winter wear</a>
                
                      <div class="price-box">
                        <p class="price">$61.00</p>
                        <del>$11.00</del>
                      </div>
                
                    </div>
                
                  </div>
                
                  <div class="showcase">
                
                    <a href="#" class="showcase-img-box">
                      <img src="./assets/images/products/jacket-1.jpg" alt="mens winter leathers jackets" class="showcase-img"
                        width="70"/>
                    </a>
                
                    <div class="showcase-content">
                
                      <a href="#">
                        <h4 class="showcase-title">Mens Winter Leathers Jackets</h4>
                      </a>
                
                      <a href="#" class="showcase-category">Winter wear</a>
                
                      <div class="price-box">
                        <p class="price">$32.00</p>
                        <del>$20.00</del>
                      </div>
                
                    </div>
                
                  </div>
                
                  <div class="showcase">
                
                    <a href="#" class="showcase-img-box">
                      <img src="./assets/images/products/jacket-3.jpg" alt="mens winter leathers jackets" class="showcase-img"
                        width="70"/>
                    </a>
                
                    <div class="showcase-content">
                
                      <a href="#">
                        <h4 class="showcase-title">Mens Winter Leathers Jackets</h4>
                      </a>
                
                      <a href="#" class="showcase-category">Jackets</a>
                
                      <div class="price-box">
                        <p class="price">$50.00</p>
                        <del>$25.00</del>
                      </div>
                
                    </div>
                
                  </div>
                
                  <div class="showcase">
                
                    <a href="#" class="showcase-img-box">
                      <img src="./assets/images/products/shorts-1.jpg" alt="better basics french terry sweatshorts" class="showcase-img"
                        width="70"/>
                    </a>
                
                    <div class="showcase-content">
                
                      <a href="#">
                        <h4 class="showcase-title">Better Basics French Terry Sweatshorts</h4>
                      </a>
                
                      <a href="#" class="showcase-category">Shorts</a>
                
                      <div class="price-box">
                        <p class="price">$20.00</p>
                        <del>$10.00</del>
                      </div>
                
                    </div>
                
                  </div>
                
                </div> */}

              </div>

            </div>

            <div class="product-showcase">
            
              <h2 class="title">Trending</h2>
            
              <div class="showcase-wrapper  has-scrollbar">
            
                <div class="showcase-container">
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src="./assets/images/product/buruani/14.jpg" alt="running & trekking shoes - white" class="showcase-img"
                        width="70"/>
                    </a>
            
                    <div class="showcase-content">
            
                    <Link to="/cart"><h4 class="showcase-title">sawan</h4></Link>
            
            
                      <div class="price-box">
                        <p class="price">$49.00</p>
                        <del>$15.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src="./assets/images/product/buruani/15.jpg" alt="trekking & running shoes - black" class="showcase-img"
                        width="70"/>
                    </a>
            
                    <div class="showcase-content">
            
                    <Link to="/cart"><h4 class="showcase-title">biryani pot</h4></Link>
            
            
                      <div class="price-box">
                        <p class="price">$78.00</p>
                        <del>$36.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src="./assets/images/product/buruani/19.jpg" alt="womens party wear shoes" class="showcase-img"
                        width="70"/>
                    </a>
            
                    <div class="showcase-content">
            
                    <Link to="/cart"><h4 class="showcase-title">for perperson</h4></Link>
            
                      <div class="price-box">
                        <p class="price">$94.00</p>
                        <del>$42.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src="./assets/images/product/buruani/17.jpg" alt="sports claw women's shoes" class="showcase-img"
                        width="70"/>
                    </a>
            
                    <div class="showcase-content">
            
                      <Link to="/cart"><h4 class="showcase-title">five person</h4></Link>
            
            
                      <div class="price-box">
                        <p class="price">$54.00</p>
                        <del>$65.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                </div>
            
                {/* <div class="showcase-container">
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src="./assets/images/products/sports-6.jpg" alt="air tekking shoes - white" class="showcase-img"
                        width="70"/>
                    </a>
            
                    <div class="showcase-content">
            
                      <a href="#">
                        <h4 class="showcase-title">Air Trekking Shoes - white</h4>
                      </a>
            
                      <a href="#" class="showcase-category">Sports</a>
            
                      <div class="price-box">
                        <p class="price">$52.00</p>
                        <del>$55.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src="./assets/images/products/shoe-3.jpg" alt="Boot With Suede Detail" class="showcase-img" width="70"/>
                    </a>
            
                    <div class="showcase-content">
            
                      <a href="#">
                        <h4 class="showcase-title">Boot With Suede Detail</h4>
                      </a>
            
                      <a href="#" class="showcase-category">boots</a>
            
                      <div class="price-box">
                        <p class="price">$20.00</p>
                        <del>$30.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src="./assets/images/products/shoe-1.jpg" alt="men's leather formal wear shoes" class="showcase-img"
                        width="70"/>
                    </a>
            
                    <div class="showcase-content">
            
                      <a href="#">
                        <h4 class="showcase-title">Men's Leather Formal Wear shoes</h4>
                      </a>
            
                      <a href="#" class="showcase-category">formal</a>
            
                      <div class="price-box">
                        <p class="price">$56.00</p>
                        <del>$78.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src="./assets/images/products/shoe-2.jpg" alt="casual men's brown shoes" class="showcase-img" width="70"/>
                    </a>
            
                    <div class="showcase-content">
            
                      <a href="#">
                        <h4 class="showcase-title">Casual Men's Brown shoes</h4>
                      </a>
            
                      <a href="#" class="showcase-category">Casual</a>
            
                      <div class="price-box">
                        <p class="price">$50.00</p>
                        <del>$55.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                </div> */}
            
              </div>
            
            </div>

            <div class="product-showcase">
            
              <h2 class="title">Top Rated</h2>
            
              <div class="showcase-wrapper  has-scrollbar">
            
                <div class="showcase-container">
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src="./assets/images/product/brownies'/10.jpg" alt="pocket watch leather pouch" class="showcase-img"
                        width="70"/>
                    </a>
            
                    <div class="showcase-content">
            
                    <Link to="/cart"><Link to="/cart"><h4 class="showcase-title">brownies</h4></Link></Link>
            
            
                      <div class="price-box">
                        <p class="price">$50.00</p>
                        <del>$34.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src="./assets/images/product/brownies'/37.jpg" alt="silver deer heart necklace" class="showcase-img"
                        width="70"/>
                    </a>
            
                    <div class="showcase-content">
            
                    <Link to="/cart"><h4 class="showcase-title">white & chocolate</h4></Link>
            
            
                      <div class="price-box">
                        <p class="price">$84.00</p>
                        <del>$30.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src="./assets/images/product/brownies'/38.jpg" alt="titan 100 ml womens perfume" class="showcase-img"
                        width="70"/>
                    </a>
            
                    <div class="showcase-content">
            
                    <Link to="/cart"><h4 class="showcase-title">wedding favors</h4></Link>
            
            
                      <div class="price-box">
                        <p class="price">$42.00</p>
                        <del>$10.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src="./assets/images/product/brownies'/45.jpg" alt="men's leather reversible belt" class="showcase-img"
                        width="70"/>
                    </a>
            
                    <div class="showcase-content">
            
                    <Link to="/cart"><h4 class="showcase-title">strawberry & chocolate</h4></Link>
            
            
                      <div class="price-box">
                        <p class="price">$24.00</p>
                        <del>$10.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                </div>
            
                {/* <div class="showcase-container">
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src="./assets/images/products/jewellery-2.jpg" alt="platinum zircon classic ring" class="showcase-img"
                        width="70"/>
                    </a>
            
                    <div class="showcase-content">
            
                      <a href="#">
                        <h4 class="showcase-title">platinum Zircon Classic Ring</h4>
                      </a>
            
                      <a href="#" class="showcase-category">jewellery</a>
            
                      <div class="price-box">
                        <p class="price">$62.00</p>
                        <del>$65.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src="./assets/images/products/watch-1.jpg" alt="smart watche vital plus" class="showcase-img" width="70"/>
                    </a>
            
                    <div class="showcase-content">
            
                      <a href="#">
                        <h4 class="showcase-title">Smart watche Vital Plus</h4>
                      </a>
            
                      <a href="#" class="showcase-category">Watches</a>
            
                      <div class="price-box">
                        <p class="price">$56.00</p>
                        <del>$78.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src="./assets/images/products/shampoo.jpg" alt="shampoo conditioner packs" class="showcase-img"
                        width="70"/>
                    </a>
            
                    <div class="showcase-content">
            
                      <a href="#">
                        <h4 class="showcase-title">shampoo conditioner packs</h4>
                      </a>
            
                      <a href="#" class="showcase-category">cosmetics</a>
            
                      <div class="price-box">
                        <p class="price">$20.00</p>
                        <del>$30.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div class="showcase">
            
                    <a href="#" class="showcase-img-box">
                      <img src="./assets/images/products/jewellery-1.jpg" alt="rose gold peacock earrings" class="showcase-img"
                        width="70"/>
                    </a>
            
                    <div class="showcase-content">
            
                      <a href="#">
                        <h4 class="showcase-title">Rose Gold Peacock Earrings</h4>
                      </a>
            
                      <a href="#" class="showcase-category">jewellery</a>
            
                      <div class="price-box">
                        <p class="price">$20.00</p>
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

          <div class="product-featured">

            <h2 class="title">Deal of the day</h2>

            <div class="showcase-wrapper has-scrollbar">

              <div class="showcase-container">

                <div class="showcase">
                  
                  <div class="showcase-banner">
                    <img src="./assets/images/product/birthday/20.jpg" alt="shampoo, conditioner & facewash packs" class="showcase-img"/>
                  </div>

                  <div class="showcase-content">
                    
                    <div class="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                    </div>

                    <a href="#">
                      <h3 class="showcase-title">blue,white & chocolate</h3>
                    </a>

                    <p class="showcase-desc">
                      "Indulging in a Symphony of Blue, White, and Chocolate Bliss! 🍰✨"
                    </p>

                    <div class="price-box">
                      <p class="price">$150.00</p>

                      <del>$200.00</del>
                    </div>

                    <button class="add-cart-btn">add to cart</button>

                    <div class="showcase-status">
                      <div class="wrapper">
                        <p>
                          already sold: <b>20</b>
                        </p>

                        <p>
                          available: <b>40</b>
                        </p>
                      </div>

                      <div class="showcase-status-bar"></div>
                    </div>

                    <div class="countdown-box">

                      <p class="countdown-desc">
                        Hurry Up! Offer ends in:
                      </p>

                      <div class="countdown">

                        <div class="countdown-content">

                          <p class="display-number">360</p>

                          <p class="display-text">Days</p>

                        </div>

                        <div class="countdown-content">
                          <p class="display-number">24</p>
                          <p class="display-text">Hours</p>
                        </div>

                        <div class="countdown-content">
                          <p class="display-number">59</p>
                          <p class="display-text">Min</p>
                        </div>

                        <div class="countdown-content">
                          <p class="display-number">00</p>
                          <p class="display-text">Sec</p>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div class="showcase-container">
              
                <div class="showcase">
              
                  <div class="showcase-banner">
                    <img src="./assets/images/product/pudding/35.jpg" alt="Rose Gold diamonds Earring" class="showcase-img"/>
                  </div>
              
                  <div class="showcase-content">
              
                    <div class="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                    </div>
              
                    <h3 class="showcase-title">
                      <a href="#" class="showcase-title">white and chocolate mousse</a>
                    </h3>
              
                    <p class="showcase-desc">
                      "Indulge in the harmonious blend of velvety white and rich chocolate mousse perfection."
                    </p>
              
                    <div class="price-box">
                      <p class="price">$1990.00</p>
                      <del>$2000.00</del>
                    </div>
              
                    <button class="add-cart-btn">add to cart</button>
              
                    <div class="showcase-status">
                      <div class="wrapper">
                        <p> already sold: <b>15</b> </p>
              
                        <p> available: <b>40</b> </p>
                      </div>
              
                      <div class="showcase-status-bar"></div>
                    </div>
              
                    <div class="countdown-box">
              
                      <p class="countdown-desc">Hurry Up! Offer ends in:</p>
              
                      <div class="countdown">
                        <div class="countdown-content">
                          <p class="display-number">360</p>
                          <p class="display-text">Days</p>
                        </div>
              
                        <div class="countdown-content">
                          <p class="display-number">24</p>
                          <p class="display-text">Hours</p>
                        </div>
              
                        <div class="countdown-content">
                          <p class="display-number">59</p>
                          <p class="display-text">Min</p>
                        </div>
              
                        <div class="countdown-content">
                          <p class="display-number">00</p>
                          <p class="display-text">Sec</p>
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

          <div class="product-main">

            <h2 class="title">New Products</h2>

            <div class="product-grid">

              <div class="showcase">

                <div class="showcase-banner">

                  <img src="./assets/images/product/birthday/12.jpg" alt="Mens Winter Leathers Jackets" width="300" class="product-img default"/>
                  <img src="./assets/images/product/birthday/8.jpg" alt="Mens Winter Leathers Jackets" width="300" class="product-img hover"/>

                  <p class="showcase-badge">15%</p>

                  <div class="showcase-actions">

                    <button class="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button class="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>

                    <button class="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>

                    <button class="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>

                  </div>

                </div>

                <div class="showcase-content">

                  <a href="#" class="showcase-category">jacket</a>

                  <a href="#">
                    <h3 class="showcase-title">Mens Winter Leathers Jackets</h3>
                  </a>

                  <div class="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                  </div>

                  <div class="price-box">
                    <p class="price">$48.00</p>
                    <del>$75.00</del>
                  </div>

                </div>

              </div>

              <div class="showcase">
              
                <div class="showcase-banner">
                  <img src="./assets/images/product/birthday/24.jpg" alt="Pure Garment Dyed Cotton Shirt" class="product-img default"
                    width="300"/>
                  <img src="./assets/images/product/birthday/28.jpg" alt="Pure Garment Dyed Cotton Shirt" class="product-img hover"
                    width="300"/>
              
                  <p class="showcase-badge angle black">sale</p>
              
                  <div class="showcase-actions">
                    <button class="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div class="showcase-content">
                  <a href="#" class="showcase-category">shirt</a>
              
                  <h3>
                    <a href="#" class="showcase-title">Pure Garment Dyed Cotton Shirt</a>
                  </h3>
              
                  <div class="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                  </div>
              
                  <div class="price-box">
                    <p class="price">$45.00</p>
                    <del>$56.00</del>
                  </div>
              
                </div>
              
              </div>

              <div class="showcase">
              
                <div class="showcase-banner">
                  <img src="./assets/images/product/brownies'/10.jpg" alt="MEN Yarn Fleece Full-Zip Jacket" class="product-img default"
                    width="300"/>
                  <img src="./assets/images/product/brownies'/43.jpg" alt="MEN Yarn Fleece Full-Zip Jacket" class="product-img hover"
                    width="300"/>
              
                  <div class="showcase-actions">
                    <button class="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div class="showcase-content">
                  <a href="#" class="showcase-category">Jacket</a>
              
                  <h3>
                    <a href="#" class="showcase-title">MEN Yarn Fleece Full-Zip Jacket</a>
                  </h3>
              
                  <div class="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                  </div>
              
                  <div class="price-box">
                    <p class="price">$58.00</p>
                    <del>$65.00</del>
                  </div>
              
                </div>
              
              </div>

              <div class="showcase">
              
                <div class="showcase-banner">
                  <img src="./assets/images/product/pudding/29.jpg" alt="Black Floral Wrap Midi Skirt" class="product-img default"
                    width="300"/>
                  <img src="./assets/images/product/pudding/7.jpg" alt="Black Floral Wrap Midi Skirt" class="product-img hover"
                    width="300"/>
              
                  <p class="showcase-badge angle pink">new</p>
              
                  <div class="showcase-actions">
                    <button class="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div class="showcase-content">
                  <a href="#" class="showcase-category">skirt</a>
              
                  <h3>
                    <a href="#" class="showcase-title">Black Floral Wrap Midi Skirt</a>
                  </h3>
              
                  <div class="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
              
                  <div class="price-box">
                    <p class="price">$25.00</p>
                    <del>$35.00</del>
                  </div>
              
                </div>
              
              </div>

              <div class="showcase">
              
                <div class="showcase-banner">
                  <img src="./assets/images/product/buruani/19.jpg" alt="Casual Men's Brown shoes" class="product-img default"
                    width="300"/>
                  <img src="./assets/images/product/buruani/16.jpg" alt="Casual Men's Brown shoes" class="product-img hover"
                    width="300"/>
              
                  <div class="showcase-actions">
                    <button class="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div class="showcase-content">
                  <a href="#" class="showcase-category">casual</a>
              
                  <h3>
                    <a href="#" class="showcase-title">Casual Men's Brown shoes</a>
                  </h3>
              
                  <div class="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
              
                  <div class="price-box">
                    <p class="price">$99.00</p>
                    <del>$105.00</del>
                  </div>
              
                </div>
              
              </div>

              <div class="showcase">
              
                <div class="showcase-banner">
                  <img src="./assets/images/product/chocolateCake/2.jpg" alt="Pocket Watch Leather Pouch" class="product-img default"
                    width="300"/>
                  <img src="./assets/images/product/chocolateCake/25.jpg" alt="Pocket Watch Leather Pouch" class="product-img hover"
                    width="300"/>
              
                  <p class="showcase-badge angle black">sale</p>
              
                  <div class="showcase-actions">
                    <button class="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div class="showcase-content">
                  <a href="#" class="showcase-category">watches</a>
              
                  <h3>
                    <a href="#" class="showcase-title">Pocket Watch Leather Pouch</a>
                  </h3>
              
                  <div class="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                  </div>
              
                  <div class="price-box">
                    <p class="price">$150.00</p>
                    <del>$170.00</del>
                  </div>
              
                </div>
              
              </div>

              <div class="showcase">
              
                <div class="showcase-banner">
                  <img src="./assets/images/product/event/40.jpg" alt="Smart watche Vital Plus" class="product-img default"
                    width="300"/>
                  <img src="./assets/images/product/event/41.jpg" alt="Smart watche Vital Plus" class="product-img hover" width="300"/>
              
                  <div class="showcase-actions">
                    <button class="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div class="showcase-content">
                  <a href="#" class="showcase-category">watches</a>
              
                  <h3>
                    <a href="#" class="showcase-title">Smart watche Vital Plus</a>
                  </h3>
              
                  <div class="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                  </div>
              
                  <div class="price-box">
                    <p class="price">$100.00</p>
                    <del>$120.00</del>
                  </div>
              
                </div>
              
              </div>

              <div class="showcase">
              
                <div class="showcase-banner">
                  <img src="./assets/images/product/birthday/3.jpg" alt="Womens Party Wear Shoes" class="product-img default"
                    width="300"/>
                  <img src="./assets/images/product/birthday/26.jpg" alt="Womens Party Wear Shoes" class="product-img hover"
                    width="300"/>
              
                  <p class="showcase-badge angle black">sale</p>
              
                  <div class="showcase-actions">
                    <button class="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div class="showcase-content">
                  <a href="#" class="showcase-category">party wear</a>
              
                  <h3>
                    <a href="#" class="showcase-title">Womens Party Wear Shoes</a>
                  </h3>
              
                  <div class="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                  </div>
              
                  <div class="price-box">
                    <p class="price">$25.00</p>
                    <del>$30.00</del>
                  </div>
              
                </div>
              
              </div>

              {/* <div class="showcase">
              
                <div class="showcase-banner">
                  <img src="./assets/images/products/jacket-1.jpg" alt="Mens Winter Leathers Jackets" class="product-img default"
                    width="300"/>
                  <img src="./assets/images/products/jacket-2.jpg" alt="Mens Winter Leathers Jackets" class="product-img hover"
                    width="300"/>
              
                  <div class="showcase-actions">
                    <button class="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div class="showcase-content">
                  <a href="#" class="showcase-category">jacket</a>
              
                  <h3>
                    <a href="#" class="showcase-title">Mens Winter Leathers Jackets</a>
                  </h3>
              
                  <div class="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                  </div>
              
                  <div class="price-box">
                    <p class="price">$32.00</p>
                    <del>$45.00</del>
                  </div>
              
                </div>
              
              </div>

              <div class="showcase">
              
                <div class="showcase-banner">
                  <img src="./assets/images/products/sports-2.jpg" alt="Trekking & Running Shoes - black" class="product-img default"
                    width="300"/>
                  <img src="./assets/images/products/sports-4.jpg" alt="Trekking & Running Shoes - black" class="product-img hover"
                    width="300"/>
              
                  <p class="showcase-badge angle black">sale</p>
              
                  <div class="showcase-actions">
                    <button class="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div class="showcase-content">
                  <a href="#" class="showcase-category">sports</a>
              
                  <h3>
                    <a href="#" class="showcase-title">Trekking & Running Shoes - black</a>
                  </h3>
              
                  <div class="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                  </div>
              
                  <div class="price-box">
                    <p class="price">$58.00</p>
                    <del>$64.00</del>
                  </div>
              
                </div>
              
              </div>

              <div class="showcase">
              
                <div class="showcase-banner">
                  <img src="./assets/images/products/shoe-1.jpg" alt="Men's Leather Formal Wear shoes" class="product-img default"
                    width="300"/>
                  <img src="./assets/images/products/shoe-1_1.jpg" alt="Men's Leather Formal Wear shoes" class="product-img hover"
                    width="300"/>
              
                  <div class="showcase-actions">
                    <button class="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div class="showcase-content">
                  <a href="#" class="showcase-category">formal</a>
              
                  <h3>
                    <a href="#" class="showcase-title">Men's Leather Formal Wear shoes</a>
                  </h3>
              
                  <div class="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                  </div>
              
                  <div class="price-box">
                    <p class="price">$50.00</p>
                    <del>$65.00</del>
                  </div>
              
                </div>
              
              </div>

              <div class="showcase">
              
                <div class="showcase-banner">
                  <img src="./assets/images/products/shorts-1.jpg" alt="Better Basics French Terry Sweatshorts"
                    class="product-img default" width="300"/>
                  <img src="./assets/images/products/shorts-2.jpg" alt="Better Basics French Terry Sweatshorts"
                    class="product-img hover" width="300"/>
              
                  <p class="showcase-badge angle black">sale</p>
              
                  <div class="showcase-actions">
                    <button class="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button class="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div class="showcase-content">
                  <a href="#" class="showcase-category">shorts</a>
              
                  <h3>
                    <a href="#" class="showcase-title">Better Basics French Terry Sweatshorts</a>
                  </h3>
              
                  <div class="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                  </div>
              
                  <div class="price-box">
                    <p class="price">$78.00</p>
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

      <div class="container">

        <div class="testimonials-box">

          {/* <!--
            - TESTIMONIALS
          --> */}

          <div class="testimonial">

            <h2 class="title">testimonial</h2>

            <div class="testimonial-card">

              <img src="./assets/images/testimonial-1.png" alt="alan doe" class="testimonial-banner" width="80" height="80"/>

              <p class="testimonial-name">Alan Doe</p>

              <p class="testimonial-title">CEO & Founder Invision</p>

              <img src="./assets/images/icons/quotes.svg" alt="quotation" class="quotation-img" width="26"/>

              <p class="testimonial-desc">
                Lorem ipsum dolor sit amet consectetur Lorem ipsum
                dolor dolor sit amet.
              </p>

            </div>

          </div>



          {/* <!--
            - CTA
          --> */}

          <div class="cta-container">

            <img src="./assets/images/cta-banner.jpg" alt="summer collection" class="cta-banner"/>

            <a href="#" class="cta-content">

              <p class="discount">25% Discount</p>

              <h2 class="cta-title">Summer collection</h2>

              <p class="cta-text">Starting @ $10</p>

              <button class="cta-btn">Shop now</button>

            </a>

          </div>



          {/* <!--
            - SERVICE
          --> */}

          <div class="service">

            <h2 class="title">Our Services</h2>

            <div class="service-container">

              <a href="#" class="service-item">

                <div class="service-icon">
                  <ion-icon name="boat-outline"></ion-icon>
                </div>

                <div class="service-content">

                  <h3 class="service-title">Islanddwide Delivery</h3>
                  <p class="service-desc">For Order Over $100</p>

                </div>

              </a>

              <a href="#" class="service-item">
              
                <div class="service-icon">
                  <ion-icon name="rocket-outline"></ion-icon>
                </div>
              
                <div class="service-content">
              
                  <h3 class="service-title">Fast delivery</h3>
                  <p class="service-desc">Around the torta area Orders Only</p>
              
                </div>
              
              </a>

              <a href="#" class="service-item">
              
                <div class="service-icon">
                  <ion-icon name="call-outline"></ion-icon>
                </div>
              
                <div class="service-content">
              
                  <h3 class="service-title">Best Online Support</h3>
                  <p class="service-desc">Hours: 8AM - 11PM</p>
              
                </div>
              
              </a>

              <a href="#" class="service-item">
              
                <div class="service-icon">
                  <ion-icon name="arrow-undo-outline"></ion-icon>
                </div>
              
                <div class="service-content">
              
                  <h3 class="service-title">Return Policy</h3>
                  <p class="service-desc">Easy & Free Return</p>
              
                </div>
              
              </a>

              <a href="#" class="service-item">
              
                <div class="service-icon">
                  <ion-icon name="ticket-outline"></ion-icon>
                </div>
              
                <div class="service-content">
              
                  <h3 class="service-title">30% money back</h3>
                  <p class="service-desc">For Order Over $100</p>
              
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

    <div class="blog">

      <div class="container">

        <div class="blog-container has-scrollbar">

          <div class="blog-card">

            <a href="#">
              <img src="./assets/images/blog-1.jpg" alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width="300" class="blog-banner"/>
            </a>

            <div class="blog-content">

              <a href="#" class="blog-category">Cakes</a>

              <a href="#">
                <h3 class="blog-title">Street-side Dessert Delights: Mastering the Curbside Cake Craze.</h3>
              </a>

              <p class="blog-meta">
                By <cite>Mr Admin</cite> / <time datetime="2022-04-06">Apr 06, 2022</time>
              </p>

            </div>

          </div>

          <div class="blog-card">
          
            <a href="#">
              <img src="./assets/images/blog-2.jpg" alt="Curbside fashion Trends: How to Win the Pickup Battle."
                class="blog-banner" width="300"/>
            </a>
          
            <div class="blog-content">
          
              <a href="#" class="blog-category">Brownies</a>
          
              <h3>
                <a href="#" class="blog-title">Curbside Cravings: Conquer the Pickup Competition with Irresistible Brownie Bliss.</a>
              </h3>
          
              <p class="blog-meta">
                By <cite>Mr Robin</cite> / <time datetime="2022-01-18">Jan 18, 2022</time>
              </p>
          
            </div>
          
          </div>

          <div class="blog-card">
          
            <a href="#">
              <img src="./assets/images/blog-3.jpg" alt="EBT vendors: Claim Your Share of SNAP Online Revenue."
                class="blog-banner" width="300"/>
            </a>
          
            <div class="blog-content">
          
              <a href="#" class="blog-category">buriani</a>
          
              <h3>
                <a href="#" class="blog-title">Biriani Bonanza: Secure Your Slice of Online EBT Revenue for Vendors.</a>
              </h3>
          
              <p class="blog-meta">
                By <cite>Mr Selsa</cite> / <time datetime="2022-02-10">Feb 10, 2022</time>
              </p>
          
            </div>
          
          </div>

          <div class="blog-card">
          
            <a href="#">
              <img src="./assets/images/blog-4.jpg" alt="Curbside fashion Trends: How to Win the Pickup Battle."
                class="blog-banner" width="300"/>
            </a>
          
            <div class="blog-content">
          
              <a href="#" class="blog-category">Pudding</a>
          
              <h3>
                <a href="#" class="blog-title">Curbside Confections: Mastering the Pickup Frenzy with Delectable Pudding Pleasures.</a>
              </h3>
          
              <p class="blog-meta">
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