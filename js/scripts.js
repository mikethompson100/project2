// External scripts file
const button1 = document.querySelector('#button1');
const getAnimalsNumber = document.querySelector('input')

localStorage.clear();

button1.addEventListener('click', async () => {
    let totalAnimals = getAnimalsNumber.value;    
    totalAnimals = parseInt(totalAnimals);
    let response = await axios.get(
        `https://zoo-animal-api.herokuapp.com/animals/rand/${totalAnimals}`
      );
      document.getElementById('h2').innerHTML = "Your zoo has a ";
      for(let i=0; i < totalAnimals; i++) {
          const node = document.createElement("span");  
          n = response.data[i].name;
          if (totalAnimals === 1) {            
            document.getElementById('h2').appendChild(node).innerHTML =(n + "! ");
          }
          else if (i === totalAnimals-1) {
            document.getElementById('h2').appendChild(node).innerHTML = ("& a " + n + " too!\n");            
          }
          else if (i === totalAnimals-2) {
            document.getElementById('h2').appendChild(node).innerHTML = (n + " ")          
          }
          else {
            document.getElementById('h2').appendChild(node).innerHTML = (n + ", ")
          }  
      }     
      showZooList(response); 
      setZooPageObject(response, totalAnimals);
})

function showZooList() { 
    document.getElementById('header').classList.add('hidden');
    document.getElementById('zooInvitation').classList.remove('hidden');
    const node3 = document.createElement("span"); 
    document.getElementById('enterZooContainer').appendChild(node3).innerHTML = `Click the button to see your zoo.`
  }

  function setZooPageObject(response, totalAnimals) {    
    localStorage.setItem("zooData", JSON.stringify(response));   
    localStorage.setItem("totalAnimals", totalAnimals);    
    return false;
  }
  
