import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/header"
import Homepage from "./pages/homepage";
import Country from "./pages/country";


function App() {
  return (
    <ThemeProvider>
      <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path=":name" element={<Country />} />

        
      </Routes>
    </Router>
    </ThemeProvider>
    
  );
}

export default App;
