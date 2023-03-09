import Tarea from "../models/tareas.js";
import { getPagination } from "../libs/getPagination.js";


export const obtenerTareas = async (req, res) => {
    try {
        const {size, page,title} = req.query;

        const condicion = title ? {
            title: {$regex: new RegExp(title), $options:'i'},
        } :{};

        const {limit, offset} =  getPagination(page,size);
        const data = await Tarea.paginate(condicion, { offset,limit });
        res.json({
            totalItems: data.totalDocs,
            tasks: data.docs,
            totalPages: data.total,
            currentPage: data.page - 1
        });

    } catch (error) {
        return res.status(500).json({
            msg: 'Algo ha salido mal',
            error
        });
    }
};

export const obtenerTarea = async (req,res) => {
    try {
        const { id } = req.params;
        const tarea = await Tarea.findById(id);

        if(!tarea){
            return res.status(404).json({
                msg: `La atrea con el id ${id} no existe`
            })
        }

        res.json(tarea);

    } catch (error) {
        return res.status(500).json({
            msg: 'Algo ha salido mal',
            error: error
        });
    }
}

export const obtenerTareasCompletadas = async (req,res) => {
    try {
        const tareas = await Tarea.find({done:true});
        res.json(tareas);
        
    } catch (error) {
        return res.status(500).json({
            msg: 'Algo ha salido mal',
            error
        });
    }
}

export const crearTarea = async (req, res) => {
    try {
        const { title, description } = req.body;
        const nuevaTarea = new Tarea({ title, description });
        const tarea =await nuevaTarea.save();

        res.status(201).json({
            msg: 'Tarea Creada',
            tarea
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Algo ha salido mal',
            error
        });
    }
};

export const actualizarTarea = async (req,res) => {
   try {
    const {id} = req.params;
    const {title,description} = req.body;
    

    const tarea = await Tarea.findByIdAndUpdate(id,{title,description});

    res.json({
        tarea
    });
   } catch (error) {
        return res.status(500).json({
            msg: 'Algo ha salido mal',
            error
        });
   }
    
}

export const completarTarea = async (req,res) => {
    try {
        const {id} = req.params;
    
        const tarea = await Tarea.findByIdAndUpdate(id,{done:true});
        
        res.json(tarea);

    } catch (error) {
        return res.status(500).json({
            msg: 'Algo ha salido mal',
            error
        });
    }
}

export const borrarTarea = async (req,res) => {
    try {
        
        const {id} = req.params;
        const tareaEliminada = await Tarea.findByIdAndDelete(id);
        
        res.json({
            msg: 'Tarea eliminada correctamente',
            tareaEliminada
        });

    } catch (error) {
        return res.status(500).json({
            msg: 'Algo ha salido mal',
            error
        });
    }
}