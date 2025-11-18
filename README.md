# APTOS ROOM

A decentralized bounty & quest platform built on Aptos.

"ROOM" represents a stop for Web3 gigs, enabling a transparent, trust-driven ecosystem where contributors earn through verified tasks for Web3 projects.

## Features

- Futuristic Web3 design with neon aesthetics
- Fully responsive layout
- Smooth animations with Framer Motion
- Glassmorphism UI components
- Interactive sections with scroll navigation

## Tech Stack

- React + Vite
- TailwindCSS
- Framer Motion for animations
- React Scroll for navigation

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd aptos-room
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── assets/           # Static assets (images, logos)
├── components/       # Reusable components
├── sections/         # Page sections
├── styles/           # Global styles and Tailwind config
└── utils/            # Utility functions
```

## Sections

1. **Hero Section** - Full-screen introduction with animated background
2. **About Section** - Mission and core values
3. **Value Proposition** - Key features and benefits
4. **How It Works** - Step-by-step process explanation
5. **Live Quests Preview** - Showcase of active bounties
6. **Roadmap** - Future development plans
7. **Community** - Social links and engagement
8. **Footer** - Copyright and legal information

## Customization

### Colors

The primary color palette is defined in `tailwind.config.js`:

- Primary Neon Cyan: `#00E5FF`
- Deep Black: `#0A0A0A`
- White: for contrast

### Animations

All animations are powered by Framer Motion. Customize timing and easing in individual components.

## License

MIT