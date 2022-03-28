const zooDisplay = document.getElementById("zooContainer");
const incomingZooData = window.localStorage.getItem("zooData");
const totalAnimals = window.localStorage.getItem("totalAnimals");
const parsedZooData = JSON.parse(incomingZooData);


const LearnMoreFunction = (nodeDiv, parsedZooData, i) => {    
    const learnMoreUL = document.createElement("ul")
    nodeDiv.appendChild(learnMoreUL);
            const learnMoreLI1 = document.createElement("li")
            const learnMoreLI2 = document.createElement("li")
            const learnMoreLI3 = document.createElement("li")
            const learnMoreLI4 = document.createElement("li")
            learnMoreUL.appendChild(learnMoreLI1).innerHTML = "Lifespan: " + parsedZooData.data[i].lifespan
            learnMoreUL.appendChild(learnMoreLI2).innerHTML = "Habitat: " + parsedZooData.data[i].habitat
            learnMoreUL.appendChild(learnMoreLI3).innerHTML = "Diet: " + parsedZooData.data[i].diet
            learnMoreUL.appendChild(learnMoreLI4).innerHTML = "Geo Range: " + parsedZooData.data[i].geo_range
}

for(let i=0; i < totalAnimals; i++) {
    const nodeDiv = document.createElement("div");
    const nodeDiv2 = document.createElement("div"); nodeDiv2.setAttribute("class", "animalTitle");
    const nodeImg = document.createElement("img"); nodeImg.setAttribute("class", "animalImg");
    const nodeInput = document.createElement('input'); nodeInput.setAttribute("type", "submit"); nodeInput.setAttribute("value", "Learn More");

    zooDisplay.appendChild(nodeDiv); nodeDiv.setAttribute("id", "container" + i)
    nodeDiv.appendChild(nodeDiv2); nodeDiv2.innerHTML = ("("+(i+1)+")" + " " + parsedZooData.data[i].name + ":<span class='br'>" + "[Latin name: " + parsedZooData.data[i].latin_name + "]</span>")
    nodeDiv.appendChild(nodeImg).setAttribute("src", parsedZooData.data[i].image_link)
    nodeDiv.appendChild(nodeInput)
    nodeInput.setAttribute("class", "inputClass")
    
    const inputs = document.querySelectorAll('.inputClass');
    LearnMoreFunction(nodeDiv, parsedZooData, i);
/*     inputs[i].addEventListener('click', () => {
    /// toggle show / hide
    });  */
}


document.addEventListener("DOMContentLoaded", function() {
    const allImgs = document.querySelectorAll('.animalImg')   

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