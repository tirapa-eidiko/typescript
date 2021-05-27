import React from 'react';
import logo from './eidiko.png';
import './App.css';
//import { Type } from 'typescript';






function App() {

  //const [criteria, setCriteria] = React.useState("123");

  const validateData = (e: React.ChangeEvent<HTMLInputElement>) => {
    //setCriteria(e.currentTarget.value);
    //alert(e.currentTarget.value)

    document.getElementById(e.currentTarget.id)?.setAttribute("value", e.currentTarget.value)
    onLoadExt();
  };

  const validateSelectData = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    //setCriteria(e.currentTarget.value);
    //alert(e.currentTarget.value)

    document.getElementById(e.currentTarget.id)?.setAttribute("value", e.currentTarget.value)
    onLoadExt();
  };

  const validateButtonData = (e: React.FormEvent<HTMLButtonElement>) => {
    //setCriteria(e.currentTarget.value);
    //alert(e.currentTarget.value)

    document.getElementById(e.currentTarget.id)?.setAttribute("value", e.currentTarget.value)
    onLoadExt();
  };

  const onLoadExt = () => {
    //setCriteria(e.currentTarget.value);

    //alert("Validating InputData.... ");
    let fNameEle = document.getElementById('fName');
    let lNameELe = document.getElementById('lName');
    let saveButton = document.getElementById('later');
    let mySelectEle = document.getElementById('myselect');

    let fName = fNameEle?.getAttribute("value");
    let lName = lNameELe?.getAttribute("value");
    let mySelect = mySelectEle?.getAttribute("value");
    console.log("fname " + fName)
    console.log("lname " + lName)
    console.log("mySelect " + mySelect)

    if (lNameELe?.hasAttribute("value") && lNameELe?.hasAttribute("value") && fName != null && fName !== '' && lName != null && lName !== ''&& mySelect !== ''&& mySelect !== null) {
      //alert("Data Validated Successfully")

      if (saveButton?.hasAttribute("disabled")) {

        saveButton?.removeAttribute("disabled");

      }
    } else {
      saveButton?.setAttribute("disabled", "true")
      //alert("Data Validated failed")
    }

  };








  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p>
        Mashreq Requirement..!!
        </p>

      <form id="myform" onLoad={onLoadExt}>

        <input type="text" id="fName" placeholder="Enter your first name" onBlur={validateData}  ></input>
        <input type="text" id="lName" placeholder="Enter your last name" onBlur={validateData}></input>

        <select id="myselect" onChange={validateSelectData}>
        <option value=''></option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select><br />
        <button disabled type="submit" id="later" name="later" onClick={validateButtonData}>Save Later</button>
        <button type="submit" id="finish" name="finish">Finish</button>
      </form>



      <footer className="App-footer">
        <img src={logo} className="App-logo" alt="logo" />

      </footer>


    </div>
  );
}



export default App;






