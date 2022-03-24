// External scripts file
const button1 = document.querySelector('#button1');
const getAnimalsNumber = document.querySelector('input')

button1.addEventListener('click', async () => {
    let number = getAnimalsNumber.value;    
    number = parseInt(number);
    let response = await axios.get(
        `https://zoo-animal-api.herokuapp.com/animals/rand/${number}`
      );
      console.log(response)
})