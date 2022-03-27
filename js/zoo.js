const zooDisplay = document.getElementById("zooContainer");
const incomingZooData = window.localStorage.getItem("zooData");
const totalAnimals = window.localStorage.getItem("totalAnimals");
const parsedZooData = JSON.parse(incomingZooData);

for(let i=0; i < totalAnimals; i++) {
    const nodeDiv = document.createElement("div");

    const nodeDiv2 = document.createElement("div");
    nodeDiv2.setAttribute("class", "animalTitle");

    const nodeImg = document.createElement("img");    
    nodeImg.setAttribute("class", "animalImg");

    zooDisplay.appendChild(nodeDiv);
    nodeDiv.setAttribute("id", "container" + i)
    nodeDiv.appendChild(nodeDiv2);
    nodeDiv2.innerHTML = ("("+(i+1)+")" + " " + parsedZooData.data[i].name + ":<span class='br'>" + "[Latin name: " + parsedZooData.data[i].latin_name + "]</span>")
    
    nodeDiv.appendChild(nodeImg).setAttribute("src", parsedZooData.data[i].image_link)
}


