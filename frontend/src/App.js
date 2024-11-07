import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Switch  } from "react-router-dom";
import { 
  Wallet2, Ticket, Trophy, Clock, History, Info, 
  ArrowRight, Users, ChevronRight, ExternalLink 
} from "lucide-react";
import { ethers } from "ethers";  
import Participer from "./pages/Participer";
import Resultats from "./pages/Resultats";
import Accueil from "./pages/Accueil";
import NotFound  from "./pages/NotFound";
import Layout from "./pages/Layout";
// Main App
const App = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 30, seconds: 0 });
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        }
        if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        }
        if (prevTime.hours > 0) {
          return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        }
        clearInterval(interval);
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
        setIsConnected(true);
      } catch (err) {
        alert("Erreur de connexion au portefeuille. Veuillez vous connecter sur votre MetaMask");
        console.error(err);
      }
    } else {
      alert("Veuillez installer MetaMask pour continuer.");
    }
  };

  return (
    <Router>
      <Layout
        connectWallet={connectWallet}
        isConnected={isConnected}
        walletAddress={walletAddress}
      >
        <Routes>
          <Route path="/" element={<Accueil timeLeft={timeLeft} />} />
          <Route path="/participer" element={<Participer />} />
          <Route path="/resultats" element={<Resultats timeLeft={timeLeft} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;