let tg = window.Telegram.WebApp;
tg.expand()

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#cab37";

let btn = document.getElementById("btn");
btn.addEventListener('click', function() {
  tg.MainButton.setText ("renamed button");
  tg.MainButton.show() ;
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
  tg.sendData('test')
});

let usercard = document.getElementById("usercard");
let p = document.createElement("p");
p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);
