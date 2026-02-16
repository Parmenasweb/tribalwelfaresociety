<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# TWS | Tribal Welfare Society

A premium Next.js website showcasing 30 years of heritage in restoring dignity and relief to the underprivileged of North East India.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **React**: 19.2.4
- **TypeScript**: 5.8.2
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Playfair Display, Montserrat, Inter (optimized via Next.js)

## Features

- 🎨 Premium design with heritage aesthetic
- ⚡ Optimized performance with Next.js Image and Font optimization
- 📱 Fully responsive design
- 🎭 Smooth animations with Framer Motion
- 🖼️ Image gallery with lightbox
- ♿ Accessible and SEO-friendly

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables (optional):**
   ```bash
   cp .env.local.example .env.local
   ```
   Edit `.env.local` and add your `GEMINI_API_KEY` if needed for future features.

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

The production build will be optimized and ready to deploy.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with fonts and metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── OurRoots.tsx
│   ├── Timeline.tsx
│   ├── BentoGrid.tsx
│   ├── Gallery.tsx
│   ├── LivePulse.tsx
│   ├── DonationHub.tsx
│   ├── Footer.tsx
│   └── ScrollToTop.tsx
├── public/            # Static assets
├── next.config.js     # Next.js configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This Next.js application can be deployed on:
- [Vercel](https://vercel.com) (recommended)
- [Netlify](https://netlify.com)
- Any Node.js hosting platform

For Vercel deployment:
1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

## License

Private - Tribal Welfare Society
