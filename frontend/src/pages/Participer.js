import React, { useState } from "react";
import { ethers } from "ethers";
import { Ticket, ChevronRight } from "lucide-react";
import { contractAddress, contractABI } from '../LotteryConfig';

const Participer = () => {
  const [ticketAmount, setTicketAmount] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const handleParticipate = async () => {
    if (!window.ethereum) {
      alert("MetaMask n'est pas installé.");
      return;
    }
  
    try {
      setIsProcessing(true);

      // Créer un provider
      const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
      
      // Vérifier le réseau local
      const network = await provider.getNetwork();
      if (network.chainId !== 1337) { // Assurez-vous que vous utilisez le bon ID de réseau
        alert("Veuillez connecter MetaMask au bon réseau (localhost).");
        setIsProcessing(false);
        return;
      }

      // Demande l'accès aux comptes
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      const ticketPrice = ethers.utils.parseEther("1.0");
      console.log(contract);

      const tx = await contract.enter({ value: ticketPrice });
      console.log(tx);
      await tx.wait();

      alert("Participation réussie !");
      setIsProcessing(false);
    } catch (error) {
      console.error("Erreur lors de la participation :", error);
      alert("Erreur lors de la participation. Assurez-vous d'être connecté à MetaMask.");
      setIsProcessing(false);
    }
  };
  

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Participer à la loterie </h1>
      
      {/* Rules Card */}
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Règles de la loterie</h2>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start gap-2">
            <ChevronRight className="mt-1 flex-shrink-0" size={16} />
            Chaque ticket coûte exactement 0.01 ETH
          </li>
          <li className="flex items-start gap-2">
            <ChevronRight className="mt-1 flex-shrink-0" size={16} />
            Un ticket par adresse de portefeuille
          </li>
          <li className="flex items-start gap-2">
            <ChevronRight className="mt-1 flex-shrink-0" size={16} />
            Le gagnant est sélectionné de manière aléatoire sur la blockchain
          </li>
          <li className="flex items-start gap-2">
            <ChevronRight className="mt-1 flex-shrink-0" size={16} />
            Le contrat intelligent transfère automatiquement le prix
          </li>
        </ul>
      </div>

      {/* Participation Form */}
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-4">Acheter un Ticket</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Nombre de tickets (1 ETH chacun)
            </label>
            <input
              type="number"
              value={ticketAmount}
              onChange={(e) => setTicketAmount(Number(e.target.value))}
              min="1"
              max="1"
              className="w-full bg-white/5 border border-gray-700 rounded-lg px-4 py-2 text-white"
            />
          </div>
          <div className="flex justify-between items-center text-sm text-gray-400">
            <span>Coût total :</span>
            <span>{(ticketAmount * 1).toFixed(2)} ETH</span>
          </div>
          <button
            onClick={handleParticipate}
            disabled={isProcessing}
            className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 
              ${isProcessing 
                ? "bg-gray-500 cursor-not-allowed" 
                : "bg-pink hover:bg-pink-lighter"
              }`}
          >
            {isProcessing ? (
              <>Ticket pris en compte</>
            ) : (
              <>
                <Ticket size={20} />
                Acheter un ticket
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Participer;
