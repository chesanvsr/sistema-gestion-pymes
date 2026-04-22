const express = require('express');
const router = express.Router();
const categorias = require('../models/categoriasModel');

router.get('/api/categorias', async (req, res) => {
    try {
        const categoriass = await categorias.findAll()
        res.json(categoriass);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las categorías' })
    }
});


module.exports = router

