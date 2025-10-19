# 🚀 DevSync — Modern React Landing Page

A **modern, responsive, and production-ready landing page** built with **React**, **Vite**, and **TailwindCSS**.  
It includes multiple interactive sections — **Hero**, **Features**, **Pricing**, **Testimonials**, **FAQ**, and more — all designed with clean architecture and reusability in mind.

---

## ✨ Features

✅ Fully Responsive Design  
✅ Sleek & Modern UI/UX  
✅ Modular Component Structure  
✅ Dynamic Data-driven Sections  
✅ SEO Optimized and Accessible  
✅ Lightning-fast Performance (Powered by Vite)  
✅ Easy to Customize and Extend  

---

## 🧱 Tech Stack

| Tool / Library | Version | Purpose |
|----------------|----------|----------|
| **React** | 19.1.1 | Frontend framework |
| **Vite** | 7.1.0 | Next-gen bundler for fast builds |
| **TailwindCSS** | 4.1.11 | Utility-first CSS styling |
| **React Router DOM** | 7.8.0 | Routing and navigation |
| **React Fast Marquee** | 1.6.5 | Animated logo & text marquee |
| **Lucide React** | 0.539.0 | Elegant and modern icon set |

---

## 🗂️ Project Structure

src/
├── assets/ # Static assets (images, icons, etc.)
├── components/ # Reusable UI components
│ ├── Footer/
│ ├── Navbar/
│ ├── SectionTitle/
│ └── TestimonialCard/
├── data/ # Static data sources
│ ├── companiesLogo.js
│ ├── faqsData.js
│ ├── navLinks.js
│ ├── pricingData.js
│ └── testimonialsData.js
├── pages/ # Page-level components
│ └── Home/
├── sections/ # Distinct landing page sections
│ ├── BottomBanner/
│ ├── FaqSection/
│ ├── FeaturesSection/
│ ├── HeroSection/
│ ├── Pricing/
│ ├── Testimonials/
│ └── TrustedCompanies/
├── App.jsx # Root component
└── main.jsx # Entry point


🧠 **Note:** This project includes a GitHub Actions workflow (`.github/workflows/ci.yml`) for automated linting and build checks on each push.

---

## ⚙️ Getting Started

### 🔹 Prerequisites
- **Node.js** ≥ 16.x  
- **npm** or **yarn** package manager  

### 🔹 Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/devsync.git
cd devsync

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev


The app will run locally at http://localhost:5173

📜 Available Scripts
Command	Description
npm run dev	Start development server
npm run build	Build project for production
npm run lint	Run ESLint for code quality
npm run preview	Preview production build locally
🧩 Component Overview
Component	Description
Navbar	Fully responsive header with dynamic navigation
HeroSection	Engaging entry section with CTA
FeaturesSection	Showcases product features and benefits
Pricing	Interactive pricing plans with tiers
Testimonials	Displays real or mock user feedback
FAQ	Expandable list of common questions
TrustedCompanies	Logo showcase of partners or clients
Footer	Comprehensive footer with social and quick links
🎨 Customization

The project uses TailwindCSS for rapid UI design.

Modify global styles → tailwind.config.js

Component-specific tweaks → Inside individual component files

You can also integrate your own theme or custom fonts easily.

🧰 Developer Experience

Pre-configured ESLint and Prettier for clean code

Modular component design for reusability

Modern tooling: Hot Module Reloading, Vite Dev Server, and Optimised Production Builds

Includes CI workflow for automated linting and build checks

🧪 Future Enhancements (Optional Roadmap)

 Add dark mode toggle

 Add contact form with backend integration

 Implement AOS scroll animations

 Add CMS (e.g., Sanity / Contentful) support

 Multi-language (i18n) support

🤝 Contributing

Contributions, suggestions, and feature requests are welcome!
Feel free to fork this repository, raise issues, or submit pull requests.

🧑‍💻 Author

Aman Mishra
📍 NIT Agartala
🔗 LinkedIn
 | GitHub

📄 License

This project is licensed under the MIT License — feel free to use and modify it for learning or production purposes.


---

Just copy this into a file named **`README.md`** in your repository root.  
GitHub will automatically render all sections, tables, and code blocks beautifully.