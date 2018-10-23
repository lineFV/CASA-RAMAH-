const express=require('express');

const app=express();
app.set('view engine', 'ejs');
app.use('/css', express.static('static'));

app.get('/', (req,res)=>{
    res.render('Home');
});
app.get('/Escolas',(req,res) =>{
    res.render('Escolas');
});
app.get('/Turnos',(req,res) =>{
    res.render('Turnos');
});
app . listen ( process . env . PORT  ||  4000 , () => {
    console.log ("Servidor iniciado");
});
