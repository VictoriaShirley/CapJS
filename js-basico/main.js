async function getUser() {
  try{
    const response = await axios.get('https://api.github.com/users/VictoriaShirley', {
      headers: { 
        'Content-type': 'application/json',
        'Accept:': 'application/json'
				//configurações
      }
    })
    console.log(response);
  } catch(error) {
    console.log(error)
  }
}

getUser()