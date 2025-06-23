const express = require('express');
const axios = require('axios');
const router = express.Router();

const TMDB_KEY = process.env.TMDB_API_KEY;
const TMDB_URL= process.env.TMDB_BASE_URL;
const OMDB_KEY = process.env.OMDB_API_KEY ;

router.get('/', async (req,res) => {
    try {
        const response = await axios.get(`${TMDB_URL}/discover/movie`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TMDB_KEY}`
            },

            params: {
            
            }
        });
        res.json(response.data);
    } catch(err){
        console.error('TMDB error:', err.response?.data || err.message);
        res.status(500).json({ error: 'Error fetching movies from TMDB' });
    }
});

module.exports = router;