import { Schema,model} from "mongoose";
const Ogblogs= new Schema({
        username:{
            type:String,
        },
        title:{
            type:String
        },
        content:{
            type:String
        },
        date:{
            type:String
        },
        summary:{
            type:String
        },
        image:{
            type:String
        },
        comments:[{type:String}]
},{ timestamps: true });   

const ogblogs = model('Ogblogs', Ogblogs);

export default ogblogs;
