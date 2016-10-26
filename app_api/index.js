/**
 * Created by Dave K on 10/23/2016.
 */
var express = require('express');
var router = express.Router();
var cntrlRestaurants = require('../controllers/restaurants');

/* Methods for restaurants */
router.get('/restaurants', cntrlRestaurants.restaurantListAll);
router.get('/restaurants', cntrlRestaurants.restaurantListSpecific);
router.post('/wines', cntrlRestaurants.restaurantAdd);
router.put('/restaurants', cntrlRestaurants.restaurantUpdate);
router.delete('/restaurants', cntrlRestaurants.restaurantDeleteSpecific);

module.exports = router;