# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Toram Tools** is a Next.js 15.3.4 application with React 19 and TypeScript, providing utility tools for the MMORPG "Toram Online". The application is primarily in Japanese and includes a Market Calculator and Smith Calculator.

## Essential Commands

### Development
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production  
npm run start        # Start production server
npm run lint         # Run Biome linting with auto-fix
npm run format       # Format code with Biome (auto-fix enabled)
```

### Testing
Currently no test framework is configured.

## Architecture

### Tech Stack
- **Framework**: Next.js 15.3.4 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.1.11
- **Code Quality**: Biome 2.0.6 (not ESLint/Prettier)
- **Analytics**: Google Analytics + Vercel Analytics

### Directory Structure
- `app/components/` - Shared UI components (elements, layouts)
- `app/features/` - Feature-specific components (market, card)
- `app/market/` - Market calculator page
- `app/smith-calculator/` - Smith calculator with components, lib, types
- Feature directories contain their own `components/` and `lib/` subdirectories

### Key Patterns
- **Feature-based organization** - Each tool has its own directory with components and logic
- **Client-side state** - Uses localStorage for persistence, no external state management
- **Type-safe development** - Comprehensive TypeScript with defined interfaces
- **Component separation** - Clear distinction between layouts, elements, and features

## Configuration Notes

### Styling
- Uses Tailwind with extensive Japanese font configuration
- Custom color system with HSL values
- Mobile-first responsive design
- Class-variance-authority for component variants

### Path Aliases
- `@/*` maps to project root for imports

### Code Standards
- Biome configuration enforces single quotes, JSX double quotes, and semicolons as needed
- Automatic import organization enabled
- Japanese text content throughout the application
- Component props use TypeScript interfaces

## Business Logic

### Smith Calculator
Complex equipment crafting calculations with:
- 10 equipment types (weapons/armor)
- 6 character stats (STR, DEX, VIT, AGI, INT, TEC)
- 6 equipment slots with stat bonuses
- Success rate calculations using game-specific formulas

### Market Calculator
Tax and pricing calculations for in-game market transactions.

## Development Context

This is a client-side application optimized for Japanese Toram Online players. All new features should:
- Support Japanese text and UI patterns
- Use localStorage for data persistence
- Follow the existing TypeScript interface patterns
- Maintain mobile-responsive design
- Use Biome for code formatting (not Prettier/ESLint)