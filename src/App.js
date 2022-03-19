import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/dashboard";
import { Preferences } from "./components/preferences";
import { Login } from "./components/login";
import { useState } from "react";

function App() {
  const [token, setToken] = useState("");
  return token ? (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/preference" element={<Preferences />} />
    </Routes>
  ) : (
    <Login setToken={setToken} />
  );
}

export default App;
