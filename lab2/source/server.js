const express = require('express')

const app = express()

function audioCancel(){
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.src="cancel.mp3";
}

function videoCancel(){
    const videoCancel = document.getElementById("videoCancel");
    videoCancel.src="cancel.mp4";
}

app.get('/', (req, res) => {
    response = {  
       videoFile:req.query.videoFile,  
       audioFile:req.query.audioFile,
       imgFile:req.query.imgFile
   };
   let msg = '';
   if(response.videFile){
   	msg += `<video id="videoPlayer" src=${response.videFile}></video><br><button id="videoCancel" onClick="videoCancel()">Video Audio</button><br>`;
   }
   if(response.audioFile){
   	msg += `<audio id="audioPlayer" src=${response.audioFile}></audio><br><button id="audioCancel" onClick="audioCancel()">Cancel Audio</button><br>`;
   }
   if(response.imgFile){
    msg += `<img id="posterImage" src=${response.imgFile}></img><br>`;
}
   res.send(msg); 
})

app.get('/', (req, res) => {
    res.send('Hello World!')

})

app.listen(4080)
