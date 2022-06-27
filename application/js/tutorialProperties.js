
myFirst = document.getElementById("firsttimer");
info = document.getElementById("firstinfo");
info.style.display = "none";
createName = document.getElementById("nameCreator");
nameFiller = document.getElementById("nameBuilder");
nameFiller.style.display = "none";
nameBtn = document.getElementById("createName");
nameBtn.style.display = "none";
drafting = document.getElementById("draftingStep");
drafting.style.display = "none";
understandBtn = document.getElementById("understand");
understandBtn.style.display = "none";
lastStep = document.getElementById("lastStep");
lastStep.style.display = "none";
readyBtn = document.getElementById("ready");
readyBtn.style.display = "none";

function newPage () {
    if (document.body.click) {
        myFirst.style.display = "none";
        info.style.display = "block";
    } else {
        myFirst.style.display = "block";
        info.style.display = "none";
    }
}

function name() {
    if (document.body.click) {
        nameFiller.style.display = "block";
        nameBtn.style.display = "block"; 
        
    } else {
        createName.style.display = "block";
        nameFiller.style.display = "none";
        nameBtn.style.display = "none";
        
    }
}

function testName() {
    if (nameFiller.value == "Sharks") {
        nameFiller.value = " ";
        alert("This team has already been created");
        
    } else {
        alert("This name is good!");
        localStorage.setItem("setTeamName", nameFiller.value);
        drafting.style.display = "block";
        understandBtn.style.display = "block";    
    }
}


function understandNext() {
    lastStep.style.display = "block";
    readyBtn.style.display ="block";
    return(lastStep.style.display);
}

function ready() {
    window.location.href = "../application/home.html";
    
}    


//module.exports = {newPage, name, testName, understandNext, ready};
