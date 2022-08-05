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
  },
  palette: {
    primary: {
      main: "#FCC312"
    }
  }
})

const Filter = ({ filters, setFilters, priceRange, setPriceRange, setRealPriceRange }) => {

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

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="filter-container">
          <div className="header">
            <h2 style={{ color: "#fff", margin: "auto 0" }}>Filter By</h2>
          </div>
          <div className="price">
            <h1>Price</h1>
            <div className="slider">
              <Slider
                className="s"
                step={200}
                style={{ color: "#777", transform: "scale(.9)", marginBottom: ".75rem" }}
                min={0}
                max={4000}
                value={priceRange}
                valueLabelDisplay="auto"
                onChange={(e, newValue) => { setPriceRange(newValue) }}
                onChangeCommitted={(e, newValue) => { setRealPriceRange(priceRange) }}
              />
            </div>
            <div className="price-inputs">
              <input
                className="min"
                value={priceRange[0] + "  DT"}
                onChange={() => { }}
              />
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
                label="HP"
              />
              <FormControlLabel
                control={<Checkbox name="brand" value="Asus" onChange={handleFilters} />}
                label="Asus"
              />
              <FormControlLabel
                control={<Checkbox name="brand" value="Dell" onChange={handleFilters} />}
                label="Dell"
              />
            </FormGroup>
          </div>
          <div className="procesor">
            <h1>Procesor</h1>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox name="procesor" value="ryzen5" onChange={handleFilters} />}
                label="AMD Ryzen 5"
              />
              <FormControlLabel
                control={<Checkbox name="procesor" value="i5" onChange={handleFilters} />}
                label="Intel Core i5"
              />
              <FormControlLabel
                control={<Checkbox name="procesor" value="ryzen7" onChange={handleFilters} />}
                label="AMD Ryzen 7"
              />
              <FormControlLabel
                control={<Checkbox name="procesor" value="i7" onChange={handleFilters} />}
                label="Intel Core i7"
              />
            </FormGroup>
          </div>
          <div className="memory">
            <h1>Memory</h1>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox name="memory" value="8gb" onChange={handleFilters} />}
                label="8 gb"
              />
              <FormControlLabel
                control={<Checkbox name="memory" value="16gb" onChange={handleFilters} />}
                label="16 gb"
              />
              <FormControlLabel
                control={<Checkbox name="memory" value="32gb" onChange={handleFilters} />}
                label="32 gb"
              />
            </FormGroup>
          </div>
          <div className="drive">
            <h1>Drive</h1>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox name="drive" value="1hdd+256ssd" onChange={handleFilters} />}
                label="1TB + 256GB SSD"
              />
              <FormControlLabel
                control={<Checkbox name="drive" value="1ssd" onChange={handleFilters} />}
                label="1TB SSD"
              />
              <FormControlLabel
                control={<Checkbox name="drive" value="512ssd" onChange={handleFilters} />}
                label="512GB SSD"
              />
            </FormGroup>
          </div>
          <div className="graphicsCard">
            <h1>Graphics Card</h1>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox name="graphicsCard" value="gtx1650" onChange={handleFilters} />}
                label="GTX 1650"
              />
              <FormControlLabel
                control={<Checkbox name="graphicsCard" value="rtx3050" onChange={handleFilters} />}
                label="RTX 3050"
              />
              <FormControlLabel
                control={<Checkbox name="graphicsCard" value="rtx3050ti" onChange={handleFilters} />}
                label="RTX 3050 ti"
              />
            </FormGroup>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default Filter;