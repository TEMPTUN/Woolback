import { Schema,model } from "mongoose";

const info = new Schema({
    userId:{
        type:String,
        required:true
    },
    courselevel:{
        type:String,
    },
    countrychoice:{
        type:String,
    },
    coursetype:{
        type:String,
    },
    studychoice:{
        type:String,
    },
    budget:{
        type:String,
    },
    testscoreId:[{type:Schema.Types.Mixed,default:[]}],
    additionalId:[{type:Schema.Types.Mixed,default:[]}],
    lorId:[{type:Schema.Types.Mixed,default:[]}],
}, { timestamps: true });

const Info =  model("Info",info);
export default Info;