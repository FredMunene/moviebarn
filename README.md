# MovieBarn - Movie & TV Show Discovery App

![MovieBarn OG Image](public/images/og-image.svg)

## Overview

MovieBarn is a modern, responsive web application for discovering movies and TV shows. Built with Next.js and the TMDB API, it provides a seamless experience for searching, exploring, and finding your next favorite piece of entertainment.

## Features

-   **Dynamic Search**: A powerful search bar that delivers instant results for movies and TV shows as you type.
-   **Popular Content**: The search page displays popular movies by default, ensuring users always have something to explore.
-   **Trending Carousels**: The home page features horizontally scrolling carousels for currently popular movies and TV shows.
-   **Detailed Pages**: Clicking on any movie or TV show takes you to a detailed view with:
    -   High-resolution poster images.
    -   Ratings, runtime, genre, and release year.
    -   A comprehensive overview/plot summary.
    -   A scrollable list of the top-billed cast.
    -   Additional data from the OMDB API, such as box office numbers and director information.
-   **Responsive Design**: A mobile-first approach ensures a great experience on any device, from phones to desktops, including a slide-in overlay menu for mobile navigation.
-   **SEO Optimized**: Each page includes dynamic meta tags (title, description, and Open Graph) for excellent SEO and social media sharing.
-   **Robust Error Handling**: Custom pages for 404 (Not Found) and application errors provide a user-friendly experience when things go wrong.

## Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/) (App Router)
-   **Language**: JavaScript
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **API Integration**:
    -   [TMDB (The Movie Database) API](https://www.themoviedb.org/documentation/api) for primary movie/TV data.
    -   [OMDB (The Open Movie Database) API](http://www.omdbapi.com/) for supplementary data.
-   **Deployment**: Ready for deployment on [Vercel](https://vercel.com/).

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v18.x or later recommended)
-   npm, yarn, or pnpm

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/fredmunene/moviebarn.git
    cd moviebarn
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    -   Rename the `.env.example` file to `.env.local`.
    -   Open `.env.local` and add your API keys from TMDB and OMDB.
        ```
        NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
        NEXT_PUBLIC_OMDB_API_KEY=your_omdb_api_key_here
        NEXT_PUBLIC_APP_URL=http://localhost:3000
        ```
    -   The `NEXT_PUBLIC_APP_URL` is required for server-side API calls to function correctly.

4.  **Run the development server:**
    ```sh
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project follows a standard Next.js App Router structure. Key directories include:

-   `src/app`: Contains all the pages, API routes, and layouts.
-   `src/components`: Reusable React components, organized by feature (`/search`, `/details`, `/content`) and type (`/ui`, `/layout`, `/common`).
-   `src/lib`: Contains API integration logic (`/api`), custom hooks (`/hooks`), and utility functions (`/utils`).
-   `public`: Static assets like images and fonts.

---

This project was built as a demonstration of modern web development practices with Next.js.