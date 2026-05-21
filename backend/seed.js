const mongoose =
require("mongoose");

const dotenv =
require("dotenv");

const Movie =
require("./models/Movie");

dotenv.config();

mongoose.connect(
    process.env.MONGO_URI
);

const movies = [

{
nombre:"Interstellar",
genero:"Sci-Fi",
anio:2014,
calificacion:10,
imagen:"https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
},

{
nombre:"Fight Club",
genero:"Drama",
anio:1999,
calificacion:10,
imagen:"https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg"
},

{
nombre:"The Matrix",
genero:"Sci-Fi",
anio:1999,
calificacion:10,
imagen:"https://m.media-amazon.com/images/I/51EG732BV3L.jpg"
},

{
nombre:"Batman v Superman",
genero:"Action",
anio:2016,
calificacion:5,
imagen:"https://www.imdb.com/es/title/tt2975590/mediaviewer/rm2302675456/?ref_=tt_ov_i"
},

{
nombre:"Suicide Squad",
genero:"Action",
anio:2016,
calificacion:4,
imagen:"https://upload.wikimedia.org/wikipedia/en/5/50/Suicide_Squad_%28film%29_Poster.png"
},

{
nombre:"Deadpool",
genero:"Comedy",
anio:2016,
calificacion:8,
imagen:"https://upload.wikimedia.org/wikipedia/en/4/46/Deadpool_poster.jpg"
},

{
nombre:"La La Land",
genero:"Drama",
anio:2016,
calificacion:9,
imagen:"https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png"
},

{
nombre:"The Emoji Movie",
genero:"Comedy",
anio:2017,
calificacion:2,
imagen:"https://upload.wikimedia.org/wikipedia/en/6/68/The_Emoji_Movie_film_poster.jpg"
},

{
nombre:"John Wick",
genero:"Action",
anio:2014,
calificacion:9,
imagen:"https://upload.wikimedia.org/wikipedia/en/9/98/John_Wick_TeaserPoster.jpg"
},

{
nombre:"The Flash",
genero:"Action",
anio:2023,
calificacion:6,
imagen:"https://upload.wikimedia.org/wikipedia/en/b/b7/The_Flash_%28film%29_poster.jpg"
},

{
nombre:"Black Adam",
genero:"Action",
anio:2022,
calificacion:5,
imagen:"https://upload.wikimedia.org/wikipedia/en/a/a9/Black_Adam_%28film%29_poster.jpg"
},

{
nombre:"The Batman",
genero:"Drama",
anio:2022,
calificacion:9,
imagen:"https://upload.wikimedia.org/wikipedia/en/8/87/The_Batman_%282022_film%29_poster.jpg"
},

{
nombre:"Coco",
genero:"Animation",
anio:2017,
calificacion:10,
imagen:"https://upload.wikimedia.org/wikipedia/en/9/96/Coco_%282017_film%29_poster.jpg"
},

{
nombre:"Up",
genero:"Animation",
anio:2009,
calificacion:10,
imagen:"https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.jpg"
},

{
nombre:"The Lion King",
genero:"Animation",
anio:1994,
calificacion:10,
imagen:"https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg"
},

{
nombre:"Annabelle",
genero:"Horror",
anio:2014,
calificacion:5,
imagen:"https://upload.wikimedia.org/wikipedia/en/9/90/Annabelle_film_poster.jpg"
},

{
nombre:"Smile",
genero:"Horror",
anio:2022,
calificacion:7,
imagen:"https://upload.wikimedia.org/wikipedia/en/7/79/Smile_%282022_film%29.jpg"
},

{
nombre:"Hereditary",
genero:"Horror",
anio:2018,
calificacion:9,
imagen:"https://upload.wikimedia.org/wikipedia/en/d/d9/Hereditary.png"
},

{
nombre:"Barbie",
genero:"Comedy",
anio:2023,
calificacion:7,
imagen:"https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg"
},

{
nombre:"Oppenheimer",
genero:"Drama",
anio:2023,
calificacion:10,
imagen:"https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg"
},

{
nombre:"The Marvels",
genero:"Action",
anio:2023,
calificacion:3,
imagen:"https://upload.wikimedia.org/wikipedia/en/7/7a/The_Marvels_poster.jpg"
},

{
nombre:"Dune",
genero:"Sci-Fi",
anio:2021,
calificacion:9,
imagen:"https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg"
},

{
nombre:"Dune Part Two",
genero:"Sci-Fi",
anio:2024,
calificacion:10,
imagen:"https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg"
},

{
nombre:"Fast X",
genero:"Action",
anio:2023,
calificacion:4,
imagen:"https://upload.wikimedia.org/wikipedia/en/9/99/Fast_X_poster.jpg"
},

{
nombre:"Mission Impossible Fallout",
genero:"Action",
anio:2018,
calificacion:9,
imagen:"https://upload.wikimedia.org/wikipedia/en/2/2d/Mission_Impossible_Fallout.jpg"
},

{
nombre:"The Exorcist",
genero:"Horror",
anio:1973,
calificacion:10,
imagen:"https://upload.wikimedia.org/wikipedia/en/7/7b/The_Exorcist.jpg"
},

{
nombre:"Cats",
genero:"Comedy",
anio:2019,
calificacion:1,
imagen:"https://upload.wikimedia.org/wikipedia/en/3/3b/Cats_2019_poster.jpg"
},

{
nombre:"Gladiator",
genero:"Drama",
anio:2000,
calificacion:10,
imagen:"https://upload.wikimedia.org/wikipedia/en/8/8d/Gladiator_ver1.jpg"
},

{
nombre:"300",
genero:"Action",
anio:2006,
calificacion:8,
imagen:"https://upload.wikimedia.org/wikipedia/en/5/5c/300poster.jpg"
},

{
nombre:"Pacific Rim",
genero:"Sci-Fi",
anio:2013,
calificacion:7,
imagen:"https://upload.wikimedia.org/wikipedia/en/f/f3/Pacific_Rim_FilmPoster.jpeg"
},

{
nombre:"Godzilla vs Kong",
genero:"Action",
anio:2021,
calificacion:6,
imagen:"https://upload.wikimedia.org/wikipedia/en/5/59/Godzilla_vs._Kong.png"
},

{
nombre:"The Hangover",
genero:"Comedy",
anio:2009,
calificacion:9,
imagen:"https://upload.wikimedia.org/wikipedia/en/b/b9/Hangoverposter09.jpg"
},

{
nombre:"White Chicks",
genero:"Comedy",
anio:2004,
calificacion:8,
imagen:"https://upload.wikimedia.org/wikipedia/en/3/32/White_chicks.jpg"
},

{
nombre:"Scary Movie",
genero:"Comedy",
anio:2000,
calificacion:7,
imagen:"https://upload.wikimedia.org/wikipedia/en/7/7d/Scary_Movie_poster.jpg"
},

{
nombre:"Saw",
genero:"Horror",
anio:2004,
calificacion:8,
imagen:"https://upload.wikimedia.org/wikipedia/en/5/56/Saw_official_poster.jpg"
},

{
nombre:"Saw 3D",
genero:"Horror",
anio:2010,
calificacion:4,
imagen:"https://upload.wikimedia.org/wikipedia/en/9/9d/Saw_3D_Poster.jpg"
},

{
nombre:"Insidious",
genero:"Horror",
anio:2010,
calificacion:8,
imagen:"https://upload.wikimedia.org/wikipedia/en/2/2d/Insidious_poster.jpg"
},

{
nombre:"Paranormal Activity",
genero:"Horror",
anio:2007,
calificacion:6,
imagen:"https://upload.wikimedia.org/wikipedia/en/6/6e/Paranormal_Activity_poster.jpg"
},

{
nombre:"The Notebook",
genero:"Drama",
anio:2004,
calificacion:9,
imagen:"https://upload.wikimedia.org/wikipedia/en/8/86/Posternotebook.jpg"
},

{
nombre:"The Pursuit of Happyness",
genero:"Drama",
anio:2006,
calificacion:10,
imagen:"https://upload.wikimedia.org/wikipedia/en/8/81/Poster-pursuithappyness.jpg"
},

{
nombre:"Hancock",
genero:"Action",
anio:2008,
calificacion:7,
imagen:"https://upload.wikimedia.org/wikipedia/en/9/9b/Hancockposter.jpg"
},

{
nombre:"I Am Legend",
genero:"Sci-Fi",
anio:2007,
calificacion:9,
imagen:"https://upload.wikimedia.org/wikipedia/en/d/dd/I_am_legend_teaser.jpg"
},

{
nombre:"World War Z",
genero:"Action",
anio:2013,
calificacion:7,
imagen:"https://upload.wikimedia.org/wikipedia/en/7/70/World_War_Z_poster.jpg"
},

{
nombre:"2012",
genero:"Sci-Fi",
anio:2009,
calificacion:5,
imagen:"https://upload.wikimedia.org/wikipedia/en/a/a2/2012poster.jpg"
},

{
nombre:"San Andreas",
genero:"Action",
anio:2015,
calificacion:6,
imagen:"https://upload.wikimedia.org/wikipedia/en/3/37/SanAndreas2015Poster.jpg"
},

{
nombre:"The Wolf of Wall Street",
genero:"Drama",
anio:2013,
calificacion:10,
imagen:"https://upload.wikimedia.org/wikipedia/en/1/12/The_Wolf_of_Wall_Street_%282013%29.png"
},

{
nombre:"The Revenant",
genero:"Drama",
anio:2015,
calificacion:9,
imagen:"https://upload.wikimedia.org/wikipedia/en/b/b6/The_Revenant_2015_film_poster.jpg"
},

{
nombre:"Free Guy",
genero:"Comedy",
anio:2021,
calificacion:8,
imagen:"https://upload.wikimedia.org/wikipedia/en/9/94/Free_Guy_poster.jpg"
},

{
nombre:"Ready Player One",
genero:"Sci-Fi",
anio:2018,
calificacion:8,
imagen:"https://upload.wikimedia.org/wikipedia/en/a/a4/Ready_Player_One_%282018_film%29.jpg"
},

{
nombre:"Pixels",
genero:"Comedy",
anio:2015,
calificacion:5,
imagen:"https://upload.wikimedia.org/wikipedia/en/a/a0/Pixels_film_poster.jpg"
},

{
nombre:"The Meg",
genero:"Action",
anio:2018,
calificacion:6,
imagen:"https://upload.wikimedia.org/wikipedia/en/6/62/The_Meg.png"
},

{
nombre:"Meg 2",
genero:"Action",
anio:2023,
calificacion:4,
imagen:"https://upload.wikimedia.org/wikipedia/en/f/f3/Meg_2_The_Trench_poster.jpg"
},

{
nombre:"Nope",
genero:"Horror",
anio:2022,
calificacion:7,
imagen:"https://upload.wikimedia.org/wikipedia/en/e/e6/Nope_%28film%29_poster.jpg"
},

{
nombre:"Get Out",
genero:"Horror",
anio:2017,
calificacion:9,
imagen:"https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png"
},

{
nombre:"Us",
genero:"Horror",
anio:2019,
calificacion:8,
imagen:"https://upload.wikimedia.org/wikipedia/en/0/0f/Us_%282019%29_theatrical_poster.png"
},

{
nombre:"The Super Mario Bros Movie",
genero:"Animation",
anio:2023,
calificacion:8,
imagen:"https://upload.wikimedia.org/wikipedia/en/4/44/The_Super_Mario_Bros._Movie_poster.jpg"
},

{
nombre:"Elemental",
genero:"Animation",
anio:2023,
calificacion:7,
imagen:"https://upload.wikimedia.org/wikipedia/en/5/5a/Elemental_%282023_film%29.jpg"
}


];

const seedMovies =
async () => {

    try {

        await Movie.deleteMany();

        await Movie.insertMany(
            movies
        );

        console.log(
            "Películas insertadas"
        );

        mongoose.connection.close();

    } catch (error) {

        console.log(error);
    }
};

seedMovies();