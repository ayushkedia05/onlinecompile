const {exec}=require('child_process');
const fs=require('fs');
const path=require('path');
const outputpath=path.join(__dirname,"outputs");
if(!fs.existsSync(outputpath))
{
    fs.mkdirSync(outputpath,{recursive:true});
}

const executefilepy=(filepath)=>{

  
return new Promise((resolve,reject) =>{

  exec(`python3 ${filepath} `,
  (error,stdout,stderr) =>{
    
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

module.exports={executefilepy,};