# Portfolio Website

A sleek, minimal portfolio website built with React Native and Expo, designed for a recent Brown University Computer Science & Economics graduate seeking software engineering opportunities.

## Features

- **Responsive Design**: Adapts seamlessly across different screen sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Navigation, skill bars, and project showcases
- **Cross-Platform**: Works on web, iOS, and Android
- **TypeScript**: Full type safety and better development experience

## Sections

1. **Hero Section**: Eye-catching introduction with gradient background
2. **About Me**: Personal background and education details
3. **Technical Skills**: Categorized skill bars showing proficiency levels
4. **Featured Projects**: Showcase of key projects with technology stacks
5. **Contact**: Professional contact information and social links

## Technologies Used

- React Native
- Expo
- TypeScript
- Linear Gradients
- Vector Icons
- Responsive Design Patterns

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (optional, but recommended)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd PortfolioApp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your preferred platform:
- **Web**: Press `w` in the terminal or visit the URL shown
- **iOS**: Press `i` in the terminal (requires iOS Simulator)
- **Android**: Press `a` in the terminal (requires Android Emulator)

## Customization

### Personal Information

Update the following sections in `App.tsx`:

1. **Hero Section**: Modify the title, subtitle, and description
2. **About Section**: Update personal background and education details
3. **Skills**: Adjust skill levels and add/remove skills as needed
4. **Projects**: Replace with your actual projects and GitHub links
5. **Contact**: Update email and social media links

### Styling

The app uses a consistent color scheme:
- Primary: `#667eea` (Blue gradient)
- Secondary: `#764ba2` (Purple gradient)
- Text: `#333` (Dark gray)
- Background: `#ffffff` (White)

### Adding New Sections

To add new sections, follow the existing pattern:
1. Add the section to the navigation array
2. Create the section component
3. Add corresponding styles
4. Update the scroll handler if needed

## Deployment

### Web Deployment

1. Build for web:
```bash
npm run web
```

2. Deploy to your preferred hosting service (Netlify, Vercel, etc.)

### Mobile Deployment

1. Build for production:
```bash
expo build:android  # For Android
expo build:ios      # For iOS
```

2. Follow Expo's deployment guide for app store submission

## Project Structure

```
PortfolioApp/
├── App.tsx              # Main application component
├── package.json         # Dependencies and scripts
├── app.json            # Expo configuration
├── tsconfig.json       # TypeScript configuration
├── babel.config.js     # Babel configuration
├── index.js            # Entry point
├── assets/             # Images and static assets
└── README.md           # Project documentation
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, please reach out through the contact information provided in the portfolio.
