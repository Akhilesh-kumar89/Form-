
let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    let user=document.querySelector("#name");
    console.log(`Student name=${user.value}`);
        alert("Your form was submitted..");
   
        user.value="";
})
let frm=document.querySelector("form");
frm.addEventListener("submit",function(event){
    event.preventDefault();
    let contact=document.querySelector("#contact");
    console.log(`Student contact No.= ${contact.value}`);
    contact.value="";
})
let fr=document.querySelector("form");
fr.addEventListener("submit",function(event){
    event.preventDefault();
    let father=document.querySelector("#father");
    console.log(`Father's name=${father.value}`);
    father.value="";
})
let fa=document.querySelector("form");
fa.addEventListener("submit",function(event){
    event.preventDefault();
    let fathercont=document.querySelector("#fathercont");
    console.log(`Father's contact No.=${fathercont.value}`);
    fathercont.value="";
})
let fan=document.querySelector("form");
fa.addEventListener("submit",function(event){
    event.preventDefault();
    let address=document.querySelector("#address");
    console.log(`Your Address=${address.value}`);
    address.value="";
})
let fana=document.querySelector("form");
fa.addEventListener("submit",function(event){
    event.preventDefault();
    let blood=document.querySelector("#blood");
    console.log(`Your blood Group=${blood.value}`);
    blood.value="";
})
let f=document.querySelector("form");
fa.addEventListener("submit",function(event){
    event.preventDefault();
    let file=document.querySelector("#file");
    console.log(`Your Photo=${file.value}`);
    file.value="";
})
let fanw=document.querySelector("form");
fa.addEventListener("submit",function(event){
    event.preventDefault();
    let email=document.querySelector("#email");
    console.log(`Your Email I'D=${email.value}`);
    email.value="";
})
let fav=document.querySelector("form");
fa.addEventListener("submit",function(event){
    event.preventDefault();
    let clas=document.querySelector("#class");
    console.log(`Your class=${clas.value}`);
    clas.value="";
})
let fe=document.querySelector("form");
fa.addEventListener("submit",function(event){
    event.preventDefault();
    let math=document.querySelector("#math");
    console.log(`Are you learn Math=${math.value}`);
    math.value="";
})
let fat=document.querySelector("form");
fa.addEventListener("submit",function(event){
    event.preventDefault();
    let physics=document.querySelector("#physics");
    console.log(`Are you learn Physics=${physics.value}`);
    physics.value="";
})

let doc=document.querySelector("#demo");
doc.append(name);






























