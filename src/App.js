import { BrowserRouter, Route, Routes } from "react-router-dom";

//* pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

//*components
import NavBar from "./components/NavBar";
import ColorSelector from "./components/ColorSelector";

//* hook
import { useProvider } from "./hooks/useProvider";

//* styles
import "./App.css";

function App() {
  const { mode } = useProvider();

  return (
    <div className={`app ${mode}`}>
      <BrowserRouter>
        <NavBar />
        <ColorSelector />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
