

let result = {
        "tag": "",
        "free": false,
        "role": false,
        "user": "harisharnam",
        "email": "harisharnam@shivshambho.com",
        "score": 0.64,
        "state": "undeliverable",
        "domain": "shivshambho.com",
        "reason": "invalid_mx",
        "mx_found": false,
        "catch_all": null,
        "disposable": false,
        "smtp_check": false,
        "did_you_mean": "",
        "format_valid": true
      }

submit.addEventListener("click",async (e)=>{
e.preventDefault()
resultCont.innerHTML = `<img width="50px" src="Fadinglines.gif">`
               
console.log("clicked");
let key = "ema_live_0TmITWskTkrm7cmAxKheaUbKqmOfIC7gfwrUh7Ug";

let email = document.getElementById("username").value;  

let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

let res = await fetch(url);

let result = await res.json();

let str = '';

for(key of Object.keys(result)){
    if(result[key] !== "" && result[key] !== " "){
    str += `<div>${key}:${result[key]}</div>`
    }
}

console.log(str);

resultCont.innerHTML = str;

})

