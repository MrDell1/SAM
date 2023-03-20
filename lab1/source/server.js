const express = require('express')

const app = express()

app.get('/', (req, res) => {
    response = {  
       videoFile:req.query.videoFile,  
       audioFile:req.query.audioFile  
   };
   let msg = '';
   if(response.videFile){
   	msg = `<video id="videoPlayer" src=${response.videFile}></video>`;
   }
   if(response.audioFile){
   	msg = `<audio id="audioPlayer" src=${response.audioFile}></audio>`;
   }
   res.send(msg); 
})

app.get('/', (req, res) => {
    res.send('Hello World!')

})

app.listen(4080)
