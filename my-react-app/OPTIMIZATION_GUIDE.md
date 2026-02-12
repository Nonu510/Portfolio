# Guide d'Optimisation des Images

## 📊 Dimensions recommandées

| Image | Dimension actuelle | Dimension affichée | Dimension recommandée |
|-------|-------------------|-------------------|----------------------|
| printit.png | 907x362 | 384x153 | 768x306 (2x) |
| Kasa.png | 636x251 | 384x151 | 768x302 (2x) |
| 724events.png | 427x108 | 384x97 | 768x194 (2x) |
| logo_header.png | 300x300 | 63x63 | 126x126 (2x) |
| logo_footer.png | 150x150 | 63x63 | 126x126 (2x) |
| github.png | 1248x285 | 164x38 | 328x76 (2x) |
| linkedin.png | 840x779 | 40x38 | 80x76 (2x) |
| argentbank.png | - | - | 768x302 (2x) |
| Ohmyfood.png | - | - | 768x302 (2x) |
| sophiebluel.png | - | - | 768x302 (2x) |

## 🎯 Stratégie d'optimisation

### Option 1: Utiliser un outil en ligne (plus simple)
1. Visitez [TinyPNG](https://tinypng.com) ou [Squoosh](https://squoosh.app)
2. Convertissez les PNG en WebP
3. Utilisez ImageMagick ou similaire pour redimensionner

### Option 2: Installation locale avec Node.js (recommandée)

Installez les dépendances:
```bash
npm install -D sharp
```

Créez un script `optimize-images.js` pour automatiser le traitement.

## 📝 Implémentation côté code

Utilisez des balises `<picture>` pour compatibilité:

```jsx
<picture>
  <source srcSet="/assets/image.webp" type="image/webp" />
  <img src="/assets/image.png" alt="Description" />
</picture>
```

Ou utilisant srcSet:

```jsx
<img 
  srcSet="/assets/image-2x.webp 2x, /assets/image.webp 1x"
  src="/assets/image.png" 
  alt="Description" 
/>
```

## 💾 Économies attendues

- **Conversion PNG → WebP**: 20-30% de réduction
- **Redimensionnement**: 60-80% de réduction
- **Compression agressive**: 10-15% de réduction supplémentaire

**Total estimé**: 764 KiB → ~150-200 KiB (économie d'environ 600+ KiB)
