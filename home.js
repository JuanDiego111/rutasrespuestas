const express=require('express')
const fun=express()
const autenticador=require("./middleware/autenticador")
const date=new Date();
const bodyParser = require('body-parser')

fun.use(bodyParser.urlencoded({ extended: true }))
fun.use(bodyParser.json())

fun.use((peticion,respuesta,siguiente)=>{
    console.log("Se hizo una peticion "+date+peticion.method+peticion.url+peticion.connection.remoteAddress+peticion.headers["user-agent"]);
    siguiente()
})

fun.get("/",(peticion,respuesta)=>{respuesta.send("Bienvenido"+`<p>Crea un enlace a
<a href="/Inicio">Formulario de Registro</a>.
</p>`+`<p>Crea un enlace a
<a href="/otra">Pagina privada</a>.
</p>` )})

fun.get("/Inicio",(peticion,respuesta)=>
{respuesta.sendFile(__dirname+"/pages/inicio.html")
})

fun.use(autenticador)

fun.get("/privada",(peticion,respuesta)=>
{respuesta.send("Privada")
})

fun.get("/otra",(peticion,respuesta)=>
{respuesta.send("Privada"+`<p>Crea un enlace a
<a href="/Inicio">Formulario de registro</a>.
</p>`)
})

fun.listen(8080,()=>{
    console.log("Servidor iniciado");
})