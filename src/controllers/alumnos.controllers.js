import { prisma } from '../../db.js'

export const getAlumnos = async (req, res) => {
    const alumnos = await prisma.alumno.findMany()
    res.json(alumnos)
}

export const getAlumno = async (req, res) => {
    const alumno = await prisma.alumno.findFirst({
        where: { id: parseInt(req.params.id) }
    })

    if (!alumno) {
        return res.json({
            error: "Alumno no encontrado"
        })
    }

    return res.json(alumno)

}

export const createAlumno = async (req, res) => {
    const newAlumno = await prisma.alumno.create({
        data: req.body
    })
    res.json(newAlumno)
}

export const updateAlumno = async (req, res) => {
    const updatedAlumno = await prisma.alumno.update({
        where: { id: parseInt(req.params.id) },
        data: req.body
    })

    if (!updatedAlumno) {
        return res.status(404).json({
            error: "Alumno no encontrado"
        })
    }

    return res.json(updatedAlumno)
}

export const deleteAlumno = async (req, res) => {
    const deletedAlumno = await prisma.alumno.delete({
        where: { id: parseInt(req.params.id) }
    })

    if (!deletedAlumno) {
        return res.status(404).json({
            error: "Alumno no encontrado"
        })
    }

    return res.json(deletedAlumno)

}