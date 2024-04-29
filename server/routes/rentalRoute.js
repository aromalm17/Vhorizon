const express = require('express');
const router = express.Router();
const controller = require('../controllers/');

// Route for booking a car/bike
router.post('/bookings', controller.bookings_create);

// Route for getting the list of all bookings of a specific person
router.get('/bookings/user/:userId', controller.bookings_list_by_user);

// Route for getting the list of all bookings to show in the admin page
router.get('/bookings/admin', controller.bookings_list_admin);

// Route for getting the list of all bookings for the person who rents the car
router.get('/bookings/renter/:renterId', controller.bookings_list_by_renter);

module.exports = router;