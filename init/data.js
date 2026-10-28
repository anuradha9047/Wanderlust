const sampleListings = [
    {
        title: "Sunset Beachfront Villa",
        description: "Enjoy a relaxing beach vacation in this beautiful villa with ocean views, a spacious terrace, and comfortable interiors.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80"
        },
        price: 8500,
        location: "Goa",
        country: "India",
        category: "Trending",
        geometry: {
          type: "Point",
          coordinates: [73.9857, 15.2993]
        }
    },
    {
        title: "Cozy Mountain Cabin",
        description: "Escape to a peaceful wooden cabin surrounded by pine forests and breathtaking mountain scenery.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=80"
        },
        price: 3200,
        location: "Manali, Himachal Pradesh",
        country: "India",
        category: "Mountains",
        geometry: {
          type: "Point",
          coordinates: [73.9857, 15.2993]
        }
    },
    {
        title: "Modern City Apartment",
        description: "Stay in a modern apartment with stylish furniture, city views, and convenient access to popular attractions.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
        },
        price: 4500,
        location: "Mumbai, Maharashtra",
        country: "India",
        category: "Iconic Cities",
        geometry: {
          type: "Point",
          coordinates: [73.9857, 15.2993]
        }
    },
    {
        title: "Royal Heritage Haveli",
        description: "Experience traditional Rajasthani architecture in a heritage-inspired property with intricate details and a peaceful courtyard.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
        },
        price: 3800,
        location: "Jaipur, Rajasthan",
        country: "India",
        category: "Castles",
        geometry: {
          type: "Point",
          coordinates: [73.9857, 15.2993]
        }
    },
    {
        title: "Luxury Villa with Private Pool",
        description: "Relax in a luxurious villa featuring a private swimming pool, landscaped gardens, and spacious outdoor seating.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
        },
        price: 12000,
        location: "Udaipur, Rajasthan",
        country: "India",
        category: "Amazing Pools",
        geometry: {
            type: "Point",
            coordinates: [73.9857, 15.2993]
        },
    },
    {
        title: "Comfortable City Room",
        description: "A clean and comfortable private room with a cozy bed and convenient access to local restaurants and transport.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80"
        },
        price: 1800,
        location: "Indore, Madhya Pradesh",
        country: "India",
        category: "Rooms",
        geometry: {
          type: "Point",
          coordinates: [73.9857, 15.2993]
        }
    },
    // {
    //     title: "Snowy Mountain Retreat",
    //     description: "Wake up to incredible mountain views in this charming retreat, ideal for travelers who enjoy cool weather and nature.",
    //     image: {
    //         filename: "listingimage",
    //         url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80"
    //     },
    //     price: 4200,
    //     location: "Manali, Himachal Pradesh",
    //     country: "India",
    //     category: "Arctic"
    // },
    // {
    //     title: "Peaceful Farmhouse Stay",
    //     description: "Spend a relaxing weekend at a countryside farmhouse surrounded by greenery, open spaces, and fresh air.",
    //     image: {
    //         filename: "listingimage",
    //         url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
    //     },
    //     price: 3500,
    //     location: "Nashik, Maharashtra",
    //     country: "India",
    //     category: "Farms"
    // },
    // {
    //     title: "Riverside Camping Escape",
    //     description: "Enjoy an outdoor getaway with beautiful riverside scenery, comfortable camping arrangements, and peaceful surroundings.",
    //     image: {
    //         filename: "listingimage",
    //         url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80"
    //     },
    //     price: 1900,
    //     location: "Rishikesh, Uttarakhand",
    //     country: "India",
    //     category: "Camping"
    // },
    // {
    //     title: "Luxury Houseboat Stay",
    //     description: "Experience a unique stay on the water with comfortable bedrooms, scenic backwater views, and relaxing surroundings.",
    //     image: {
    //         filename: "listingimage",
    //         url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80"
    //     },
    //     price: 7000,
    //     location: "Alappuzha, Kerala",
    //     country: "India",
    //     category: "Boats"
    // },
    // {
    //     title: "Stylish Studio Apartment",
    //     description: "A thoughtfully designed studio with minimalist interiors, a functional kitchen, and a comfortable living space.",
    //     image: {
    //         filename: "listingimage",
    //         url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    //     },
    //     price: 2200,
    //     location: "Pune, Maharashtra",
    //     country: "India",
    //     category: "Rooms"
    // },
    // {
    //     title: "Desert Palace Experience",
    //     description: "Discover the beauty of Rajasthan in a traditional palace-inspired stay featuring elegant interiors and desert charm.",
    //     image: {
    //         filename: "listingimage",
    //         url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
    //     },
    //     price: 6500,
    //     location: "Jaisalmer, Rajasthan",
    //     country: "India",
    //     category: "Castles"
    // },
    // {
    //     title: "Green Valley Farmhouse",
    //     description: "Unwind at a countryside property with green landscapes, outdoor seating, and plenty of space to relax with family.",
    //     image: {
    //         filename: "listingimage",
    //         url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80"
    //     },
    //     price: 4000,
    //     location: "Coorg, Karnataka",
    //     country: "India",
    //     category: "Farms"
    // },
    // {
    //     title: "Penthouse with Skyline Views",
    //     description: "Enjoy modern city living in a stylish penthouse with large windows, spacious rooms, and panoramic skyline views.",
    //     image: {
    //         filename: "listingimage",
    //         url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    //     },
    //     price: 9500,
    //     location: "Bengaluru, Karnataka",
    //     country: "India",
    //     category: "Iconic Cities"
    // },
    // {
    //     title: "Arctic Glass Cabin",
    //     description: "Stay in a cozy glass cabin surrounded by snowy landscapes, offering a unique opportunity to enjoy winter scenery.",
    //     image: {
    //         filename: "listingimage",
    //         url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80"
    //     },
    //     price: 15000,
    //     location: "Lapland",
    //     country: "Finland",
    //     category: "Arctic"
    // },
    // {
    //     title: "Infinity Pool Retreat",
    //     description: "Relax in a contemporary holiday home with an infinity pool, mountain views, and spacious outdoor lounging areas.",
    //     image: {
    //         filename: "listingimage",
    //         url: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1200&q=80"
    //     },
    //     price: 14000,
    //     location: "Bali",
    //     country: "Indonesia",
    //     category: "Amazing Pools"
    // },
    // {
    //     title: "Charming English Countryside Cottage",
    //     description: "Stay in a traditional cottage featuring rustic interiors, a private garden, and scenic countryside walking trails.",
    //     image: {
    //         filename: "listingimage",
    //         url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=80"
    //     },
    //     price: 11000,
    //     location: "Cotswolds",
    //     country: "United Kingdom",
    //     category: "Trending"
    // },
    // {
    //     title: "Santorini Cliffside Home",
    //     description: "Enjoy sea views from a beautiful island home with whitewashed architecture, a private terrace, and Mediterranean charm.",
    //     image: {
    //         filename: "listingimage",
    //         url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
    //     },
    //     price: 18000,
    //     location: "Santorini",
    //     country: "Greece",
    //     category: "Iconic Cities"
    // },
    // {
    //     title: "Woodland Camping Hideaway",
    //     description: "Reconnect with nature at this woodland camping retreat with peaceful forest views and cozy outdoor spaces.",
    //     image: {
    //         filename: "listingimage",
    //         url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80"
    //     },
    //     price: 2500,
    //     location: "Coorg, Karnataka",
    //     country: "India",
    //     category: "Camping"
    // },
    // {
    //     title: "Traditional Kerala Houseboat",
    //     description: "Cruise through scenic Kerala backwaters aboard a traditional houseboat with comfortable accommodation and beautiful views.",
    //     image: {
    //         filename: "listingimage",
    //         url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80"
    //     },
    //     price: 9000,
    //     location: "Alappuzha, Kerala",
    //     country: "India",
    //     category: "Boats"
    // }
];



module.exports = { data: sampleListings };
