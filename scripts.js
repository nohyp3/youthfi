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
    return(percent.toFixed(2))
  }
  thirty(){
    var percent = this.state.allowance*0.3;
    return(percent.toFixed(2))
  }
  twenty(){
    var percent = this.state.allowance*0.2;
    return(percent.toFixed(2))
  }
  render() {
  return (
    <div id="calculator">
    <h2>50/30/20 Rule Calculator</h2>
    <label>$</label><input id="allowance" type="text" placeholder="Input allowance!" onChange={this.handleChange}></input>
    <p>${this.fifty()} goes to needs</p>
    <p>${this.thirty()} goes to wants </p>
    <p>${this.twenty()} goes to savings</p>
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
      if (width >= stage*20) {
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
        <div className="introduction">
          <p>We've all heard the saying money doesn't grow on trees, but what if you could grow your money?</p>
        </div>
        <div className="mainContent">
          <p>Well you can! Just not from the ground that is. Growing your money just means to allow the amount of money you have.. grow! People accomplish this through a number of different ways, but all of them involve
            already having money and letting it "work" for you to make more of it.
          </p>
          <p>The main two ways are to save your money in a special kind of bank account, or to invest it.</p>
          <h3>Savings Accounts</h3>
          <p>Savings accounts are bank accounts that are low risk. They are safe and liquid, meaning that you can convert the
            money stored in your account into cold hard cash easily. You can do this by widthdrawing money from this account. These accounts are best 
            for... well saving money! These accounts help you store your money for specific goals and purposes. There are short term goals
            and long term goals, but a savings account can be used for both! As a student, savings accounts are usually free! With savings accounts, you also get paid <b>interest</b>
            for the money you store in your account. This is because the bank uses your money to lend (give) to another person who borrows for purposes like buying a house etcetera. 
            The bank charges interest to these people for borrowing money from them, and you get a small cut out of it.
          </p>
          <h3>Investing</h3>
          <p>Nowadays it seems to be easier and easier to invest money using apps or services that are easily available to everyone! Investing
            doesn't just have to be in the stock market where you may picture green and red lines.
          </p>
          <img alt="image of stockmarket graph"></img>
          <p>People may invest in a number of other things as well, they maay put money into things called mutual funds, invest in real estate, crypto or even a business of their own!
            With investing, it is often used for longer term goals, is riskier and volatile but there is potential for great returns.
          </p>
          <h3>Stocks</h3>
          <h3>Mutual Funds</h3>
          <h3>Real Estate</h3>
        </div>

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
        <h2>What do you want to do when you're older?</h2>
        <div className="introduction">
          <p>It's a scary thought to think about sometimes, but it's also exiciting at the same time!</p>
        </div>
        <div className="mainSection">
          <p>With career planning, there are some things you want to think about. You want to first discover yourself, what are your interests? Your goals? 
          your aspirations? With all these things to consider, you'll want to explore all your options!</p>
          <p>With all that, you'll want to think about these things before making a decision in the future:</p>
          <ul className="normalList">
            <li>What is the different between the job and the career?</li>
            <li>What career interests you?</li>
            <li>What skills/attributes/knowledge is needed?</li>
            <li>Where can you get the things needed above?</li>
            <li>How much will the education or training cost?</li>
            <li>Is the amount of money you can make the most important thing to you, or is the job's satisfaction/happiness more important?</li>
          </ul>
          <p>These seem like hard things to think about, and they are. That's why it may make sense to consider the costs first</p>
          <ul className="normalList">
            <li>What are the costs of enrolling into a program? Research this program</li>
            <li>How are classes taught, are they taught in your learning style?</li>
            <li>What are some additional costs to consider? (books, lab fees, technology)</li>
            <li>Will you have to pay to live on the residence of the school? Where will you live?</li>
          </ul>
        </div>
        <button onClick={this.increment}>Let's finish this!</button>
        <button className="button" onClick={this.decrement}>Previous!</button>
        </div>
      )
    }
    else if(stage === 5){
      return(
        <div>
          <h1><span className="section">End</span></h1>
          <div className ="top"></div>
          <div id="bar">
          <div id="progress"></div>
          </div>
        <h1 className="title">Congratulations!</h1>
        <h2>You've made it to the end!</h2>
        <iframe src="https://giphy.com/embed/1RP4uF79Owkpv1FNpU" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/party-celebration-fireworks-1RP4uF79Owkpv1FNpU">via GIPHY</a></p>
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