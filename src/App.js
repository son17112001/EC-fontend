import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import Navbar from "./components/Navbar";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import CardDetail from "./components/CardDetail";
import IntCreditScreen from "./Screens/intCreditScreen";
import IntDebitScreen from "./Screens/intDebitScreen";
import DomDebitScreen from "./Screens/domDebitScreen";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="py-3" style={{marginTop:"72px"}}>
        <Routes>
           <Route path="/card/intCredits" element={<IntCreditScreen />} />
          <Route path="/card/intDebits" element={<IntDebitScreen />} />
          <Route path="/card/domDebits" element={<DomDebitScreen />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="/card/:cardType&:cardUrl" element={<CardDetail />} />
          
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
