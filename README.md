# Categorized Links Website

This project is a responsive, multi-language website that displays categorized links using React, TypeScript, and Tailwind CSS. It features a dark/light mode toggle and language switching between English and Chinese.

## Features

- Responsive design using Tailwind CSS
- Dark mode and light mode toggle
- Language switching (English and Chinese)
- Categorized links with icons
- Hover effects for improved user experience

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (for icons)

## Project Structure

```
categorized-links/
├── public/
├── src/
│   ├── locales/
│   │   ├── en.json
│   │   └── zh.json
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .eslintrc.cjs
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Deployment Guide

Follow these steps to deploy the Categorized Links Website:

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd categorized-links
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Build the project**

   ```bash
   npm run build
   ```

   This command will create a `dist` folder with the production-ready files.

4. **Deploy to a hosting service**

   You can deploy the contents of the `dist` folder to any static site hosting service. Here are a few options:

   a. **Netlify**:
      - Sign up for a Netlify account if you don't have one.
      - Install the Netlify CLI: `npm install -g netlify-cli`
      - Run `netlify deploy` and follow the prompts.
      - For production deployment, use `netlify deploy --prod`

   b. **Vercel**:
      - Sign up for a Vercel account if you don't have one.
      - Install the Vercel CLI: `npm install -g vercel`
      - Run `vercel` in the project root and follow the prompts.
      - For production deployment, use `vercel --prod`

   c. **GitHub Pages**:
      - Create a new repository on GitHub.
      - Push your code to the repository.
      - Go to the repository settings, navigate to the "Pages" section.
      - Set the source to the `main` branch and the `/docs` folder.
      - Rename your `dist` folder to `docs` before pushing.

5. **Environment Variables (if needed)**

   If you need to set any environment variables for your production build, consult the documentation of your chosen hosting service on how to set them.

6. **Continuous Deployment (optional)**

   Set up continuous deployment with your hosting service to automatically deploy when you push changes to your repository.

## Development

To run the project locally for development:

1. Clone the repository and install dependencies as described in steps 1-2 of the deployment guide.

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [Apache License Version 2.0](LICENSE).
