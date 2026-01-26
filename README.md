# Quincy Golf Lounge

Premium indoor golf simulator experience featuring Trackman technology.

## Tech Stack

- **Vite** - Fast build tool and dev server
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view the app.

### Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── layout/      # Header, Footer, Layout wrapper
│   ├── sections/    # Landing page sections (Hero, About, etc.)
│   └── booking/     # Booking-related components
├── pages/           # Route components (Home, Book)
├── hooks/           # Custom React hooks
├── services/        # API services
└── types/           # TypeScript type definitions
```

## Trackman Integration

The booking functionality uses the Trackman Booking & Payments API (GraphQL).

### Setup

1. Contact Trackman to obtain API access
2. Copy `.env.example` to `.env`
3. Add your Trackman credentials:
   ```
   VITE_TRACKMAN_API_URL=<your-api-url>
   VITE_TRACKMAN_SUBSCRIPTION_KEY=<your-subscription-key>
   ```

### Current Status

The Trackman integration is **stubbed** and ready for implementation once API credentials are obtained. Key files:

- `src/services/trackman.ts` - API client with placeholder functions
- `src/hooks/useTrackman.ts` - React hook for booking data
- `src/components/booking/BookingWidget.tsx` - Booking UI component

## Deployment

This project is configured for deployment on Railway.

### Environments

| Branch | Environment | Description |
|--------|-------------|-------------|
| `develop` | Development | Testing and staging |
| `main` | Production | Live site (when ready) |

### Railway Setup

1. Create a new project on [Railway](https://railway.app)
2. Connect your GitHub repository
3. Configure branch deployments:
   - `develop` branch → Development environment
4. Railway will auto-deploy on push using `railway.toml` config

### Environment Variables

Set these in Railway dashboard for each environment:
- `VITE_TRACKMAN_API_URL` - Trackman API endpoint
- `VITE_TRACKMAN_SUBSCRIPTION_KEY` - Your Trackman key

## License

Private - All rights reserved.
