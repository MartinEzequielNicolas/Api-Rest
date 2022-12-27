const { Router } = require("express");
const router = Router();

// routes
router.get('/test',(req,res) => {
    const data = {
        "name" : "Eze",
        "Edad" : 19
    }
    res.json(data);
});

module.exports = router;