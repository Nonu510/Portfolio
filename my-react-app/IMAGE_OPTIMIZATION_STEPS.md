# 🚀 Instructions d'Optimisation des Images

## 📋 Étape 1: Installer les dépendances

Vous avez besoin de `sharp` pour traiter les images. Installez-le avec:

```bash
npm install -D sharp
```

## 🔧 Étape 2: Mettre à jour package.json

Ajoutez ce script dans votre `package.json`:

```json
{
  "scripts": {
    "optimize-images": "node optimize-images.js"
  }
}
```

## 🎨 Étape 3: Exécuter l'optimisation

Exécutez le script d'optimisation:

```bash
npm run optimize-images
```

Le script va:
- ✅ Redimensionner toutes les images à leurs dimensions affichées
- ✅ Convertir en WebP (meilleure compression)
- ✅ Créer une version PNG compressée comme fallback
- ✅ Sauvegarder tous les fichiers dans `src/assets/optimized/`

## 📊 Résultats attendus

| Image | Avant | Après | Économie |
|-------|-------|-------|----------|
| printit.png | 355.6 KiB | ~30-50 KiB | ~85% |
| Kasa.png | 150.7 KiB | ~15-25 KiB | ~85% |
| 724events.png | 51.2 KiB | ~5-10 KiB | ~80% |
| logo_header.png | 51.3 KiB | ~3-5 KiB | ~90% |
| logo_footer.png | 16.9 KiB | ~1-2 KiB | ~85% |
| github.png | 14.6 KiB | ~2-3 KiB | ~80% |
| linkedin.png | 10.4 KiB | ~1-2 KiB | ~85% |
| baniere.webp | 232.8 KiB | ~80-100 KiB | ~60% |

**Total estimé: 917 KiB → ~150-200 KiB**

## 🎯 Implémentation dans le code

Les fichiers suivants ont déjà été modifiés pour utiliser les images optimisées:

### ✅ Header (logo)
[header.jsx](src/components/header/header.jsx#L33-L37)
- Utilise balise `<picture>` avec WebP et fallback PNG
- Images chargées en lazy loading

### ✅ Footer (logos sociaux)
[footer.jsx](src/components/footer/footer.jsx#L11-L26)
- LinkedIn, GitHub et logo footer optimisés
- Balises `<picture>` pour compatibilité navigateurs

### ✅ Banner (bannière)
[banner.scss](src/components/banner/banner.scss#L1)
- Image de bannière pointant vers la version optimisée
- CSS background-image utilise baniere.webp compressée

### ✅ Project Items (icônes projets)
[project_item.jsx](src/components/project_item/project_item.jsx)
- Support pour images optimisées via prop `useOptimized`
- Images chargées en lazy loading

## 📝 Prochaines étapes

### Option A: Intégration complète des images optimisées

Modifiez `src/data/projects.js`:

```javascript
// Avant (imports statiques)
import printit from '../assets/printit.png';

// Après (chemins string)
const printit = 'printit';
// Puis dans le composant
<ProjectItem 
  iconSrc={printit} 
  useOptimized={true}
  ...
/>
```

### Option B: Garder les images actuelles

Conservez le comportement actuel - les images optimisées serviront de fallback via le CSS/HTML

## 🔍 Validation

Après l'optimisation, vérifiez avec:

```bash
# Afficher la taille des fichiers
ls -lah src/assets/optimized/
```

Puis lancez Lighthouse dans Chrome DevTools pour confirmer les économies.

## 💡 Astuces supplémentaires

1. **Cache navigateur**: Les images WebP sont mises en cache plus efficacement
2. **Lazy loading**: Déjà implémenté avec `loading="lazy"`
3. **Srcset responsif**: Peut être ajouté pour les écrans haute DPI

## 🐛 Dépannage

### Erreur "Sharp not found"?
```bash
npm install -D sharp
```

### Certaines images manquent?
Vérifiez que le fichier `optimize-images.js` a les bons noms d'images dans `imageConfigs`

### Path incorrect?
Assurez-vous que le path du script correspond à votre structure de project

## 📚 Ressources

- [Sharp Documentation](https://sharp.pixelplumbing.com/)
- [WebP Format](https://developers.google.com/speed/webp)
- [Lighthouse Performance](https://developers.google.com/web/tools/lighthouse)
