import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Navbar from "./navbar.jsx";
import HomeExm from "./home.jsx";

 
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <HomeExm />
    
  </StrictMode>
);
