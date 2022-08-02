import React from "react";
import { TextField, Button } from "@mui/material";
import { useState } from "react";

const InsertComputer = () => {

  const [computer , setComputer] = useState({
    name:"",
    price:"",
    drive:"",
    procesor:"",
    memory:"",
    brand:"",
    graphicsCard:"",
    description:"",
    picture:""
  })

  async function submitHandler(e)
  {
    e.preventDefault();
    const response = await fetch("https://e-commerce-shop-react-js.herokuapp.com/computers/insertComputer",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify(computer)
    })

    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <div style={{ padding: "1rem", width: "40%" }}>
        <form onSubmit={submitHandler}>
          <TextField
            label="Computer Name"
            fullWidth
            sx={{ mb: 1 }}
            value={computer.name}
            onChange={(e)=>{setComputer({...computer , name:e.target.value})}}
          />
          <TextField
            label="Price : 1000dt"
            fullWidth
            sx={{ mb: 1 }}
            value={computer.price}
            onChange={(e)=>{setComputer({...computer , price:e.target.value})}}
          />

          <TextField
            label="Drive : 1ssd    |    1hdd+256ssd    |    512ssd "
            fullWidth
            sx={{ mb: 1 }}
            value={computer.drive}
            onChange={(e)=>{setComputer({...computer , drive:e.target.value})}}
          />

          <TextField
            label="Procesor : i5 | i7 | ryzen5 | ryzen7"
            fullWidth
            sx={{ mb: 1 }}
            value={computer.procesor}
            onChange={(e)=>{setComputer({...computer , procesor:e.target.value}) ; console.log(computer);}}
          />

          <TextField
            label="Memory : 8gb | 16gb | 32gb"
            fullWidth
            sx={{ mb: 1 }}
            value={computer.memory}
            onChange={(e)=>{setComputer({...computer , memory:e.target.value}); console.log(computer);}}
          />

          <TextField
            label="Brand : Asus | Dell | HP"
            fullWidth
            sx={{ mb: 1 }}
            value={computer.brand}
            onChange={(e)=>{setComputer({...computer , brand:e.target.value}) ; console.log(computer);   }}
          />

          <TextField
            label="GC : gtx1650 | rtx3050 | rtx3050ti"
            fullWidth
            sx={{ mb: 1 }}
            value={computer.graphicsCard}
            onChange={(e)=>{setComputer({...computer , graphicsCard:e.target.value})}}
          />

          <TextField
            label="Description"
            fullWidth
            sx={{ mb: 1 }}
            multiline
            minRows={4}
            value={computer.description}
            onChange={(e)=>{setComputer({...computer , description:e.target.value})}}
          />

          <TextField
            label="Picture"
            fullWidth
            sx={{ mb: 1 }}
            value={computer.picture}
            onChange={(e)=>{setComputer({...computer , picture:e.target.value})}}
          />


          <br />

          <Button
            variant="contained"
            sx={{ mt: 1 }}
            type="submit"
          >
            Insert
          </Button>
        </form>
      </div>
    </>
  );
}

export default InsertComputer;