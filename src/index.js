// import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
const signButton = document.querySelector('.sign-button');

signButton.addEventListener('click', () =>{
  document.querySelector('nav').style.filter= 'blur(5px)';
  document.querySelector('.about').style.filter= 'blur(5px)';
  document.querySelector('.popup').style.display='block';
  document.body.classList.add('freeze');
});
const closeBtn = document.getElementById('closeBtn');
closeBtn.addEventListener('click', () => {
  document.querySelector('.popup').style.display='none';
  document.querySelector('nav').style.filter= 'blur(0px)';
  document.querySelector('.about').style.filter= 'blur(0px)';
  document.body.classList.remove('freeze');
});
var firstTime=false;
const signUp = document.querySelector('.sign-up')
const signIn = document.querySelector('.sign-in')
signUp.addEventListener('mouseover', () => {
  if (firstTime===false){
    signUp.style.backgroundColor= 'var(--prime-dark-color)' ;
  }
})
signUp.addEventListener('mouseout', () => {
  if (firstTime===false){
    signUp.style.backgroundColor= 'var(--prime-color)' ;
  }
})
signIn.addEventListener('mouseover', () => {
  if (firstTime===true){
    signIn.style.backgroundColor= 'var(--prime-dark-color)' ;
  }
})
signIn.addEventListener('mouseout', () => {
  if (firstTime===true){
    signIn.style.backgroundColor= 'var(--prime-color)' ;
  }
})
signUp.addEventListener('click', () => {
  if (firstTime===false){
    firstTime=true;
    signUp.style.backgroundColor= 'var(--white-color)' ;
    signUp.style.color= 'var(--prime-dark-color)' ;
    signUp.style.cursor='default';
    signIn.style.backgroundColor= 'var(--prime-color)' ;
    signIn.style.color= 'var(--white-color)' ;
    signIn.style.cursor='pointer';
    document.querySelector('.log1').style.display='none';
    document.querySelector('.log2').style.display='flex';
  }
});
signIn.addEventListener('click', () => {
  if (firstTime===true){
    firstTime=false;
    signIn.style.backgroundColor= 'var(--white-color)' ;
    signIn.style.color= 'var(--prime-dark-color)' ;
    signIn.style.cursor='default';
    signUp.style.backgroundColor= 'var(--prime-color)' ;
    signUp.style.color= 'var(--white-color)' ;
    signUp.style.cursor='pointer';
    document.querySelector('.log1').style.display='flex';
    document.querySelector('.log2').style.display='none';
  }
});