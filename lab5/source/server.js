const express = require("express");

const app = express();

app.get("/", (req, res) => {
  response = {
    videoFile: req.query.videoFile,
    audioFile: req.query.audioFile,
    imgFile: req.query.imgFile,
  };
  let msg = "<h1>Hello World!</h1><br>";
  msg += `<script>
  let table_no = 1;
 

   function addToTable(playerId, type){
    const table = document.getElementById("playlist_table").getElementsByTagName('tbody')[0];

        var newRow = table.insertRow();
        var newCell = newRow.insertCell();
        var newText = document.createTextNode(table_no);
        newCell.appendChild(newText);

        var newCell = newRow.insertCell();
        var newText = document.createTextNode(document.getElementById(playerId).src);
        newCell.appendChild(newText);

        var newCell = newRow.insertCell();
        var newText = document.createTextNode(type);
        newCell.appendChild(newText);

        var button = document.createElement('button');
        button.className = "removeRowButton";
        button.innerText = "Delete";
        button.addEventListener("click", function (){
          var row = button.parentElement.parentElement;
          row.remove();
        });
        var newCell = newRow.insertCell();
        newCell.appendChild(button);

        var upButton = document.createElement('button');
        upButton.className = "moveRowUpButton";
        upButton.innerText = "Up";
        upButton.addEventListener("click", function (){
          var index = this.parentElement.parentElement.rowIndex;
          console.log(index);
          var rows = document.getElementById("playlist_table").rows, parent=rows[index].
          parentNode;
          console.log(rows);
          if(index > 1){
            parent.insertBefore(rows[index],rows[index - 1]);
          }
        })
        newCell.appendChild(upButton);

        var downButton = document.createElement('button');
        downButton.className = "moveRowDownButton";
        downButton.innerText = "Down";
        downButton.addEventListener("click", function (){
          var index = this.parentElement.parentElement.rowIndex;
          console.log(index);
          var rows = document.getElementById("playlist_table").rows, parent=rows[index].
          parentNode;
          console.log(rows);
          if(index < rows.length - 1){
            parent.insertBefore(rows[index + 1],rows[index]);
          }
        })
        newCell.appendChild(downButton);

        table_no++;
      console.log(newRow);
   }
   </script>`;
  if (response.videoFile) {
    msg += `<video id="videoPlayer" src=${response.videoFile}></video><br><button id="videoCancel" onClick="videoCancel()">Cancel Video</button>
       <button id="videoAdd" onClick="videoAdd()">Add video</button>
    <br><script>
    function videoCancel(){
        const videoCancel = document.getElementById("videoPlayer");
        videoCancel.src="cancel.mp4";
    }
    function videoAdd(){
        addToTable("videoPlayer", "Video");
    }
    </script>`;
  }
  if (response.audioFile) {
    msg += `<audio id="audioPlayer" src=${response.audioFile}></audio><br><button id="audioCancel" onClick="audioCancel()">Cancel Audio</button>
       <button id="audioAdd" onClick="audioAdd()">Add audio</button>
    <br><script>function audioCancel(){
        const audioPlayer = document.getElementById("audioPlayer");
        audioPlayer.src="cancel.mp3";
    }
    function audioAdd(){
      addToTable("audioPlayer", "Audio");
    }
    </script>`;
  }
  if (response.imgFile) {
    msg += `<img id="posterImage" src=${response.imgFile}></img><br><button id="imgAdd" onClick="imgAdd()">Add image</button> 
    <script>
    function imgAdd(){
      addToTable("posterImage", "Image");
    }
    </script>`;
  }
  msg += `<table id="playlist_table"><tr><th>No.</th><th>URL</th><th>Type</th><th>Action</th></tr><tbody></tbody></table>`;

  res.send(msg);
});

app.listen(4080);
