//variable declaration for declaring inputs from document
var css=document.querySelector("h3");
var css1=document.querySelector("h4");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById('gradient');
var random=document.querySelector("p");

var button=document.getElementById("enter");
var list=document.getElementsByTagName("li");

//test variable
console.log(css);
console.log(color1);
console.log(color2);



css.textContent="linear-gradient(to right,"+color1.value+","+color2.value+")";

function setGradient() {
    body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
    css.textContent=body.style.background+";";
};

function randomColors() {
    random.textContent=`#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase()}`;

    if ( list[0].textContent==="") {
        list[0].textContent=random.textContent;
        console.log(list[1]);
    } else if ( list[1].textContent==="") {
        list[1].textContent=random.textContent;
        console.log(list[1]);
        button.textContent="";
        button.textContent="Generate background";
    } else if (list[0].textContent!="" && list[1].textContent!="") {
        body.style.background="linear-gradient(to right,"+list[0].textContent+","+list[1].textContent+")";
        css1.textContent=body.style.background+";";
        list[0].textContent="";
        list[1].textContent="";
        button.textContent="";
        button.textContent="Generate Super random color";
    };

    // for (i=0; i<list.length;i++ ) {
    //     // console.log(list[i]);
        
    //     // list[i].textContent=random.textContent;
    //     // console.log(list[i]);

    // }
    // body.style.background=`linear-gradient(to right,${list[0].value},${list[1].value})`;

};

button.addEventListener("click",randomColors);

//event for taking inpun
color1.addEventListener("input",setGradient )

color2.addEventListener("input",setGradient )










