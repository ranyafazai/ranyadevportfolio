# Portfolio Rayen - Développeur Full-Stack

Un portfolio moderne et responsive pour développeur Full-Stack, construit avec React et Tailwind CSS.

## 🚀 Fonctionnalités

- **Design moderne et responsive** - Interface élégante qui s'adapte à tous les écrans
- **Mode sombre/clair** - Basculement entre thèmes avec persistance des préférences
- **Animations fluides** - Animations avec Framer Motion pour une expérience utilisateur optimale
- **Sections complètes** :
  - Hero avec présentation personnelle
  - À propos avec statistiques et technologies
  - Compétences avec barres de progression
  - Projets avec filtres et liens GitHub/Démo
  - Expérience professionnelle avec timeline
  - Formation et certifications
  - Formulaire de contact avec EmailJS
- **SEO optimisé** - Meta tags, Open Graph, et structure sémantique
- **Performance** - Code optimisé et chargement rapide

## 🛠️ Technologies utilisées

- **Frontend** : React 18, JavaScript ES6+
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Icônes** : React Icons
- **Email** : EmailJS (configurable)
- **Build** : Create React App

## 📦 Installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/rayen/portfolio.git
   cd portfolio
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer EmailJS (optionnel)**
   - Créer un compte sur [EmailJS](https://www.emailjs.com/)
   - Remplacer les clés dans `src/components/Contact.js`
   - Ou utiliser le formulaire de contact sans EmailJS

4. **Lancer le serveur de développement**
   ```bash
   npm start
   ```

5. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 🎨 Personnalisation

### Modifier les données personnelles

1. **Projets** : Éditer `src/data/projects.json`
2. **Expérience** : Éditer `src/data/experience.json`
3. **Formation** : Éditer `src/data/education.json`
4. **Informations personnelles** : Modifier les composants directement

### Changer les couleurs

Modifier `tailwind.config.js` pour personnaliser la palette de couleurs :

```javascript
colors: {
  primary: {
    // Vos couleurs primaires
  },
  secondary: {
    // Vos couleurs secondaires
  }
}
```

### Ajouter des sections

1. Créer un nouveau composant dans `src/components/`
2. L'ajouter à `src/App.js`
3. Mettre à jour la navigation dans `src/components/Header.js`

## 🚀 Déploiement

### Vercel (Recommandé)

1. **Installer Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Déployer**
   ```bash
   vercel
   ```

3. **Configuration automatique** - Vercel détecte automatiquement React

### Netlify

1. **Build du projet**
   ```bash
   npm run build
   ```

2. **Déployer le dossier `build`** sur Netlify

### GitHub Pages

1. **Installer gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Ajouter les scripts dans package.json**
   ```json
   "homepage": "https://rayen.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Déployer**
   ```bash
   npm run deploy
   ```

## 📱 Responsive Design

Le portfolio est entièrement responsive avec des breakpoints optimisés :

- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## 🎯 SEO et Performance

- Meta tags optimisés pour les moteurs de recherche
- Open Graph pour le partage sur les réseaux sociaux
- Images optimisées et lazy loading
- Code splitting automatique avec React
- Service Worker pour la mise en cache

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commit vos changements
4. Push vers la branche
5. Ouvrir une Pull Request

## 📞 Contact

- **Email** : rayen@example.com
- **LinkedIn** : [linkedin.com/in/rayen](https://linkedin.com/in/rayen)
- **GitHub** : [github.com/rayen](https://github.com/rayen)

---

Fait avec ❤️ par Rayen
