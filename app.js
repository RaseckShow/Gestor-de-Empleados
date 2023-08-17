const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mysql = require("mysql");
const myConnection = require("express-myconnection");

const app = express();

//Importando Routes
const customerRoutes = require("./Model/empleadoModel.js");
//Settings
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//middlewares
app.use(morgan("dev"));
app.use(myConnection(mysql,{
    host: 'localhost',
    port:'3306',
    user :'ad',
    password : 'dev2023',
    database :"dbinc"
}, "single"))
app.use(express.urlencoded({extended: false}));

// Routes
app.use("/", customerRoutes);

// Static Files 
// app.use(express.static(path.join(__dirname, "public")));

// Starting the server
app.listen(app.get("port"), ()=>{
    console.log(`Escuchando en puerto`);
})