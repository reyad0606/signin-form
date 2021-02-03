import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailErr, SetEmailErr] = useState({});
  const [passErr, setPassErr] = useState({});

  function handleSignIn(e) {
    e.preventDefault();
    // emailValidation();
    passValidation();
    console.log(`Name: ${email}, Pass: ${password}`);
  }

  // const emailValidation = () => {
  //   const emailErr = {};
  //   let isValid = true;

  //   if (email !== 'undefined') {
  //     let pattern = new RegExp(
  //       /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  //     );

  //     if (!pattern.email) {
  //       emailErr.incorectEmail = 'Email Not Valid';
  //       isValid = false;
  //     }

  //     SetEmailErr(emailErr);
  //     return isValid;
  //   }
  // };

  const passValidation = () => {
    const passErr = {};
    let isValid = true;

    if (password.trim().length < 8) {
      passErr.passTooShort = 'Password must be 8 Character';
      isValid = false;
    }

    setPassErr(passErr);
    return isValid;
  };

  return (
    <div className='user'>
      <div className='user__singin'>
        <form onSubmit={handleSignIn}>
          <h3>SignIn</h3>
          <h5>Email:</h5>
          <input
            type='email'
            placeholder='abc@xyz.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* {Object.keys(emailErr).map((key) => {
            return <div style={{ color: 'red' }}>{emailErr[key]}</div>;
          })} */}

          <h5>Password:</h5>
          <input
            type='password'
            placeholder='1234@asdf'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {Object.keys(passErr).map((key) => {
            return <div style={{ color: 'red' }}>{passErr[key]}</div>;
          })}
          <p>By signing-in you agree to the Conditions of Use.</p>
          <button>SignIn</button>
        </form>
      </div>

      <div className='user__signup'>
        <h3>SignUp</h3>
        <h5>Name</h5>
        <input type='text' />
        <h5>Email:</h5>
        <input type='email' />
        <h5>Password:</h5>
        <input type='password' />
        <h5>Retype Password:</h5>
        <input type='password' />
        <p>By Creating Account you agree to the Conditions of Use.</p>
        <button>Create Account</button>
      </div>
    </div>
  );
}

export default App;
