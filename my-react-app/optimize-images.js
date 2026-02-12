import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuration
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, 'src', 'assets');
const outputDir = path.join(__dirname, 'src', 'assets', 'optimized');

// Créer le répertoire de sortie s'il n'existe pas
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Dimensions recommandées pour chaque image
const imageConfigs = [
  {
    input: 'printit.png',
    width: 768,
    height: 306,
    name: 'printit'
  },
  {
    input: 'Kasa.png',
    width: 768,
    height: 302,
    name: 'kasa'
  },
  {
    input: '724events.png',
    width: 768,
    height: 194,
    name: '724events'
  },
  {
    input: 'argentbank.png',
    width: 768,
    height: 302,
    name: 'argentbank'
  },
  {
    input: 'Ohmyfood.png',
    width: 768,
    height: 302,
    name: 'ohmyfood'
  },
  {
    input: 'sophiebluel.png',
    width: 768,
    height: 302,
    name: 'sophiebluel'
  },
  {
    input: 'ninacarducci.png',
    width: 768,
    height: 302,
    name: 'ninacarducci'
  },
  {
    input: 'Booki.png',
    width: 768,
    height: 302,
    name: 'booki'
  },
  {
    input: 'qwenta.png',
    width: 768,
    height: 302,
    name: 'qwenta'
  },
  // Logos
  {
    input: 'logo_header.png',
    width: 126,
    height: 126,
    name: 'logo-header'
  },
  {
    input: 'logo_footer.png',
    width: 126,
    height: 126,
    name: 'logo-footer'
  },
  {
    input: 'github.png',
    width: 328,
    height: 76,
    name: 'github'
  },
  {
    input: 'linkedin.png',
    width: 80,
    height: 76,
    name: 'linkedin'
  }
];

async function optimizeImage(config) {
  const inputPath = path.join(assetsDir, config.input);
  
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Image non trouvée: ${config.input}`);
    return;
  }

  try {
    const image = sharp(inputPath);
    
    // Obtenir les métadonnées
    const metadata = await image.metadata();
    console.log(`📷 Traitement: ${config.input} (${metadata.width}x${metadata.height})`);
    
    // Redimensionner et convertir en WebP (haute qualité)
    await sharp(inputPath)
      .resize(config.width, config.height, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, `${config.name}.webp`));
    
    // Redimensionner et compresser en PNG (fallback)
    await sharp(inputPath)
      .resize(config.width, config.height, {
        fit: 'cover',
        position: 'center'
      })
      .png({ compressionLevel: 9 })
      .toFile(path.join(outputDir, `${config.name}.png`));
    
    console.log(`✅ Optimisé: ${config.name} → ${config.width}x${config.height}`);
  } catch (error) {
    console.error(`❌ Erreur avec ${config.input}:`, error.message);
  }
}

async function optimizeBannerImage() {
  const bannerPath = path.join(assetsDir, 'baniere.webp');
  
  if (!fs.existsSync(bannerPath)) {
    console.log('⚠️  Bannière non trouvée');
    return;
  }

  try {
    console.log(`📷 Traitement de la bannière...`);
    
    // Compresser davantage l'image WebP existante
    await sharp(bannerPath)
      .webp({ quality: 75 })
      .toFile(path.join(outputDir, 'baniere.webp'));
    
    console.log(`✅ Bannière compressée`);
  } catch (error) {
    console.error('❌ Erreur avec la bannière:', error.message);
  }
}

async function main() {
  console.log('🚀 Début de l\'optimisation des images...\n');
  
  // Optimiser la bannière
  await optimizeBannerImage();
  console.log('');
  
  // Optimiser toutes les images
  for (const config of imageConfigs) {
    await optimizeImage(config);
  }
  
  console.log('\n✨ Optimisation terminée!');
  console.log(`📁 Images optimisées dans: src/assets/optimized/`);
}

main().catch(console.error);
