import ShoppingList from "./components/shoppingListApp/ShoppingList";
import Counter from "./components/counter/CounterApp";
import Header from "./components/homePage/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/shoppingListApp' element={<ShoppingList />} />
      <Route path='/counter' element={<Counter />} />
      <Route index element={<ShoppingList />} />
      <Route path="*" element={<ShoppingList />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
