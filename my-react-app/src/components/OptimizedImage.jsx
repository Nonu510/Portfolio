import React from 'react';

/**
 * Composant OptimizedImage
 * Affiche une image WebP avec fallback PNG
 * @param {string} src - Nom de l'image sans extension (ex: 'logo-header')
 * @param {string} alt - Texte alternatif
 * @param {string} className - Classes CSS
 * @param {string} folder - Dossier (default: 'optimized', ou 'assets' pour les images non optimisées)
 */
const OptimizedImage = ({ src, alt, className = '', folder = 'optimized', ...props }) => {
  // Determine the correct path based on folder
  const basePath = folder === 'optimized' 
    ? `/Portfolio/src/assets/optimized/${src}`
    : `/Portfolio/src/assets/${src}`;
  
  return (
    <picture>
      <source srcSet={`${basePath}.webp`} type="image/webp" />
      <img
        src={`${basePath}.png`}
        alt={alt}
        className={className}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;
