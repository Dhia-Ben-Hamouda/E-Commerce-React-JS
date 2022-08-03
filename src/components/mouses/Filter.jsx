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

const Filter = ({ filters, setFilters, priceRange, setRealPriceRange, setPriceRange }) => {

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
                step={20}
                style={{ color: "#777", transform: "scale(.9)", marginBottom: ".75rem" }}
                min={0}
                max={300}
                valueLabelDisplay="auto"
                value={priceRange}
                onChange={(e, newValue) => { setPriceRange(newValue) }}
                onChangeCommitted={() => { setRealPriceRange(priceRange) }}
              />
            </ThemeProvider>
          </div>
          <div className="price-inputs">
            <input
              className="min"
              value={priceRange[0] + "  DT"}
              onChange={() => { }} />
            <input
              className="max"
              value={priceRange[1] + "  DT"}
              onChange={() => { }} />
          </div>
        </div>
        <div className="brand">
          <h1>Brand</h1>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="brand" value="HP" onChange={handleFilters} />}
              label="HP" />
            <FormControlLabel
              control={<Checkbox name="brand" value="Redragon" onChange={handleFilters} />}
              label="Redragon" />
            <FormControlLabel
              control={<Checkbox name="brand" value="Dell" onChange={handleFilters} />}
              label="Dell" />
          </FormGroup>
        </div>
        <div className="wireless">
          <h1>Wireless</h1>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="wireless" value="yes" onChange={handleFilters} />}
              label="Yes" />
            <FormControlLabel
              control={<Checkbox name="wireless" value="no" onChange={handleFilters} />}
              label="No" />
          </FormGroup>
        </div>
      </div>
    </>
  );
}

export default Filter;