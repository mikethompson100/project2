const zooDisplay = document.getElementById("zooContainer");
const incomingZooData = window.localStorage.getItem("zooData");
const totalAnimals = window.localStorage.getItem("totalAnimals");
const parsedZooData = JSON.parse(incomingZooData);

// output animal details to screen
const outputAnimalDetails = (nodeDiv, parsedZooData, i) => {    
    const showDetailsUL = document.createElement("ul")
    nodeDiv.appendChild(showDetailsUL);
            const learnMoreLI1 = document.createElement("li")
            const learnMoreLI2 = document.createElement("li")
            const learnMoreLI3 = document.createElement("li")
            const learnMoreLI4 = document.createElement("li")
            showDetailsUL.appendChild(learnMoreLI1).innerHTML = "Lifespan: " + parsedZooData.data[i].lifespan
            showDetailsUL.appendChild(learnMoreLI2).innerHTML = "Habitat: " + parsedZooData.data[i].habitat
            showDetailsUL.appendChild(learnMoreLI3).innerHTML = "Diet: " + parsedZooData.data[i].diet
            showDetailsUL.appendChild(learnMoreLI4).innerHTML = "Geo Range: " + parsedZooData.data[i].geo_range
}

// main function
for(let i=0; i < totalAnimals; i++) {
    const nodeDiv = document.createElement("div");
    const nodeDiv2 = document.createElement("div"); nodeDiv2.setAttribute("class", "animalTitle");
    const nodeImg = document.createElement("img"); nodeImg.setAttribute("class", "animalImg");

    zooDisplay.appendChild(nodeDiv); nodeDiv.setAttribute("id", "container" + i)
    nodeDiv.appendChild(nodeDiv2); nodeDiv2.innerHTML = ("("+(i+1)+")" + " " + parsedZooData.data[i].name + ":<span class='br'>" + "[Latin name: " + parsedZooData.data[i].latin_name + "]</span>")
    nodeDiv.appendChild(nodeImg).setAttribute("src", parsedZooData.data[i].image_link)

    outputAnimalDetails(nodeDiv, parsedZooData, i);
}

// alters image sizes/layout after page loads
document.addEventListener("DOMContentLoaded", function() {
    const allImgs = document.querySelectorAll('.animalImg')   

    // give the images time to load with delay
    setTimeout(function(){
        computeAnimalBoxHeight();
    }, 5000);

    const computeAnimalBoxHeight = () => {
        for(let j=0; j < totalAnimals; j++) {      
            let stringFind = "container" + j
            let findMe = document.getElementById(stringFind)  
                if(allImgs[j].height > 262) {              
                    imgToAlter = findMe.querySelector('.animalImg')        
                    imgToAlter.height = (imgToAlter.height / 2);
                    imgToAlter.style.width = "auto";
                    imgToAlter.style.margin = ("10px auto")
                    imgToAlter.style.display = ("block");
                    findMe.style.minHeight = "546px";
                }
                else {
                    findMe.style.minHeight = "546px";
                }
        }
        
    }

});