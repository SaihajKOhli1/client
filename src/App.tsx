import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";
import Navbar from "@/scenes/navbar";
import Dashboard from "@/scenes/dashboard";
import Predictions from "@/scenes/predictions";
import Apple from "@/scenes/companyPages/Apple";  
import ProcterGamble from "@/scenes/companyPages/ProcterGamble";
import ExxonMobil from "@/scenes/companyPages/ExxonMobil";
import JPMorganChase from "@/scenes/companyPages/JPMorganChase";
import Tesla from "@/scenes/companyPages/Tesla";
import Applepredictions from "@/scenes/companyPages/Apple/predictions";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/predictions" element={<Predictions />} />
              <Route path="/apple" element={<Apple/> } >
                <Route path="predictions" element={<Applepredictions />}/> 
              </Route>
              <Route path="/procter-gamble" element={<ProcterGamble />} />
              <Route path="/exxon-mobil" element={<ExxonMobil />} />
              <Route path="/jpmorgan-chase" element={<JPMorganChase />} />
              <Route path="/tesla" element={<Tesla />} />
              

            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
