# Site Restaurante Japonês - Backend API

## Description
Backend API for Site Restaurante Japonês - A comprehensive restaurant website featuring menu presentation and location information.

## Technology Stack
- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: Microsoft SQL Server
- **Validation**: Zod

## Project Structure
```
src/
├── api/                    # API Controllers
│   └── v1/                 # API Version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   └── v1/                 # Version 1 routes
├── middleware/             # Express middleware
├── services/               # Business logic services
├── utils/                  # Utility functions
├── constants/              # Application constants
├── instances/              # Service instances
├── config/                 # Configuration
└── server.ts               # Application entry point
```

## Getting Started

### Prerequisites
- Node.js 18+ installed
- SQL Server instance available
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

3. Run database migrations (when available):
```bash
# Database setup instructions will be added
```

### Development

Start development server with hot reload:
```bash
npm run dev
```

The API will be available at `http://localhost:3000`

### Building for Production

Build the project:
```bash
npm run build
```

Start production server:
```bash
npm start
```

### Testing

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

### Code Quality

Run linter:
```bash
npm run lint
```

Fix linting issues:
```bash
npm run lint:fix
```

## API Documentation

### Base URL
- Development: `http://localhost:3000/api/v1`
- Production: `https://api.yourdomain.com/api/v1`

### Health Check
```
GET /health
```

Returns server health status and version information.

### API Versioning

The API uses URL path versioning:
- `/api/v1/external/*` - Public endpoints
- `/api/v1/internal/*` - Authenticated endpoints

## Environment Variables

See `.env.example` for all available configuration options:

- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 3000)
- `DB_HOST` - Database host
- `DB_PORT` - Database port
- `DB_USER` - Database user
- `DB_PASSWORD` - Database password
- `DB_NAME` - Database name
- `CORS_ORIGINS` - Allowed CORS origins

## Features

### Implemented
- ✅ Base server configuration
- ✅ API versioning structure
- ✅ Error handling middleware
- ✅ Request validation framework
- ✅ Response formatting utilities
- ✅ Health check endpoint

### Pending Implementation
- ⏳ Menu management endpoints
- ⏳ Location information endpoints
- ⏳ Gallery management
- ⏳ Contact information endpoints
- ⏳ Database integration

## Contributing

1. Follow the established code structure and patterns
2. Use TypeScript strict mode
3. Write tests for new features
4. Follow ESLint configuration
5. Document all public APIs with TSDoc comments

## License

ISC