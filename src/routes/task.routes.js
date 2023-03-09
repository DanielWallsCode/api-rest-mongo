import { Router } from "express";
import { check } from "express-validator";

import { obtenerTareas,
         crearTarea,
         actualizarTarea,
         completarTarea,
         borrarTarea,
         obtenerTarea,
         obtenerTareasCompletadas } from "../controllers/task.controller.js";
import validarCampos from "../middlewares/validar-campos.js";

export const router = Router();


router.get('/', obtenerTareas);

router.get('/completadas',obtenerTareasCompletadas);

router.get('/:id', [
    check('id','el id no es un id valido').isMongoId(),
    validarCampos
] , obtenerTarea);

router.post('/', [
    check('title','el titulo es obligatorio').notEmpty(),
    check('description','La decripcion es obligatoria').notEmpty(),
    validarCampos
] , crearTarea);

router.put('/actualizar/:id', [
    check('title','El titulo es obligatorio').notEmpty(),
    check('description','la descripcion es obligatoria').notEmpty(),
    validarCampos
] ,actualizarTarea);

router.put('/completar/:id', [
    check('id','el id no es valido').isMongoId(),
    validarCampos
] ,completarTarea);

router.delete('/borrar/:id',borrarTarea);