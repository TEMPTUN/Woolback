import { Schema,model } from "mongoose";

const info = new Schema({
    userId:{
        type:String,
        required:true
    },
    studyId:[{type:Schema.Types.Mixed,default:[]}],
    testscoreId:[{type:Schema.Types.Mixed,default:[]}],
    additionalId:[{type:Schema.Types.Mixed,default:[]}],
    lorId:[{type:Schema.Types.Mixed,default:[]}],
}, { timestamps: true });

const Info =  model("Info",info);
export default Info;