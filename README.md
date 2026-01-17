# 🎨 Modern Portfolio with Scrollytelling

A high-performance, visually stunning portfolio website built with **React 19**, **Vite**, and **Tailwind CSS 4**. This project features immersive scrollytelling experiences, smooth animations, and a fully functional contact system.

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

## ✨ Features

- **🚀 High Performance**: Powered by Vite and React 19 for blazing fast load times.
- **🎬 Scrollytelling Animations**: Engaging image sequences controlled by scroll position (using `framer-motion` and `@studio-freight/lenis` for smooth scrolling).
- **🎨 Modern Design**: Sleek, glassmorphic UI components and responsive layouts built with Tailwind CSS 4.
- **📧 Functional Contact Form**: Integrated with **EmailJS** for real-time email delivery directly from the website.
- **📄 Resume Integration**: Direct view and download capability for professional resume.
- **📱 Fully Responsive**: Optimized for desktops, tablets, and mobile devices.
- **🛠️ Dynamic Projects & Skills**: Showcase of technical expertise and creative projects.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll**: [Lenis](https://github.com/studio-freight/lenis)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## 📂 Project Structure

```bash
src/
├── components/          # Reusable UI components
│   ├── Contact.jsx      # Contact form with EmailJS integration
│   ├── Home.jsx         # Landing page
│   ├── Navbar.jsx       # Responsive navigation bar
│   ├── Projects.jsx     # Project showcase with grids
│   ├── Skills.jsx       # Technical skills display
│   ├── ScrollSection.jsx# Scrollytelling section implementation
│   ├── ImageScroll.jsx  # Image sequence animation logic
│   └── AbstractSystemBackground.jsx # Dynamic background effect
├── App.jsx              # Main application root & routing
└── index.css            # Global styles & Tailwind directives
public/
├── video_seq/           # Image sequences for scroll animations
├── Resume_pritam.pdf    # Resume file
└── vite.svg             # Favicon
```

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pritam018-sin/Animated-Portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## ⚙️ Configuration

### EmailJS Setup
To make the contact form work, you need your own EmailJS credentials. Update the `Contact.jsx` file or use environment variables:

```javascript
// In src/components/Contact.jsx
emailjs.sendForm(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  form.current,
  'YOUR_PUBLIC_KEY'
)
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Built with ❤️ by Pritam
</p>
