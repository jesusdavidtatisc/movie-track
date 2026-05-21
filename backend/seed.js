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
imagen:"https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
},

{
nombre:"Fight Club",
genero:"Drama",
anio:1999,
calificacion:10,
imagen:"https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg"
},

{
nombre:"The Matrix",
genero:"Sci-Fi",
anio:1999,
calificacion:10,
imagen:"https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
},

{
nombre:"Batman v Superman",
genero:"Action",
anio:2016,
calificacion:5,
imagen:"https://image.tmdb.org/t/p/w500/5UsK3grJvtQrtzEgqNlDljJW96w.jpg"
},

{
nombre:"Suicide Squad",
genero:"Action",
anio:2016,
calificacion:4,
imagen:"https://image.tmdb.org/t/p/w500/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg"
},

{
nombre:"Deadpool",
genero:"Comedy",
anio:2016,
calificacion:8,
imagen:"https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg"
},

{
nombre:"La La Land",
genero:"Drama",
anio:2016,
calificacion:9,
imagen:"https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg"
},

{
nombre:"The Emoji Movie",
genero:"Comedy",
anio:2017,
calificacion:2,
imagen:"https://image.tmdb.org/t/p/w500/p5mOlxwZ3dA0R4vV3QY3m9w0jzr.jpg"
},

{
nombre:"John Wick",
genero:"Action",
anio:2014,
calificacion:9,
imagen:"https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg"
},

{
nombre:"The Flash",
genero:"Action",
anio:2023,
calificacion:6,
imagen:"https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg"
},

{
nombre:"Black Adam",
genero:"Action",
anio:2022,
calificacion:5,
imagen:"https://image.tmdb.org/t/p/w500/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg"
},

{
nombre:"The Batman",
genero:"Drama",
anio:2022,
calificacion:9,
imagen:"https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
},

{
nombre:"Coco",
genero:"Animation",
anio:2017,
calificacion:10,
imagen:"https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg"
},

{
nombre:"Up",
genero:"Animation",
anio:2009,
calificacion:10,
imagen:"https://image.tmdb.org/t/p/w500/vpbaStTMt8qqXaEgnOR2EE4DNJk.jpg"
},

{
nombre:"The Lion King",
genero:"Animation",
anio:1994,
calificacion:10,
imagen:"https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg"
},

{
nombre:"Annabelle",
genero:"Horror",
anio:2014,
calificacion:5,
imagen:"https://image.tmdb.org/t/p/w500/yH6L4VGJZVFVKOAegibYQ9hs8Oc.jpg"
},

{
nombre:"Smile",
genero:"Horror",
anio:2022,
calificacion:7,
imagen:"https://image.tmdb.org/t/p/w500/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg"
},

{
nombre:"Hereditary",
genero:"Horror",
anio:2018,
calificacion:9,
imagen:"https://image.tmdb.org/t/p/w500/p9fmuz2Oj3HatfC1gCkB0N0j6M4.jpg"
},

{
nombre:"Barbie",
genero:"Comedy",
anio:2023,
calificacion:7,
imagen:"https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
},

{
nombre:"Oppenheimer",
genero:"Drama",
anio:2023,
calificacion:10,
imagen:"https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg"
},

{
nombre:"The Marvels",
genero:"Action",
anio:2023,
calificacion:3,
imagen:"https://image.tmdb.org/t/p/w500/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg"
},

{
nombre:"Dune",
genero:"Sci-Fi",
anio:2021,
calificacion:9,
imagen:"https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"
},

{
nombre:"Dune Part Two",
genero:"Sci-Fi",
anio:2024,
calificacion:10,
imagen:"https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg"
},

{
nombre:"Fast X",
genero:"Action",
anio:2023,
calificacion:4,
imagen:"https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
},

{
nombre:"Mission Impossible Fallout",
genero:"Action",
anio:2018,
calificacion:9,
imagen:"https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg"
},

{
nombre:"The Exorcist",
genero:"Horror",
anio:1973,
calificacion:10,
imagen:"https://image.tmdb.org/t/p/w500/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg"
},

{
nombre:"Cats",
genero:"Comedy",
anio:2019,
calificacion:1,
imagen:"https://image.tmdb.org/t/p/w500/8Qsr8pvDL3s1jNZQ4HK1d1Xlvnh.jpg"
},

{
nombre:"Gladiator",
genero:"Drama",
anio:2000,
calificacion:10,
imagen:"https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
},

{
nombre:"300",
genero:"Action",
anio:2006,
calificacion:8,
imagen:"https://image.tmdb.org/t/p/w500/h6C9aKKD0dKQdM8JxJNCQ7M5p5T.jpg"
},

{
nombre:"Pacific Rim",
genero:"Sci-Fi",
anio:2013,
calificacion:7,
imagen:"https://image.tmdb.org/t/p/w500/mmznhaQDwlHWpUwKuNxtQiubbmM.jpg"
},

{
nombre:"Godzilla vs Kong",
genero:"Action",
anio:2021,
calificacion:6,
imagen:"https://image.tmdb.org/t/p/w500/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg"
},

{
nombre:"The Hangover",
genero:"Comedy",
anio:2009,
calificacion:9,
imagen:"https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg"
},

{
nombre:"White Chicks",
genero:"Comedy",
anio:2004,
calificacion:8,
imagen:"https://image.tmdb.org/t/p/w500/aHTUpo45qy9QYIOnVITGGqLoVcA.jpg"
},

{
nombre:"Scary Movie",
genero:"Comedy",
anio:2000,
calificacion:7,
imagen:"https://image.tmdb.org/t/p/w500/iQ5ztdjvteGeboxtmRdXEChJOHh.jpg"
},

{
nombre:"Saw",
genero:"Horror",
anio:2004,
calificacion:8,
imagen:"https://image.tmdb.org/t/p/w500/4da0TSLO4x8xKz5wSPfnpqfTddV.jpg"
},

{
nombre:"Saw 3D",
genero:"Horror",
anio:2010,
calificacion:4,
imagen:"https://image.tmdb.org/t/p/w500/kDXP5jKdV6vY5g2xG5m3v8M6g2T.jpg"
},

{
nombre:"Insidious",
genero:"Horror",
anio:2010,
calificacion:8,
imagen:"https://image.tmdb.org/t/p/w500/7h9Jf2v2v8K3N2F9L7YxA2M3B4C.jpg"
},

{
nombre:"Paranormal Activity",
genero:"Horror",
anio:2007,
calificacion:6,
imagen:"https://image.tmdb.org/t/p/w500/qzj4b1L7sQ7V5h7x0T3P4m6k8W.jpg"
},

{
nombre:"The Notebook",
genero:"Drama",
anio:2004,
calificacion:9,
imagen:"https://image.tmdb.org/t/p/w500/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg"
},

{
nombre:"The Pursuit of Happyness",
genero:"Drama",
anio:2006,
calificacion:10,
imagen:"https://image.tmdb.org/t/p/w500/lBYOKAMcxIvuk9s9hMuecB9dPBV.jpg"
},

{
nombre:"Hancock",
genero:"Action",
anio:2008,
calificacion:7,
imagen:"https://image.tmdb.org/t/p/w500/7DyuV2G0hLEqHeueDfOqhZ2DVut.jpg"
},

{
nombre:"I Am Legend",
genero:"Sci-Fi",
anio:2007,
calificacion:9,
imagen:"https://image.tmdb.org/t/p/w500/iPDkaSdKk2jRLTM65UOEoKtsIZ8.jpg"
},

{
nombre:"World War Z",
genero:"Action",
anio:2013,
calificacion:7,
imagen:"https://image.tmdb.org/t/p/w500/ha5t0J21eyiq6Az1EXzx0iwsGH.jpg"
},

{
nombre:"2012",
genero:"Sci-Fi",
anio:2009,
calificacion:5,
imagen:"https://image.tmdb.org/t/p/w500/zaqam2RNscH5ooYFWInV6hjx6y5.jpg"
},

{
nombre:"San Andreas",
genero:"Action",
anio:2015,
calificacion:6,
imagen:"https://image.tmdb.org/t/p/w500/qey0tdcOp9kCDdEZuJ87yE3crSe.jpg"
},

{
nombre:"The Wolf of Wall Street",
genero:"Drama",
anio:2013,
calificacion:10,
imagen:"https://image.tmdb.org/t/p/w500/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg"
},

{
nombre:"The Revenant",
genero:"Drama",
anio:2015,
calificacion:9,
imagen:"https://image.tmdb.org/t/p/w500/oXUWEc5i3wYyFnL1Ycu8ppxxPvs.jpg"
},

{
nombre:"Free Guy",
genero:"Comedy",
anio:2021,
calificacion:8,
imagen:"https://image.tmdb.org/t/p/w500/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg"
},

{
nombre:"Ready Player One",
genero:"Sci-Fi",
anio:2018,
calificacion:8,
imagen:"https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg"
},

{
nombre:"Pixels",
genero:"Comedy",
anio:2015,
calificacion:5,
imagen:"https://image.tmdb.org/t/p/w500/gGATU8ZtQ1qMY0S4P5Q0P6xjM1M.jpg"
},

{
nombre:"The Meg",
genero:"Action",
anio:2018,
calificacion:6,
imagen:"https://image.tmdb.org/t/p/w500/eyWICPcxOuTcDDDbTMOZawoOn8d.jpg"
},

{
nombre:"Meg 2",
genero:"Action",
anio:2023,
calificacion:4,
imagen:"https://image.tmdb.org/t/p/w500/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg"
},

{
nombre:"Nope",
genero:"Horror",
anio:2022,
calificacion:7,
imagen:"https://image.tmdb.org/t/p/w500/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg"
},

{
nombre:"Get Out",
genero:"Horror",
anio:2017,
calificacion:9,
imagen:"https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg"
},

{
nombre:"Us",
genero:"Horror",
anio:2019,
calificacion:8,
imagen:"https://image.tmdb.org/t/p/w500/iQIa4LKxO3P0gA0D9f0h7R7Lz7z.jpg"
},

{
nombre:"The Super Mario Bros Movie",
genero:"Animation",
anio:2023,
calificacion:8,
imagen:"https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg"
},

{
nombre:"Elemental",
genero:"Animation",
anio:2023,
calificacion:7,
imagen:"https://image.tmdb.org/t/p/w500/6oH378KUfCEitzJkm07r97L0RsZ.jpg"
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