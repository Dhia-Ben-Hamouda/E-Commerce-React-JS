import React from "react";
import Home from "./Home.jsx";
import Computers from "./computers/Computers.jsx";
import Keyboards from "./keyboards/Keyboards.jsx";
import Mouses from "./mouses/Mouses.jsx";
import Screens from "./screens/Screens.jsx";
import SignIn from "../auth/SignIn.jsx";
import SignUp from "../auth/SignUp.jsx";
import Settings from "./Settings.jsx";
import Cart from "./Cart.jsx";
import Product from "./Product.jsx";
import ResetPassword from "../auth/ResetPassword.jsx";
import InsertComputer from "../api/InsertComputer.jsx";
import InsertKeyboard from "../api/InsertKeyboard.jsx";
import InsertMouse from "../api/InsertMouse.jsx";
import InsertScreen from "../api/InsertScreen.jsx";
import AllProducts from "./AllProducts.jsx";
import { Route, Routes } from "react-router-dom";
import "../styles/styles.scss";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/computers" element={ <Computers/>} />
        <Route path="/keyboards" element={ <Keyboards/> } />
        <Route path="/mouses" element={ <Mouses/> } />
        <Route path="/screens" element={ <Screens/> } />
        <Route path="/signin" element={ <SignIn/> } />
        <Route path="/signup" element={ <SignUp/> } />
        <Route path="/cart" element={ <Cart/> } />
        <Route path="/InsertComputer" element={ <InsertComputer/> } />
        <Route path="/InsertScreen" element={ <InsertScreen/> } />
        <Route path="/InsertMouse" element={ <InsertMouse/> } />
        <Route path="/InsertKeyboard" element={ <InsertKeyboard/> } />
        <Route path="/product/:id" element={ <Product/> } />
        <Route path="/allProducts/:searchTerm" element={ <AllProducts/> } />
        <Route path="/settings" element={ <Settings/> } />
        <Route path="/passwordReset" element={ <ResetPassword/> } />
      </Routes>
    </>
  );
}

export default App;