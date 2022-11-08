axios = require('axios');
async function User(){
    let json = await axios.get('https://jsonplaceholder.typicode.com/users');
    return json.data;
}
User().then(result => {
    console.log(result);
})