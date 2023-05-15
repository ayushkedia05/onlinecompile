const express=require('express');
const {generatefile}=require('./codegenerator.js')    
var cors = require('cors')
const{executefile}=require('./executecode.js');
const {executefilepy}=require('./executecodepy.js');
const {executefilejs}=require('./executecodejs.js');
const {generateinputfile} =require('./custominput.js')
const app=express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.listen(3001,()=>{
    console.log("listening on port 3001");
})

app.get('/', (req,res)=>{
res.json({hello:"world"});
});


app.post('/',async (req,res)=>{
    let lang=req.body.language;
    const code=req.body.code;
    let custominput=req.body.custominput;
 console.log(custominput);
    if(code===undefined)
    {
        return res.status(400).json({
            status:false,
            error:"empty code not allowed"
        })
    }
  
      try{

          const filepath= await generatefile(lang,code);
          const inputfile=await generateinputfile(custominput)
          let output;
          console.log(lang,"dscvsd");

          if(lang==='cpp')
           output=await executefile(filepath);
           else if(lang==='py')    
           output=await executefilepy(filepath);
           else if(lang==='js')
           {
           output=await executefilejs(filepath);
           }

          console.log(req.body);
          return res.json({output});
        }
        catch(err){
            res.status(500).json({err})
        }
})