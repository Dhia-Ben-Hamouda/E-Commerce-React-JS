import React from "react";
import { ImCross } from "react-icons/im";
import { clickHandler } from "./Computers.jsx";
import { Slider } from "@mui/material";
import arrow from "../../images/arrow.png";

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
      case "procesor":
        if (e.target.checked) {
          const arr = filters.procesor;
          arr.push(value);
          setFilters({ ...filters, procesor: arr })
        }
        else {
          let arr = filters.procesor;
          arr = arr.filter((item) => item !== value);
          setFilters({ ...filters, procesor: arr })
        }
        break;
      case "memory":
        if (e.target.checked) {
          const arr = filters.memory;
          arr.push(value);
          setFilters({ ...filters, memory: arr })
        }
        else {
          let arr = filters.memory;
          arr = arr.filter((item) => item !== value);
          setFilters({ ...filters, memory: arr })
        }
        break;
      case "drive":
        if (e.target.checked) {
          const arr = filters.drive;
          arr.push(value);
          setFilters({ ...filters, drive: arr })
        }
        else {
          let arr = filters.drive;
          arr = arr.filter((item) => item !== value);
          setFilters({ ...filters, drive: arr })
        }
        break;
      case "graphicsCard":
        if (e.target.checked) {
          const arr = filters.graphicsCard;
          arr.push(value);
          setFilters({ ...filters, graphicsCard: arr })
        }
        else {
          let arr = filters.graphicsCard;
          arr = arr.filter((item) => item !== value);
          setFilters({ ...filters, graphicsCard: arr })
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
    <div className="mobile-filter">
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
            <label><input name="brand" value="Asus" type="checkbox" onChange={handleFilters} />Asus</label>
            <label><input name="brand" value="Dell" type="checkbox" onChange={handleFilters} />Dell</label>
          </div>
        </div>
        <div className="filter">
          <div className="header" id="procesor" onClick={toggleHandler}>
            <h2 id="procesor" >Procesor</h2>
            <img style={{ width: ".7rem", marginRight: ".1rem" }} src={arrow} id="procesor" alt="" />
          </div>
          <div className="content">
            <label><input name="procesor" value="ryzen5" type="checkbox" onChange={handleFilters} />AMD Ryzen 5</label>
            <label><input name="procesor" value="i5" type="checkbox" onChange={handleFilters} />Intel Core i5</label>
            <label><input name="procesor" value="ryzen7" type="checkbox" onChange={handleFilters} />AMD Ryzen 7</label>
            <label><input name="procesor" value="i7" type="checkbox" onChange={handleFilters} />Intel Core i7</label>
          </div>
        </div>
        <div className="filter">
          <div className="header" id="memory" onClick={toggleHandler}>
            <h2 id="memory" >Memory</h2>
            <img style={{ width: ".7rem", marginRight: ".1rem" }} src={arrow} id="memory" alt="" />
          </div>
          <div className="content">
            <label><input name="memory" value="8gb" type="checkbox" onChange={handleFilters} />8 gb</label>
            <label><input name="memory" value="16gb" type="checkbox" onChange={handleFilters} />16 gb</label>
            <label><input name="memory" value="32gb" type="checkbox" onChange={handleFilters} />32 gb</label>
          </div>
        </div>
        <div className="filter">
          <div className="header" id="drive" onClick={toggleHandler}>
            <h2 id="drive">Drive</h2>
            <img style={{ width: ".7rem", marginRight: ".1rem" }} src={arrow} id="drive" alt="" />
          </div>
          <div className="content">
            <label><input name="drive" value="1hdd+256ssd" type="checkbox" onChange={handleFilters} />1TB + 256GB SSD</label>
            <label><input name="drive" value="1ssd" type="checkbox" onChange={handleFilters} />1TB SSD</label>
            <label><input name="drive" value="512ssd" type="checkbox" onChange={handleFilters} />512GB SSD</label>
          </div>
        </div>
        <div className="filter" >
          <div className="header" id="gc" onClick={toggleHandler}>
            <h2 id="gc">Graphics Card</h2>
            <img style={{ width: ".7rem", marginRight: ".1rem" }} src={arrow} id="gc" alt="" />
          </div>
          <div className="content">
            <label><input name="graphicsCard" value="gtx1650" type="checkbox" onChange={handleFilters} />GTX 1650</label>
            <label><input name="graphicsCard" value="rtx3050" type="checkbox" onChange={handleFilters} />RTX 3050</label>
            <label><input name="graphicsCard" value="rtx3050ti" type="checkbox" onChange={handleFilters} />RTX 3050 ti</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileFilter;