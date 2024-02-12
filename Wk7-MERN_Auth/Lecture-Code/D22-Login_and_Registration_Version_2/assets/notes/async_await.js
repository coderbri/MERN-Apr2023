const axios = require('axios');

async function fetchData() {
    try {
        const response = await axios.get('http://api.example.com/data');
        console.log(response.data);
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}

fetchData();