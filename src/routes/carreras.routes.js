import { Router } from 'express'
import { createCarrera, deleteCarrera, getCarrera, getCarreras, updateCarrera } from '../controllers/carreras.controllers.js'

//Se inicializa el router
const router = Router()

//Se inicializan las rutas con los metodos

router.get("/carreras", getCarreras)

router.get("/carreras/:id", getCarrera)

router.post("/carreras", createCarrera)

router.put("/carreras/:id", updateCarrera)

router.delete("/carreras/:id", deleteCarrera)

export default router