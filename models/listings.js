const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./reviews.js");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },    
    description: String,    
    // image: {
    //     type: String,
    //     default: "https://unsplash.com/photos/braided-river-in-snow-capped-valley-u1YBSpjc2Lk",
    //     set: (v) => v === "" ? "https://unsplash.com/photos/braided-river-in-snow-capped-valley-u1YBSpjc2Lk" 
    //     : v,
    // },    

    image: {
        type: Object,
        default: "https://unsplash.com/photos/braided-river-in-snow-capped-valley-u1YBSpjc2Lk",
        // set: (v) => v === "" ? "https://unsplash.com/photos/braided-river-in-snow-capped-valley-u1YBSpjc2Lk" 
        // : v,
    },
    price: Number,
    location: String,
    country: String,
    category: {
        type: String,
        enum: ['Mountains','Trending','Rooms', 'Arctic', 'Boats','Camping', 'Amazing Pools', 'Castles', 'Farms', 'Iconic Cities'],
        required: true
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    geometry: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number],
            required: true,
        },
    },
    
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if( listing ){
        await Review.deleteMany({_id: {$in: listing.reviews} });
    }
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;