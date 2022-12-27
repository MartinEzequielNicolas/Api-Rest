const {Router} = require('express');
const router = Router();


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
    console.log(req.params);
    res.send('delete');

});

module.exports = router;