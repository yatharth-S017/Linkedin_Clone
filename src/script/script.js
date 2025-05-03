

function loadContent(){
    
    show =  document.getElementById("hiddenpart");
    button =  document.getElementById("showmore");    
 
    if(show.style.display==="none" || show.style.display===""){
       show.style.display = "block";
       button.innerHTML = "Show less <span class='bi bi-caret-up-fill'></span>"
    }
    else{
     show.style.display = "none"
    }
 
 }
 
 
 function morecontent1(){
 
    show = document.getElementById("hide");
    more = document.getElementById("showmore2");
 
    show.style.display = "block";
    more.style.display = "none";
 }
 
 function morecontent2(){
 
    show = document.getElementById("hide1");
    more = document.getElementById("showmore3");
 
    show.style.display = "block";
    more.style.display = "none";
 }
 
 function morecontent4(){
 
    show = document.getElementById("hide4");
    more = document.getElementById("showmore4");
 
    show.style.display = "block";
    more.style.display = "none";
 }