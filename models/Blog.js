import { Schema, model } from 'mongoose';

const Blog = new Schema({
    username:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    blogs:[{type:String,default:[]}] // optinal feature
},{ timestamps: true });

const blog = model('Blog', Blog);
export default blog;
