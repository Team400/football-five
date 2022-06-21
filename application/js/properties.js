let rosterNumber = new Number;
let roster = [];


function DraftPlayer(playerNumber)
{
    rosterNumber++;
    let element = document.getElementById("player" + playerNumber);
    show();
    if(rosterNumber<11)
    {
        let P = document.getElementById("position"+playerNumber);
        let position = P.innerHTML;
        let N = document.getElementById("name"+playerNumber);
        let name = N.innerHTML;
        let S = document.getElementById("college"+playerNumber);
        let school = S.innerHTML;
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
    let player = {pos: position, nm: name, coll: school}
    roster[number-1] = player;
    alert("\tYou drafted " + roster[number-1].pos + " " + roster[number-1].nm +", " + roster[number-1].coll+ "!");
    let node = document.createElement("p");
    let text = document.createTextNode(position);
    node.appendChild(text);
    document.getElementById("yourPlayerPositions").appendChild(node);
    let node1 = document.createElement("p");
    let text1 = document.createTextNode(name);
    node1.appendChild(text1);
    document.getElementById("yourPlayerNames").appendChild(node1);
    let node2 = document.createElement("p");
    let text2 = document.createTextNode(school);
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