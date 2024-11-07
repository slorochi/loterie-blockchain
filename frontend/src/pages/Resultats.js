// Results Page
import React from "react";
import { 
   ExternalLink 
} from "lucide-react";

const Resultats = ({timeLeft}) => {

    const pastDrawings = [
      { 
        date: "2024-03-01", 
        winner: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        prize: 4.8,
        participants: 156
      },
      { 
        date: "2024-02-28", 
        winner: "0x8474930583Dd9B844Bc454e4438f44e742d35Cc6",
        prize: 3.9,
        participants: 132
      },
      // Add more past drawings...
    ];
  
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Résultats de la Loterie</h1>
        
        {/* Tirage en cours */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Tirage en cours</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-gray-400 mb-1">Cagnotte Actuelle</p>
              <p className="text-2xl font-bold text-purple-400">5.5 ETH</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Participants</p>
              <p className="text-2xl font-bold text-purple-400">156</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Prochain Tirage dans</p>
              <p className="text-2xl font-bold text-purple-400">{`${timeLeft.hours}:${String(timeLeft.minutes).padStart(2, '0')}:${String(timeLeft.seconds).padStart(2, '0')}`}
              </p>
            </div>
          </div>
        </div>
  
        {/* Tirages Passés */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">Tirages Passés</h2>
          <div className="space-y-4">
            {pastDrawings.map((drawing, index) => (
              <div 
                key={index}
                className="border-b border-gray-700 last:border-0 pb-4 last:pb-0"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-medium">Tirage #{ pastDrawings.length - index }</p>
                    <p className="text-sm text-gray-400">
                      {new Date(drawing.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-purple-400">{drawing.prize} ETH</p>
                    <p className="text-sm text-gray-400">
                      {drawing.participants} participants
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">Gagnant :</span>
                  <span className="font-mono">
                    {`${drawing.winner.slice(0, 6)}...${drawing.winner.slice(-4)}`}
                  </span>
                  <a 
                    href="#" 
                    className="text-blue-400 hover:text-blue-300 ml-2"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  export default Resultats;