let rosterNumber = new Number;
let roster = [];
let counter=0;
let waiverPool = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let waivercounter=1;

function DraftPlayer(playerNumber)
{  
    show();
    rosterCheck(playerNumber);
}

function rosterCheck(playerNumber) {
    rosterNumber++;
    if(rosterNumber<11)
    {
        var element = document.getElementById("player" + playerNumber);
        var P = document.getElementById("position"+playerNumber);
        var position = P.innerHTML;
        var N = document.getElementById("name"+playerNumber);
        var name = N.innerHTML;
        var S = document.getElementById("college"+playerNumber);
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
    var node = document.createElement("p");
    var text = document.createTextNode(position);
    node.appendChild(text);
    document.getElementById("yourPlayerPositions").appendChild(node);
    var node1 = document.createElement("p");
    var text1 = document.createTextNode(name);
    node1.appendChild(text1);
    document.getElementById("yourPlayerNames").appendChild(node1);
    var node2 = document.createElement("p");
    var text2 = document.createTextNode(school);
    node2.appendChild(text2);
    document.getElementById("yourPlayerSchool").appendChild(node2);
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
        sessionStorage.setItem("waiver"+i+"pos", document.getElementById("position"+i).innerHTML);
        sessionStorage.setItem("waiver"+i+"nam", document.getElementById("name"+i).innerHTML);
        sessionStorage.setItem("waiver"+i+"coll", document.getElementById("college"+i).innerHTML);
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
    document.getElementById("numOfPlayers").innerHTML = "("+newNum+"/10)";
}

function show()
{
    document.getElementById("yourPlayerNames").style.display = "block";
    document.getElementById("yourPlayerPositions").style.display = "block";
    document.getElementById("positions").style.display = "block";
    document.getElementById("names").style.display = "block";
    document.getElementById("yourPlayerSchool").style.display = "block";
    document.getElementById("school").style.display = "block";
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
            document.getElementById("rosterplayername"+i).innerHTML = sessionStorage.getItem("player"+i+"nam");
            document.getElementById("rosterplayername"+i).style.borderBottom = "solid white";
            document.getElementById("rosterplayername"+i).style.borderRight= "dashed white";

            document.getElementById("rosterplayerposition"+i).innerHTML = sessionStorage.getItem("player"+i+"pos");
            document.getElementById("rosterplayerposition"+i).style.borderBottom = "solid white";
            document.getElementById("rosterplayerposition"+i).style.borderRight= "dashed white";
            document.getElementById("rosterplayerschool"+i).innerHTML = sessionStorage.getItem("player"+i+"school");
            document.getElementById("rosterplayerschool"+i).style.borderBottom = "solid white";

            document.getElementById("rosterplayerschool"+i).style.height = "10%";
            document.getElementById("rosterplayerposition"+i).style.height = "10%";
            document.getElementById("rosterplayername"+i).style.height = "10%";
        }
    }

    for(let i = 1; i< 16; i++)
    {
        if(sessionStorage.getItem("waiver"+(i)+"nam") != "")
        {
            document.getElementById("waivername"+i).innerHTML = sessionStorage.getItem("waiver"+(i)+"nam");
            document.getElementById("waivername"+i).style.borderBottom= "solid white";
            document.getElementById("waivername"+i).style.borderRight = "dashed white";

            document.getElementById("waiverposition"+i).innerHTML = sessionStorage.getItem("waiver"+(i)+"pos");
            document.getElementById("waiverposition"+i).style.borderBottom= "solid white";
            document.getElementById("waiverposition"+i).style.borderRight = "dashed white";

            document.getElementById("waiverschool"+i).innerHTML = sessionStorage.getItem("waiver"+(i)+"coll");
            document.getElementById("waiverschool"+i).style.borderBottom= "solid white";    
            document.getElementById("waiverschool"+i).style.height = "auto";
            var height = document.getElementById("waiverschool"+i).style.height;
            document.getElementById("waiverposition"+i).style.height = document.getElementById("waiverschool"+i).style.height;
            document.getElementById("waivername"+i).style.height = height;

            document.getElementById("waivername"+i).style.height = "10%";
            document.getElementById("waiverschool"+i).style.height = "10%";
            document.getElementById("waiverposition"+i).style.height = "10%";
        }

    }

    var right=document.getElementById('rightdiv').style.height;
    var left=document.getElementById('leftdiv').style.height;
    var mid = document.getElementById
    if(left>right)
    {
        document.getElementById('rightdiv').style.height=left;
    }
    else
    {
        document.getElementById('leftdiv').style.height=right;
    }
 
 }

//module.exports = {DraftPlayer(playerNumber), addToRoster(position, name, school, rNumber, pNumber), setStorage(caseNum), function initializeWaiverStorage(), setWaiverStorage(number), changeRosterNum(newNum), show(), emptyRoster(), refreshRoster()};
module.exports = {rosterCheck, setStorage, changeRosterNum, emptyRoster};
