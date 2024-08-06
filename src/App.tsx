import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";

function App() {
  const [isProductFormActive, setIsProductFormActive] =
    useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string | undefined>();
  const isAdminLoggedIn = false;

  const onClose = () => {
    setIsProductFormActive(false);
    setSelectedId(undefined);
  };

  const onEditHandler = (id: string) => {
    setIsProductFormActive(true);
    setSelectedId(id);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isAdminLoggedIn={isAdminLoggedIn}
              onEditHandler={onEditHandler}
              isProductFormActive={isProductFormActive}
              setIsProductFormActive={setIsProductFormActive}
              onClose={onClose}
              selectedId={selectedId}
            />
          }
        />
        <Route
          path="/impressum"
          element={
            <Impressum
              isAdminLoggedIn={isAdminLoggedIn}
              isProductFormActive={isProductFormActive}
              setIsProductFormActive={setIsProductFormActive}
              onClose={onClose}
              selectedId={selectedId}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
