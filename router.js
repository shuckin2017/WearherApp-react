import { Router } from "express";

const router = new Router();

router.post('/clients');
router.get('/clients');
router.get('/clients/:id');
router.put('/clients');
router.delete('/clients/:id');

export default router;
