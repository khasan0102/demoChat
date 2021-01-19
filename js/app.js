let input = document.querySelector('#writeText');
let inputUrl = document.querySelector('#writeUrl');
let btn = document.querySelector('#btn');
let btn1 = document.querySelector('#btn1');
let imgBtn = document.querySelector('#imgBtn');
let place = document.querySelector('#place');
let main = document.querySelector('.chat-main');
let chatForm = document.querySelector('.chat-form');

function newElement(element) {
    return document.createElement(element);
}

let btnClose = newElement('button');
btnClose.setAttribute('type', "button");
function getTime() {
    let date = new Date();
    let minut = date.getMinutes();
    let hours = date.getHours();
    if(minut < 10) {
    	minut = "0" + minut;
    }if(hours < 10) {
    	hours = "0" + hours;
    }
    let time = hours + ":" + minut;
    return time;
}
function addMessage() {
    if(input.value == "") return false;
    let div = newElement('div');
    let time = newElement('time');
    let p = newElement('p');
    div.classList.add('message');
    p.classList.add('message-text');
    
    main.appendChild(div)
    div.appendChild(time);
    div.appendChild(p);
    p.textContent = input.value
    time.innerText = getTime(); 
    p.style.maxWidth = "220px"
    input.value = "";

    main.scrollTop = main.scrollHeight;
}
function addImage(url) {
    url = inputUrl;
    if(url.value == "") return false;
    let div = newElement('div');
    let img = newElement('img');
    let time = newElement("time");
    time.innerText = getTime(); 
    img.setAttribute("src", url.value);
    img.setAttribute("alt", "Img message");
    div.classList.add('message');
    div.appendChild(time);
    div.appendChild(img);
    main.appendChild(div);
    
    btn1.classList.remove('btn1Act');
    url.classList.remove('urlActive');
    url.value = "";
    main.scrollTop = main.scrollHeight;
    chatForm.removeChild(btnClose);
}

btn.addEventListener('click', addMessage)
btn1.addEventListener('click', addImage);
function addElement(parent, child) {
  parent.appendChild(child);
}
input.addEventListener('keyup', function(event) {
    if(event.keyCode == 13) {
        addMessage();
    }
})

imgBtn.addEventListener('click' , function()  {
  inputUrl.classList.add('urlActive');
  btn1.classList.add('btn1Act');
  addElement(chatForm, btnClose)
  btnClose.classList.add('closeBtn');
})
btnClose.addEventListener('click',  function() {
    inputUrl.classList.remove('urlActive');
    btn1.classList.remove('btnAct');
    chatForm.removeChild(btnClose);
})

inputUrl.addEventListener('keyup', function(event) {
    if(event.keyCode == 13) {
        addImage(inputUrl);
    }
})
