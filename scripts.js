'use strict';
const e = React.createElement;

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allowance: 0,
    }
    this.handleChange = this.handleChange.bind(this);
    this.fifty = this.fifty.bind(this);
  }
  handleChange(e){
    let val = e.target.value;
    this.setState({
      allowance: val
    })
  }
  fifty() {
    var percent = this.state.allowance*0.5;
    return(percent)
  }
  thirty(){
    var percent = this.state.allowance*0.3;
    return(percent)
  }
  twenty(){
    var percent = this.state.allowance*0.2;
    return(percent)
  }
  render() {
  return (
    <div id="calculator">
    <input id="allowance" type="text" placeholder="Input your allowance here!" onChange={this.handleChange}></input>
    <p>{this.fifty()} goes to needs</p>
    <p>{this.thirty()} goes to wants </p>
    <p>{this.twenty()} goes to savings</p>
    </div>
  )
  }
}
class Learn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      stage: 1,
      value: ''
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  increment(){
    this.setState(prevState => ({
      stage: prevState.stage+1
    }))
  }
  decrement(){
    this.setState(prevState => ({
      stage: prevState.stage-1
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
          <h2>and how to achieve them</h2>
          <div className = "introduction">
          <p>We can have many goals, they could be long-term or short term goals. Some short term goals could include getting a good grade on your next test or simply saving up more money to get that new product!</p>
          </div>
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
      <div className="buttonContainer">
      <button className="button" onClick={this.increment}>Next!</button>
      </div>
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
        <h2>How Can You Manage Your Money?</h2>
        <div className = "introduction">
          <p>Ever wanted something but you found out you spent your money on something previously and now can't afford it? Ever regretted what you bought? 
            Sounds like you should have budgeted your money!
          </p>
        </div>
        <div className = "mainContent">
          <p>Sounds like you could have benefitted from budgeting!</p>
          <p>Budgeting - is the process of creating a plan to spend your money</p>
          <p>Budgeting has many benefits such as:</p>
          <ul>
            <li>Helping you be smart with your money</li>
            <li>Minimizing financial stress</li>
            <li>Being able to compare and track your spending month to month</li>
            <li>Seeing how your spending habits affeect your budget</li>
            <li>Finding ways to save money</li>
          </ul>
          <p>A popular model for saving money is the 50/30/20 rule. 50% of your money goes to your NEEDS, 30% to your WANTS and 20% to your savings</p>
          <Calculator />
          <p></p>
        </div>

        <div className="buttonContainer">
        <button onClick={this.increment}>Next Lesson!</button>
        <button className="button" onClick={this.decrement}>Previous!</button>
        </div>
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
        <button className="button" onClick={this.decrement}>Previous!</button>
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
        <button className="button" onClick={this.decrement}>Previous!</button>
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