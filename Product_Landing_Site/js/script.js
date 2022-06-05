"use strict";

function animate(obj)
{
    let element = document.getElementById("persona");
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
