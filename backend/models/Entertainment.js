const mongoose = require('mongoose');
const { Schema }=mongoose;



const Entertainmentdata=new mongoose.Schema({
    source:{
      type:"object"
    //   ref:'{"id":"unknown","name":"unknown"}'
    },
    title:{
        type:"string",
        ref:'unknown'
    },
    author:{
        type:"string",
        ref:'unknown'

    },
    
    description:{
        type:"string"
    },
    url:{
        type:"string"
    },
    urlToImage:{
        type:"string"
    },
    publishedAt:{
        type:"string"
    },
    content:{
        type:"string"
    }
    
    

})
module.exports=mongoose.model('entertainment',Entertainmentdata);