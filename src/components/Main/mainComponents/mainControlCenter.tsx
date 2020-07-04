import * as React from 'react';
import '../mainComponents/mainInformation'

function setDarkMode() {
  let sun = document.getElementById("sun");
  let moon = document.getElementById("moon");
  let main = document.getElementById("main");

  sun.classList.remove("active");
  moon.classList.add("active");
  main.style.backgroundColor = "#242525";
  main.style.transition = '.3s';
  localStorage.setItem("darkmode", "1");
}

function setLightMode() {
  let sun = document.getElementById("sun");
  let moon = document.getElementById("moon");
  let main = document.getElementById("main");

  moon.classList.remove("active");
  sun.classList.add("active");
  main.style.backgroundColor = "#F8F2EE";
  main.style.transition = '.3s';
  localStorage.setItem("darkmode", "0");
}

let font: number = 1;

function plusFontSize() {
  if(font < 1.2) {
    font += 0.1;
    document.body.style.fontSize = `${font}rem`;
  }
  localStorage.setItem("fontsize", `${font}`);
}

function minusFontSize() {
  if(font > 0.8) {
    font -= 0.1;
    document.body.style.fontSize = `${font}rem`;
  }
  localStorage.setItem("fontsize", `${font}`);
}

class MainControlCenter extends React.Component {
  render(){
    return(
      <div className="main-control-center">
        <div><p className="main-card-text" id="mainCardText">Settings</p></div>
        <div>
          <span>Dark Mode / Тёмный режим</span>
          <div className="modes">
            <i onClick={setLightMode} id="sun" className="far fa-sun sun active"></i>
            <i onClick={setDarkMode} id="moon" className="far fa-moon moon"></i>
          </div>
        </div>
        <div>
          <span>Language / Язык</span>
          <div className="lang-switch" id="rus-button">
            <span>Русс</span>
          </div>
          <div className="lang-switch active-lang" id="eng-button">
            <span>Eng</span>
          </div>
        </div>
        <div>
          <span>Font size / Размер шрифта </span>
          <div className="font-switch">
            <span onClick={plusFontSize}><i className="fas fa-font font-switcher font-plus"></i>+</span>
            <span> | </span>
            <span onClick={minusFontSize}><i className="fas fa-font font-switcher font-minus"></i>-</span>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    let darkMode = localStorage.getItem("darkmode");
    if(darkMode == "1") {
      setDarkMode();
    }
    else {
      setLightMode;
    }
    let fontSize = localStorage.getItem("fontsize");
    document.body.style.fontSize = `${fontSize}rem`;
  }
}



export default MainControlCenter;
