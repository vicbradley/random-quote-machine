let options = {
    method: 'GET',
    headers: { 'x-api-key': 'NENVbbYj1Pcx0CBLaS7oNw==ZGjriYANrkSC3Bnj' }
}
  
let url = 'https://api.api-ninjas.com/v1/quotes?category=famous';
  

async function fetchQuote() {
    const response = await fetch(url,options);
    const data = await response.json();


    return {
        author: data[0].author,
        text: data[0].quote
    }
}


export {fetchQuote}