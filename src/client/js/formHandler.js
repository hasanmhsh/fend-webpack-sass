const API_KEY = '&appid=9cf6dd0c87c1a7ec86794ae253b027d7';
const BASE_API_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&zip=';

// Async POST
const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), 
  });

    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};

// Async GET
const retrieveData = async (url='') =>{ 
  const request = await fetch(url);
  try {
    const allData = await request.json();
    console.log('GET successful');
    console.log(allData);
    return allData;
  }
  catch(error) {
    console.log("error", error);
    // error handling here
  }
};

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    })

    const zip_code = '10007';
    const url = Client.BASE_API_URL + zip_code + Client.API_KEY;
    console.log(url);
    Client.retrieveData(url)
    .then((data)=>{
        console.log(data);
        document.querySelector('#results').innerHTML = `${document.querySelector('#results').innerHTML} \n ${data.main.temp}`;
    });
    
}

export { 
    handleSubmit,
    API_KEY,
    BASE_API_URL,
    postData,
    retrieveData
}
