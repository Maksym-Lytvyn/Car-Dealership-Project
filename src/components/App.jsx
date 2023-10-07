import { Routes, Route } from "react-router-dom";
import { Home } from "pages/Home";
import { Catalog } from "pages/Catalog";
import { Favorites } from "pages/Favorites";


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/catalog" element={<Catalog />}/>
        <Route path="/favorites" element={<Favorites />} />
        <Route />
      </Routes>
    </div>
  );
};
