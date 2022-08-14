import React from "react";
import { TextField, Button } from "@mui/material";
import { useState } from "react";

const InsertKeyboard = () => {

  const [keyboard , setKeyboard] = useState({
    name:"",
    brand:"",
    price:"",
    description:"",
    picture:"",
    wireless:""
  })

  async function submitHandler(e)
  {
    e.preventDefault();
    const response = await fetch("https://e-commerce-shop-react-js.herokuapp.com/mouses/insertMouse",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify(keyboard)
    })

    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <div style={{ padding: "1rem", width: "40%" }}>
        <form onSubmit={submitHandler}>
          <TextField
            label="mouse Name"
            fullWidth
            sx={{ mb: 1 }}
            value={keyboard.name}
            onChange={(e)=>{setKeyboard({...keyboard , name:e.target.value})}}
          />
          <TextField
            label="Price : 1000dt"
            fullWidth
            sx={{ mb: 1 }}
            value={keyboard.price}
            onChange={(e)=>{setKeyboard({...keyboard , price:e.target.value})}}
          />

          <TextField
            label="Brand : Dell | Redragon | HP"
            fullWidth
            sx={{ mb: 1 }}
            value={keyboard.brand}
            onChange={(e)=>{setKeyboard({...keyboard , brand:e.target.value})}}
          />

          <TextField
            label="Wireless : Yes | No"
            fullWidth
            sx={{ mb: 1 }}
            value={keyboard.wireless}
            onChange={(e)=>{setKeyboard({...keyboard , wireless:e.target.value})}}
          />

          <TextField
            label="Description"
            fullWidth
            sx={{ mb: 1 }}
            multiline
            minRows={4}
            value={keyboard.description}
            onChange={(e)=>{setKeyboard({...keyboard , description:e.target.value})}}
          />

          <TextField
            label="Picture"
            fullWidth
            sx={{ mb: 1 }}
            multiline
            minRows={4}
            value={keyboard.picture}
            onChange={(e)=>{setKeyboard({...keyboard , picture:e.target.value})}}
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

export default InsertKeyboard;