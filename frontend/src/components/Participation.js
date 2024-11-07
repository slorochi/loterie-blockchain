import React from "react";
import { ethers } from 'ethers'; 
import { getLoterieContract } from "../utils/blockchain";

export default function Participation({ walletAddress }) {
    const participerALoterie = async () => {
        if (walletAddress) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = getLoterieContract(signer);

            try {
                const tx = await contract.participer({ value: ethers.utils.parseEther("0.01") });
                await tx.wait();
                alert("Participation réussie !");
            } catch (error) {
                console.error(error);
                alert("Erreur lors de la participation.");
            }
        } else {
            alert("Veuillez connecter votre portefeuille d'abord.");
        }
    };

    return <button onClick={participerALoterie}>Participer à la loterie</button>;
}
