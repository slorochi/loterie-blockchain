import { ethers } from 'ethers'; 
import { LOTERIE_CONTRACT_ADDRESS, LOTERIE_ABI } from "../config";

export const getLoterieContract = (provider) => {
    return new ethers.Contract(LOTERIE_CONTRACT_ADDRESS, LOTERIE_ABI, provider);
};
