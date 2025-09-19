const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }, 
    creationDate: {
        type: Date,
        default: Date.now
    },
    isCompletedDate : {
        type: Date
    }
})

// Pour pouvoir utiliser notre schéma de données, on doit l'exporte

module.exports = mongoose.model('Todo', todoSchema)