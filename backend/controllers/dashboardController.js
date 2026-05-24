const Movie =
require("../models/Movie");

const Review =
require("../models/Review");

const getStats =
async(req,res)=>{

try{

const totalMovies =
await Movie.countDocuments();

const totalReviews =
await Review.countDocuments();

const genres =
await Movie.aggregate([
{
$group:{
_id:"$genero",
total:{
$sum:1
}
}
}
]);

const ratings =
await Movie.aggregate([
{
$group:{
_id:"$calificacion",
total:{
$sum:1
}
}
}
]);

res.json({
totalMovies,
totalReviews,
genres,
ratings
});

}
catch(error){

console.log(error);

res.status(500).json({
message:"Error"
});

}

};

module.exports = {
getStats
};