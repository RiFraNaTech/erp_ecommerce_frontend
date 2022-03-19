import { Route, Routes } from "react-router-dom";
import { ProductsCategory } from "./components/products";
import { Preferences } from "./components/preferences";
import { Login } from "./components/login";
import { useEffect, useState } from "react";
import { getUserToken } from "./helpers/session.storage";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = getUserToken();
    setToken(token);
  }, []);

  return token ? (
    <Routes>
      <Route path="/" element={<ProductsCategory />} />
      <Route path="/preference" element={<Preferences />} />
    </Routes>
  ) : (
    <Login setToken={setToken} />
  );
}

export default App;
