const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listings.js");
const { isLoggedIn , isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const { storage } = require("../cloudconfig.js");
const upload = multer({ storage });


router.route("/")
    .get(wrapAsync  (listingController.index))
    .post( isLoggedIn, validateListing, upload.single('listing[image]'),
     wrapAsync (listingController.createListing));
    


//index route

//new route
router.get("/new", isLoggedIn,  listingController.renderNewForm);

//search route
router.get("/search", wrapAsync(listingController.searchListing));
router.get("/filter", wrapAsync(listingController.filterListing));

router.route("/:id")
    .get( wrapAsync(listingController.showListing ))
    .put( isLoggedIn, isOwner,upload.single('listing[image]'), validateListing , wrapAsync (listingController.updateListing))
    .delete( isLoggedIn, isOwner,  wrapAsync (listingController.destroyListing));
//show route

//create route


//edit route
router.get("/:id/edit", isLoggedIn, wrapAsync (listingController.renderEditForm));

//Update Route


//delete route






module.exports = router;

