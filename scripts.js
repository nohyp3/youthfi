function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

document.getElementById("done-btn").addEventListener("click", function(){
    // Generate download of hello.txt file with some content
    var text = document.getElementById("goals").value;
    var filename = "goals.txt";
    
    download(filename, text);
}, false);

//progress bar 
window.onload = function() {
    move();
}
var stage = 20;
function move() {
    var elem = document.getElementById("progress");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= stage) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }