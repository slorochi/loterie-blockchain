Introduction
Ce projet est une application de loterie basée sur la blockchain Ethereum (simulée en local avec Hardhat), où chaque participant peut acheter un seul ticket et un gagnant est tiré au sort de manière immuable et transparente. Ce guide vous expliquera comment tester le projet depuis zéro.

Prérequis
Avant de commencer, assurez-vous d'avoir les éléments suivants :

Node.js : Vous aurez besoin de Node.js et npm (Node Package Manager) pour installer les dépendances.
Si vous ne l'avez pas encore installé, vous pouvez télécharger Node.js depuis nodejs.org.
MetaMask : Une extension de navigateur pour interagir avec la blockchain Ethereum.
Téléchargez MetaMask depuis le site officiel et créez un compte si nécessaire.
Étape 1 : Cloner le projet
Ouvrez un terminal et clonez le projet dans un répertoire local.
bash
Copy code
git clone https://github.com/nom-utilisateur/loterie-blockchain.git
cd loterie-blockchain
Étape 2 : Installer les dépendances
Dans le répertoire du projet, installez toutes les dépendances nécessaires (pour le backend et le frontend) en exécutant cette commande :
bash
Copy code
npm install
Cela va télécharger et installer tous les paquets nécessaires pour que le projet fonctionne correctement.

Étape 3 : Configurer Hardhat (Backend)
Le backend utilise Hardhat pour déployer le contrat sur un réseau local simulé.

Démarrer le réseau local avec Hardhat
Démarrez le serveur local pour la blockchain. Exécutez la commande suivante dans le terminal :
bash
Copy code
npx hardhat node
Cette commande va lancer un serveur local qui simule une blockchain Ethereum sur votre machine. Il sera accessible à l'adresse http://127.0.0.1:8545.

Étape 4 : Déployer le contrat de loterie
Le contrat de loterie est écrit en Solidity, et nous allons le déployer sur le réseau local simulé.

Dans un nouveau terminal, exécutez la commande suivante pour déployer le contrat :
bash
Copy code
npx hardhat run scripts/deploy.js --network localhost
Cela va compiler le contrat, puis le déployer sur le réseau local. Une fois déployé, l'adresse du contrat s'affichera dans le terminal. Gardez cette adresse en mémoire car elle sera utilisée dans le frontend.

Étape 5 : Configurer l'application Frontend (React)
Modifier le fichier config.js
Dans le dossier frontend/src, ouvrez le fichier config.js et assurez-vous que l'adresse du contrat et l'ABI sont bien configurées.
Voici un exemple de configuration :

javascript
Copy code
// config.js

export const LOTERIE_CONTRACT_ADDRESS = "votre-adresse-du-contrat"; // Remplacez par l'adresse affichée lors du déploiement
export const LOTERIE_ABI = [
    // L'ABI de votre contrat, générée lors de la compilation
    {
        "inputs": [],
        "name": "participer",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getGagnant",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
Note : L'ABI est générée automatiquement après la compilation du contrat dans le dossier artifacts de votre projet.

Étape 6 : Lancer l'application frontend (React)
Démarrer le serveur frontend
Allez dans le dossier frontend du projet et lancez l'application React avec la commande suivante :
bash
Copy code
cd frontend
npm start
Cela va démarrer le serveur React et ouvrir l'application dans votre navigateur à l'adresse http://localhost:3000.

Étape 7 : Connecter MetaMask et participer à la loterie
Connexion à MetaMask
Dans votre navigateur, ouvrez l'extension MetaMask et connectez-vous à l'un des comptes disponibles (créés automatiquement par Hardhat).

Si vous n'avez pas MetaMask installé, téléchargez-le ici et suivez les instructions pour configurer un portefeuille.

Interaction avec l'application React
Lorsque l'application frontend est ouverte dans votre navigateur, vous pouvez cliquer sur le bouton "Connecter le portefeuille" pour connecter MetaMask à l'application. Vous devrez approuver la connexion depuis MetaMask.

Une fois connecté, vous pouvez participer à la loterie en achetant un ticket en envoyant une petite quantité d'ETH (fictif) au contrat. Vous serez inscrit comme participant pour ce tirage.

Merci d'avoir testé notre application de loterie blockchain ! 🎉
