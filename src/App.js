import ShoppingList from "./components/shoppingListApp/ShoppingList";
import Counter from "./components/counter/CounterApp";
import Header from "./components/homePage/Header";
import { Routes, Route, HashRouter } from "react-router-dom";
import NotFound from "./components/ThisIsFine.gif"

function App() {
  return (
    <HashRouter>
    <Header />
    <Routes>
      <Route path='/shoppingListApp' element={<ShoppingList />} />
      <Route path='/counter' element={<Counter />} />
      <Route index element={<ShoppingList />} />
      <Route path="/*" element={                        
                          <main style={{ marginTop: "5rem", textAlign: "center", color: "white"}}>
                          <h1>ERROR 404! Page not found!</h1>
                          <img style={{maxWidth: "320px"}} src={NotFound} alt="Not found" />
                        </main>
                      }
                       />
    </Routes>
    </HashRouter>
  );
}

export default App;
