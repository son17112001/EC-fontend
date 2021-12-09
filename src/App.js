//import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import Navbar from "./components/Navbar";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import SubChargeScreen from "./Screens/SubChargeScreen";
//import TransLogScreen from "./Screens/TransLogScreen";
import WithDrawConfirmScreen from "./Screens/WithDrawConfirmScreen";
import TransferConfirmScreen from "./Screens/TransferConfirmScreen";
import CardDetail from "./components/CardDetail";
import IntCreditScreen from "./Screens/intCreditScreen";
import IntDebitScreen from "./Screens/intDebitScreen";
import DomDebitScreen from "./Screens/domDebitScreen";
import ForgotScreen from "./Screens/ForgotScreen";
import FindCardScreen from "./Screens/FindCardScreen"
import AdminScreen from "./Screens/AdminScreen"
require('dotenv').config()
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="py-3" style={{ marginTop: "72px" }}>
        <Routes>

          <Route path="/card/intCredits" element={<IntCreditScreen />} />
          <Route path="/card/intDebits" element={<IntDebitScreen />} />
          <Route path="/card/domDebits" element={<DomDebitScreen />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="/find/:cardname" element={<FindCardScreen />} />
          <Route path="/admin" element={<AdminScreen />} />

          <Route path="/card/:cardType&:cardUrl" element={<CardDetail />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/login/forgot" element={< ForgotScreen/>} />
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
