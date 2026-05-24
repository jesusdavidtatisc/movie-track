import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import {
ResponsiveContainer,
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
PieChart,
Pie,
Cell,
Legend
} from "recharts";

const COLORS=[

"#FF4D6D",
"#3B82F6",
"#10B981",
"#F59E0B",
"#8B5CF6",
"#EC4899",
"#06B6D4",
"#22C55E",
"#EAB308",
"#F97316"

];

function Dashboard(){

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

}catch(error){

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

const CustomTooltip=({

active,
payload

})=>{

if(
active &&
payload &&
payload.length
){

return(

<div
style={{

background:"#181818",

padding:"12px",

borderRadius:"12px",

color:"white"

}}
>

<b>

{
payload[0]
.payload
.genero
}

</b>

<br/>

Películas:

{
payload[0]
.value
}

</div>

);

}

return null;

};

if(!data){

return(

<h1
style={{
textAlign:"center",
marginTop:"100px"
}}
>

Cargando Dashboard...

</h1>

);

}

const totalReviews=

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
padding:"35px"
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

<div
style={{

display:"flex",

gap:"10px",

marginBottom:"30px",

flexWrap:"wrap"

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

.map(

a=>

<option
key={a}
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

<div

style={{

display:"grid",

gridTemplateColumns:
"repeat(3,1fr)",

gap:"25px",

marginBottom:"40px"

}}

>

<Card>

🎬 Total películas

<h1>

{data.totalMovies}

</h1>

</Card>

<Card>

🎭 Películas por género

<div
style={{

maxHeight:"220px",

overflowY:"auto",

paddingRight:"18px"

}}
>

{

data.moviesStats.map(

m=>

<div

key={m.genero}

style={{

display:"flex",

justifyContent:
"space-between",

padding:"10px"

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

⭐ Total reseñas de  Audiencia

<h1>

{totalReviews}

</h1>

</Card>

</div>

<div

style={{

display:"grid",

gridTemplateColumns:
"1fr 1fr",

gap:"25px",

marginBottom:"40px"

}}

>

<Card>

📊 Películas por género

<ResponsiveContainer
width="100%"
height={420}
>

<BarChart

data={data.moviesStats}

barCategoryGap="20%"

>

<XAxis
dataKey="genero"
stroke="white"
/>

<YAxis
stroke="white"
/>

<Tooltip
content={<CustomTooltip/>}
/>

<Legend/>

<Bar

dataKey="totalPeliculas"

radius={[12,12,0,0]}

animationBegin={200}

animationDuration={1800}

animationEasing="ease-out"

>

{

data.moviesStats.map(
(_,i)=>(

<Cell

key={i}

fill={
COLORS[
i%
COLORS.length
]
}

/>

)

)

}

</Bar>

</BarChart>

</ResponsiveContainer>

</Card>

<Card>

🥧 Distribución

<ResponsiveContainer
width="100%"
height={420}
>

<PieChart>

<Pie

data={data.moviesStats}

dataKey="totalPeliculas"

nameKey="genero"

innerRadius={60}

outerRadius={150}

paddingAngle={3}

isAnimationActive

animationBegin={300}

animationDuration={2200}

animationEasing="ease-out"

label={({name,percent})=>

`${name}
${(
percent*
100
).toFixed(0)}%`

}

>

{

data.moviesStats.map(
(_,i)=>(

<Cell

key={i}

fill={
COLORS[
i%
COLORS.length
]
}

/>

)

)

}

</Pie>

<Tooltip/>

<Legend
formatter={(value)=>

<span
style={{
color:"white"
}}
>

{value}

</span>

}
/>

</PieChart>

</ResponsiveContainer>

</Card>

</div>

{

filteredMovies.length>0 && (

<>

<h2>

🎞 Resultado del filtro

</h2>

<div
className="movies-grid"
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

className="movie-image"

alt=""

style={{

height:"450px"

}}

></img>

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

style={{

background:"#181818",

padding:"25px",

borderRadius:"20px",

boxShadow:

"0 0 20px rgba(255,255,255,.03)"

}}

>

{children}

</div>

);

}

export default Dashboard;