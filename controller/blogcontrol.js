import Blog from '../models/Blog.js';
import bcrypt from 'bcryptjs';
import connectmongo from '../utils/connectmongo.js';
import Ogblogs from '../models/Ogblog.js';


const obj={
    signup:async(req,res)=>{
        if(req.method === 'POST'){
            try{
                const {username,password}=req.body;
                const pass = await bcrypt.hash(password,12);
                const userdata=new Blog({
                    username:username,
                    password:pass
                });
                const result=await userdata.save();
                res.status(200).json({id:result._id,message:"User connected Succesfully"});
            }catch(err){
                res.status(404).json(err.message);
            }
        }
    },
    blogin:async(req,res)=>{
        if(req.method === 'GET'){
            try{
                const {username,password}=req.query;
                const Userdata = await Blog.findOne({username:username});
                if(!Userdata)  res.status(200).json({ success:false,message:"User not found"});
                if(await bcrypt.compare(password,Userdata.password)){
                    res.status(200).json({ id:Userdata._id,success:true,message:"User connected Succesfully"});
                }
                else{
                    res.status(400).json({message:"Invalid Password",success:false});
                }
            }catch(err){
                res.status(404).json(err.message);
            }
        }
    },
    blogc:async(req,res)=>{
        await connectmongo();
        if(req.method === 'POST'){
            try{
                const blog=req.body;
                console.log(blog);
                const newblog= new Ogblogs({
                    username:blog.username,
                    title:blog.title,
                    content:blog.content,
                    date:blog.date,
                    summary:blog.summary,
                    image:blog?.image
                });
                const result=await newblog.save();  
                const id=result._id;
                await Blog.findOneAndUpdate({username:blog.username},{$push:{blogs:id}});


                res.status(200).json({ success:true,message:"Blog added Succesfully"});
            }catch(err){
                res.status(404).json(err.message);
            }
        }
    },
    getAllblogs:async(req,res)=>{
            await connectmongo();
            if(req.method === 'GET'){
                try{
                        await Ogblogs.find({}).exec()
                        .then((documents) => {
                          res.status(200).json(documents);
                        })
                        .catch((err) => {
                          res.status(404).json(err.message);
                        });
                }catch(err){
                    res.status(404).json(err.message);
                }
            }
        },
    commentpush:async(req,res)=>{
        await connectmongo();
        if(req.method === 'POST'){
            try{
                const {id,comment,username}=req.body;
                await Ogblogs.findById({_id:id},{$push:{comments:{comment:comment,username:username}}});
                res.status(200).json({ success:true,message:"Comment added Succesfully"});
            }catch(err){
                res.status(404).json(err.message);
            }
        }
    },

    getsingleblog:async(req,res)=>{
        await connectmongo();
        if(req.method === 'GET'){
            try{
                const { id }=req.query;
                const result=await Ogblogs.findById({_id:id});
                res.status(200).json(result);
            }catch(err){
                res.status(404).json(err.message);
            }
        }
    }
}
        


export default obj;