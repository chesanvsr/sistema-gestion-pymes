const express = require ('express'); 

const app = express();
app.use(express.json())

const inicializarBase = require("./models/inicializarBase");

const categoriasRouter = require("./routes/categorias");
app.use(categoriasRouter)

const cors = require("cors");
app.use(cors({origin: '*'}))

const seguridadRouter = require("./routes/seguridad");
app.use(seguridadRouter);
const usuariosRouter = require("./routes/usuarios");
app.use(usuariosRouter);



app.get("/", (req, res) => {
    res.send("Backend inicial backend!");
})

const port = 3000;
app.locals.fechaInicio = new Date(); 

const articulosRouter = require("./routes/articulos");
app.use(articulosRouter);


if (require.main === module) {inicializarBase().then(() => {
    app.listen(port, () => {
        console.log(`sitio escuchando en el puerto ${port}`);
    })
    })
}

module.exports = app

