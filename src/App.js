import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/header"
import Homepage from "./pages/homepage";
import Country from "./pages/country";
import ErrorPage from "./pages/error";

function App() {
  return (
    <ThemeProvider>
      <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path=":name" element={<Country />} />

        <Route Path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
    </ThemeProvider>
    
  );
}

export default App;
