# Dashboard & Blog - Around Planet

This is the standalone Dashboard and Blog application that shows performance analytics and blog content.

## Features
- Interactive dashboard with cloud provider and language selection
- Performance analytics and charts
- Fastest and slowest execution tracking
- Regional performance overview
- Blog functionality

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

## Components Included
- Blog
- TrackNavigation
- RegionalOverview & RegionalChart
- FastestExecutions & SlowestExecutions
- RegionDurations

## Data
The application uses static JSON data files in the `/public/data/` directory:
- avg_total.json
- top3.json
- last3.json
- region.json

## Utilities & Hooks
- dataFilters.js - Data filtering utilities
- regionMapping.js - Region mapping functions
- useRegionalData.js - Custom hook for regional data

The application runs independently and uses static data files for analytics.