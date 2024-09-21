const  fs=require("fs")
fs.writeFile("message.txt","hello from dhev",(err)=>{
    if(err) throw err;
    console.log("file is saved");

});