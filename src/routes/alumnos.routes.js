import { Router } from 'express'
import { getAlumnos, createAlumno, getAlumno, deleteAlumno, updateAlumno } from '../controllers/alumnos.controllers.js'

//Se inicializa el router
const router = Router()

//Se inicializan las rutas con los metodos
router.get("/alumnos", getAlumnos)

router.get("/alumnos/:id", getAlumno)

router.post("/alumnos", createAlumno)

router.put("/alumnos/:id", updateAlumno)

router.delete("/alumnos/:id", deleteAlumno)

export default router