import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`
  body {
    background-color: #eff1abf8;

}


  .search {
    margin: 0 auto;
    margin-top: 2%;
    left: 200px;
    cursor: pointer;
    
    
    
  }
  .log-in form {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
    padding: 8%;
  }

  .log-in input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .user-btn {
    width: 100%;
    background-color: white;
    color: black;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;

  }
  #login h2 {
    text-align: center;
  }
  #appt-card {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    padding: 5%;
  }

  .appt-header {
    text-align: center;
  }

  .salon-page {
    display: block;
    margin-left: auto;
    margin-right: auto;
    // width: 50%;
    // padding: 10%;
}




.footer-div{
  display: flex; 
  justify-content: space-between; 
  // padding: 4rem 8rem;
  width:100%;
  height: 70px;
  background-color: black;
}
.footer-div p {
  color: white;
  text-align: center;
}




`

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <GlobalStyle />
      <App />
    </BrowserRouter>   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
