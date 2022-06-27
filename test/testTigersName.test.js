/**
 * @jest-environment jsdom
 */

 const page = require('./tutorialPage');

 it('tests testName function', () => {

    // Copied from tutorialProperties.js
    myFirst = page.window.document.getElementById("firsttimer");
    info = page.window.document.getElementById("firstinfo");
    info.style.display = "none";
    createName = page.window.document.getElementById("nameCreator");
    nameFiller = page.window.document.getElementById("nameBuilder");
    nameFiller.style.display = "none";
    nameBtn = page.window.document.getElementById("createName");
    nameBtn.style.display = "none";
    drafting = page.window.document.getElementById("draftingStep");
    drafting.style.display = "none";
    understandBtn = page.window.document.getElementById("understand");
    understandBtn.style.display = "none";
    lastStep = page.window.document.getElementById("lastStep");
    lastStep.style.display = "none";
    readyBtn = page.window.document.getElementById("ready");
    readyBtn.style.display = "none";

    // Copied from tutorialProperties.js
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

    // Initialize nameFiller
    nameFiller.innerHTML = "Tigers";

    // Assertions
    expect(() => testName().alert("This name is good!"));
    expect(() => page.window.document.getElementById("nameBuilder").innerHTML.toBe("Tigers"));

 });
 
 
 