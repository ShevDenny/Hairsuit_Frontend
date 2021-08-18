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
  .nav-bar {
    // overflow: hidden;
    padding-top: 1%;
    height: 50px
  
  }

  .nav-links{
    // font-family: 'Source Sans Pro', sans-serif;
    // background-color: black;
    // color: white;
    border-color: black
    padding: 15px;
    margin: 5px;
    // text-align: center;
    text-decoration: none;
    font-size: 15px;
    transition-duration: 0.4s;
    cursor: pointer;
    float: left;
    display: block;
    border-radius: 15px;

    // &:hover {
    //   background-color: white;
    //   color: black;
  }
  .name {
    // color: white;
    text-align: right;
    text-decoration: none;
    font-size: 20px;
    padding: 1%
    margin: 5%;
    // transition-duration: 0.4s;
    // vertical-align: middle;
    // font-family: 'Satisfy', cursive;
  }

  .logout-link {
    // font-family: 'Source Sans Pro', sans-serif;
    // background-color: black;
    // color: white;
    // border: 2px solid #0B13F9;
    padding: 1%;
    margin: 5px;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
    // transition-duration: 0.4s;
    cursor: pointer;
    float: right;
    display: block;
    // border-radius: 15px;
  }


  .search {
    margin: 0 auto;
    display: inline-block;
    padding-top: 20%;
    
  }
  #login form {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    padding: 5%;

  }
  #login input {
    border-radius: 5px;
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  #login h2 {
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
