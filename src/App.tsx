import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Career from "./pages/Career";
import Media from "./pages/Media";
import Intraocular from "./pages/products/Intraocular";
import IntraArticular from "./pages/products/IntraArticular";
import DermalFillers from "./pages/products/DermalFillers";

function App() {
  return (
    <LanguageProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/media" element={<Media />} />
        <Route
          path="/products/intraocular"
          element={<Intraocular />}
        />
        <Route
          path="/products/intra-articular"
          element={<IntraArticular />}
        />
        <Route
          path="/products/dermal-fillers"
          element={<DermalFillers />}
        />
      </Routes>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
