const express = require('express')

const app = express()


app.get('/', (req, res) => {
    response = {  
       videoFile:req.query.videoFile,  
       audioFile:req.query.audioFile,
       imgFile:req.query.imgFile
   };
   let msg = '<h1>Hello World!</h1><br>';
   if(response.videoFile){
   	msg += `<video id="videoPlayer" src=${response.videoFile}></video><br><button id="videoCancel" onClick="videoCancel()">Cancel Video</button><br><script>function videoCancel(){
        const videoCancel = document.getElementById("videoPlayer");
        videoCancel.src="cancel.mp4";
    }</script>`;
   }
   if(response.audioFile){
   	msg += `<audio id="audioPlayer" src=${response.audioFile}></audio><br><button id="audioCancel" onClick="audioCancel()">Cancel Audio</button><br><script>function audioCancel(){
        const audioPlayer = document.getElementById("audioPlayer");
        audioPlayer.src="cancel.mp3";
    }</script>`;
   }
   if(response.imgFile){
    msg += `<img id="posterImage" src=${response.imgFile}></img><br>`;
}
   res.send(msg); 
})


app.listen(4080)
