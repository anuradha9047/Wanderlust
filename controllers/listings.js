const Listing = require("../models/listings.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
    const allListing = await Listing.find({});
    res.render("./listing/index.ejs", { allListing });
};

module.exports.renderNewForm = (req, res) => {
    
    res.render("listing/new.ejs");
};

module.exports.showListing = async (req, res)  => {
    let { id } = req.params;
    let listing = await Listing.findById(id).
    populate({ path : "reviews", populate : {path: "author"},})
    .populate("owner");
    if(!listing){
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listing");
    }
    
    res.render("./listing/show.ejs", { listing });
};


module.exports.createListing = async (req, res, next) => {
    let response = await geocodingClient.forwardGeocode({
    query: req.body.listing.location,
    limit: 1
    })
    .send();
    
  
    let url = req.file.path;
    let filename = req.file.filename;
    let listing = req.body.listing; 
    const newListing = new Listing(listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    newListing.geometry = response.body.features[0].geometry;
    
    let savedListing = await newListing.save();
    console.log(savedListing);
    req.flash("success", "New Listing Created!");
    res.redirect("/listing");
    
    
    
};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listing");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("./listing/edit.ejs", { listing , originalImageUrl});

};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
  
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing}); 
    if(typeof req.file != "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url, filename};
        await listing.save();
    }

    req.flash("success", "Listing Updated!");
    res.redirect(`/listing/${id}`);
};

module.exports.searchListing = async (req, res) => {
    let { search } = req.query;
    console.log(req.query);
    console.log(search);
    let allListing = await Listing.find(
        {$or: [
            
            {category: {$regex: search, $options: "i"}}, 
            {title: {$regex: search, $options: "i"}}
        ]}
    );
    if(allListing.length === 0){
        req.flash("error", "No listings found for your search!");
        return res.redirect("/listing");
    }
    res.render("./listing/index.ejs", { allListing });
}

module.exports.filterListing = async (req, res) => {
    let { category } = req.query;
    console.log(req.query);
    console.log(category);
    let allListing;
    if(category === "Trending"){
        allListing = await Listing.find({});
    }else{
        allListing = await Listing.find({
            category: category
        });
    };
    
    if(allListing.length === 0){
        req.flash("error", "No listings found for your category!");
        return res.redirect("/listing");
    }
    res.render("./listing/index.ejs", { allListing });

}
module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listing");
};

