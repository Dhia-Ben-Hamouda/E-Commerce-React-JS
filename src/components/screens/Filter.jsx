import React from "react";
import { Checkbox, FormGroup } from "@mui/material";
import { Slider, FormControlLabel } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        thumb: {
          color: "#fff"
        }
      }
    }
  }
})

const Filter = ({ filters, setFilters, setPriceRange, priceRange, setRealPriceRange }) => {

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
      case "size":
        if (e.target.checked) {
          const arr = filters.size;
          arr.push(value);
          setFilters({ ...filters, size: arr })
          console.log(filters);
        }
        else {
          let arr = filters.size;
          arr = arr.filter((item) => item !== value);
          setFilters({ ...filters, size: arr })
          console.log(filters);
        }
        break;
      case "resolution":
        if (e.target.checked) {
          const arr = filters.resolution;
          arr.push(value);
          setFilters({ ...filters, resolution: arr })
          console.log(filters);
        }
        else {
          let arr = filters.resolution;
          arr = arr.filter((item) => item !== value);
          setFilters({ ...filters, resolution: arr })
          console.log(filters);
        }
        break;
      default:
        break;
    }
  }

  return (
    <>
      <div className="filter-container">
        <div className="header">
          <h2 style={{ color: "#fff", margin: "auto 0" }}>Filter By</h2>
        </div>
        <div className="price">
          <h1>Price</h1>
          <div className="slider">
            <ThemeProvider theme={theme}>
              <Slider
                className="s"
                step={100}
                style={{ color: "#777", transform: "scale(.9)", marginBottom: ".75rem" }}
                min={0}
                max={1500}
                valueLabelDisplay="auto"
                value={priceRange}
                onChange={(e, newValue) => { setPriceRange(newValue) }}
                onChangeCommitted={() => { setRealPriceRange(priceRange) }}
              />
            </ThemeProvider>
          </div>
          <div className="price-inputs">
            <input className="min" value={priceRange[0] + "  DT"} onChange={() => { }} />
            <input className="max" value={priceRange[1] + "  DT"} onChange={() => { }} />
          </div>
        </div>
        <div className="brand">
          <h1>Brand</h1>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="brand" value="HP" onChange={handleFilters} />}
              label="HP"
            />
            <FormControlLabel
              control={<Checkbox name="brand" value="Redragon" onChange={handleFilters} />}
              label="Redragon"
            />
            <FormControlLabel
              control={<Checkbox name="brand" value="Dell" onChange={handleFilters} />}
              label="Dell"
            />
            <FormControlLabel
              control={<Checkbox name="brand" value="Samsung" onChange={handleFilters} />}
              label="Samsung"
            />
          </FormGroup>
        </div>
        <div className="size">
          <h1>Size</h1>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="size" value="21" onChange={handleFilters} />}
              label="21'"
            />
            <FormControlLabel
              control={<Checkbox name="size" value="24" onChange={handleFilters} />}
              label="24'"
            />
            <FormControlLabel
              control={<Checkbox name="size" value="27" onChange={handleFilters} />}
              label="27'"
            />
            <FormControlLabel
              control={<Checkbox name="size" value="32" onChange={handleFilters} />}
              label="32'"
            />
          </FormGroup>
        </div>
        <div className="resolution">
          <h1>Resolution</h1>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="resolution" value="HD" onChange={handleFilters} />}
              label="HD"
            />
            <FormControlLabel
              control={<Checkbox name="resolution" value="Full HD" onChange={handleFilters} />}
              label="Full HD"
            />
            <FormControlLabel
              control={<Checkbox name="resolution" value="QHD" onChange={handleFilters} />}
              label="QHD"
            />
            <FormControlLabel
              control={<Checkbox name="resolution" value="4K" onChange={handleFilters} />}
              label="4K"
            />
          </FormGroup>
        </div>
      </div>
    </>
  );
}

export default Filter;