import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page from "./components/Page";
import { MovieContext, ThemeContext } from "./context";
import { CartReducer, initialState } from "./reducers/CartReducers";

function App() {
  // const [cartData, setCartData] = useState([]);
  const [darkmode, setDarkMode] = useState(false);
  const [state, dispatch] = useReducer(CartReducer, initialState);
  return (
    <>
      <ThemeContext.Provider value={{ darkmode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
