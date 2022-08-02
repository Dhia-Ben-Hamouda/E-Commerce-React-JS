import React from "react";
import { ImCross } from "react-icons/im";
import arrow from "../../images/arrow.png";
import { clickHandler } from "./Keyboards.jsx";
import { Slider } from "@mui/material";

const MobileFilter = ({ filters, setFilters, priceRange, setPriceRange, setRealPriceRange }) => {

  function handleFilters(e) {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "brand":
        if (e.target.checked) {
          const arr = filters.brand;
          arr.push(value);
          setFilters({ ...filters, brand: arr })
          console.log(filters);
        }
        else {
          let arr = filters.brand;
          arr = arr.filter((item) => item !== value);
          setFilters({ ...filters, brand: arr })
          console.log(filters);
        }
        break;
      case "wireless":
        if (e.target.checked) {
          const arr = filters.wireless;
          arr.push(value);
          setFilters({ ...filters, wireless: arr })
          console.log(filters);
        }
        else {
          let arr = filters.wireless;
          arr = arr.filter((item) => item !== value);
          setFilters({ ...filters, wireless: arr })
          console.log(filters);
        }
        break;
      case "mechanical":
        if (e.target.checked) {
          const arr = filters.mechanical;
          arr.push(value);
          setFilters({ ...filters, mechanical: arr })
          console.log(filters);
        }
        else {
          let arr = filters.mechanical;
          arr = arr.filter((item) => item !== value);
          setFilters({ ...filters, mechanical: arr })
          console.log(filters);
        }
        break;
      default:
        break;
    }
  }

  function toggleHandler(e) {
    const id = e.target.id;
    const target = document.getElementById(id).nextElementSibling;
    target.classList.toggle("active");
  }

  return (
    <div className="mobile-filter2">
      <div style={{ background: "#FCC312", alignSelf: "stretch", display: "flex", justifyContent: "flex-end", alignItems: "center", padding: ".5rem 1rem" }} onClick={clickHandler}>
        <ImCross color="#fff" />
      </div>
      <div className="filter-container">
        <div className="filter">
          <div className="header" id="price" onClick={toggleHandler}>
            <h2 id="price">Price</h2>
            <img style={{ width: ".7rem", marginRight: ".1rem" }} src={arrow} id="price" alt="" />
          </div>
          <div className="content">
            <div className="mobile-slider">
              <Slider
                className="s"
                step={200}
                style={{ position: "absolute", left: "0", color: "#777", transform: "scale(.7)", marginBottom: ".75rem" }}
                min={0}
                max={4000}
                value={priceRange}
                valueLabelDisplay="auto"
                onChange={(e, newValue) => { setPriceRange(newValue) }}
                onChangeCommitted={(e, newValue) => { setRealPriceRange(priceRange) }}
              />
            </div>
          </div>
        </div>
        <div className="filter">
          <div className="header" id="brand" onClick={toggleHandler}>
            <h2 id="brand">Brand</h2>
            <img style={{ width: ".7rem", marginRight: ".1rem" }} src={arrow} id="brand" alt="" />
          </div>
          <div className="content">
            <label><input name="brand" value="HP" type="checkbox" onChange={handleFilters} />HP</label>
            <label><input name="brand" value="Redragon" type="checkbox" onChange={handleFilters} />Redragon</label>
            <label><input name="brand" value="Dell" type="checkbox" onChange={handleFilters} />Dell</label>
          </div>
        </div>
        <div className="filter">
          <div className="header" id="procesor" onClick={toggleHandler}>
            <h2 id="procesor" >Mechanical</h2>
            <img style={{ width: ".7rem", marginRight: ".1rem" }} src={arrow} id="procesor" alt="" />
          </div>
          <div className="content">
            <label><input name="mechanical" value="yes" type="checkbox" onChange={handleFilters} />Yes</label>
            <label><input name="mechanical" value="no" type="checkbox" onChange={handleFilters} />No</label>
          </div>
        </div>
        <div className="filter">
          <div className="header" id="memory" onClick={toggleHandler}>
            <h2 id="memory" >Wireless</h2>
            <img style={{ width: ".7rem", marginRight: ".1rem" }} src={arrow} id="memory" alt="" />
          </div>
          <div className="content">
            <label><input name="wireless" value="yes" type="checkbox" onChange={handleFilters} />Yes</label>
            <label><input name="wireless" value="no" type="checkbox" onChange={handleFilters} />No</label>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MobileFilter;