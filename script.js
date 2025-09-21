let form = document.body.querySelector("form");
let input = document.body.querySelector("input");
let main = document.querySelector(".main");
// let div1 = document.querySelector(".name");
// let div2 = document.querySelector(".name2");


form.addEventListener("submit" , (event)=>{
    event.preventDefault();

    let names = input.value;


    let name = document.createElement("div");
    name.className = "name";
    name.innerText = `Ondu Malle Billu ${names} kappi tullu`;

    let name2 = document.createElement("div");
    name2.className = "name2";
    name2.innerText = `Paapa Pandu ${names} Gandu`;

    main.appendChild(name);
    main.appendChild(name2);
})

let reset = document.getElementById("reset");

reset.addEventListener("click" , ()=>{
    location.reload();
})
