# Nuqwa Platform

The premier platform for Arabic art, featuring a dual-funnel architecture for emerging and professional artists.

## Architecture

This Next.js application handles multiple subdomains:
- **Main Hub**: `nuqwa.com`
- **App/Console**: `app.nuqwa.com`
- **Micro-stores**: `artists.nuqwa.com`
- **Verifier**: `verify.nuqwa.com`

## Getting Started

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Run the development server:
    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure

-   `src/middleware.ts`: Handles subdomain routing.
-   `src/app/(public)`: Public marketing pages.
-   `src/app/(platform)`: Authenticated consoles for Artists and Collectors.
-   `src/app/(micro-store)`: Public artist micro-stores.
-   `src/app/(verify)`: Certificate verification.
