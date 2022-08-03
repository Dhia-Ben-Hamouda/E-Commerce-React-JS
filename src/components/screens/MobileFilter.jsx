import React from "react";
import { ImCross } from "react-icons/im";
import arrow from "../../images/arrow.png";
import { clickHandler } from "./Screens.jsx";
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
        }
        else {
          let arr = filters.brand;
          arr = arr.filter((item) => item !== value);
          setFilters({ ...filters, brand: arr })
        }
        break;
      case "size":
        if (e.target.checked) {
          const arr = filters.size;
          arr.push(value);
          setFilters({ ...filters, size: arr })
        }
        else {
          let arr = filters.size;
          arr = arr.filter((item) => item !== value);
          setFilters({ ...filters, size: arr })
        }
        break;
      case "resolution":
        if (e.target.checked) {
          const arr = filters.resolution;
          arr.push(value);
          setFilters({ ...filters, resolution: arr })
        }
        else {
          let arr = filters.resolution;
          arr = arr.filter((item) => item !== value);
          setFilters({ ...filters, resolution: arr })
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
    <div className="mobile-filter4">
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
                step={100}
                style={{ position: "absolute", left: "0", color: "#777", transform: "scale(.7)", marginBottom: ".75rem" }}
                min={0}
                max={1500}
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
            <label><input name="brand" value="Samsung" type="checkbox" onChange={handleFilters} />Samsung</label>
          </div>
        </div>

        <div className="filter">
          <div className="header" id="procesor" onClick={toggleHandler}>
            <h2 id="procesor" >Size</h2>
            <img style={{ width: ".7rem", marginRight: ".1rem" }} src={arrow} id="procesor" alt="" />
          </div>
          <div className="content">
            <label><input name="size" value="21" type="checkbox" onChange={handleFilters} />21'</label>
            <label><input name="size" value="24" type="checkbox" onChange={handleFilters} />24'</label>
            <label><input name="size" value="27" type="checkbox" onChange={handleFilters} />27'</label>
            <label><input name="size" value="32" type="checkbox" onChange={handleFilters} />32'</label>
          </div>
        </div>

        <div className="filter">
          <div className="header" id="memory" onClick={toggleHandler}>
            <h2 id="memory" >Resolution</h2>
            <img style={{ width: ".7rem", marginRight: ".1rem" }} src={arrow} id="memory" alt="" />
          </div>
          <div className="content">
            <label><input name="resolution" value="HD" type="checkbox" onChange={handleFilters} />HD</label>
            <label><input name="resolution" value="Full HD" type="checkbox" onChange={handleFilters} />Full HD</label>
            <label><input name="resolution" value="QHD" type="checkbox" onChange={handleFilters} />QHD</label>
            <label><input name="resolution" value="4k" type="checkbox" onChange={handleFilters} />4K</label>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MobileFilter;