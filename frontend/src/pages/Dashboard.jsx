import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Dashboard() {

const [data,setData]=useState(null);

const [movies,setMovies]=useState([]);

const [filteredMovies,setFilteredMovies]=useState([]);

const [genero,setGenero]=useState("");
const [anio,setAnio]=useState("");
const [rating,setRating]=useState("");

useEffect(()=>{

load();

},[]);

const load=async()=>{

try{

const dashboard=

await axios.get(
"http://localhost:5000/api/dashboard/stats"
);

const peliculas=

await axios.get(
"http://localhost:5000/api/movies"
);

setData(
dashboard.data
);

setMovies(
peliculas.data
);

}

catch(error){

console.log(error);

}

};

const filtrar=()=>{

if(
!genero &&
!anio &&
!rating
){

setFilteredMovies([]);

return;

}

let result=[...movies];

if(genero){

result=
result.filter(
m=>
m.genero===genero
);

}

if(anio){

result=
result.filter(
m=>
m.anio===Number(anio)
);

}

if(rating){

result=
result.filter(
m=>
m.calificacion>=Number(rating)
);

}

setFilteredMovies(
result
);

};

if(!data){

return(

<h1
style={{
textAlign:"center",
marginTop:"50px"
}}
>

Cargando Dashboard...

</h1>

);

}

const totalReviews =

data.reviewsStats
?.reduce(
(a,b)=>

a+b.totalReviews

,0

)

||

0;

return(

<div
style={{
padding:"30px"
}}
>

<Link to="/">

<button>

← Volver

</button>

</Link>

<h1>

📊 Dashboard MovieTrack

</h1>

{/* FILTROS */}

<div
style={{

display:"flex",

gap:"10px",

flexWrap:"wrap",

marginBottom:"30px"

}}
>

<select

value={genero}

onChange={(e)=>

setGenero(
e.target.value
)

}

>

<option value="">

Todos los géneros

</option>

{

[

...new Set(

movies.map(
m=>
m.genero
)

)

]

.map(

g=>

<option
key={g}
value={g}
>

{g}

</option>

)

}

</select>

<select

value={anio}

onChange={(e)=>

setAnio(
e.target.value
)

}

>

<option value="">

Todos los años

</option>

{

[

...new Set(

movies.map(
m=>
m.anio
)

)

]

.sort((a,b)=>a-b)

.map(

a=>

<option
key={a}
value={a}
>

{a}

</option>

)

}

</select>

<select

value={rating}

onChange={(e)=>

setRating(
e.target.value
)

}

>

<option value="">

Todas

</option>

{

[1,2,3,4,5,6,7,8,9,10]

.map(

r=>

<option
key={r}
value={r}
>

⭐ {r}

</option>

)

}

</select>

<button
onClick={filtrar}
>

Filtrar

</button>

</div>

{/* TARJETAS */}

<div

style={{

display:"grid",

gridTemplateColumns:
"repeat(3,1fr)",

gap:"20px",

marginBottom:"40px"

}}

>

<Card>

<h2>

🎬 Total películas

</h2>

<h1>

{data.totalMovies}

</h1>

</Card>

<Card>

<h2>

🎭 Películas por género

</h2>

<div

style={{

maxHeight:"230px",

overflowY:"auto",

paddingRight:"20px"

}}

>

{

data.moviesStats?.map(

m=>

<div

key={m.genero}

style={{

display:"flex",

justifyContent:
"space-between",

padding:"10px",

borderBottom:
"1px solid #333"

}}

>

<span>

{m.genero}

</span>

<b>

{m.totalPeliculas}

</b>

</div>

)

}

</div>

</Card>

<Card>

<h2>

⭐ Total reseñas

</h2>

<h1>

{totalReviews}

</h1>

</Card>

</div>

{/* RESULTADOS FILTRO */}

{

filteredMovies.length>0 && (

<>

<h2>

🎞 Resultado del filtro

</h2>

<div

style={{

display:"grid",

gridTemplateColumns:
"repeat(auto-fill,minmax(330px,1fr))",

gap:"25px"

}}

>

{

filteredMovies.map(

movie=>

<div

key={movie._id}

className="movie-card"

>

<img

src={movie.imagen}

alt={movie.nombre}

className="movie-image"

style={{

height:"450px"

}}

/>

<div
className="movie-content"
>

<h2>

{movie.nombre}

</h2>

<p>

🎭 {movie.genero}

</p>

<p>

📅 {movie.anio}

</p>

<p>

⭐ {movie.calificacion}

</p>

</div>

</div>

)

}

</div>

</>

)

}

</div>

);

}

function Card({

children

}){

return(

<div
className="movie-card"
>

<div
className="movie-content"
>

{children}

</div>

</div>

);

}

export default Dashboard;