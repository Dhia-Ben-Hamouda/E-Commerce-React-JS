import React from "react";
import Navbar from "../Navbar.jsx";
import Mouse from "./Mouse.jsx";
import Filter from "./Filter.jsx";
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from "../Pagination.jsx";
import { FaSearch } from "react-icons/fa";
import MobileFilter from "./MobileFilter.jsx";
import { useSelector } from "react-redux";
import url from "../../api/baseURL.js";

export function clickHandler() {
  let filter = document.querySelector(".mobile-filter3");

  filter.classList.toggle("opened");
}

const Mouses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState(useSelector(state => state.search.products));
  const [loading, setLoading] = useState(false);
  const [mouses, setMouses] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);
  const [realPriceRange, setRealPriceRange] = useState([]);
  const [filters, setFilters] = useState({
    brand: [],
    wireless: [],
  })

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(`${url}/mouses/getAllMouses`, {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            page,
            ...filters,
            priceRange
          })
        });
        const data = await response.json();

        await new Promise(r => setTimeout(r, 500));

        setLoading(false);
        setMouses(data.mouses);
        setNumOfPages(data.numberOfPages);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [page, filters, realPriceRange]);

  return (
    <>
      <Navbar />
      <MobileFilter
        filters={filters}
        setFilters={setFilters}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        setRealPriceRange={setRealPriceRange}
      />
      <div className="pagination-filter">
        <div className="wrapper">
          <button onClick={clickHandler}>Filter By</button>
          <div className="search">
            <div className="search-icon">
              <FaSearch color="white" size={"1.25rem"} />
            </div>
            <input
              placeholder="Search for products"
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value) }}
            />
            <div className="mobile-search">
              {
                searchTerm !== "" && <>
                  {
                    products.filter((product) => {
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
        </div>
      </div>
      <div className="computer-wrapper">
        <Filter
          filters={filters}
          setFilters={setFilters}
          setPriceRange={setPriceRange}
          priceRange={priceRange}
          setRealPriceRange={setRealPriceRange}
        />
        <div className="computer-container">
          {
            loading ? <div className="loading-wrapper">
              <CircularProgress style={{ margin: "3rem" }} />
            </div> : mouses.map((mouse, index) => {
              return (
                <Mouse key={index}
                  id={mouse._id}
                  picture={mouse.picture}
                  description={mouse.description}
                  brand={mouse.brand}
                  price={mouse.price}
                  name={mouse.name}
                  wireless={mouse.wireless}
                />
              );
            })
          }
        </div>
      </div>
      <div className="pagination">
        <Pagination
          page={page}
          setPage={setPage}
          numOfPages={numOfPages}
        />
      </div>
    </>
  );
}

export default Mouses;