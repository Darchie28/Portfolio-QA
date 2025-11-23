# QA Engineer Portfolio Website

A modern, animated developer portfolio website built with Vite, React, and Framer Motion. This portfolio showcases QA engineering projects, skills, and provides a contact form for potential employers or collaborators.

## 🚀 Features

- ✨ **Animated Navbar** - Smooth entrance and hover states built with Framer Motion
- 🎨 **Hero Section** - Engaging entrance animation with glitch effect and syntax-highlighted code display
- 🃏 **Floating Card** - Interactive profile card with smooth animations
- 💼 **Projects Showcase** - Responsive grid of project cards with hover effects
- 📱 **Fully Responsive** - Optimized for all screen sizes
- 📧 **Contact Form** - Integrated with EmailJS for direct messaging
- 🎬 **Smooth Animations** - Framer Motion powered transitions throughout

## 🛠️ Tech Stack

- **Vite** - Next-generation frontend build tool
- **React 18** - Component-based UI library
- **Framer Motion** - Animation library for React
- **EmailJS** - Client-side email service
- **React Syntax Highlighter** - Code syntax highlighting
- **CSS3** - Modern styling with custom properties

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [EmailJS Account](https://www.emailjs.com/) (for contact form functionality)

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/Portfolio-QA.git
cd Portfolio-QA
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure EmailJS (Optional)

To enable the contact form, you need to set up EmailJS:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your service ID, template ID, and public key
5. Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

6. Add your EmailJS credentials to `.env`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173)

## 📦 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## 🔍 Preview Production Build

```bash
npm run preview
```

## 🧪 Linting

```bash
npm run lint
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** - Edit `/src/components/Hero.jsx`:
   - Change name, title, and description
   - Update the code snippet in the syntax highlighter
   - Modify social media links

2. **Projects** - Edit `/src/components/Projects.jsx`:
   - Add/remove project cards
   - Update project descriptions and tech stacks
   - Customize project images (use gradient or actual images)

3. **Navbar** - Edit `/src/components/Navbar.jsx`:
   - Update logo text
   - Add/remove navigation links

4. **Styling** - Edit `/src/App.css`:
   - Customize colors in CSS variables
   - Modify animations and transitions
   - Adjust responsive breakpoints

### Color Scheme

The color scheme is defined in `/src/App.css` using CSS custom properties:

```css
:root {
  --primary-color: #7c3aed;
  --primary-dark: #5b21b6;
  --secondary-color: #db2777;
  --accent-color: #f472b6;
  /* ... more colors */
}
```

## 📁 Project Structure

```
Portfolio-QA/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.css        # Main styles
│   ├── App.jsx        # Main App component
│   ├── index.css      # Global styles
│   └── main.jsx       # Entry point
├── .env.example       # Environment variables example
├── .eslintrc.cjs      # ESLint configuration
├── .gitignore         # Git ignore file
├── index.html         # HTML template
├── package.json       # Dependencies and scripts
├── README.md          # This file
└── vite.config.js     # Vite configuration
```

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import your repository
4. Add environment variables (EmailJS credentials)
5. Click **Deploy**

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://www.netlify.com/)
3. Import your repository
4. Add environment variables
5. Set build command: `npm run build`
6. Set publish directory: `dist`
7. Click **Deploy**

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Inspired by [animation-personal-portfolio](https://github.com/machadop1407/animation-personal-portfolio)
- Built with [Vite](https://vitejs.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Icons from [Font Awesome](https://fontawesome.com/)

## 📧 Contact

For questions or feedback, please use the contact form on the website or reach out via the social media links provided.
