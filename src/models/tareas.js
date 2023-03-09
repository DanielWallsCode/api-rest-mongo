import {Schema,model} from "mongoose";
import mongooserPaginate from "mongoose-paginate-v2";

const tareaSchema = new Schema({
    title: {
        type:String, 
        required: true,
    },
    
    description: {
        type:String,
    },

    done: {
        type:Boolean,
        default: false
    }
// PARA ENVITAR QUE APAREZCA EL --V  Y EL TIMESTAMPS PARA QUE DEVUELVA CUANDO SE CREO
}, {
    versionKey: false,
    timestamps: true
});

// PAGINACION
tareaSchema.plugin(mongooserPaginate);
export default model('Tarea',tareaSchema);