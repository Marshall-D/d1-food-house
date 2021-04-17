import React, {Fragment, useState} from "react";
import Headers from "./components/Layout/Headers";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
import CartProvider from "./store/cart-provider";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true)
    }
    const hideCartHandler = () => {
        setCartIsShown(false)

    }

  return (
      <CartProvider>
          {cartIsShown && <Cart onClose={hideCartHandler}/>}
          <Headers onShowCart={showCartHandler}/>
          <main>
              <Meals/>
          </main>

      </CartProvider>

  );
}

export default App;
