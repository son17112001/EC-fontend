import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import Navbar from "./components/Navbar";
import CardScreen from "./Screens/CardScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="py-3">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/card" element={<CardScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
