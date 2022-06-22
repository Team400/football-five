myFirst = document.getElementById("firsttimer");
info = document.getElementById("firstinfo");
info.style.display = "none";
createName = document.getElementById("nameCreator");
nameFiller = document.getElementById("nameBuilder");
nameFiller.style.display = "none";
nameBtn = document.getElementById("createName");
nameBtn.style.display = "none";
drafting = document.getElementById("draftingStep");


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
        createName.style.display = "none";
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
        nameFiller.value == "";
        alert("This team has already been created");
        
    } else {
        alert("This name is good!");
    }
}