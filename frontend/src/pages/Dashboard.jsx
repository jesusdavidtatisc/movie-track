import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Dashboard() {

const [data,setData]=useState(null);

useEffect(()=>{

load();

},[]);

const load=async()=>{

try{

const res=
await axios.get(
"http://localhost:5000/api/dashboard/stats"
);

setData(
res.data
);

}catch(err){

console.log(err);

}

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

return(

<div
style={{
padding:"40px"
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

display:"grid",

gridTemplateColumns:
"repeat(auto-fit,minmax(300px,1fr))",

gap:"25px",

marginTop:"30px"

}}
>

<div
style={{
background:"#1f1f1f",
padding:"25px",
borderRadius:"15px"
}}
>

<h2>

🎬 Total películas

</h2>

<h1>

{data.totalMovies}

</h1>

</div>

<div
style={{
background:"#1f1f1f",
padding:"25px",
borderRadius:"15px"
}}
>

<h2>

🎭 Películas por género

</h2>

{

data.moviesStats?.map(
m=>(

<div
key={
m.genero
}
>

{m.genero}

<br/>

Cantidad:
<b>

{m.totalPeliculas}

</b>

<br/>

Promedio:
⭐

{m.promedio}

<hr/>

</div>

)

)

}

</div>

<div
style={{
background:"#1f1f1f",
padding:"25px",
borderRadius:"15px"
}}
>

<h2>

⭐ Total reseñas

</h2>

<h1>

{

data.reviewsStats
?.reduce(
(
acc,
r
)=>

acc+
r.totalReviews,

0

)

||

0

}

</h1>

</div>

</div>

</div>

);

}

export default Dashboard;