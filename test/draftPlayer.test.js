/**
 * @jest-environment jsdom
 */
 const page = require('./draftPage');
 


// Copied from properties.js
let rosterNumber = new Number;
let roster = [];
let counter=0;
let waiverPool = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let waivercounter=1;

function DraftPlayer(playerNumber)
{
    rosterNumber++;
    let element = page.window.document.getElementById("player" + playerNumber);
    show();
    if(rosterNumber<11)
    {
        var P = page.window.document.getElementById("position"+playerNumber);
        var position = P.innerHTML;
        var N = page.window.document.getElementById("name"+playerNumber);
        var name = N.innerHTML;
        var S = page.window.document.getElementById("college"+playerNumber);
        var school = S.innerHTML;
        addToRoster(position, name, school, rosterNumber, playerNumber);
        changeRosterNum(rosterNumber);
        waiverPool[playerNumber - 1] = 0; 
        setWaiverStorage(playerNumber); 
        element.remove();
    }
    else if(rosterNumber>=11)
    {
        alert("Your roster is full!");
    }

}


function addToRoster(position, name, school, rNumber, pNumber)
{
    var player = {pos: position, nm: name, coll: school}
    roster[rNumber-1] = player;
    setStorage(rNumber);
    alert("\tYou drafted " + roster[rNumber-1].pos + " " + roster[rNumber-1].nm +", " + roster[rNumber-1].coll+ "!");
    var node = page.window.document.createElement("p");
    var text = page.window.document.createTextNode(position);
    node.appendChild(text);
    page.window.document.getElementById("yourPlayerPositions").appendChild(node);
    var node1 = page.window.document.createElement("p");
    var text1 = page.window.document.createTextNode(name);
    node1.appendChild(text1);
    page.window.document.getElementById("yourPlayerNames").appendChild(node1);
    var node2 = page.window.document.createElement("p");
    var text2 = page.window.document.createTextNode(school);
    node2.appendChild(text2);
    page.window.document.getElementById("yourPlayerSchool").appendChild(node2);
}

function setStorage(caseNum)
{
    sessionStorage.setItem("player"+caseNum+"pos", roster[caseNum-1].pos);
    sessionStorage.setItem("player"+caseNum+"nam", roster[caseNum-1].nm);
    sessionStorage.setItem("player"+caseNum+"school", roster[caseNum-1].coll);
}

function initializeWaiverStorage()
{
    for(let i = 1; i <16; i++)
    {
        sessionStorage.setItem("waiver"+i+"pos", page.window.document.getElementById("position"+i).innerHTML);
        sessionStorage.setItem("waiver"+i+"nam", page.window.document.getElementById("name"+i).innerHTML);
        sessionStorage.setItem("waiver"+i+"coll", page.window.document.getElementById("college"+i).innerHTML);
    }
}

function setWaiverStorage(number)
{
    sessionStorage.setItem("waiver"+number+"pos", "");
    sessionStorage.setItem("waiver"+number+"nam", "");
    sessionStorage.setItem("waiver"+number+"coll", "");
}

function changeRosterNum(newNum)
{
    page.window.document.getElementById("numOfPlayers").innerHTML = "("+newNum+"/10)";
}

function show()
{
    page.window.document.getElementById("yourPlayerNames").style.display = "block";
    page.window.document.getElementById("yourPlayerPositions").style.display = "block";
    page.window.document.getElementById("positions").style.display = "block";
    page.window.document.getElementById("names").style.display = "block";
    page.window.document.getElementById("yourPlayerSchool").style.display = "block";
    page.window.document.getElementById("school").style.display = "block";
}

function emptyRoster()
{    
sessionStorage.clear();
initializeWaiverStorage();
}


function refreshRoster()
{
    
    for(let i = 1; i<11; i++)
    {
        if((sessionStorage.getItem("player"+i+"nam")) !== null)
        {
            page.window.document.getElementById("rosterplayername"+i).innerHTML = sessionStorage.getItem("player"+i+"nam");
            page.window.document.getElementById("rosterplayername"+i).style.borderBottom = "solid white";
            page.window.document.getElementById("rosterplayername"+i).style.borderRight= "dashed white";

            page.window.document.getElementById("rosterplayerposition"+i).innerHTML = sessionStorage.getItem("player"+i+"pos");
            page.window.document.getElementById("rosterplayerposition"+i).style.borderBottom = "solid white";
            page.window.document.getElementById("rosterplayerposition"+i).style.borderRight= "dashed white";
            page.window.document.getElementById("rosterplayerschool"+i).innerHTML = sessionStorage.getItem("player"+i+"school");
            page.window.document.getElementById("rosterplayerschool"+i).style.borderBottom = "solid white";

            page.window.document.getElementById("rosterplayerschool"+i).style.height = "10%";
            page.window.document.getElementById("rosterplayerposition"+i).style.height = "10%";
            page.window.document.getElementById("rosterplayername"+i).style.height = "10%";
        }
    }

    for(let i = 1; i< 16; i++)
    {
        if(sessionStorage.getItem("waiver"+(i)+"nam") != "")
        {
            page.window.document.getElementById("waivername"+i).innerHTML = sessionStorage.getItem("waiver"+(i)+"nam");
            page.window.document.getElementById("waivername"+i).style.borderBottom= "solid white";
            page.window.document.getElementById("waivername"+i).style.borderRight = "dashed white";

            page.window.document.getElementById("waiverposition"+i).innerHTML = sessionStorage.getItem("waiver"+(i)+"pos");
            page.window.document.getElementById("waiverposition"+i).style.borderBottom= "solid white";
            page.window.document.getElementById("waiverposition"+i).style.borderRight = "dashed white";

            page.window.document.getElementById("waiverschool"+i).innerHTML = sessionStorage.getItem("waiver"+(i)+"coll");
            page.window.document.getElementById("waiverschool"+i).style.borderBottom= "solid white";    
            page.window.document.getElementById("waiverschool"+i).style.height = "auto";
            var height = page.window.document.getElementById("waiverschool"+i).style.height;
            page.window.document.getElementById("waiverposition"+i).style.height = page.window.document.getElementById("waiverschool"+i).style.height;
            page.window.document.getElementById("waivername"+i).style.height = height;

            page.window.document.getElementById("waivername"+i).style.height = "10%";
            page.window.document.getElementById("waiverschool"+i).style.height = "10%";
            page.window.document.getElementById("waiverposition"+i).style.height = "10%";
        }

    }

    var right=page.window.document.getElementById('rightdiv').style.height;
    var left=page.window.document.getElementById('leftdiv').style.height;
    var mid = page.window.document.getElementById
    if(left>right)
    {
        page.window.document.getElementById('rightdiv').style.height=left;
    }
    else
    {
        page.window.document.getElementById('leftdiv').style.height=right;
    }
}

it('adds 11th player to cause roster overload', () => {
    // Initialize rosterNumber to trigger roster full alert.
    rosterNumber = 10;
    
    // Assertions
    expect(() => DraftPlayer(1).alert("Your roster is full!"));
});

it('tests changeRosterNum', () => {
    // Call changeRosterNum to 4 players on the team
    changeRosterNum(4);
    // Assertions
    expect(() => page.window.document.getElementById("numOfPlayers").innerHTML = "("+newNum+"/10)");
});

it('tests DraftPlayer', () => {
    expect(() => DraftPlayer(1).alert("\tYou drafted " + roster[rNumber-1].pos + " " + roster[rNumber-1].nm +", " + roster[rNumber-1].coll+ "!"));
});