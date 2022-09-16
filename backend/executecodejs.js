const {exec}=require('child_process');
const fs=require('fs');
const path=require('path');
const outputpath=path.join(__dirname,"outputs");
if(!fs.existsSync(outputpath))
{
    fs.mkdirSync(outputpath,{recursive:true});
}

const executefilejs=(filepath)=>{

  
  return new Promise((resolve,reject) =>{
    
    exec(`node ${filepath}`,
    (error,stdout,stderr) =>{
    console.log(filepath);
  console.log(stdout);

    if(error)
    {
      console.error(error);
      reject({error,stderr});
    }
    if(stderr)
    {

      reject({stderr});
    }

    resolve(stdout);
  
  })
})
};

module.exports={executefilejs,};