const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

router.get('/api/store/',storeController.listStores);
router.post('/api/store/',storeController.insertSingleStore);
router.put('/api/store/:id',storeController.updateSingleStore);
router.delete('/api/store/:id',storeController.deleteSingleStore);
router.delete('/api/store/',storeController.deleteSingleStore);


module.exports = router;