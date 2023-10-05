//Se importa express
import express from 'express'
//Se importan las rutas
import alumnosRoutes from './routes/alumnos.routes.js'
import carrerasRoutes from './routes/carreras.routes.js'

//Se inicializa express
const app = express()

//Se utiliza formato json
app.use(express.json())

//Se inicializan las rutas
app.use("/api", alumnosRoutes)
app.use("/api",carrerasRoutes)

//Se inicializa en el puerto
app.listen(3000)
console.log("Server running on port 3000")