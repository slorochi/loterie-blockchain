import React from "react";
import { 
  Wallet2, Ticket, Trophy, Clock,  
   Users,  ExternalLink 
} from "lucide-react";

const Accueil = ({timeLeft}) => {
    const currentPrize = 5.5;
    const participantCount = 156;
    const lastWinner = "0x8474930583Dd9B844Bc454e4438f44e742d35Cc6";
  
    return (
      <div className="max-w-4xl mx-auto"> 
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#ff40b6] to-[#4d56d6] bg-clip-text text-transparent">
            Loterie Décentralisée
          </h1>
          <p className="text-xl text-gray-300">
            Achetez un ticket pour 0.01 ETH et ayez une chance de gagner gros ! 
            Juste, transparent et sécurisé sur la blockchain.
          </p>
        </div>
        <div className="bg-stats">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <Trophy className="text-yellow-400" size={32} />
            </div>
            <p className="text-gray-400 mb-2">Cagnotte actuelle</p>
            <p className="text-3xl font-bold text-purple-400">{currentPrize} ETH</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <Users className="text-blue-400" size={32} />
            </div>
            <p className="text-gray-400 mb-2">Nombre total de participants</p>
            <p className="text-3xl font-bold text-purple-400">{participantCount}</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <Clock className="text-green-400" size={32} />
            </div>
            <p className="text-gray-400 mb-2">Temps avant le tirage</p>
            <p className="text-3xl font-bold text-purple-400">
              {`${timeLeft.hours}:${String(timeLeft.minutes).padStart(2, '0')}:${String(timeLeft.seconds).padStart(2, '0')}`}
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Comment ça marche</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <Wallet2 className="text-purple-400" />
              </div>
              <h3 className="font-bold mb-2">1. Connecter le portefeuille</h3>
              <p className="text-gray-400">Connectez votre portefeuille MetaMask pour commencer</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <Ticket className="text-blue-400" />
              </div>
              <h3 className="font-bold mb-2">2. Acheter un ticket</h3>
              <p className="text-gray-400">Achetez votre ticket pour 0.01 ETH</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                <Trophy className="text-green-400" />
              </div>
              <h3 className="font-bold mb-2">3. Gagner le prix</h3>
              <p className="text-gray-400">Attendez le tirage et vérifiez si vous avez gagné</p>
            </div>
          </div>
        </div>

        {/* Last Winner */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold mb-4">Dernier Gagnant</h2>
          <p className="text-gray-400 mb-2">Félicitations à</p>
          <p className="text-xl font-mono mb-2">
            {`${lastWinner.slice(0, 6)}...${lastWinner.slice(-4)}`}
          </p>
          <p className="text-purple-400 font-bold">A gagné 4.8 ETH</p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-4"
          >
            Voir sur Etherscan
            <ExternalLink size={16} />
          </a>
        </div>
        </div>
      </div>
    );
  };
export default Accueil;
