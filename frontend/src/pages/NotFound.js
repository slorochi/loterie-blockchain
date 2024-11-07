import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <h1 className="text-8xl font-bold mb-4">404</h1>
      <h2 className="text-4xl font-bold mb-8">Page introuvable</h2>
      <p className="text-gray-400 mb-12">
        La page que vous cherchez n'existe pas ou a été retirée.
      </p>
      <Link
        to="/"
        className="bg-pink hover:bg-pink-lighter text-white px-6 py-3 rounded-lg font-medium transition-colors"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;