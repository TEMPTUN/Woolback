import connectmongo from '../utils/connectmongo.js';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
const obj={
    signup: async(req,res)=>{
        await connectmongo();
        if(req.method === 'POST'){  //SignUP
            try{
                const { name,email,password } = req.body;
                const pass = await bcrypt.hash(password,12);
                const Userdata = new User({
                    name: name,
                    email: email,
                    password: pass,
                })
                const result = await User.insertMany([Userdata]);
                res.status(200).json({ id:result[0]._id,message:"User connected Succesfully"});
            }catch(err){
                res.status(400).json({message:err.message});
            }
        }
    },
    login: async(req,res)=>{
        await connectmongo(); 
        if(req.method === 'GET'){
            try{
                const { email,password } = req.query;
                const Userdata = await User.findOne({email:email});
                if(!Userdata)  res.status(200).json({ success:false,message:"User not found"});
                if(await bcrypt.compare(password,Userdata.password)){
                    res.status(200).json({ id:Userdata._id,success:true,message:"User connected Succesfully"});
                }
                else{
                    res.status(400).json({message:"Invalid Password",success:false});
                }
            }
            catch(err){
                res.status(400).json({message:err.message,success:false});
            }
        }
    },
    proupdate: async(req,res)=>{
        await connectmongo();
        if(req.method === 'PUT'){
            try{
                const id = req.body.id;
                const names = req.body.name===undefined?false:req.body.name;
                const password = req.body.password===undefined?false:req.body.password;
                const image = req.body.image===undefined?false:req.body.image;
                const bio = req.body.bio===undefined?false:req.body.bio;
                const email = req.body.email===undefined?false:req.body.email;

                if(names!==false) await User.findOneAndUpdate({_id:id},{name:names}).then((data)=>console.log(data)).catch((err)=>console.log(err.message))
                if(email!==false) await User.findOneAndUpdate({_id:id},{email:email})
                if(password!==false) await User.findOneAndUpdate({_id:id},{password:password})
                if(image!==false) await User.findOneAndUpdate({_id:id},{image:image})
                if(bio!==false) await User.findOneAndUpdate({_id:id},{bio:bio})
               
                res.status(200).json({message:"User Updated Succesfully"});
            }catch(err){
                res.status(400).json({message:err.message});
            }
        }
    },
    follow: async(req,res)=>{
        await connectmongo();
        if(req.method === 'PUT'){
            const id=req.body.id;
            const followid=req.body.followid;
            try{
                const response = await User.findOneAndUpdate({_id:id},{$set:{$push:{friendId:followid}}}).then((data)=>console.log(data)).catch((err)=>console.log(err.message))
                res.status(200).json({message:"User Updated Succesfully"});
            }catch(err){
                res.status(400).json({message:err.message});
            }
        }
    },
    eduupdate: async(req,res)=>{
        await connectmongo();
        if(req.method === 'PUT'){
            try{
                const id = req.body.id;
                const links = req.body.links===undefined?false:req.body.links;
                const education = req.body.education===undefined?false:req.body.education;
                const intrests = req.body.intrests===undefined?false:req.body.intrests;

                if(links!=false) await User.findOneAndUpdate({_id:id},{linkId:links}).then((data)=>console.log(data)).catch((err)=>console.log(err.message))
                if(education!=false) await User.findOneAndUpdate({_id:id},{educationId:education})
                if(intrests!=false) await User.findOneAndUpdate({_id:id},{intrestsId:intrests})

                res.status(200).json({message:"User Updated Succesfully"});
            }catch(err){
                res.status(400).json({message:err.message});
            }
        }
    },
    userfetch: async(req,res)=>{
        await connectmongo();
        if(req.method === 'GET'){
            try{
                const id = req.query.id;
                const response = await User.find({_id:id});
                res.status(200).json(response);
            }catch(err){
                res.status(400).json({message:err.message});
            }
        }
    }
}
export default obj
