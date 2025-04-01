import React, { useState } from "react";
import { ReactNotifications, Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { LC, NC, SC, UC } from "./data/passChar";
import './App.css'
function App() {
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [passwordlen, setPasswordlen] = useState(10);
  const [fpass, setPass] = useState("");

  const createPassword = () => {
    let finalPass = "";
    let charSet = "";
    if (uppercase || lowercase || numbers || symbols) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (numbers) charSet += NC;
      if (symbols) charSet += SC;
      for (let i = 0; i < passwordlen; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      setPass(finalPass);
    } else {
      Store.addNotification({
        title: "Warning",
        message: "Please check at least one box!",
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: true,
        },
      });
    }
  };

  const copyPass = () => {
    navigator.clipboard.writeText(fpass);
  };

  return (
    <>
     
      <div className="passwordBox">
         <ReactNotifications />
        <h2>Password Generator</h2>
        <div className="passwordBoxin">
          <input type="text" readOnly value={fpass} />
          <button onClick={copyPass}>Copy</button>
        </div>
        <div className="passlength">
          <label>Password Length</label>
          <input
            type="number"
            value={passwordlen}
            min={10}
            max={20}
            onChange={(event) => setPasswordlen(event.target.value)}
          />
        </div>

        <div className="passlength">
          <label>Include Uppercase Letters</label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
        </div>
        <div className="passlength">
          <label>Include Lowercase Letters</label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
        </div>

        <div className="passlength">
          <label>Include Numbers</label>
          <input
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
          />
        </div>

        <div className="passlength">
          <label>Include Symbols</label>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
        </div>

        <button className="btn" onClick={createPassword}>
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
