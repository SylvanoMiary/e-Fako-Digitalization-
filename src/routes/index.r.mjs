import express from "express";
import route from "./route.mjs";

const router = express.Router();
router.use(route);

router.get('/api-status', (req, res) => {
    res.json( {message: 'router is OK'} );
});

export default router;