import React, { useState } from "react";
import { ethers } from 'ethers'; 

export default function Wallet({ setWalletAddress }) {
    const [isConnected, setIsConnected] = useState(false);

    const connectWallet = async () => {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            setWalletAddress(await signer.getAddress());
            setIsConnected(true);
        } else {
            alert("MetaMask non détecté");
        }
    };

    return (
        <button onClick={connectWallet}>
            {isConnected ? "Connecté" : "Connecter le portefeuille"}
        </button>
    );
}
