# MovieBarn
## Overview

MovieBarn is a movie/TV discovery web app that allows users to search and explore detailed information on entertainment content using TMDB and OMDB APIs. Users can manage personal watchlists, discover trending and recommended titles, and filter content by genre and popularity.



## Tech Stack
Frontend: React
Backend: Nodejs

## API Integration
1. TMDB API

Purpose: Movies/TV data, posters, trending, genre, recommendations

    Endpoint example: https://api.themoviedb.org/3/search/movie?query=Inception

2. OMDB API

Purpose: Detailed ratings (IMDB, Rotten Tomatoes), extra plot info

    Endpoint example: https://www.omdbapi.com/?t=Inception&apikey=OMDB_KEY

## Getting Started (Quick Setup)
```bash
git clone https://github.com/fredmunene/moviebarn.git
cd moviebarn

# Rename .env.example file to .env and update the values
```