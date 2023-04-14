import { Schema,model } from "mongoose";

const user = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        default:"12344321"
    },
    intrestsId:[{type:String,default:[]}],
    image:{
        type:String,
        default:"/images/user.svg",
    },
    bio:{
        type:String,
    },
    friendId:[{type:String,default:[]}],
    educationId:[{type:Schema.Types.Mixed,default:[]}],
    linkId:[{type:Schema.Types.Mixed,default:[]}],
    createdAt:{
        type:Date,
        default:Date.now
    }
}, { timestamps: true });

const User =  model("User",user);

export default User;