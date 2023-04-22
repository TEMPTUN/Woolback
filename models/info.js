import { Schema,model } from "mongoose";

const info = new Schema({
    userId:{
        type:String,
        required:true
    },
    courselevel:{
        type:String,
        default:""
    },
    countrychoice:{
        type:String,
        default:""
    },
    coursetype:{
        type:String,
        default:""
    },
    studychoice:{
        type:String,
        default:""
    },
    budget:{
        type:String,
        default:""
    },
    testscoreId:[{type:Schema.Types.Mixed,default:[]}],
    additionalId:[{type:Schema.Types.Mixed,default:[]}],
    lorId:[{type:Schema.Types.Mixed,default:[]}],
}, { timestamps: true });

const Info =  model("Info",info);
export default Info;