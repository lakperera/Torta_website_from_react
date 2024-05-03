import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import '../SearchBar.css';
import searchItem from '../SearchData.json'
import SearchResult from "../SearchResult";

const NavBar_ForCart = ({setResults,result})=>{
    const [input , setInput] = useState("");
    const history = useNavigate();





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
    return(
    <div>
        <div className="NavBar">

        <div className="Nav-container">

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
                

                <button className="action-btn">
                    <ion-icon name="heart-outline"></ion-icon>
                    <span className="count">0</span>
                </button>

                <button className="action-btn">
                    <ion-icon name="bag-handle-outline"></ion-icon>
                    <span className="count">0</span>
                </button>

            </div>

        </div>
</div>
    </div>
    );
}
export default NavBar_ForCart;