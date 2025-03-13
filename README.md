[![Deploy Production](https://github.com/ciesin/uccrn-atlas-demo/actions/workflows/deploy-prod.yml/badge.svg?branch=main)](https://github.com/ciesin/uccrn-atlas-demo/actions/workflows/deploy-prod.yml)

# UCCRN Atlas Demo

An interactive web mapping application built with ArcGIS Maps SDK for JavaScript and Vite, demonstrating Surface Urban Heat Islands and Low Elevation Coastal Zones data visualization.

## Features

- Interactive map with multiple data layers
- Time-based data visualization
- Customizable bookmarks
- Layer controls and legend
- Responsive design with mobile support
- Base map gallery
- Introductory overlay for new users

## Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)
- ArcGIS Developer API key

## Installation

1. Clone the repository:
```sh
git clone <repository-url>
cd uccrn-atlas-demo
```

2. Install packages
```sh
npm install
```

3. Run the dev script for local development
```sh
npm run dev
```

ArcGIS Auth token: `https://columbia.maps.arcgis.com/home/item.html?id=a20ff942848d4411a837fe5138179578#overview`

`uccrn-atlas-demo`

1. New York City: stormwater
2. Los Angeles: transportation
3. Copenhagen: cloudburst
4. Mexico City: rainwater

## Deployment

Managed by github actions
