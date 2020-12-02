import React from "react";

let totalEarned = 0;
let truncatedEarnings = 0.00;
let timer;

class SalaryForm extends React.Component {

  constructor(props) {
    super(props);
    this.amountRef = React.createRef();
    this.earnedRef = React.createRef();
    this.salaryRadio = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = { seconds: 0, earned: 0, isActive: false};
  }

  handleChange(e) {
    e.target.checked = true;
    this.changePayType(e);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleClick(e) {


    this.setState(state => ({
      isActive: !state.isActive
    }));

    if(this.state.isActive === false) {
      const amount = this.amountRef.current.value;
      const payType = localStorage.getItem('payType');
      this.startTimer(amount, payType);
    } else {
      clearInterval(timer);
      this.setState(state => ({
        seconds: 0
      }));
    }
  }

  changePayType(e) {
    if(e.target.id === 'salary') {
      this.amountRef.current.placeholder = 'Your salary';
      localStorage.setItem('payType', 'salary');
    } else {
      this.amountRef.current.placeholder = 'Your hourly wage';
      localStorage.setItem('payType', 'hourly');
    }
  }

  startTimer(amount, type) {
    if(amount) {
      localStorage.setItem('wage', amount);
      timer = setInterval(() => this.tick(amount, type), 1000)

    } else {
      console.log('empty')
    }
  }

  tick(amount, type) {
    const earnedPerSecond = this.calculateSalary(amount, type);

    this.setState(state => ({
      seconds: state.seconds + 1,
      earned: earnedPerSecond
    }));
  }

  calculateSalary(salary, type) {
    if(type === 'salary') {
      const salaryToHours = salary/2080;
      const salaryToMinutes = salaryToHours/60;
      const salaryToSeconds = salaryToMinutes/60;

      totalEarned += salaryToSeconds;

    } else {
      const salaryToMinutes = salary/60;
      const salaryToSeconds = salaryToMinutes/60;

      totalEarned += salaryToSeconds;
    }

    truncatedEarnings = Math.round(totalEarned * 100)/100;
    return truncatedEarnings.toFixed(2);
  }

  componentDidMount() {
    const getPayType = localStorage.getItem('payType');
    const getWage = localStorage.getItem('wage');

    if(getPayType === 'salary') {
      this.salaryRadio.current.checked = true;
      this.amountRef.current.placeholder = 'Your salary';
    }

    if(getWage) {
      this.amountRef.current.value = getWage;
    }
  }

  render() {
    return (
      <div>
        <div className="timer">
          <p>You've earned:</p>
          <h1>$<span ref={this.earnedRef}>{this.state.earned}</span></h1>
        </div>

        <form action="submit" onSubmit={this.handleSubmit}>
          <input ref={this.amountRef} type="number" name="input" id="input" min="1" maxLength="20" placeholder="Your hourly wage"/>
          <div className="form__toggle">
            <input onChange={this.handleChange} type="radio" id="hourly" name="calculate" defaultChecked/>
            <label className="label--hourly" htmlFor="hourly">Use hourly</label>
            <input ref={this.salaryRadio} onChange={this.handleChange} type="radio" id="salary" name="calculate"/>
            <label className="label--salary" htmlFor="salary">Use salary</label>
          </div>
          <button className="start-timer" onClick={this.handleClick}>{this.state.isActive ? 'Stop' : 'Start'}</button>
        </form>
      </div>
    );
  }
}

export default SalaryForm;
