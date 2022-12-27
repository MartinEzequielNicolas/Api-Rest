const {Router} = require('express');
const router = Router();
const _ = require('underscore');


const movies = require('../sample.json');
router.get('/',(req, res) => {
    res.json(movies);
});

router.post('/',(req,res) => {
    const {title,director,year,rating} = req.body;
    const id = movies.length + 1;
    const newMovie = {...req.body,id};
    movies.push(newMovie);
    res.send('received');

});

router.delete('/:id',(req,res) => {
    const {id} = req.params;
    _.each(movies,(movie,i) => {
        if (movie.id == id) {
            movies.splice(i, 1);
        }
    });
    res.send(movies);
});

module.exports = router;