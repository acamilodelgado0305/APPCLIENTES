const mongoose = require("mongoose");

const contratoSchema = mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    megasdow:{
        type:Number,
        require:true
    },
    megasup:{
        type:Number,
        require:true
    },
    valor:{
        type:Number,
        required:true
    },
    descripcion:{
        type:String,
        require:false
    }
},{
    timestamps:true
});

module.exports= mongoose.model('plan',contratoSchema);