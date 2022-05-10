import React, { useEffect, useState } from "react";
import ShoppingList from "./components/shoppingListApp/ShoppingList";
import Header from "./components/homePage/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/ThisIsFine.gif"

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/ShoppingListApp' element={<ShoppingList />} />
      <Route index element={<ShoppingList />} />
      <Route path="*"
                    element={
                        <main style={{ marginTop: "5rem", textAlign: "center"}}>
                            <img src={NotFound} alt="Not found picture" />
                        </main>
                    }
                />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
