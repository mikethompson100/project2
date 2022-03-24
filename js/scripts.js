// External scripts file
const button1 = document.querySelector('#button1');
const getAnimalsNumber = document.querySelector('input')

button1.addEventListener('click', async () => {
    let number = getAnimalsNumber.value;    
    number = parseInt(number);
    let response = await axios.get(
        `https://zoo-animal-api.herokuapp.com/animals/rand/${number}`
      );
      
      document.getElementById('h2').innerHTML = "This zoo has a ";
      for(let i=0; i<number; i++) {
          const node = document.createElement("span");  
          n = response.data[i].name;
          if (number === 1) {            
            document.getElementById('h2').appendChild(node).innerHTML =(n + "! ");
          }
          else if (i === number-1) {
            document.getElementById('h2').appendChild(node).innerHTML = ("& a " + n + " too!\n");            
          }
          else if (i === number-2) {
            document.getElementById('h2').appendChild(node).innerHTML = (n + " ")          
          }
          else {
            document.getElementById('h2').appendChild(node).innerHTML = (n + ", ")
          }  

      }      
})