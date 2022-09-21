const express=require('express')
const rout=express.Router()
const bodyParser = require('body-parser')

rout.use(bodyParser.urlencoded({ extended: true }))
rout.use(bodyParser.json())

rout.post("/privada",(peticion,respuesta,siguiente)=>{
    const email = peticion.body.email
    const password= peticion.body.password
    if (email && password ){
        respuesta.send('Bienvenido ' + email)
    }
    else {
        console.log("No ha iniciado sesion");
        respuesta.redirect("/Inicio")
    }

})

module.exports=rout;
