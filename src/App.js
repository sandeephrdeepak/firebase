// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import react, { Component } from 'react'
import firebase from './firebase'
export class App extends Component {
  handleClick = () => {
    var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    var number = "+917082359920";
    firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function (e) {
      var code = prompt('Enter the OTP', '');
      if (code == null) return;

      e.confirm(code).then(function (result) {
        console.log(result.user);
        document.querySelector('label').textContent = result.user.phoneNumber + "Number Verified";

      }).catch(function (error) {
        console.log(error);
      });
    })

      .catch(function (error) {
        console.log(error);

      });
  }
  render() {
    return (
      <div>
        <label></label>
        <div id="recaptcha"></div>
        <button onClick={this.handleClick}> Click Here</button>

      </div>
    )
  }
}

export default App

