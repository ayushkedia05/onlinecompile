const path=require('path')
const fs=require("fs");
const {v4:uuid}=require("uuid");

const dirinput=path.join(__dirname,"input");

if(!fs.existsSync(dirinput)){
    fs.mkdirSync(dirinput,{recursive:true});
}

const generateinputfile=async(custominput)=>{
    
    const filename=`input.txt`;
    console.log(filename,"ff")
    const filepath=path.join(dirinput,filename);
    
    console.log(filepath,custominput,"ff")
    await fs.writeFileSync(filepath,custominput);
    return filepath
};

module.exports={generateinputfile}