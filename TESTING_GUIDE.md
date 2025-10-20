# 🧪 Guide de Test du Portfolio

## 🚀 Démarrage Rapide

1. **Installer les dépendances** (déjà fait)
   ```bash
   npm install
   ```

2. **Lancer le serveur de développement**
   ```bash
   npm start
   ```

3. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## ✅ Checklist de Test

### 🎨 Interface et Design
- [ ] **Chargement initial** : Le site se charge sans erreur
- [ ] **Mode sombre/clair** : Le bouton de basculement fonctionne
- [ ] **Responsive** : Tester sur mobile, tablette et desktop
- [ ] **Animations** : Les animations Framer Motion fonctionnent
- [ ] **Navigation** : Les liens de navigation scrollent vers les sections

### 📱 Test Responsive
- [ ] **Mobile** (< 768px) : Menu hamburger fonctionne
- [ ] **Tablette** (768px - 1024px) : Layout s'adapte
- [ ] **Desktop** (> 1024px) : Navigation horizontale visible

### 🏠 Sections à Tester

#### Hero Section
- [ ] **Photo de profil** : Placeholder affiché
- [ ] **Liens sociaux** : Boutons cliquables (ouvrent dans nouvel onglet)
- [ ] **Boutons CTA** : "Me contacter" et "Télécharger CV"
- [ ] **Animation de scroll** : Indicateur de scroll fonctionne

#### À Propos
- [ ] **Statistiques** : Compteurs animés
- [ ] **Technologies** : Badges colorés
- [ ] **Texte** : Contenu lisible et bien formaté

#### Compétences
- [ ] **Barres de progression** : Animations au scroll
- [ ] **Catégories** : Frontend, Backend, Outils
- [ ] **Compétences additionnelles** : Badges au bas

#### Projets
- [ ] **Filtres** : Boutons de filtrage fonctionnent
- [ ] **Cartes de projets** : Hover effects
- [ ] **Liens GitHub/Démo** : Ouvrent dans nouvel onglet
- [ ] **Images** : Placeholders affichés

#### Expérience
- [ ] **Timeline** : Design en timeline
- [ ] **Cartes d'expérience** : Hover effects
- [ ] **Réalisations** : Listes à puces
- [ ] **Technologies** : Badges par expérience

#### Formation
- [ ] **Cartes de formation** : Design cohérent
- [ ] **Icônes** : Différentes icônes selon le type
- [ ] **Réalisations** : Listes détaillées

#### Contact
- [ ] **Formulaire** : Validation des champs
- [ ] **Soumission** : Test du formulaire (simulation)
- [ ] **Messages de statut** : Succès/Erreur
- [ ] **Informations de contact** : Liens cliquables

#### Footer
- [ ] **Liens sociaux** : Fonctionnels
- [ ] **Navigation rapide** : Liens vers sections
- [ ] **Bouton "Retour en haut"** : Scroll vers le haut

### 🔧 Fonctionnalités Techniques

#### Navigation
- [ ] **Scroll fluide** : Navigation entre sections
- [ ] **Menu mobile** : Ouverture/fermeture
- [ ] **Bouton scroll-to-top** : Apparaît après scroll

#### Performance
- [ ] **Chargement rapide** : Pas de délais importants
- [ ] **Animations fluides** : 60fps
- [ ] **Pas d'erreurs console** : Vérifier la console du navigateur

#### Accessibilité
- [ ] **Navigation clavier** : Tab fonctionne
- [ ] **Alt text** : Images ont des descriptions
- [ ] **Contraste** : Texte lisible sur tous les fonds

## 🐛 Problèmes Courants et Solutions

### Erreur "Module not found"
```bash
# Solution : Réinstaller les dépendances
npm install
```

### Erreur de port (3000 déjà utilisé)
```bash
# Solution : Utiliser un autre port
set PORT=3001 && npm start
```

### Animations ne fonctionnent pas
- Vérifier que Framer Motion est installé
- Vérifier la console pour les erreurs JavaScript

### Mode sombre ne persiste pas
- Vérifier le localStorage dans les DevTools
- Vérifier que la classe 'dark' est appliquée au HTML

## 📊 Tests de Performance

### Lighthouse (Chrome DevTools)
1. Ouvrir Chrome DevTools (F12)
2. Aller dans l'onglet "Lighthouse"
3. Lancer l'audit
4. Vérifier les scores :
   - Performance : > 90
   - Accessibilité : > 90
   - Bonnes pratiques : > 90
   - SEO : > 90

### Test de Vitesse
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1

## 🌐 Test Multi-Navigateurs

### Navigateurs à Tester
- [ ] **Chrome** : Fonctionnalités complètes
- [ ] **Firefox** : Compatibilité
- [ ] **Safari** : (si sur Mac)
- [ ] **Edge** : Compatibilité Microsoft

### Appareils à Tester
- [ ] **Desktop** : Windows/Mac/Linux
- [ ] **Mobile** : iOS Safari, Chrome Mobile
- [ ] **Tablette** : iPad, Android tablet

## 🚀 Test de Déploiement

### Build de Production
```bash
npm run build
```

### Test du Build
```bash
# Installer un serveur local
npm install -g serve

# Servir le build
serve -s build
```

### Vérifications Post-Build
- [ ] **Tous les assets** : Images, CSS, JS chargés
- [ ] **Routage** : Pas d'erreurs 404
- [ ] **Performance** : Chargement rapide
- [ ] **SEO** : Meta tags présents

## 📝 Rapport de Test

Après avoir testé, documentez :

### ✅ Fonctionnalités qui marchent
- Liste des fonctionnalités testées avec succès

### ❌ Problèmes trouvés
- Description des bugs
- Étapes pour reproduire
- Solutions appliquées

### 🔧 Améliorations suggérées
- Optimisations de performance
- Améliorations UX/UI
- Nouvelles fonctionnalités

---

**Note** : Ce guide couvre tous les aspects importants du portfolio. Testez méthodiquement chaque section pour vous assurer que tout fonctionne parfaitement avant le déploiement.
