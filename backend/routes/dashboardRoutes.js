const express = require("express");

const router = express.Router();

const Movie = require("../models/Movie");
const Review = require("../models/Review");

router.get("/stats", async (req, res) => {

try {

const totalMovies =
await Movie.countDocuments();

const moviesStats =
await Movie.aggregate([

{
$match:{
calificacion:{
$gte:1
}
}
},

{
$group:{
_id:"$genero",

totalPeliculas:{
$sum:1
},

promedio:{
$avg:"$calificacion"
}
}
},

{
$sort:{
totalPeliculas:-1
}
},

{
$project:{
_id:0,
genero:"$_id",
totalPeliculas:1,
promedio:{
$round:[
"$promedio",
1
]
}
}
}

]);

const reviewsStats =

await Review.aggregate([

{
$lookup:{
from:"users",
localField:"usuario",
foreignField:"_id",
as:"user"
}
},

{
$unwind:{
path:"$user",
preserveNullAndEmptyArrays:true
}
},

{
$group:{
_id:"$user.nombre",
totalReviews:{
$sum:1
}
}
},

{
$sort:{
totalReviews:-1
}
},

{
$project:{
_id:0,
usuario:"$_id",
totalReviews:1
}
}

]);

res.json({

totalMovies,

moviesStats,

reviewsStats

});

}

catch(error){

console.log(error);

res.status(500).json({

message:"Error"

});

}

});

module.exports = router;