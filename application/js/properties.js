let rosterNumber = new Number;
let roster = [];


function DraftPlayer(playerNumber)
{
    rosterNumber++;
    let element = document.getElementById("player" + playerNumber);
    show();
    if(rosterNumber<11)
    {
        var P = document.getElementById("position"+playerNumber);
        var position = P.innerHTML;
        var N = document.getElementById("name"+playerNumber);
        var name = N.innerHTML;
        var S = document.getElementById("college"+playerNumber);
        var school = S.innerHTML;
        addToRoster(position, name, school, rosterNumber);
        changeRosterNum(rosterNumber);
       element.remove();

    }
    else if(rosterNumber>=11)
    {
        alert("Your roster is full!");
    }

}

function addToRoster(position, name, school, number)
{
    var player = {pos: position, nm: name, coll: school}
    roster[number-1] = player;
    alert("\tYou drafted " + roster[number-1].pos + " " + roster[number-1].nm +", " + roster[number-1].coll+ "!");
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

function changeRosterNum(newNum)
{
    document.getElementById("numOfPlayers").innerHTML = "("+newNum+"/10)";
}

function hide()
{
    document.getElementById("yourPlayerNames").style.display = "none";
    document.getElementById("yourPlayerPositions").style.display = "none";
    document.getElementById("positions").style.display = "none";
    document.getElementById("names").style.display = "none";
    document.getElementById("yourPlayerSchool").style.display = "none";
    document.getElementById("school").style.display = "none";
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

function refreshRoster(){
 alert(P);
 
   
}