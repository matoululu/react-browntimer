import React from "react";

class SalaryForm extends React.Component {

  constructor(props) {
    super(props);
    this.amountRef = React.createRef();
    this.salaryRadio = React.createRef();
    this.state = { seconds: 0, earned: 0, isActive: false};
    this.totalEarned = 0;
    this.truncatedEarnings = 0;
    this.timer = '';
    this.showWarning = false;
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleChange = (e) => {
    e.target.control.checked = true;
    this.changePayType(e.target.control);
  }

  changePayType(e) {
    if(e.id === 'salary') {
      this.amountRef.current.placeholder = 'Your salary';
      localStorage.setItem('payType', 'salary');
    } else {
      this.amountRef.current.placeholder = 'Your hourly wage';
      localStorage.setItem('payType', 'hourly');
    }
  }

  handleClick = () => {
    if(this.state.isActive === false) {
      const amount = this.amountRef.current.value;
      const payType = localStorage.getItem('payType');
      this.startTimer(amount, payType);
    } else {
      clearInterval(this.timer);
      this.setState(state => ({
        seconds: 0,
        isActive: false
      }));
    }
  }

  startTimer(amount, type) {
    if(amount) {
      this.setState(state => ({
        showWarning: false,
        isActive: true
      }));

      localStorage.setItem('wage', amount);
      this.timer = setInterval(() => this.tick(amount, type), 1000)

    } else {
      this.setState(state => ({
        showWarning: true
      }));
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
      this.totalEarned += salaryToSeconds;

    } else {
      const salaryToMinutes = salary/60;
      const salaryToSeconds = salaryToMinutes/60;
      this.totalEarned += salaryToSeconds;
    }

    this.truncatedEarnings = Math.round(this.totalEarned * 100)/100;
    return this.truncatedEarnings.toFixed(2);
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
          <h1>$<span>{this.state.earned}</span></h1>
        </div>

        <form action="submit" onSubmit={this.handleSubmit}>
          {this.state.showWarning ? <p className="warning">Please add your wage</p> : null }
          <input ref={this.amountRef} type="number" name="input" id="input" min="1" maxLength="20" placeholder="Your hourly wage"/>
          <div className="form__toggle">
            <input type="radio" id="hourly" name="calculate" defaultChecked/>
            <label onClick={this.handleChange} className="label--hourly" htmlFor="hourly">Use hourly</label>
            <input ref={this.salaryRadio} type="radio" id="salary" name="calculate"/>
            <label onClick={this.handleChange} className="label--salary" htmlFor="salary">Use salary</label>
          </div>
          <button className="start-timer" onClick={this.handleClick}>{this.state.isActive ? 'Stop' : 'Start'}</button>
        </form>
      </div>
    );
  }
}

export default SalaryForm;
