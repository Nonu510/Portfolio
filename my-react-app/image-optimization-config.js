/**
 * Configuration des images à optimiser
 * Utilisé par optimize-images.js pour traiter les images
 * 
 * Format:
 * {
 *   input: "nom-du-fichier.png",
 *   width: largeur_optimale,
 *   height: hauteur_optimale,
 *   name: "nom-sortie"  // Nom du fichier WebP/PNG optimisé
 * }
 */

export const imageOptimizationConfig = [
  // Images de projets (affichées à 384x153px)
  {
    input: 'printit.png',
    width: 768,
    height: 306,
    name: 'printit',
    description: 'Print It project icon'
  },
  {
    input: 'Kasa.png',
    width: 768,
    height: 302,
    name: 'kasa',
    description: 'Kasa project icon'
  },
  {
    input: '724events.png',
    width: 768,
    height: 194,
    name: '724events',
    description: '724events project icon'
  },
  {
    input: 'argentbank.png',
    width: 768,
    height: 302,
    name: 'argentbank',
    description: 'ArgentBank project icon'
  },
  {
    input: 'Ohmyfood.png',
    width: 768,
    height: 302,
    name: 'ohmyfood',
    description: 'Oh My Food project icon'
  },
  {
    input: 'sophiebluel.png',
    width: 768,
    height: 302,
    name: 'sophiebluel',
    description: 'Sophie Bluel project icon'
  },
  {
    input: 'ninacarducci.png',
    width: 768,
    height: 302,
    name: 'ninacarducci',
    description: 'Nina Carducci project icon'
  },
  {
    input: 'Booki.png',
    width: 768,
    height: 302,
    name: 'booki',
    description: 'Booki project icon'
  },
  {
    input: 'qwenta.png',
    width: 768,
    height: 302,
    name: 'qwenta',
    description: 'Qwenta project icon'
  },

  // Logos (affichés à 63x63px ou 50x50px)
  {
    input: 'logo_header.png',
    width: 126,
    height: 126,
    name: 'logo-header',
    description: 'Header logo (2x pour retina)',
    actualDisplaySize: '63x63'
  },
  {
    input: 'logo_footer.png',
    width: 126,
    height: 126,
    name: 'logo-footer',
    description: 'Footer logo (2x pour retina)',
    actualDisplaySize: '63x63'
  },

  // Icônes sociales
  {
    input: 'github.png',
    width: 328,
    height: 76,
    name: 'github',
    description: 'GitHub icon (2x pour retina)',
    actualDisplaySize: '164x38'
  },
  {
    input: 'linkedin.png',
    width: 80,
    height: 76,
    name: 'linkedin',
    description: 'LinkedIn icon (2x pour retina)',
    actualDisplaySize: '40x38'
  }
];

/**
 * Configuration pour la bannière
 * Déjà en WebP, mais peut être compressée plus
 */
export const bannerOptimizationConfig = {
  input: 'baniere.webp',
  name: 'baniere',
  description: 'Hero banner image',
  quality: 75,
  note: 'WebP déjà utilisé - compresse davantage'
};

/**
 * Configuration globale d'optimisation
 */
export const optimizationSettings = {
  webpQuality: 80,        // Qualité WebP (1-100)
  pngCompressionLevel: 9, // Niveau compression PNG (0-9)
  outputDir: 'optimized', // Dossier de sortie dans src/assets/
  
  // Ratio redimensionnement (recommandé 2x pour écrans retina)
  pixelRatio: 2,
  
  // Options sharp
  sharp: {
    fit: 'cover',
    position: 'center'
  },

  // Logs
  verbose: true
};

/**
 * Gains de performance attendus
 * Ces valeurs sont des estimations basées sur les tests
 */
export const expectedOptimizations = {
  'printit.png': {
    before: 355.6,
    after: 45,
    savings: 310.6,
    percentReduction: 87
  },
  'Kasa.png': {
    before: 150.7,
    after: 20,
    savings: 130.7,
    percentReduction: 87
  },
  'logo_header.png': {
    before: 51.3,
    after: 5,
    savings: 46.3,
    percentReduction: 90
  },
  'logo_footer.png': {
    before: 16.9,
    after: 2,
    savings: 14.9,
    percentReduction: 88
  },
  'github.png': {
    before: 14.6,
    after: 3,
    savings: 11.6,
    percentReduction: 79
  },
  'linkedin.png': {
    before: 10.4,
    after: 1.5,
    savings: 8.9,
    percentReduction: 86
  },
  'baniere.webp': {
    before: 232.8,
    after: 90,
    savings: 142.8,
    percentReduction: 61
  }
};
