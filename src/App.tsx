import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Layout/Routes/Home/Home";
import About from "./Layout/Routes/About/About";
import Contact from "./Layout/Routes/Contact/Contact";

function App() {
  return (
    <BrowserRouter basename="/restaurant-web-app/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About about={[]} />} />
          <Route path="contact" element={<Contact />} />
          {/* Uncomment and adjust the following lines as needed */}
          {/* <Route path="menu" element={<Menu />}>
            <Route path=":id" element={<MenuItem />} />
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
