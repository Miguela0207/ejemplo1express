const express =require( 'express');
const app = express()
const port = 3000
app.get('/ejemplo', (req, res)=>{
    res.send('¡Hola Mundo ........!')
})

app.listen(port , ()=>{
    console.log('La aplicación se esta ejecutando por el puerto ' + port)
})

