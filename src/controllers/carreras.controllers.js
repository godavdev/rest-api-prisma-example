import { prisma } from '../../db.js'

export const getCarreras = async (req, res) => {
    const carreras = await prisma.carrera.findMany()
    res.json(carreras)
}

export const getCarrera = async (req, res) => {
    const carrera = await prisma.carrera.findFirst({
        where: { id: parseInt(req.params.id) }
    })

    if (!carrera) {
        return res.json({
            error: "Carrera no encontrada"
        })
    }

    return res.json(carrera)

}

export const createCarrera = async (req, res) => {
    const newCarrera = await prisma.carrera.create({
        data: req.body
    })
    res.json(newCarrera)
}

export const updateCarrera = async (req, res) => {
    const updatedCarrera = await prisma.carrera.update({
        where: { id: parseInt(req.params.id) },
        data: req.body
    })

    if (!updatedCarrera) {
        return res.status(404).json({
            error: "Carrera no encontrada"
        })
    }

    return res.json(updatedCarrera)
}

export const deleteCarrera = async (req, res) => {
    const deletedCarrera = await prisma.alumno.delete({
        where: { id: parseInt(req.params.id) }
    })

    if (!deletedCarrera) {
        return res.status(404).json({
            error: "Alumno no encontrado"
        })
    }

    return res.json(deletedCarrera)

}