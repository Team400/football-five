let rosterNumber = new Number;
let roster = [];
let counter=0;

let  player1name="Jon Cantu";
let player1position="WR";
let player2name="Billy Shelton";
let player2position="WR";
let player3name="Rodney Barton";
let player3position="QB";
let player4name="Hector Thomspon";
let player4position="HB";
let player5name= "Gordon Potts";
let player5position="TE";
let player6name="Phillip Bruce";
let player6position="HB";
let player7name="Zach Jimenez";
let player7position="WR";
let player8name="Ali Meyer";
let player8position="WR";
let player9name= "Jorge Cabrera";
let player9position="WR";
let player10name="Spencer Sandoval";
let player10position="TE";

let player11name="Ron Gallagher";
let player11position="WR";
let player12name="Cesar Larson";
let player12position="QB"
let player13name="Rodolfo Blake";
let player13position="QB"
let player14name="Dustin Gonzalez";
let player14position="HB";
let player15name="Clint Huffman";
let player15position="TE";




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

 if (counter<1){
 alert("For testing purposes this refresh button will display same team information. The delivered product will feature refresh buttons that will display drafted players that participant chooses in the Draft Management feature");


    var namenode = document.createElement("div");
    namenode.style.fontSize= "20px";
    var text= document.createTextNode(player1name);
    namenode.appendChild(text);
    document.getElementById("rosterplayername1").replaceWith(namenode);

    
    
    var text=document.createTextNode(player2name);
    var namenode1 = document.createElement("div");
    namenode1.style.fontSize= "20px";
    namenode1.appendChild(text);
    document.getElementById("rosterplayername2").replaceWith(namenode1);


    var text=document.createTextNode(player3name);
    var namenode2 = document.createElement("div");
    namenode2.style.fontSize= "20px";
    namenode2.appendChild(text);
    document.getElementById("rosterplayername3").replaceWith(namenode2);

    var text=document.createTextNode(player4name);
    var namenode3 = document.createElement("div");
    namenode3.style.fontSize= "20px";
    namenode3.appendChild(text);
    document.getElementById("rosterplayername4").replaceWith(namenode3);
 

    var text=document.createTextNode(player5name);
    var namenode4 = document.createElement("div");
    namenode4.style.fontSize= "20px";
    namenode4.appendChild(text);
    document.getElementById("rosterplayername5").replaceWith(namenode4);

    var text=document.createTextNode(player6name);
    var namenode5 = document.createElement("div");
    namenode5.style.fontSize= "20px";
    namenode5.appendChild(text);
    document.getElementById("rosterplayername6").replaceWith(namenode5);

    var text=document.createTextNode(player7name);
    var namenode6 = document.createElement("div");
    namenode6.style.fontSize= "20px";
    namenode6.appendChild(text);
    document.getElementById("rosterplayername7").replaceWith(namenode6);

    var text=document.createTextNode(player8name);
    var namenode7 = document.createElement("div");
    namenode7.style.fontSize= "20px";
    namenode7.appendChild(text);
    document.getElementById("rosterplayername8").replaceWith(namenode7);

    var text=document.createTextNode(player9name);
    var namenode8 = document.createElement("div");
    namenode8.style.fontSize= "20px";
    namenode8.appendChild(text);
    document.getElementById("rosterplayername9").replaceWith(namenode8);

    var text=document.createTextNode(player10name);
    var namenode9 = document.createElement("div");
    namenode9.style.fontSize= "20px";
    namenode9.appendChild(text);
    document.getElementById("rosterplayername10").replaceWith(namenode9);


    var namenode = document.createElement("div");
    namenode.style.fontSize= "20px";
    var text= document.createTextNode(player1position);
    namenode.appendChild(text);
    document.getElementById("rosterplayerposition1").replaceWith(namenode);

    var namenode = document.createElement("div");
    namenode.style.fontSize= "20px";
    var text= document.createTextNode(player2position);
    namenode.appendChild(text);
    document.getElementById("rosterplayerposition2").replaceWith(namenode);

    var namenode = document.createElement("div");
    namenode.style.fontSize= "20px";
    var text= document.createTextNode(player3position);
    namenode.appendChild(text);
    document.getElementById("rosterplayerposition3").replaceWith(namenode);

    var namenode = document.createElement("div");
    namenode.style.fontSize= "20px";
    var text= document.createTextNode(player4position);
    namenode.appendChild(text);
    document.getElementById("rosterplayerposition4").replaceWith(namenode);

    var namenode = document.createElement("div");
    namenode.style.fontSize= "20px";
    var text= document.createTextNode(player5position);
    namenode.appendChild(text);
    document.getElementById("rosterplayerposition5").replaceWith(namenode);

    var namenode = document.createElement("div");
    namenode.style.fontSize= "20px";
    var text= document.createTextNode(player6position);
    namenode.appendChild(text);
    document.getElementById("rosterplayerposition6").replaceWith(namenode);

    var namenode = document.createElement("div");
    namenode.style.fontSize= "20px";
    var text= document.createTextNode(player7position);
    namenode.appendChild(text);
    document.getElementById("rosterplayerposition7").replaceWith(namenode);


    var namenode = document.createElement("div");
    namenode.style.fontSize= "20px";
    var text= document.createTextNode(player8position);
    namenode.appendChild(text);
    document.getElementById("rosterplayerposition8").replaceWith(namenode);

    var namenode = document.createElement("div");
    namenode.style.fontSize= "20px";
    var text= document.createTextNode(player9position);
    namenode.appendChild(text);
    document.getElementById("rosterplayerposition9").replaceWith(namenode);

    var namenode = document.createElement("div");
    namenode.style.fontSize= "20px";
    var text= document.createTextNode(player10position);
    namenode.appendChild(text);
    document.getElementById("rosterplayerposition10").replaceWith(namenode);
 }

    counter=counter+1;

}

function refreshWaiver(){

    alert("For testing purposes this refresh button will trigger display up-to-date waiver players. The delivered product will feature refresh buttons that will display waiver players that the  participant did not choose in the Draft Management feature");

    var namenode = document.createElement("div");
    namenode.style.fontSize= "20px";
    var text= document.createTextNode(player11name);
    namenode.appendChild(text);
    document.getElementById("waiverplayername1").replaceWith(namenode);


    var namenode = document.createElement("div");
    namenode.style.fontSize= "20px";
    var text= document.createTextNode(player12name);
    namenode.appendChild(text);
    document.getElementById("waiverplayername2").replaceWith(namenode);

    var namenode = document.createElement("div");
    namenode.style.fontSize= "20px";
    var text= document.createTextNode(player13name);
    namenode.appendChild(text);
    document.getElementById("waiverplayername3").replaceWith(namenode);

    var namenode = document.createElement("div");
    namenode.style.fontSize= "20px";
    var text= document.createTextNode(player14name);
    namenode.appendChild(text);
    document.getElementById("waiverplayername4").replaceWith(namenode);

    var namenode = document.createElement("div");
    namenode.style.fontSize= "20px";
    var text= document.createTextNode(player15name);
    namenode.appendChild(text);
    document.getElementById("waiverplayername5").replaceWith(namenode);


    var namenode = document.createElement("div");
    namenode.style.fontSize= "20px";
    var text= document.createTextNode(player11position);
    namenode.appendChild(text);
    document.getElementById("waiverposition1").replaceWith(namenode);

    var namenode = document.createElement("div");
    namenode.style.fontSize= "20px";
    var text= document.createTextNode(player12position);
    namenode.appendChild(text);
    document.getElementById("waiverposition2").replaceWith(namenode);

    var namenode = document.createElement("div");
    namenode.style.fontSize= "20px";
    var text= document.createTextNode(player13position);
    namenode.appendChild(text);
    document.getElementById("waiverposition3").replaceWith(namenode);

    var namenode = document.createElement("div");
    namenode.style.fontSize= "20px";
    var text= document.createTextNode(player14position);
    namenode.appendChild(text);
    document.getElementById("waiverposition4").replaceWith(namenode);

    var namenode = document.createElement("div");
    namenode.style.fontSize= "20px";
    var text= document.createTextNode(player15position);
    namenode.appendChild(text);
    document.getElementById("waiverposition5").replaceWith(namenode);
}

let b= document.getElementById('bttn');
b.onclick=refreshRoster;


let b2= document.getElementById('bttn2');
b2.onclick=refreshWaiver;
