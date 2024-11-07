import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Switch  } from "react-router-dom";
import { 
  Wallet2, Trophy
} from "lucide-react";

const Layout = ({ children, connectWallet, isConnected, walletAddress }) => {
    return (
      <div className="min-h-screen bg-gradient-to-br bg-custom from-gray-900 via-[#0e0e56] to-[#c23676] text-white">
        <nav className="border-b border-white/10 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-8">
                <Link to="/" className="flex items-center gap-2">
                  <Trophy className="text-pink-lighter" size={24} />
                  <span className="text-xl font-bold">Loterie Web3</span>
                </Link>
                <div className="flex gap-6">
                  <Link to="/" className="text-gray-300 hover:text-white">Accueil</Link>
                  <Link to="/participer" className="text-gray-300 hover:text-white">Participer</Link>
                  <Link to="/resultats" className="text-gray-300 hover:text-white">Résultats</Link>
                </div>
              </div>
              <button
                onClick={connectWallet}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isConnected ? "bg-green-500/10 text-green-500" : " bg-pink hover:bg-pink-lighter"
                }`}
              >
                <Wallet2 size={16} />
                {isConnected ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : "Connecter le portefeuille"}
              </button>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    );
  };

  export default Layout;