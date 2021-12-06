//import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import Navbar from "./components/Navbar";
import CardScreen from "./Screens/CardScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import SubChargeScreen from "./Screens/SubChargeScreen";
//import TransLogScreen from "./Screens/TransLogScreen";
import WithDrawConfirmScreen from "./Screens/WithDrawConfirmScreen";
import TransferConfirmScreen from "./Screens/TransferConfirmScreen";
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
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/user/charge/submit" element={<SubChargeScreen />} />
          <Route path="/user/withdraw-money/verify" element={<WithDrawConfirmScreen />} />
          <Route path="/user/transfer/verify" element={<TransferConfirmScreen />} />
          {/* <Route path="/history" element={<TransLogScreen />} /> */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
