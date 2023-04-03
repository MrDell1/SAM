const express = require('express')

const app = express()

global.table_no = 1;

app.get('/', (req, res) => {
    response = {  
       videoFile:req.query.videoFile,  
       audioFile:req.query.audioFile,
       imgFile:req.query.imgFile
   };
   let msg = '<h1>Hello World!</h1><br>';
   if(response.videoFile){
   	msg += `<video id="videoPlayer" src=${response.videoFile}></video><br><button id="videoCancel" onClick="videoCancel()">Cancel Video</button>
       <button id="videoAdd" onClick="videoAdd()">Add video</button>
    <br><script>
    function videoCancel(){
        const videoCancel = document.getElementById("videoPlayer");
        videoCancel.src="cancel.mp4";
    }
    function videoAdd(){
        const table = document.getElementById("playlist_table").getElementsByTagName('tbody')[0];

        var newRow = table.insertRow();
        var newCell = newRow.insertCell();
        var newText = document.createTextNode(${global.table_no});
        newCell.appendChild(newText);

        var newCell = newRow.insertCell();
        var newText = document.createTextNode(document.getElementById("videoPlayer").src);
        newCell.appendChild(newText);

        var newCell = newRow.insertCell();
        var newText = document.createTextNode("Video");
        newCell.appendChild(newText);
        ${global.table_no++}
    }
    </script>`;
   }
   if(response.audioFile){
   	msg += `<audio id="audioPlayer" src=${response.audioFile}></audio><br><button id="audioCancel" onClick="audioCancel()">Cancel Audio</button>
       <button id="audioAdd" onClick="audioAdd()">Add audio</button>
    <br><script>function audioCancel(){
        const audioPlayer = document.getElementById("audioPlayer");
        audioPlayer.src="cancel.mp3";
    }
    function audioAdd(){
        const table = document.getElementById("playlist_table").getElementsByTagName('tbody')[0];

        var newRow = table.insertRow();
        var newCell = newRow.insertCell();
        var newText = document.createTextNode(${global.table_no});
        newCell.appendChild(newText);

        var newCell = newRow.insertCell();
        var newText = document.createTextNode(document.getElementById("audioPlayer").src);
        newCell.appendChild(newText);

        var newCell = newRow.insertCell();
        var newText = document.createTextNode("Audio");
        newCell.appendChild(newText);
        ${global.table_no++}
    }
    </script>`;
   }
   if(response.imgFile){
    msg += `<img id="posterImage" src=${response.imgFile}></img><br><button id="imgAdd" onClick="imgAdd()">Add image</button> 
    <script>
    function imgAdd(){
        tableAdd(posterImage, Image);
    }
    </script>`;
    }
    msg += `<table id="playlist_table"><tr><th>No.</th><th>URL</th><th>Type</th></tr><tbody></tbody></table>`

    msg += `<script>
    let table_no = 1;
    function tableAdd(id, type){
        const table = document.getElementById("playlist_table").getElementsByTagName('tbody')[0];

        var newRow = table.insertRow();
        var newCell = newRow.insertCell();
        var newText = document.createTextNode(table_no);
        newCell.appendChild(newText);

        var newCell = newRow.insertCell();
        var newText = document.createTextNode(document.getElementById(id).src);
        newCell.appendChild(newText);

        var newCell = newRow.insertCell();
        var newText = document.createTextNode(type);
        newCell.appendChild(newText);
        table_no++
    }
    </script>`;

   res.send(msg); 
})


app.listen(4080)
