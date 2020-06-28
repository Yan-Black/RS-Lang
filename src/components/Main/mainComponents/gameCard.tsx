import * as React from 'react';

function showModal(e) {
  let target = e.target;
  let targetDiv = target.closest("DIV");
  let cardId = targetDiv.getAttribute("id");
  let modal;
  if(cardId == "card-1"){
    modal = document.getElementById("modal-1");
    modal.style.display = "block";
    let modalHint = modal.firstChild;
    let closeButton = document.createElement("button");
    closeButton.classList.add("modal-close-button");
    closeButton.innerText = "X";
    modalHint.append(closeButton);
    closeButton.addEventListener('click', ()=>{
      modal.style.display = "none";
      modalHint.removeChild(closeButton);
    })
  }
  else if(cardId == "card-2"){
    modal = document.getElementById("modal-2");
    modal.style.display = "block";
    let modalHint = modal.firstChild;
    let closeButton = document.createElement("button");
    closeButton.classList.add("modal-close-button");
    closeButton.innerText = "X";
    modalHint.append(closeButton);
    closeButton.addEventListener('click', ()=>{
      modal.style.display = "none";
      modalHint.removeChild(closeButton);
    })
  }
  else if(cardId == "card-3"){
    modal = document.getElementById("modal-3");
    modal.style.display = "block";
    let modalHint = modal.firstChild;
    let closeButton = document.createElement("button");
    closeButton.classList.add("modal-close-button");
    closeButton.innerText = "X";
    modalHint.append(closeButton);
    closeButton.addEventListener('click', ()=>{
      modal.style.display = "none";
      modalHint.removeChild(closeButton);
    })
  }
  else if(cardId == "card-4"){
    modal = document.getElementById("modal-4");
    modal.style.display = "block";
    let modalHint = modal.firstChild;
    let closeButton = document.createElement("button");
    closeButton.classList.add("modal-close-button");
    closeButton.innerText = "X";
    modalHint.append(closeButton);
    closeButton.addEventListener('click', ()=>{
      modal.style.display = "none";
      modalHint.removeChild(closeButton);
    })
  }
  else if(cardId == "card-5"){
    modal = document.getElementById("modal-5");
    modal.style.display = "block";
    let modalHint = modal.firstChild;
    let closeButton = document.createElement("button");
    closeButton.classList.add("modal-close-button");
    closeButton.innerText = "X";
    modalHint.append(closeButton);
    closeButton.addEventListener('click', ()=>{
      modal.style.display = "none";
      modalHint.removeChild(closeButton);
    })
  }
  else if(cardId == "card-6"){
    modal = document.getElementById("modal-6");
    modal.style.display = "block";
    let modalHint = modal.firstChild;
    let closeButton = document.createElement("button");
    closeButton.classList.add("modal-close-button");
    closeButton.innerText = "X";
    modalHint.append(closeButton);
    closeButton.addEventListener('click', ()=>{
      modal.style.display = "none";
      modalHint.removeChild(closeButton);
    })
  }
  else if(cardId == "card-7"){
    modal = document.getElementById("modal-7");
    modal.style.display = "block";
    let modalHint = modal.firstChild;
    let closeButton = document.createElement("button");
    closeButton.classList.add("modal-close-button");
    closeButton.innerText = "X";
    modalHint.append(closeButton);
    closeButton.addEventListener('click', ()=>{
      modal.style.display = "none";
      modalHint.removeChild(closeButton);
    })
  }
  else if(cardId == "card-8"){
    modal = document.getElementById("modal-8");
    modal.style.display = "block";
    let modalHint = modal.firstChild;
    let closeButton = document.createElement("button");
    closeButton.classList.add("modal-close-button");
    closeButton.innerText = "X";
    modalHint.append(closeButton);
    closeButton.addEventListener('click', ()=>{
      modal.style.display = "none";
      modalHint.removeChild(closeButton);
    })
  }
  else if(cardId == "card-9"){
    modal = document.getElementById("modal-9");
    modal.style.display = "block";
    let modalHint = modal.firstChild;
    let closeButton = document.createElement("button");
    closeButton.classList.add("modal-close-button");
    closeButton.innerText = "X";
    modalHint.append(closeButton);
    closeButton.addEventListener('click', ()=>{
      modal.style.display = "none";
      modalHint.removeChild(closeButton);
    })
  }
  else if(cardId == "card-10"){
    modal = document.getElementById("modal-10");
    modal.style.display = "block";
    let modalHint = modal.firstChild;
    let closeButton = document.createElement("button");
    closeButton.classList.add("modal-close-button");
    closeButton.innerText = "X";
    modalHint.append(closeButton);
    closeButton.addEventListener('click', ()=>{
      modal.style.display = "none";
      modalHint.removeChild(closeButton);
    })
  }
  else if(cardId == "card-11"){
    modal = document.getElementById("modal-11");
    modal.style.display = "block";
    let modalHint = modal.firstChild;
    let closeButton = document.createElement("button");
    closeButton.classList.add("modal-close-button");
    closeButton.innerText = "X";
    modalHint.append(closeButton);
    closeButton.addEventListener('click', ()=>{
      modal.style.display = "none";
      modalHint.removeChild(closeButton);
    })
  }
  else if(cardId == "card-12"){
    modal = document.getElementById("modal-12");
    modal.style.display = "block";
    let modalHint = modal.firstChild;
    let closeButton = document.createElement("button");
    closeButton.classList.add("modal-close-button");
    closeButton.innerText = "X";
    modalHint.append(closeButton);
    closeButton.addEventListener('click', ()=>{
      modal.style.display = "none";
      modalHint.removeChild(closeButton);
    })
  }
}


function GameCard(props) {
  return(
    <div className="game-card" id={props.cardId}>
      <p className="game-name">{props.name}</p>
      <img src={props.imgSrc} alt="Game Card"/>
      <i onClick={showModal} className="far fa-question-circle about-game"></i>
      <div style={{display: "none"}} id={props.modalId} className="modal-main">
        <div className="modal-hint">
          <div className="hint-title">{props.name}</div>
          <div className="hint-descr">{props.desc}</div>
        </div>
      </div>
    </div>
  )
}

export default GameCard;
