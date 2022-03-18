'use strict';
const e = React.createElement;
/*
function First() {
  return(
    <div>
    <h1><span className="section">Section 1</span></h1>
    <div className ="top"></div>
        <div className="bar">
            <div className="progress"></div>
        </div>
        <h1 className="title">Setting Goals</h1>
    <p>What are your goals for the future? What do you want to achieve?<br/>List them here:</p>
    <textarea id="goals" name="goals" rows="6" cols="48" wrap="hard">
        Enter your goals here!
        1.
        2.
        3.
        4.
        5.
    </textarea>
    <input type="button" id="done-btn" value="download txt file!" />
    </div>
  )
} */

class Learn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stage: 1 };
    this.increment = this.increment.bind(this);
  }
  increment(){
    this.setState(prevState => ({
      stage: prevState.stage+1
    }))
  }
  move() {
    var elem = document.getElementById("progress");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= stage*10) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
  first(stage) {
    this.move();
    if(stage === 1){
    return(
      <div>
      <h1><span className="section">Section 1</span></h1>
      <div className ="top"></div>
          <div id="bar">
              <div id="progress"></div>
          </div>
          <h1 className="title">Setting Goals</h1>
      <p>What are your goals for the future? What do you want to achieve?<br/>List them here:</p>
      <textarea id="goals" name="goals" rows="6" cols="48">
          Enter your goals here!
          1.
          2.
          3.
          4.
          5.
      </textarea>
      <input type="button" id="done-btn" value="download txt file!" />
      <button className="button" onClick={this.increment}>Next!</button>
      </div>
    )
    }
    else if(stage === 2){
      return(
        <div>
          <h1><span className="section">Section 2</span></h1>
          <div className ="top"></div>
          <div id="bar">
          <div id="progress"></div>
          </div>
        <h1 className="title">Budgeting</h1>
        <h2>how can you manage your money?</h2>
        <button onClick={this.increment}>Next Lesson!</button>
        </div>
      )
    }
    else {
      window.alert(this.state.stage);
    }
  }
  render() {
    return(
      this.first(this.state.stage)
    )
    
  }
} 
ReactDOM.render(<Learn />, document.getElementById("main"));
//const domContainer = document.querySelector('#main');ReactDOM.render(e(LikeButton), domContainer);
/*function download(filename, text) {
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

var stage = 0; 

function increment(num) {
  stage = num;
}
//progress bar 
window.onload = function() {
    move();
}

  */