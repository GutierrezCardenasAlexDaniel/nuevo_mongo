const mongoose= require('mongoose');
const Schema = mongoose.Schema;


const TaskSchema = new Schema({
    title: String,
    email:String,
    monto:String,
    carrera:String,
    grupo:String,
    telefono:String,
    description: String,
    status:{
        type:Boolean,
        default:false
    }
})
module.exports = mongoose.model('tasks',TaskSchema);