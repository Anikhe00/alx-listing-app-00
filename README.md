# ALX Listing APP

The ALX Listing App is a full-stack clone of the popular accomodation booking platform, AirBnB. The goal is to build a functional web application that enables users to:

Browse property listings
View detailed property information
Complete bookings

The project covers frontend development, backend APIs, database design, and deployment.

## Project Structure

```
├── components/ # Reusable UI components (e.g., Card, Button, Navbar)
├── interfaces/ # TypeScript interfaces and types for props and data models
├── constants/ # Shared values, such as static data, enums, or configuration constants
├── public/assets/ # Static assets like images, icons, and fonts
├── pages/ # Next.js pages and API routes
├── styles/ # Global and component-specific CSS files
├── README.md # This file—project overview and setup instructions
└── tsconfig.json # TypeScript configuration
```

### Purpose of the Directories

- **components/**: Houses modular UI components, such as `Card`, `Button`, or navigation elements, designed for reuse across the app.
- **interfaces/**: Contains `.ts` files defining TypeScript interfaces like `CardProps`, `ButtonProps`, and data models, promoting strong typing and clarity.
- **constants/**: Stores application-wide constants, such as color themes, default pagination values, or static dropdown options.
- **public/assets/**: Static resources like images, icons, and fonts, served directly by Next.js for efficient loading.
- **pages/**: Next.js convention for routing—each file maps to a route, and includes optional API endpoints under `/api`.
- **styles/**: Global styles or CSS modules for your components.
- **tsconfig.json**: Configures TypeScript settings for consistent compilation.

## Getting Started

Follow these steps to run the project locally:

### Prerequisites

Ensure you have **Node.js** (version 14 or higher) and a Node package manager installed (npm, Yarn, pnpm, or Bun).

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/Anikhe00/alx-listing-app.git
   cd alx-listing-app
   ```

2. Install dependencies (using npm):
   ```bash
   npm install
   ```

### Run the Development Server

Start the app in development mode:

```bash
npm run dev
```

This will spin up the local server, typically available at:

```
http://localhost:3000
```

Open it in your browser to explore the listing UI in action.

### Editing the App

- The home page is managed under `pages/index.tsx`—feel free to update or expand this route.
- For API endpoints, refer to the `pages/api/` directory (e.g., `pages/api/hello.ts`).
- UI customization and theming can be done by editing components in `components/`, along with their corresponding interfaces in `interfaces/` and shared constants in `constants/`.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Make your changes and commit them (`git commit -m "Add feature"`)
4. Push to your branch (`git push origin feature-name`)
5. Open a Pull Request for review

## License

Specify your project's license here (e.g., MIT). If none, you can omit this section.
