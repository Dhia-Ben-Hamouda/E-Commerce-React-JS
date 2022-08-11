import React from "react";
import { FaShoppingCart, FaUserAlt, FaSearch, FaCog, FaSignOutAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState, useEffect } from "react";
import logo from "../images/logo.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState(useSelector(state => state.search.products));

  const count = useSelector(state => state.cart.quantity);

  useEffect(() => {

    const profile = sessionStorage.getItem("profile");

    if (profile) {
      setUser(JSON.parse(profile));
    }

  }, []);

  function clickHandler(e) {
    if (document.querySelector(".option-list").style.display === "none")
      document.querySelector(".option-list").style.display = "flex";
    else
      document.querySelector(".option-list").style.display = "none";
  }

  function signOutHandler() {
    sessionStorage.clear();
    window.location.href = "/"
  }

  function imgHandler() {
    window.location.href = "/";
  }

  return (
    <>
      <nav>
        <div className="logo-wrapper">
          <img onClick={imgHandler} alt="" src={logo} />
        </div>
        <ul className="desktop-list">
          <li>
            <a href="/computers">Computers</a>
          </li>
          <li>
            <a href="/keyboards">Keyboards</a>
          </li>
          <li>
            <a href="/mouses">Mouses</a>
          </li>
          <li>
            <a href="/screens">Screens</a>
          </li>
        </ul>
        <div className="action-container">
          <IconContext.Provider value={{ color: "white", size: "2rem" }}>
            <div className="search-container">
              <div className="search-icon">
                <FaSearch size={"1.25rem"} />
              </div>
              <input
                placeholder="Search for products"
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value) }}
              />
              <div className="list">
                {
                  searchTerm !== "" && <>
                    {
                      products.filter((product)=>{
                        return product.name.toLowerCase().includes(searchTerm.toLowerCase())
                      }).map((product, index) => {
                        if (index < 3) {
                          return (
                            <div key={index + 1} className="item">
                              <a href={`/product/${product._id}`}>
                                <img src={product.picture} alt="" />
                              </a>
                              <div>
                                <a href={`/product/${product._id}`}>
                                  <h3>{product.name.slice(0, 40)}...</h3>
                                </a>
                                <h4>{product.price} DT</h4>
                              </div>
                            </div>
                          );
                        }
                      })}
                      <div className="search-option">
                        <p>Click to see all products</p>
                        <a href={`/allProducts/${searchTerm}`}>
                          Products
                        </a>
                      </div>
                  </>
                }
              </div>
            </div>
            <div className="wrapper">
              {
                user ? <div onClick={clickHandler} className="wrap" style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%" }}>
                  <img style={{ cursor: "pointer", width: "100%", height: "95%", borderRadius: "50%" }} src={user.picture} alt="profilePicture" />

                  <IconContext.Provider value={{ size: "1rem" }}>
                    <ul className="option-list">
                      <li>
                        <FaCog />
                        <a href="/settings">Settings</a>
                      </li>
                      <li onClick={signOutHandler}>
                        <FaSignOutAlt />
                        <h3>Sign Out</h3>
                      </li>
                    </ul>
                  </IconContext.Provider>
                </div> : <a href="/signin">
                  <FaUserAlt size={"2.25rem"}/>
                </a>
              }
                <a href="/cart" className="cart">
                  <FaShoppingCart size={"2.5rem"}/>
                  <div className="num">
                    {
                      count
                    }
                  </div>
                </a>
            </div>
          </IconContext.Provider>
        </div>
      </nav>
      <ul className="mobile-list" style={{background:"white"}}>
        <li>
          <a href="/computers">Computers</a>
        </li>
        <li>
          <a href="/keyboards">Keyboards</a>
        </li>
        <li>
          <a href="/mouses">Mouses</a>
        </li>
        <li>
          <a href="/screens">Screens</a>
        </li>
      </ul>
    </>
  );
}

export default Navbar;