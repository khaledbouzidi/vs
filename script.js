const khaled = (a, b) => {
    return a*b
}
const rusalt = (khaled (5, 5));
console.log(rusalt);


const bouzidi = (h, k) => {
    return h-k
}
const rusalo = (bouzidi(6, 5));
console.log(rusalo);

const abdou = (o, l) =>{
    return o/l
}
const raauslt = (abdou(5, 5));
console.log(raauslt);

// khaled
const long = ["العربية","الفرنسية"]
console.log(long);
long.push("الايطالية");
long.pop();
// object
const parson = {
    firstName : "khaled",
    id : 2023456 ,
    address : "djelfa ain maabed",
    hobet: ["football", "bascetbool"],
    sayAhla: function(){
        console.log("hi");
        
    }
}
console.log(parson.sayAhla());

// template strings
const fiestNeme =  "khaled";
const wibeSite = "khaled@bouzidi.com";
console.log(`my name is ${fiestNeme} and my wibe site is ${wibeSite}`);
// dom : window
window.addEventListener("khm",()=>{
    console.log("window khm");
    
})

// doucument
const ekho = document.createElement("h4");
ekho.innerText = "2024";
document.body.appendChild(ekho);
console.log(ekho);
// div(id: class)
console.log(document.getElementById("22"));

const MyName = document.getElementById("22");
MyName.style.color = "green"
const nas = document.getElementById("333");
nas.style.color = "red"
const mama = document.getElementById("444");
mama.style.color = "pink"
const baba = document.getElementById("555");
baba.style.color = "blue"
// h
const lag = document.getElementsByClassName("big");
Array.from(lag).forEach((element)=>{
    element.style.color = "blue"
})
// querySelector هو نفسو لي قبلو بصح هدا خير واسهل
console.log(document.querySelector("#mpo"));
console.log(document.querySelectorAll(".big"));
// boutten click
const btn = document.querySelector("#clickhere");
console.log(btn.dataset);
btn.addEventListener("click", ()=>{
    const clicks = Number(btn.dataset.clicks);
    btn.dataset.clicks = clicks + 1;
    console.log(`clicked here ${clicks}`);
})






















