# AI Sports Card Trading Dashboard

An AI-powered frontend dashboard for monitoring live sports card auctions on Whatnot, comparing prices from eBay, and providing strategic bidding insights.

## Features

### 🎯 Core Functionality
- **Single User Authentication**: Secure admin-only access with login system
- **Live Auction Monitoring**: Real-time display of Whatnot auction listings
- **eBay Price Analysis**: Historical sales data comparison
- **Profit Calculator**: Interactive tool for calculating potential profits
- **AI Insights**: Machine learning recommendations and market analysis
- **Analytics Dashboard**: Comprehensive charts and performance metrics

### 🔐 Authentication
- **Admin Login**: Single-user authentication system
- **Demo Credentials**: 
  - Email: `admin@sportscards.com`
  - Password: `admin123`
- **Session Management**: Persistent login state with localStorage
- **Secure Access**: Dashboard only accessible after authentication

### 📊 Dashboard Sections
1. **Overview**: Key metrics and quick access to all features
2. **Whatnot Auctions**: Live auction listings with bidding information
3. **eBay Analysis**: Historical sales data and price trends
4. **AI Insights**: Smart recommendations and market predictions
5. **Analytics**: Performance charts and success metrics

### 🎨 Design Features
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Modern UI**: Clean, professional interface with Tailwind CSS
- **Real-time Updates**: Live status indicators and dynamic content
- **Interactive Charts**: Recharts integration for data visualization

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Charts**: Recharts
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-sports-card-trading-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── ui/              # Reusable UI components
│   ├── Dashboard.tsx    # Main dashboard
│   ├── Header.tsx       # Navigation header
│   ├── StatsCards.tsx   # Key metrics cards
│   ├── WhatnotSection.tsx # Auction listings
│   ├── EbaySection.tsx  # Sales analysis
│   ├── ProfitCalculator.tsx # Profit calculator
│   ├── AIInsights.tsx   # AI recommendations
│   └── AnalyticsDashboard.tsx # Charts and analytics
├── lib/                 # Utility functions
│   └── utils.ts         # Helper functions
└── types/               # TypeScript definitions
    └── index.ts         # Type definitions
```

## Features Overview

### Dashboard Components

#### Stats Cards
- Total Portfolio Value
- Active Auctions
- Daily Profit
- Success Rate

#### Whatnot Section
- Live auction listings
- Current bid amounts
- Time remaining
- Seller information
- Watcher and bid counts

#### eBay Analysis
- Recent sales data
- Price comparisons
- Market trends
- Historical performance

#### Profit Calculator
- Interactive profit calculation
- Risk assessment
- Fee calculations
- Investment recommendations

#### AI Insights
- Market trend analysis
- Opportunity detection
- Risk warnings
- Strategic recommendations

#### Analytics Dashboard
- Profit trend charts
- Success rate tracking
- Category performance
- Portfolio distribution

## Future Enhancements

This frontend dashboard is designed to integrate with:
- **Backend API**: RESTful services for data management
- **n8n Workflows**: Automation and data processing
- **Playwright Integration**: Automated auction monitoring
- **AI Services**: Machine learning models for predictions
- **Real-time Updates**: WebSocket connections for live data

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
