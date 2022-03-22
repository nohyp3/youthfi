'use strict';
const e = React.createElement;

class Learn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      stage: 1,
      value: ''
    };
    this.increment = this.increment.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  increment(){
    this.setState(prevState => ({
      stage: prevState.stage+1
    }))
  }
  handleChange(event) {    
    this.setState({value: event.target.value});  
  }
  move() {
    var elem = document.getElementById("progress");   
    var width = 1;
    var id = setInterval(frame, 10);
    var stage = this.state.stage;
    function frame() {
      if (width >= stage*25) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
  download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
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
          <p>We can have many goals, they could be long-term or short term goals. Some short term goals could include getting a good grade on your next test or simply saving up more money to get that new product!</p>
          <p>Whatever our goals may be, they are often determined by a few main things:</p>
          <ul className="normalList">
            <li>Life Events - what has happened to you before?</li>
            <li>Values, Cultures, Experiences - what matters to you? do you have obligations? what have you experienced that has changed you?</li>  
            <li>Individuals or Family - who has made an impact on your life? a mentor? a teacher? your family members?</li>
          </ul>
          <p>Your goals may change over time as the above changes, but a goal will always be something you want to do, be, or have.</p>
      <p>What are your goals for the future? What do you want to achieve?<br/>List them here:</p>
      <textarea id="goals" name="goals" rows="6" cols="48" onChange={this.handleChange}>
          Enter your goals here!
          1.
          2.
          3.
          4.
          5.
      </textarea>
      <input type="button" id="done-btn" value="download txt file!" onClick={() => {this.download("goals.txt",this.state.value)}}/>
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
    else if(stage === 3){
      return(
        <div>
          <h1><span className="section">Section 3</span></h1>
          <div className ="top"></div>
          <div id="bar">
          <div id="progress"></div>
          </div>
        <h1 className="title">Growing Money</h1>
        <h2>how can you manage your money?</h2>
        <button onClick={this.increment}>Next Lesson!</button>
        </div>
      )
    }
    else if(stage === 4){
      return(
        <div>
          <h1><span className="section">Section 4</span></h1>
          <div className ="top"></div>
          <div id="bar">
          <div id="progress"></div>
          </div>
        <h1 className="title">Career Planning</h1>
        <h2>how can you manage your money?</h2>
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

  */