import Header from "./Components/Layout/Header.jsx";
import Meals from "./Components/Meals/Meals.jsx";
import Cart from "./Components/Cart/Cart.jsx";

function App() {
  return (
    <div>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
