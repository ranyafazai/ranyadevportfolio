# Ranya Fazai - Full-Stack Developer Portfolio

A modern and responsive portfolio website built with React and Tailwind CSS, featuring a soft pink and lavender color scheme.

## 🚀 Features

- **Modern responsive design** - Elegant interface that adapts to all screens
- **Dark/light mode** - Theme switching with preference persistence
- **Smooth animations** - Framer Motion animations for optimal user experience
- **Complete sections**:
  - Hero with personal introduction
  - About with statistics and technologies
  - Skills with progress bars
  - Projects with filters and GitHub/Demo links
  - Professional experience timeline
  - Education and certifications
  - Contact form with EmailJS
- **SEO optimized** - Meta tags, Open Graph, and semantic structure
- **Performance** - Optimized code and fast loading

## 🛠️ Technologies Used

- **Frontend**: React 18, JavaScript ES6+
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email**: EmailJS (configurable)
- **Build**: Create React App

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ranyafazai/ranyadevportfolio.git
   cd ranyadevportfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure EmailJS (optional)**
   - Create an account on [EmailJS](https://www.emailjs.com/)
   - Replace the keys in `src/config/emailjs.js`
   - Or use the contact form without EmailJS

4. **Start development server**
   ```bash
   npm start
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🎨 Customization

### Modify personal data

1. **Projects**: Edit `src/data/projects.json`
2. **Experience**: Edit `src/data/experience.json`
3. **Education**: Edit `src/data/education.json`
4. **Personal information**: Modify components directly

### Change colors

Modify `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  primary: {
    // Your primary colors
  },
  secondary: {
    // Your secondary colors
  }
}
```

### Add sections

1. Create a new component in `src/components/`
2. Add it to `src/App.js`
3. Update navigation in `src/components/Header.js`

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Automatic configuration** - Vercel automatically detects React

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `build` folder** to Netlify

### GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add scripts to package.json**
   ```json
   "homepage": "https://ranyafazai.github.io/ranyadevportfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 📱 Responsive Design

The portfolio is fully responsive with optimized breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 SEO and Performance

- Optimized meta tags for search engines
- Open Graph for social media sharing
- Optimized images and lazy loading
- Automatic code splitting with React
- Service Worker for caching

## 📄 License

This project is under MIT license. See the `LICENSE` file for more details.

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create a branch for your feature
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Contact

- **Email**: ranyafazaei@gmail.com
- **LinkedIn**: [linkedin.com/in/ranya-fazai-b80020386](https://linkedin.com/in/ranya-fazai-b80020386)
- **GitHub**: [github.com/ranyafazai](https://github.com/ranyafazai)

---

Made with ❤️ by Ranya Fazai
