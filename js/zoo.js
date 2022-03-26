const zooDisplay = document.getElementsByTagName("h2")[0]
const incomingObject = window.localStorage.getItem("object");
const parsedObject = JSON.parse(incomingObject);


for(let i=0; i<9; i++) {
    const nodeDiv = document.createElement("div");  
    const nodeImg = document.createElement("img");
    zooDisplay.appendChild(nodeDiv).innerHTML = parsedObject.data[i].name + "<br/>";
    zooDisplay.appendChild(nodeImg).setAttribute("src", parsedObject.data[i].image_link);
}
