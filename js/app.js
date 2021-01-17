let input = document.querySelector('#writeText');
let inputUrl = document.querySelector('#writeUrl');
let btn = document.querySelector('#btn');
let btn1 = document.querySelector('#btn1');
let imgBtn = document.querySelector('#imgBtn');
let place = document.querySelector('#place');
let main = document.querySelector('.chat-main');

function newElemet(element) {
    return document.createElement(element);
}
function getTime() {
    let date = new Date();
    let minut = date.getMinutes();
    let hours = date.getHours();
    let time = hours + ":" + minut;
    return time;
}
function addMessage() {
    let div = newElemet('div');
    let time = newElemet('time');
    let p = newElemet('p');
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
    let div = newElemet('div');
    let img = newElemet('img');
    let time = newElemet("time");
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
}

btn.addEventListener('click', addMessage)
btn1.addEventListener('click', addImage);

input.addEventListener('keyup', function(event) {
    if(event.keyCode == 13) {
        addMessage();
    }
})

imgBtn.addEventListener('click' , function()  {
  inputUrl.classList.add('urlActive');
  btn1.classList.add('btn1Act');
})

inputUrl.addEventListener('keyup', function(event) {
    if(event.keyCode == 13) {
        addImage(inputUrl);
    }
})