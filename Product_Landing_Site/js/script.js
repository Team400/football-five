"use strict";

//const header = "Our inspirations";

function doThat(obj)
{
    let element = document.getElementById("header");
    element.innerText = "";
    let timer = setInterval(step, 40);
    let i = 0;
    

    function step()
    {
        element.textContent += obj.charAt(i);
        i++;
        if (i === obj.length)
            clearInterval(timer);
    }

}

function slide(id)
{
    let i = parseInt(id.charAt(8));
    let element = document.getElementById(id)
    element.style.display = "none";

    let persona = Math.ceil(Math.random()*2);
    while (persona === i)
        persona = Math.ceil(Math.random()*2);

    console.log("persona-"+persona);
    element = document.getElementById("persona-"+persona);
    
    //parent.style.visibility = "visible";
    console.log(parent);
    element.style.visibility = "visible";
    element.style.display = "block";

    element.classList.add("row", "justify-content-center");



}
function flip(id)
{
    let element = document.getElementById(id);
    //element.style.visibility = "hidden";
    element.style.display = "none";
    console.log("hi there");
    console.log(element);
}

function load()
{
    window.location = "persona2.html";
    console.log("hi there");
}

