// import React from "react";

// let secondsPassed = 0;
// let totalEarned = 0;
// let truncatedEarnings = 0.00;

// class Timer extends React.Component {

//   constructor(props) {
//     super(props);
//     this.earnedRef = React.createRef();
//   }

//   startTimer(amount, type) {

//     if(amount) {
//       localStorage.setItem('wage', amount);
//       setInterval(() => {this.calculateSalary(amount, type)}, 1000)
//     } else {
//       console.log('empty')
//     }
//   }

//   calculateSalary(salary, type) {

//     if(type === 'yearly') {
//       const salaryToHours = salary/2080;
//       const salaryToMinutes = salaryToHours/60;
//       const salaryToSeconds = salaryToMinutes/60;

//       totalEarned += salaryToSeconds;

//     } else {
//       const salaryToMinutes = salary/60;
//       const salaryToSeconds = salaryToMinutes/60;

//       totalEarned += salaryToSeconds;
//     }


//     truncatedEarnings = Math.round(totalEarned * 100)/100;

//     return truncatedEarnings;
//   }

//   render() {
//     return (
//       <div className="timer">
//         <p>You've earned:</p>
//         <h1>$<span ref={this.earnedRef}>0.00</span></h1>
//       </div>
//     );
//   }
// }

// export default Timer;
