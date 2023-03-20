const express = require('express')

const app = express()





app.get('/', (req, res) => {
    response = {  
       videoFile:req.query.videoFile,  
       audioFile:req.query.audioFile,
       imgFile:req.query.imgFile
   };
   let msg = '';
   if(response.videFile){
   	msg += `<video id="videoPlayer" src=${response.videoFile}></video><br><button id="videoCancel" onClick="videoCancel()">Video Audio</button><br><script>function videoCancel(){
        const videoCancel = document.getElementById("videoCancel");
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

app.get('/', (req, res) => {
    res.send('Hello World!')

})

app.listen(4080)
